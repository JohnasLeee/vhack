import { Audio } from "expo-av";
import { MutableRefObject } from "react";
import * as FileSystem from "expo-file-system";
import { Platform } from "react-native";
import * as Device from "expo-device";
import { readBlobAsBase64 } from "./readBlobAsBase64";

export const transcribeSpeech = async (
  audioRecordingRef: MutableRefObject<Audio.Recording>
) => {
  try {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      playsInSilentModeIOS: false,
    });
    const isPrepared = audioRecordingRef?.current?._canRecord;
    if (isPrepared) {
      await audioRecordingRef?.current?.stopAndUnloadAsync();

      const recordingUri = audioRecordingRef?.current?.getURI() || "";
      let base64Uri = "";

      if (Platform.OS === "web") {
        const blob = await fetch(recordingUri).then((res) => res.blob());
        const foundBase64 = (await readBlobAsBase64(blob)) as string;
        // Example: data:audio/wav;base64,asdjfioasjdfoaipsjdf
        const removedPrefixBase64 = foundBase64.split("base64,")[1];
        base64Uri = removedPrefixBase64;
      } else {
        base64Uri = await FileSystem.readAsStringAsync(recordingUri, {
          encoding: FileSystem.EncodingType.Base64,
        });
      }

      const dataUrl = base64Uri;

      audioRecordingRef.current = new Audio.Recording();

      const audioConfig = {
        encoding:
          Platform.OS === "android"
            ? "AMR_WB"
            : Platform.OS === "web"
            ? "WEBM_OPUS"
            : "LINEAR16",
        sampleRateHertz:
          Platform.OS === "android"
            ? 16000
            : Platform.OS === "web"
            ? 48000
            : 41000,
        languageCode: "en-US",
      };

      if (recordingUri && dataUrl) {
        const rootOrigin = process.env.EXPO_PUBLIC_UNCLE_SERVER_URL || "localhost:4321";
        const serverUrl = `http://${rootOrigin}`;
        const serverResponse = await fetch(`${serverUrl}/api/process-speech`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ audioUrl: dataUrl, config: audioConfig }),
        })
          .then((res) => res.json())
          .catch((e: Error) => console.error(e));

        // const results = serverResponse?.results; // Google
        const results = serverResponse?.text; // Whisper
        if (results) {
          // const transcript = results?.[0].alternatives?.[0].transcript; // Google
          const transcript = results.trim(); // Whisper
          if (!transcript) return undefined;
          return transcript;
        } else {
          console.log("No transcript found");
          return undefined;
        }
      }
    } else {
      console.error("Recording must be prepared prior to unloading");
      return undefined;
    }
  } catch (e) {
    console.error("Failed to transcribe speech!", e);
    return undefined;
  }
};
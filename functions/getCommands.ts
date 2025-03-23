import { CommandType } from "@/constants/Commands";

export const getCommands = async (
  transcript: string,
  commands: CommandType[]
) => {
  const rootOrigin =
    process.env.EXPO_PUBLIC_UNCLE_SERVER_URL || "localhost:4321";
  const serverUrl = `http://${rootOrigin}`;
  const serverResponse = await fetch(`${serverUrl}/api/get-commands`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ transcript, commands }),
  });
  if (!serverResponse.ok) {
    throw new Error("Network response was not ok");
  }
  const data: {
    id: number;
    score: string;
    text: string;
  }[] = await serverResponse.json();

  return data.map((d) => d.id);
};

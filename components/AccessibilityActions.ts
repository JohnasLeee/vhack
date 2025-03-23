import * as Brightness from 'expo-brightness';

const adjustBrightness = async (delta: number) => {
  const { status } = await Brightness.requestPermissionsAsync();
  if (status !== 'granted') {
    console.error("Brightness permission denied");
    return;
  }
  const currentBrightness = await Brightness.getSystemBrightnessAsync();
  console.log("Current brightness:", currentBrightness);
  await Brightness.setSystemBrightnessAsync(currentBrightness + delta);
}

export const increaseBrightness = () => adjustBrightness(1);
export const decreaseBrightness = () => adjustBrightness(-1);

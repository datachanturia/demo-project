import { Alert } from "react-native";

export const alertError = (error: string) => {
  Alert.alert(error, undefined, [{style: 'destructive', text: "Okay"}]);
}
import { Alert } from "react-native";

export const ErrorHandler = (error: any) => {
  if (error.message === "Firebase: Error (auth/invalid-email).") {
    Alert.alert("Ugyldig epost", "Prøv igjen");
  } else if (error.message === "Firebase: Error (auth/wrong-password).") {
    Alert.alert("Ugyldig password", "Prøv igjen");
  }else if (error.message === "Firebase: Error (auth/user-not-found).") {
    Alert.alert("Finner ikke bruker.", "Registrer bruker.")
  } else {
    alert(error.message);
  }
};

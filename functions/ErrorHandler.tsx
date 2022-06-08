import { Alert } from "react-native";

export const ErrorHandler = (error: any) => {
  if (error.message === "Firebase: Error (auth/invalid-email).") {
    Alert.alert("Ugyldig epost", "Prøv igjen");
  } else if (error.message === "Firebase: Error (auth/wrong-password).") {
    Alert.alert("Ugyldig password", "Prøv igjen");
  }else if (error.message === "Firebase: Error (auth/user-not-found).") {
    Alert.alert("Finner ikke bruker.", " Vennligst registrer deg.")
  } else if (error.message === "Firebase: Error (auth/missing-email).") {
    Alert.alert("Du mangler Epost.", "Skriv inn Epost")
  }
  else {
    alert(error.message);
  }
};

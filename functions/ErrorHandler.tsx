import {Alert} from "react-native";

export function ErrorHandler(error: any) {
    if (error.message === "Firebase: Error (auth/invalid-email).") {
        Alert.alert("Ugyldig epost", "Prøv igjen")
    } else if (error.message === "Firebase: Error (auth/wrong-password).") {
        Alert.alert("Ugyldig password", "Prøv igjen")
    } else {
        alert(error.message)
    }
}
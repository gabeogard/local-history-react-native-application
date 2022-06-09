import { Alert } from 'react-native'

export const ErrorHandler = (error: any) => {
    if (error.message === 'Firebase: Error (auth/invalid-email).') {
        Alert.alert('Ugyldig epost', 'Prøv igjen')
    } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
        Alert.alert('Ugyldig password', 'Prøv igjen')
    } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
        Alert.alert('Finner ikke bruker.', ' Vennligst registrer deg.')
    } else if (error.message === 'Firebase: Error (auth/missing-email).') {
        Alert.alert('Du mangler Epost.', 'Skriv inn Epost')
    } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
        Alert.alert('Ugyldig epost', 'Prøv igjen')
    } else if (error.message === 'Firebase: Error (auth/wrong-password).') {
        Alert.alert('Ugyldig password', 'Prøv igjen')
    } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
        Alert.alert('Finner ikke bruker.', ' Vennligst registrer deg.')
    } else if (error.message === 'Firebase: Error (auth/missing-email).') {
        Alert.alert('Du mangler Epost.', 'Skriv inn Epost')
    } else if (
        error.message ===
        'Firebase: Password should be at least 6 characters (auth/weak-password).'
    ) {
        Alert.alert(
            'Du har valgt et svakt passord.',
            'Du må minimum ha 6 tegn.'
        )
    } else {
        alert(error.message)
    }
}

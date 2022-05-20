import {SafeAreaView, Text, View} from "react-native";

export function UserProfileScreen() {
    return (

        <SafeAreaView style={{flex: 1, backgroundColor: "#fff"}} >
            <View style={{flex: 1}} >
                <Text>Du er logget in</Text>
            </View>
        </SafeAreaView>
    );
}
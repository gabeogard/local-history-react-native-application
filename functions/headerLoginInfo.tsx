import * as React from "react";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {useUserContext} from "./UserContext";

export function HeaderLoginInfo() {

    const {user, logoutUser}: any = useUserContext()

    const renderLogout = () => {
        return (
            <Text numberOfLines={1} adjustsFontSizeToFit style={styles.button} onPress={logoutUser}>Logg ut</Text>)
    }
    return (
        <View>
            {(user as any)?.email ?
                <View>{renderLogout()}</View>
                :
                false}
        </View>
    )
}

const styles = StyleSheet.create({
        button: {
            backgroundColor: "#e3eef0",
            borderWidth: 1,
            borderRadius: 6,
            padding: 3,
            overflow: "hidden",
            shadowColor: "#000000",
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.3,
            shadowRadius: 4,
            fontSize: Dimensions.get("window").width >= 375 ? 19 : 0
        }
    }
)
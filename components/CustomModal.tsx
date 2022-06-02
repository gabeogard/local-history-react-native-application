import React, {useState} from "react";
import {Modal, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../constants/styles";

interface infoDialogProps {
    isVisible: boolean
    title: string;
    info: string;
}

export const CustomModal = ({ isVisible, info, title}: infoDialogProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
        >
            <View style={styles.modal}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: "#000"
                }}>{title}
                </Text>
                <View>
                    <Text style={{
                        backgroundColor: "#FFCB2F",
                        fontSize: 30
                    }}> {info}
                    </Text>
                </View>
            </View>
        </Modal>
    );
};
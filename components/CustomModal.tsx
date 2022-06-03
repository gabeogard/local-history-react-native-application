import React, { ReactElement } from 'react'
import { Modal, Text, View } from 'react-native'
import { styles } from '../constants/styles'

interface infoDialogProps {
    isVisible: boolean
    title: string
    info: string
    child: ReactElement
    restartButton: ReactElement
}

export const CustomModal = ({
                                isVisible,
                                info,
                                title,
                                child,
                                restartButton,
                            }: infoDialogProps) => {
    return (
        <Modal animationType='slide' transparent={true} visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <View
                        style={{
                            width: '100%',
                            height: '15%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                color: '#000',
                            }}
                        >
                            {title}
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '100%',
                            height: '65%',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            numberOfLines={8}
                            adjustsFontSizeToFit={true}
                            style={{
                                fontSize: 50,
                                margin: 10,
                            }}
                        >
                            {' '}
                            {info}
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '100%',
                            height: '20%',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        }}
                    >
                        {child}
                        {restartButton}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

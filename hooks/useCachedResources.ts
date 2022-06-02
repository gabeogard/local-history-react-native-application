import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react'

const useCachedResources = () => {
    const [isLoadingComplete, setLoadingComplete] = useState(false)

    useEffect(() => {
        const loadResourcesAndDataAsync = async () => {
            try {
                await SplashScreen.preventAutoHideAsync()
                await Font.loadAsync({
                    ...FontAwesome.font,
                    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
                })
            } catch (e) {
                console.warn(e)
            } finally {
                setLoadingComplete(true)
            }
        }

        loadResourcesAndDataAsync()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (isLoadingComplete) {
            await SplashScreen.hideAsync()
        }
    }, [isLoadingComplete])

    if (!isLoadingComplete) {
        return null
    }

    return onLayoutRootView()
}

export default useCachedResources

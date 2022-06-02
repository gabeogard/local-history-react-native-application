import { useState } from 'react'

type UseLoading = [loading: boolean, withLoading: <T>(fn: () => T) => T]
export const useLoading = (): UseLoading => {
    const [loading, setLoading] = useState(false)

    const withLoading = <T extends unknown>(fn: () => T) => {
        setLoading(true)
        const result = fn()
        setLoading(false)
        return result
    }

    return [loading, withLoading]
}

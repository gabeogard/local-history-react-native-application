import { useState } from 'react'

type UseLoading = [loading: boolean, withLoading: (<T>(fn: () => Promise<T>) => Promise<T>)]
export const useLoading = (): UseLoading => {
    const [loading, setLoading] = useState(false)

    const withLoading = async <T extends unknown>(fn: () => Promise<T>) => {
        setLoading(true)
        const result = await fn()
        setLoading(false)
        return result
    }

    return [loading, withLoading]
}

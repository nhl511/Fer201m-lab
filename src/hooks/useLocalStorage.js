import { useEffect } from 'react'

export default function useLocalStorage(dark, setDark) {
    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        setDark(isDark)
      }, [dark])
}

import { useEffect, useState } from 'react'

export function useTheme() {
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
  }, [isLight])

  return { isLight, toggle: () => setIsLight((v) => !v) }
}

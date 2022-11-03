import { useState, useEffect } from "react"

const UseTheme = (): any => {

  let localMode: any = ''
  if (typeof window === 'undefined') {
    localMode = ''
  } else {
    localMode = localStorage.getItem('theme')
  }

  const [theme, setTheme] = useState(localMode);
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const rootElement = window.document.documentElement
    rootElement.classList.remove(nextTheme)
    rootElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, nextTheme])

  return [nextTheme, setTheme]
}

export default UseTheme
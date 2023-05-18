import { useTheme } from 'next-themes'
import { IconMoon, IconSun } from '@tabler/icons-react'

export function ThemeButton() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  const isDarkTheme = theme === 'dark'

  return (
    <button
      className={
        'bg-neutral-950 text-white rounded-3xl  w-12 h-12 items-center justify-center flex gap-1 fixed bottom-4 right-2'
      }
      onClick={toggleTheme}
    >
      {isDarkTheme ? <IconMoon /> : <IconSun />}
    </button>
  )
}

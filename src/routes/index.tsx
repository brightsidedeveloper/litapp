import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: () => {
    const isSystemDark = matchMedia('(prefers-color-scheme: dark)').matches
    const localTheme = localStorage.theme
    const toggle = document.documentElement.classList.toggle.bind(document.documentElement.classList, 'dark')
    toggle(!localTheme ? isSystemDark : localTheme === 'dark')
    return toggle
  },
  component: Home,
})
// https://official-joke-api.appspot.com/random_joke
function Home() {
  return (
    <div className='text-5xl p-spacing'>
      <h1 className='pb-inner-spacing gap-spacing'>Home</h1>
    </div>
  )
}

document.documentElement.classList.toggle('dark')

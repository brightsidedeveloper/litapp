import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jokes')({
  component: () => <div>Hello /jokes!</div>
})
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8 flex items-center justify-center flex-col gap-6">
      <h1 className="text-8xl font-bold">💪 Houuuuuurggghh 💪</h1>
      <p className="mt-4 text-6xl font-semibold">
        Bienvenue à la salle de sport !
      </p>
    </div>
  )
}

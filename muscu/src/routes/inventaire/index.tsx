import { createFileRoute } from '@tanstack/react-router'

interface Equipement {
  nom: string
  quantite: number
}

const inventaire: Equipement[] = [
  { nom: 'Altère 2 kg', quantite: 8 },
  { nom: 'Altère 5 kg', quantite: 12 },
  { nom: 'Altère 10 kg', quantite: 6 },
  { nom: 'Élastique 2 kg', quantite: 15 },
  { nom: 'Élastique 5 kg', quantite: 10 },
  { nom: 'Élastique 10 kg', quantite: 7 },
]

export const Route = createFileRoute('/inventaire/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-violet-900 mb-6">Inventaire Musculation</h1>
      <div className="overflow-hidden rounded-lg shadow-lg border border-violet-200">
        <table className="w-full text-left">
          <thead className="bg-violet-800 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold uppercase text-sm tracking-wider">Équipement</th>
              <th className="px-6 py-4 font-semibold uppercase text-sm tracking-wider">Quantité</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-violet-100">
            {inventaire.map((item) => (
              <tr
                key={item.nom}
                className="bg-white hover:bg-violet-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 text-violet-900 font-medium">{item.nom}</td>
                <td className="px-6 py-4 text-violet-700">{item.quantite}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

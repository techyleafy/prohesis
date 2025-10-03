const markets = [
  { id: 1, question: "Will Bitcoin hit $100k by 2025?", yesPrice: 0.62, noPrice: 0.38 },
  { id: 2, question: "Will Ethereum switch to sharding by 2026?", yesPrice: 0.44, noPrice: 0.56 },
  { id: 3, question: "Will India win the Cricket World Cup 2027?", yesPrice: 0.71, noPrice: 0.29 },
];

export default function MarketsPage() {
  return (
    <main className="p-10">
      <h2 className="text-3xl font-semibold mb-6">Prediction Markets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {markets.map((m) => (
          <div key={m.id} className="rounded-2xl p-6 bg-white/70 shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-medium">{m.question}</h3>
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 bg-green-500/80 hover:bg-green-600 rounded-xl text-white">
                Yes {Math.round(m.yesPrice * 100)}%
              </button>
              <button className="px-4 py-2 bg-red-500/80 hover:bg-red-600 rounded-xl text-white">
                No {Math.round(m.noPrice * 100)}%
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

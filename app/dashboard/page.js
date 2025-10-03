const positions = [
  { market: "Bitcoin $100k by 2025", side: "Yes", amount: 200, pnl: "+$50" },
  { market: "India wins World Cup 2027", side: "Yes", amount: 120, pnl: "-$20" },
];

export default function DashboardPage() {
  return (
    <main className="p-10">
      <h2 className="text-3xl font-semibold mb-6">My Dashboard</h2>
      <div className="space-y-4">
        {positions.map((pos, idx) => (
          <div key={idx} className="flex justify-between items-center p-6 bg-white/70 shadow rounded-2xl">
            <span className="font-medium">{pos.market}</span>
            <span className={`px-3 py-1 rounded-xl ${pos.side === "Yes" ? "bg-green-500/20 text-green-700" : "bg-red-500/20 text-red-700"}`}>
              {pos.side}
            </span>
            <span>${pos.amount}</span>
            <span className={pos.pnl.startsWith("+") ? "text-green-600" : "text-red-600"}>{pos.pnl}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

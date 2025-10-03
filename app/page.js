import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
        Prohesis
      </h1>
      <p className="mt-6 text-xl text-gray-700 max-w-xl">
        Predict the future. Trade on events. Experience a silky smooth macOS-inspired UI.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/markets" className="px-6 py-3 rounded-2xl bg-gray-900 text-white shadow-md hover:bg-gray-700 transition">
          Explore Markets
        </Link>
        <Link href="/dashboard" className="px-6 py-3 rounded-2xl bg-white/70 shadow-md hover:bg-white transition">
          My Dashboard
        </Link>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-4xl font-bold">Relator Project Demo Font styles(text-4xl)</h1>
          <h2 className="text-3xl font-bold">Relator Project Demo Font styles(text-3xl)</h2>
          <h3 className="text-2xl font-bold">Relator Project Demo Font styles(text-2xl)</h3>
          <h4 className="text-xl font-bold">Relator Project Demo Font styles(text-xl)</h4>
          <h5 className="text-lg font-bold">Relator Project Demo Font styles(text-lg)</h5>
          <h6 className="text-base font-bold">Relator Project Demo Font styles(text-base)</h6>
          <p className="text-sm">Relator Project Demo Font styles(text-s)</p>
          <p className="text-xs">Relator Project Demo Font styles(text-x)</p>
      </main>
    </div>
  );
}

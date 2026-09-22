import UseEffectExample from "../components/hooks/UseEffectExample";

export default function UseEffect() {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <header className="text-center border-b border-gray-200 pb-10 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contoh <span className="text-blue-600">useEffect</span>
          </h1>
          <p className="mt-3 text-gray-600 text-sm">
            Tiga pola dependency array yang paling sering dipakai 
          </p>
        </header>

        <UseEffectExample />
      </div>
    </div>
  );
}

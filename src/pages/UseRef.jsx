import UseRefVsState from "../components/hooks/UseRefVsState";

export default function UseRef() {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <header className="text-center border-b border-gray-200 pb-10 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            useRef <span className="text-blue-600">vs</span> useState
          </h1>
          <p className="mt-3 text-gray-600 text-sm">
            Dua counter dengan logika sama, cuma beda hook
          </p>
        </header>

        <UseRefVsState />
      </div>
    </div>
  );
}

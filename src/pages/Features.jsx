import FeatureList from "../components/props/FeatureList";

const features = [
  {
    id: 1,
    title: "Simple",
    description: "Easy to understand structure suitable for learning React.",
  },
  {
    id: 2,
    title: "Reusable",
    description: "The page is divided into reusable React components.",
  },
  {
    id: 3,
    title: "Responsive",
    description: "Tailwind CSS makes it easy to build responsive layouts.",
  },
];

export default function Features() {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <header className="text-center border-b border-gray-200 pb-10 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-blue-600">Features</span>
          </h1>
          <p className="mt-3 text-gray-600 text-sm">
            What makes this project easy to build with
          </p>
        </header>

        {/* Intro + pull quote */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          <div>
            <p className="text-lg text-gray-600">
              This project is built entirely with React and Tailwind CSS,
              split into small, reusable components that are easy to follow
              and extend.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Each piece — from the layout to the individual cards — is kept
              simple on purpose, so the structure stays clear whether you're
              learning React for the first time or building on top of it.
            </p>
          </div>

          <blockquote className="border-l-4 border-blue-600 pl-6 flex items-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 italic">
              "Simple components, composed together, build something awesome."
            </p>
          </blockquote>
        </section>

        {/* Feature grid */}
        <section className="bg-white py-10 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What's included
          </h2>
          <p className="text-gray-600 max-w-2xl mb-10">
            A quick look at the core ideas behind how this site is put
            together.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureList
                key={feature.id}
                id={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

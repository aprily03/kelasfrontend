import FeatureList from "./props/FeatureList";
import Greetings from "./props/Greetings";
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
const usia = 25;
const mhs = [
  {
    id: 1,
    nama: "Enrico",
    age: 20,
  },
  {
    id: 2,
    nama: "Mike",
    age: 21,
  },
  {
    id: 3,
    nama: "Lisa",
    age: 23,
  },
  {
    id: 4,
    nama: "Maria",
    age: 23,
  },
];

function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Features</h2>

          {mhs.map((mahasiswa) => (
            <Greetings nama={mahasiswa.nama} age={mahasiswa.age}></Greetings>
          ))}
          <p className="mt-3 text-gray-600">
            Everything is built using React and Tailwind CSS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((feature) => (
            <FeatureList
              id={feature.id}
              title={feature.title}
              description={feature.description}
            ></FeatureList>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

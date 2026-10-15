import { useEffect, useState } from "react";

export default function FetchApi() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
<<<<<<< HEAD
  const [weather, setWeather] = useState(null);
  const [quake, setQuake] = useState(null);
  
  // State baru untuk mengatur apakah gambar sedang di-zoom
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    async function getData() {
      const UsersURL = "http://localhost:3001/users";
      const PostsURL = "http://localhost:3001/posts";
      const WeatherURL = "https://api.open-meteo.com/v1/forecast?latitude=1.4225&longitude=124.9772&current=temperature_2m,relative_humidity_2m&timezone=Asia%2FSingapore";
      const QuakeURL = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";

      const [UserRes, PostRes, WeatherRes, QuakeRes] = await Promise.all([
        fetch(UsersURL),
        fetch(PostsURL),
        fetch(WeatherURL),
        fetch(QuakeURL),
      ]);

      const usersData = await UserRes.json();
      const postsData = await PostRes.json();
      const weatherData = await WeatherRes.json();
      const quakeData = await QuakeRes.json();
      
      setUsers(usersData);
      setPosts(postsData);
      setWeather(weatherData);
      setQuake(quakeData.Infogempa.gempa);
    }
    
    getData();
  }, []);
=======
  const [posts, setPosts] = useState([]);

  // 2. Ambil data dari API satu kali saat halaman pertama kali dibuka
  useEffect(() => {
    async function getUsers() {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    }
    async function getPosts() {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    }
    getUsers();
    getPosts();
  },[]);
>>>>>>> 620f23db88361c85dcbd918a323a1b999e031afc

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
        Dashboard <span className="text-blue-600">Informasi</span>
      </h1>
      <p className="text-gray-600 text-sm mb-8 text-center">
        Data Posts, Cuaca, dan Gempa Terkini
      </p>

      {/* TAMPILAN WIDGET CUACA & GEMPA (2 Kolom Sejajar) */}
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        
        {/* KOTAK CUACA */}
        {weather && (
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex flex-col justify-center">
            <h2 className="font-semibold text-gray-900">Airmadidi Bawah</h2>
            <p className="font-semibold text-gray-900 text-xl mt-1">
              {weather.current.temperature_2m}{weather.current_units.temperature_2m}
            </p>
            <p className="text-sm text-gray-600">
              Kelembapan: {weather.current.relative_humidity_2m}{weather.current_units.relative_humidity_2m}
            </p>
          </div>
        )}

        {/* KOTAK GEMPA */}
        {quake && (
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex gap-4 items-center">
            {/* Gambar bisa diklik untuk zoom */}
            <img 
              src={`https://data.bmkg.go.id/DataMKG/TEWS/${quake.Shakemap}`} 
              alt="Peta Gempa" 
              className="w-24 h-24 object-cover rounded-md border border-gray-200 cursor-pointer hover:opacity-80 transition-opacity"
              title="Klik untuk memperbesar"
              onClick={() => setIsZoomed(true)}
            />
            <div>
              <h2 className="font-semibold text-gray-900">Gempa: {quake.Magnitude} SR</h2>
              <p className="text-sm text-gray-900 font-medium">{quake.Tanggal} | {quake.Jam}</p>
              <p className="text-sm text-gray-600">Kedalaman: {quake.Kedalaman}</p>
              <p className="text-sm text-gray-600 line-clamp-2" title={quake.Wilayah}>{quake.Wilayah}</p>
            </div>
          </div>
        )}

      </div>

      {/* TAMPILAN POSTS */}
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
<<<<<<< HEAD
            <h2 className="font-semibold text-gray-900 capitalize">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{post.body}</p>
=======
            <h2 className="font-semibold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.address.suite}</p>
          </div>
        ))}
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <h2 className="font-semibold text-gray-900">{post.title}</h2>
            {/* <p className="text-sm text-gray-600">{post.title}</p> */}
            <p className="text-sm text-gray-600">{post.body}</p>
>>>>>>> 620f23db88361c85dcbd918a323a1b999e031afc
          </div>
        ))}
      </div>
      {/* TAMPILAN USERS */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-t pt-4">users</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {users.map((user) => (
            <div key={user.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h3 className="font-bold text-gray-900">{user.name}</h3>
              <p className="text-sm text-gray-600">Username: {user.username}</p>
              <p className="text-sm text-gray-600">Email: {user.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* OVERLAY GAMBAR MEMBESAR (MODAL) */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <img 
            src={`https://data.bmkg.go.id/DataMKG/TEWS/${quake.Shakemap}`} 
            alt="Peta Gempa Zoom" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
          />
          <p className="absolute bottom-10 text-white text-sm bg-black/50 px-4 py-2 rounded-full pointer-events-none">
            Klik di mana saja untuk menutup
          </p>
        </div>
      )}
    </div>
  );
}
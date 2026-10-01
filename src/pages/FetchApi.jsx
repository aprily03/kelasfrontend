import { useEffect, useState } from "react";

export default function FetchApi() {
  // 1. Siapkan state untuk menyimpan data dari API (awalnya array kosong)
  const [posts, setPosts] = useState([]);

  // 2. Ambil data dari API satu kali saat halaman pertama kali dibuka
  useEffect(() => {
    async function getPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    }
    getPosts();
  }, []); 

  // 3. Tampilkan data dengan .map() untuk setiap post
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
        Daftar <span className="text-blue-600">Posts</span>
      </h1>
      <p className="text-gray-600 text-sm mb-10 text-center">
        Data diambil dari jsonplaceholder.typicode.com/posts
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id} // Mengubah user.id menjadi post.id
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            {/* Mengganti name, email, dan city dengan title dan body dari API posts */}
            <h2 className="font-semibold text-gray-900 capitalize">{post.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
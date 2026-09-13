function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Kelas Front-End C</h1>

        <div className="flex gap-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Home
          </a>

          <a href="#" className="text-gray-600 hover:text-blue-600">
            Features
          </a>

          <a href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

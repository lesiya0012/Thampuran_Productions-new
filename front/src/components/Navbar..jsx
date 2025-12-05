const Navbar = () => (
  <nav className="bg-black text-white p-6 flex justify-between items-center">
    <h1 className="text-xl font-bold">Thampuran Productions</h1>
    <div className="space-x-4">
      <a
        href="/main#home"
        className="px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black"
      >
        Home
      </a>
      <a
        href="/main#about"
        className="px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black"
      >
        About
      </a>
      <a
        href="/main#services"
        className="px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black"
      >
        Services
      </a>
      <a
        href="/main#team"
        className="px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black"
      >
        Team
      </a>
      <a
        href="/main#contact"
        className="px-3 py-2 rounded-md transition transform hover:scale-110 hover:bg-yellow-400 hover:text-black"
      >
        Contact
      </a>
    </div>
  </nav>
);

export default Navbar;
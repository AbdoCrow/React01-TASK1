function NavBar({ onNavigate }) {
    return (
      <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => onNavigate("home")}>🎬 MovieApp</h1>
  
        <ul className="flex gap-6 text-lg">
          <li>
            <button onClick={() => onNavigate("home")} className="hover:text-pink-400">Home</button>
          </li>
          <li>
            <button onClick={() => onNavigate("favourites")} className="hover:text-pink-400">Favorites ❤️</button>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default NavBar;
  
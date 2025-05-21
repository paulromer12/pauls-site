export default function Navbar() {
  const links = ['Home', 'About Me', 'Projects', 'Posts'];
  return (
    <nav className="navbar">
      {links.map((txt) => (
        <a key={txt} href="#" className="nav‑link">
          {txt}
        </a>
      ))}
    </nav>
  );
}
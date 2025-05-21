export default function Navbar() {
  const linkDetails = [
    { text: 'Home', href: '#/' },
    { text: 'About Me', href: '#/about' },
    { text: 'Projects', href: '#/projects' },
    { text: 'Posts', href: '#/posts' },
  ];

  return (
    <nav className="navbar">
      {linkDetails.map((link) => (
        <a key={link.text} href={link.href} className="nav-link">
          {link.text}
        </a>
      ))}
    </nav>
  );
}
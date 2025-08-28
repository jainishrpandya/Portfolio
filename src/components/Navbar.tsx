import { useRef } from "react";

function Navbar({ navOpen }) {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const navItems: { label: string; link: string; className: string }[] = [
    { label: "Home", link: "#home", className: "nav-link active" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Reviews", link: "#reviews", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  return (
    <nav className={'navbar' + navOpen ? 'active' : ''}>
      {navItems.map(({ label, link, className }, index) => (
        <a
          key={index}
          href={link}
          className={className}
          // Attach ref only to "Home" initially
          ref={label === "Home" ? lastActiveLink : null}
        >
          {label}
        </a>
      ))}

      {/* Active box */}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

export default Navbar;

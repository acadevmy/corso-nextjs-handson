import NavbarItem from "./navbar-item";

const items = [
  {
    label: "👩‍💻",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "I miei lavori",
    href: "/works",
  },
];

function Navbar() {
  return (
    <div className="flex items-center gap-4 mb-10">
      {items.map((item) => (
        <NavbarItem key={item.href} href={item.href} label={item.label} />
      ))}
    </div>
  );
}

export default Navbar;

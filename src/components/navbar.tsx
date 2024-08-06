import Link from "next/link";
import { Container } from "@/components/container";

const navItems = [
  {
    title: "Home",
    href: "/home",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Places",
    href: "/places",
  },
  {
    title: "Contacts",
    href: "/contacts",
  },
];

export function Navbar() {
  return (
    <Container>
      <nav className="flex justify-between items-cente py-6">
        <div className="font-bold  text-xl -skew-x-6">Next-Tour 🛤️</div>
        <ul className="hidden lg:flex gap-6 ">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className="text-slate-600 hover:text-slate-950 hover:underline underline-offset-4"
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="px-6 py-2.5 bg-pink-500 rounded-md text-white">
          Login
        </button>
      </nav>
    </Container>
  );
}

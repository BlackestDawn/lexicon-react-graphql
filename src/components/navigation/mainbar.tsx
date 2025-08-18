import Link from "next/link";
import data from "@/lib/data/navItems.json";

export function MainNavbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4 justify-center">
          {data.nav.map((item) => (
            <li key={item.id}>
              <Link href={item.url} className="hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

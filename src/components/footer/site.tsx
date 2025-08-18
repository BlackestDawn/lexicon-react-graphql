import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Futurama Display. All rights reserved.</p>
        <p>
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}

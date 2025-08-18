import { MainNavbar } from "../navigation/mainbar";

export default function SiteHeader() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold">Welcome to Futurama Display</h1>
        <MainNavbar />
      </div>
    </header>
  );
}

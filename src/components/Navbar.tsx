export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-green-600">
        WMT
      </h1>

      <div className="flex gap-6 text-gray-600">
        <button>Dashboard</button>
        <button>Campaigns</button>
        <button>Users</button>
        <button>Templates</button>
        <button>Analytics</button>
      </div>
    </nav>
  );
}
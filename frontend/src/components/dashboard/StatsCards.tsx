export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm">Active Campaigns</h3>
        <p className="text-2xl font-bold mt-1">12</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm">Messages Sent</h3>
        <p className="text-2xl font-bold mt-1">1,450</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm">Users Reached</h3>
        <p className="text-2xl font-bold mt-1">8,920</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-gray-500 text-sm">Success Rate</h3>
        <p className="text-2xl font-bold mt-1 text-green-600">98.5%</p>
      </div>
    </div>
  );
}

export default function CampaignTable() {
  const campaigns = [
    { id: 1, name: "Summer Sale", status: "Active", sent: 1200, opened: 850 },
    { id: 2, name: "New Arrival Alert", status: "Completed", sent: 3500, opened: 2100 },
    { id: 3, name: "Welcome Series", status: "Running", sent: 450, opened: 320 },
    { id: 4, name: "Cart Recovery", status: "Paused", sent: 120, opened: 45 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-4 text-gray-800">Recent Campaigns</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 text-gray-500 text-sm">
              <th className="pb-3 font-medium">Campaign Name</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Sent</th>
              <th className="pb-3 font-medium">Opened</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="group hover:bg-gray-50 transition-colors">
                <td className="py-3 text-gray-800 font-medium">{campaign.name}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === "Active" || campaign.status === "Running"
                        ? "bg-green-100 text-green-700"
                        : campaign.status === "Completed"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="py-3 text-gray-600">{campaign.sent.toLocaleString()}</td>
                <td className="py-3 text-gray-600">{campaign.opened.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ActivityFeed() {
  const activities = [
    { id: 1, text: 'Campaign "Summer Sale" started', time: "2 hours ago" },
    { id: 2, text: 'New template "Discount Code" created', time: "5 hours ago" },
    { id: 3, text: 'System backup completed successfully', time: "1 day ago" },
    { id: 4, text: 'User "John Doe" uploaded 500 contacts', time: "1 day ago" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full">
      <h3 className="text-lg font-bold mb-4 text-gray-800">Activity Feed</h3>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li key={activity.id} className="flex gap-3">
            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0" />
            <div>
              <p className="text-sm text-gray-800">{activity.text}</p>
              <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="w-full mt-6 text-sm text-blue-600 hover:text-blue-700 font-medium">
        View All Activity
      </button>
    </div>
  );
}

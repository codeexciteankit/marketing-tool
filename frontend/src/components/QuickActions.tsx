const actions = [
  { title: "Upload Contacts" },
  { title: "Manage Groups" },
  { title: "Templates" },
  { title: "Analytics Dashboard" },
];

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 py-12">
      {actions.map((action) => (
        <div
          key={action.title}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">{action.title}</h3>
          <p className="text-sm text-gray-500 mt-2">
            Manage and control your {action.title.toLowerCase()}.
          </p>
        </div>
      ))}
    </div>
  );
}
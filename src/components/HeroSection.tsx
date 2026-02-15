export default function HeroSection() {
  return (
    <div className="text-center py-16 bg-white">
      <h2 className="text-4xl font-bold text-gray-800">
        Welcome to WhatsApp Marketing Tool
      </h2>

      <p className="mt-4 text-gray-600">
        Manage campaigns, automate bulk messaging, and track analytics in real-time.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg">
          Create Campaign
        </button>

        <button className="px-6 py-3 bg-gray-200 rounded-lg">
          Upload Contacts
        </button>
      </div>
    </div>
  );
}
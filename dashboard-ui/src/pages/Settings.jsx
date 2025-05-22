import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Mobile-only Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="lg:hidden text-sm text-blue-600 underline p-2 bg-slate-300 rounded-md m-2"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-semibold">Settings Page</h2>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getHero, updateHero } from "../services/api";

function AdminHero() {
  const token = localStorage.getItem("adminToken");

  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    resumeUrl: "",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getHero().then((data) => {
      setForm({
        name: data.name || "",
        title: data.title || "",
        description: data.description || "",
        resumeUrl: data.resumeUrl || "",
      });
    });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await updateHero(form, token);
    setSaving(false);
    alert("Hero updated successfully");
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Hero Section</h2>

      <input
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <textarea
        className="w-full h-32 p-3 bg-gray-900 border border-gray-700 rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <input
        className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
        placeholder="Resume PDF URL"
        value={form.resumeUrl}
        onChange={(e) =>
          setForm({ ...form, resumeUrl: e.target.value })
        }
      />

      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-blue-500 px-6 py-2 text-black font-semibold rounded"
      >
        {saving ? "Saving..." : "Save Hero"}
      </button>
    </section>
  );
}

export default AdminHero;

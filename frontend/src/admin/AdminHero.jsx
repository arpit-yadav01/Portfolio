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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getHero().then((data) => {
      if (data) {
        setForm({
          name: data.name || "",
          title: data.title || "",
          description: data.description || "",
          resumeUrl: data.resumeUrl || "",
        });
        setLoaded(true);
      }
    });
  }, []);

  const handleSave = async () => {
    if (!form.name || !form.title) return;

    try {
      setSaving(true);
      await updateHero(form, token);
      alert("Hero section updated successfully");
    } catch (err) {
      alert("Failed to update Hero section");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="mt-16 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Edit Hero</h2>

      <div className="grid gap-3">
        {Object.keys(form).map((key) => {
          if (key === "description") {
            return (
              <textarea
                key={key}
                placeholder={key}
                value={form[key]}
                rows={3}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="bg-gray-900 border border-gray-700 p-2 resize-none"
              />
            );
          }
          return (
            <input
              key={key}
              placeholder={key}
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              className="bg-gray-900 border border-gray-700 p-2"
            />
          );
        })}

        <button
          onClick={handleSave}
          disabled={saving || !loaded}
          className="bg-blue-500 py-2 text-black font-semibold hover:bg-blue-400 disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Hero"}
        </button>
      </div>
    </section>
  );
}

export default AdminHero;
import { useEffect, useState } from "react";
import { updateAbout } from "../services/api";

import AdminEducation from "./AdminEducation";
import AdminSkills from "./AdminSkills";
import AdminProjects from "./AdminProjects";
import AdminExperience from "./AdminExperience";

function AdminDashboard() {
  const token = localStorage.getItem("adminToken");

  const [bio, setBio] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSaveAbout = async () => {
    if (!bio.trim()) return;

    try {
      setSaving(true);
      await updateAbout(bio, token);
      alert("About updated successfully");
    } catch (err) {
      alert("Failed to update About");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-20">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">
          Edit About
        </h2>

        <textarea
          className="w-full h-40 p-4 bg-gray-900 border border-gray-700 rounded-lg"
          placeholder="Edit About text..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button
          onClick={handleSaveAbout}
          disabled={saving}
          className="mt-4 bg-blue-500 px-6 py-2 text-black font-semibold rounded-full
                     hover:bg-blue-400 disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save About"}
        </button>
      </section>

      {/* ================= EDUCATION SECTION ================= */}
      <section>
        <AdminEducation />
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section>
        <AdminSkills />
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section>
        <AdminProjects />
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section>
        <AdminExperience />
      </section>
    </div>
  );
}

export default AdminDashboard;

// import { useEffect, useState } from "react";
// import { getHero, updateHero } from "../services/api";

// function AdminHero() {
//   const token = localStorage.getItem("adminToken");

//   const [form, setForm] = useState({
//     name: "",
//     title: "",
//     description: "",
//     resumeUrl: "",
//   });

//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     getHero().then((data) => {
//       setForm({
//         name: data.name || "",
//         title: data.title || "",
//         description: data.description || "",
//         resumeUrl: data.resumeUrl || "",
//       });
//     });
//   }, []);

//   const handleSave = async () => {
//     setSaving(true);
//     await updateHero(form, token);
//     setSaving(false);
//     alert("Hero updated successfully");
//   };

//   return (
//     <section className="space-y-6">
//       <h2 className="text-2xl font-bold">Hero Section</h2>

//       <input
//         className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
//         placeholder="Name"
//         value={form.name}
//         onChange={(e) =>
//           setForm({ ...form, name: e.target.value })
//         }
//       />

//       <input
//         className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
//         placeholder="Title"
//         value={form.title}
//         onChange={(e) =>
//           setForm({ ...form, title: e.target.value })
//         }
//       />

//       <textarea
//         className="w-full h-32 p-3 bg-gray-900 border border-gray-700 rounded"
//         placeholder="Description"
//         value={form.description}
//         onChange={(e) =>
//           setForm({ ...form, description: e.target.value })
//         }
//       />

//       <input
//         className="w-full p-3 bg-gray-900 border border-gray-700 rounded"
//         placeholder="Resume PDF URL"
//         value={form.resumeUrl}
//         onChange={(e) =>
//           setForm({ ...form, resumeUrl: e.target.value })
//         }
//       />

//       <button
//         onClick={handleSave}
//         disabled={saving}
//         className="bg-blue-500 px-6 py-2 text-black font-semibold rounded"
//       >
//         {saving ? "Saving..." : "Save Hero"}
//       </button>
//     </section>
//   );
// }

// export default AdminHero;


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

  const fieldConfig = {
    name: { placeholder: "Your name  e.g. Arpit Yadav", hint: null },
    title: { placeholder: "Title  e.g. Full Stack Developer • AI Enthusiast", hint: null },
    description: { placeholder: "Short bio shown under your title", hint: null },
    resumeUrl: {
      placeholder: "Paste resume URL  e.g. https://drive.google.com/file/d/…/view",
      hint: "Supports Google Drive links, direct PDF URLs, or any public link.",
    },
  };

  return (
    <section className="mt-16 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Edit Hero</h2>

      <div className="grid gap-4">
        {Object.keys(form).map((key) => {
          const config = fieldConfig[key];

          if (key === "description") {
            return (
              <div key={key}>
                <textarea
                  placeholder={config.placeholder}
                  value={form[key]}
                  rows={3}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 p-2 resize-none"
                />
              </div>
            );
          }

          return (
            <div key={key}>
              <input
                placeholder={config.placeholder}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 p-2"
              />
              {config.hint && (
                <p className="text-xs text-gray-500 mt-1 ml-1">{config.hint}</p>
              )}
            </div>
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
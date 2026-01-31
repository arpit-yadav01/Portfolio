import { useEffect, useState } from "react";
import { getProjects, addProject, deleteProject } from "../services/api";
import {
  CLOUDINARY_UPLOAD_URL,
  CLOUDINARY_UPLOAD_PRESET,
} from "../config/cloudinary";

function AdminProjects() {
  const token = localStorage.getItem("adminToken");

  const [projects, setProjects] = useState([]);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    techStack: "",
    startDate: "",
    endDate: "",
    liveLink: "",
    githubLink: "",
    category: "",
  });

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // ⬆️ Upload images to Cloudinary
  const uploadImages = async () => {
    setUploading(true);
    const uploaded = [];

    for (let file of images) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const res = await fetch(CLOUDINARY_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      uploaded.push(data.secure_url);
    }

    setUploading(false);
    return uploaded;
  };

  const handleAdd = async () => {
    if (!form.title || !form.description) return;

    const imageUrls =
      images.length > 0 ? await uploadImages() : [];

    await addProject(
      {
        ...form,
        images: imageUrls,
        techStack: form.techStack
          .split(",")
          .map((t) => t.trim()),
      },
      token
    );

    setForm({
      title: "",
      description: "",
      techStack: "",
      startDate: "",
      endDate: "",
      liveLink: "",
      githubLink: "",
      category: "",
    });
    setImages([]);

    loadProjects();
  };

  const handleDelete = async (id) => {
    await deleteProject(id, token);
    loadProjects();
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Projects
      </h2>

      {/* ADD PROJECT */}
      <div className="grid gap-3 mb-10">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            placeholder={key}
            value={form[key]}
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
            className="bg-gray-900 border border-gray-700 p-2"
          />
        ))}

        {/* 📸 MULTIPLE IMAGE UPLOAD */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) =>
            setImages([...e.target.files])
          }
          className="text-sm text-gray-300"
        />

        <button
          onClick={handleAdd}
          disabled={uploading}
          className="bg-blue-500 py-2 text-black font-semibold disabled:opacity-60"
        >
          {uploading ? "Uploading..." : "Add Project"}
        </button>
      </div>

      {/* PROJECT LIST */}
      <ul className="space-y-4">
        {projects.map((p) => (
          <li
            key={p._id}
            className="flex justify-between items-center bg-gray-900 p-4 border border-gray-800"
          >
            <div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-400">
                {p.startDate} → {p.endDate || "Present"}
              </p>
            </div>

            <button
              onClick={() => handleDelete(p._id)}
              className="text-red-400 hover:text-red-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AdminProjects;

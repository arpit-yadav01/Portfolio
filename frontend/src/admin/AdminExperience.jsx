import { useEffect, useState } from "react";
import {
  getExperience,
  addExperience,
  deleteExperience,
} from "../services/api";

function AdminExperience() {
  const token = localStorage.getItem("adminToken");

  const [experience, setExperience] = useState([]);
  const [form, setForm] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const loadExperience = async () => {
    const data = await getExperience();
    setExperience(data);
  };

  useEffect(() => {
    loadExperience();
  }, []);

  const handleAdd = async () => {
    if (!form.role || !form.company) return;

    await addExperience(form, token);
    setForm({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    loadExperience();
  };

  const handleDelete = async (id) => {
    await deleteExperience(id, token);
    loadExperience();
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Experience
      </h2>

      {/* ADD EXPERIENCE */}
      <div className="grid gap-3 mb-8">
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

        <button
          onClick={handleAdd}
          className="bg-blue-500 py-2 text-black font-semibold"
        >
          Add Experience
        </button>
      </div>

      {/* EXPERIENCE LIST */}
      <ul className="space-y-4">
        {experience.map((e) => (
          <li
            key={e._id}
            className="bg-gray-900 border border-gray-800 p-4 flex justify-between"
          >
            <div>
              <h3 className="font-semibold">
                {e.role}
              </h3>
              <p className="text-gray-400">
                {e.company}
              </p>
              <p className="text-sm text-gray-500">
                {e.startDate} → {e.endDate || "Present"}
              </p>
            </div>

            <button
              onClick={() => handleDelete(e._id)}
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

export default AdminExperience;

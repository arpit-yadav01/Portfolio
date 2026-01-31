import { useEffect, useState } from "react";
import {
  getEducation,
  addEducation,
  deleteEducation,
} from "../services/api";

function AdminEducation() {
  const token = localStorage.getItem("adminToken");

  const [education, setEducation] = useState([]);
  const [form, setForm] = useState({
    degree: "",
    institute: "",
    startYear: "",
    endYear: "",
    score: "",
  });

  const loadEducation = async () => {
    const data = await getEducation();
    setEducation(data);
  };

  useEffect(() => {
    loadEducation();
  }, []);

  const handleAdd = async () => {
    if (!form.degree || !form.institute) return;

    await addEducation(form, token);
    setForm({
      degree: "",
      institute: "",
      startYear: "",
      endYear: "",
      score: "",
    });
    loadEducation();
  };

  const handleDelete = async (id) => {
    await deleteEducation(id, token);
    loadEducation();
  };

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Education
      </h2>

      {/* ADD EDUCATION */}
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
          Add Education
        </button>
      </div>

      {/* EDUCATION LIST */}
      <ul className="space-y-4">
        {education.map((e) => (
          <li
            key={e._id}
            className="bg-gray-900 border border-gray-800 p-4 flex justify-between"
          >
            <div>
              <h3 className="font-semibold">
                {e.degree}
              </h3>
              <p className="text-gray-400">
                {e.institute}
              </p>
              <p className="text-sm text-gray-500">
                {e.startYear} – {e.endYear}
              </p>
              <p className="text-sm text-blue-400">
                {e.score}
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

export default AdminEducation;

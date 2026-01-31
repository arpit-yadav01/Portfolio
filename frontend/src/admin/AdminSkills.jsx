// import { useEffect, useState } from "react";
// import { getSkills, addSkill, deleteSkill } from "../services/api";

// function AdminSkills() {
//   const token = localStorage.getItem("adminToken");

//   const [skills, setSkills] = useState([]);
//   const [name, setName] = useState("");
//   const [level, setLevel] = useState("");

//   const loadSkills = async () => {
//     const data = await getSkills();
//     setSkills(data);
//   };

//   useEffect(() => {
//     loadSkills();
//   }, []);

//   const handleAdd = async () => {
//     if (!name || !level) return;

//     await addSkill({ name, level }, token);
//     setName("");
//     setLevel("");
//     loadSkills();
//   };

//   const handleDelete = async (id) => {
//     await deleteSkill(id, token);
//     loadSkills();
//   };

//   return (
//     <div className="mt-10">
//       <h2 className="text-2xl font-bold mb-4">Skills</h2>

//       <div className="flex gap-4 mb-6">
//         <input
//           className="bg-gray-900 border border-gray-700 p-2 flex-1"
//           placeholder="Skill name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <select
//           className="bg-gray-900 border border-gray-700 p-2"
//           value={level}
//           onChange={(e) => setLevel(e.target.value)}
//         >
//           <option value="">Level</option>
//           <option value="Beginner">Beginner</option>
//           <option value="Intermediate">Intermediate</option>
//           <option value="Advanced">Advanced</option>
//         </select>

//         <button
//           onClick={handleAdd}
//           className="bg-blue-500 px-4 py-2 text-black font-semibold"
//         >
//           Add
//         </button>
//       </div>

//       <ul className="space-y-3">
//         {skills.map((skill) => (
//           <li
//             key={skill._id}
//             className="flex justify-between items-center bg-gray-900 p-3 border border-gray-800"
//           >
//             <span>
//               {skill.name} —{" "}
//               <span className="text-gray-400">{skill.level}</span>
//             </span>

//             <button
//               onClick={() => handleDelete(skill._id)}
//               className="text-red-400 hover:text-red-300"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AdminSkills;


import { useEffect, useState } from "react";
import { getSkills, addSkill, deleteSkill } from "../services/api";

function AdminSkills() {
  const token = localStorage.getItem("adminToken");

  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#000000");

  const loadSkills = async () => {
    const data = await getSkills();
    setSkills(data);
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const handleAdd = async () => {
    if (!name || !level || !icon) {
      alert("Please fill in all required fields (name, level, icon)");
      return;
    }

    await addSkill({ name, level, icon, color, bgColor }, token);
    setName("");
    setLevel("");
    setIcon("");
    setColor("#ffffff");
    setBgColor("#000000");
    loadSkills();
  };

  const handleDelete = async (id) => {
    await deleteSkill(id, token);
    loadSkills();
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      {/* ADD SKILL FORM */}
      <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            className="bg-gray-800 border border-gray-700 p-2 rounded"
            placeholder="Skill name (e.g., React)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            className="bg-gray-800 border border-gray-700 p-2 rounded"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <input
            className="bg-gray-800 border border-gray-700 p-2 rounded"
            placeholder="Icon (e.g., ⚛️, ▲, JS)"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />

          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-xs text-gray-400 block mb-1">Text Color</label>
              <input
                type="color"
                className="w-full h-10 bg-gray-800 border border-gray-700 rounded cursor-pointer"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-400 block mb-1">Background Color</label>
              <input
                type="color"
                className="w-full h-10 bg-gray-800 border border-gray-700 rounded cursor-pointer"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="mb-4 p-4 bg-gray-800 rounded flex items-center gap-4">
          <span className="text-sm text-gray-400">Preview:</span>
          <div
            className="w-24 h-24 rounded-xl flex flex-col items-center justify-center"
            style={{ backgroundColor: bgColor }}
          >
            <div className="text-3xl mb-1" style={{ color: color }}>
              {icon || "?"}
            </div>
            <div className="text-xs font-semibold" style={{ color: color }}>
              {name || "Name"}
            </div>
          </div>
        </div>

        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-semibold w-full"
        >
          Add Skill
        </button>
      </div>

      {/* SKILLS LIST */}
      <div className="space-y-3">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="flex justify-between items-center bg-gray-900 p-4 border border-gray-800 rounded-lg"
          >
            <div className="flex items-center gap-4">
              {/* Skill Card Preview */}
              <div
                className="w-16 h-16 rounded-lg flex flex-col items-center justify-center"
                style={{ backgroundColor: skill.bgColor }}
              >
                <div className="text-2xl" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
              </div>

              {/* Skill Info */}
              <div>
                <div className="font-semibold">{skill.name}</div>
                <div className="text-sm text-gray-400">{skill.level}</div>
                <div className="text-xs text-gray-500 mt-1">
                  Colors: {skill.color} / {skill.bgColor}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleDelete(skill._id)}
              className="text-red-400 hover:text-red-300 px-4 py-2"
            >
              Delete
            </button>
          </div>
        ))}

        {skills.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No skills added yet. Add your first skill above!
          </div>
        )}
      </div>

      {/* HELPFUL TIPS */}
      <div className="mt-6 bg-blue-900/20 border border-blue-700/50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-300 mb-2">💡 Tips:</h3>
        <ul className="text-sm text-gray-300 space-y-1">
          <li>• Use emojis for icons: ⚛️ 🐳 🍃 ▲ or text like "JS", "TS"</li>
          <li>• Popular colors: React (#61dafb), Node.js (#3c873a), Docker (#2496ed)</li>
          <li>• Keep text color readable against background color</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminSkills;
import { useState } from "react";

const UsernameForm = ({ inputUsername, setInputUserName, onSetUsername }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ backgroundColor: "#101828" }}
      className="flex flex-col items-center justify-center h-[400px] text-white p-4 rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Enter Your Name</h2>
      <input
        type="text"
        placeholder="Your Name or leave blank for Anonymous"
        style={{ backgroundColor: "#364153" }}
        className="p-2 rounded bg-gray-700 text-white placeholder-gray-400 mb-3 w-64 focus:outline-none"
        value={inputUsername}
        onChange={(e) => setInputUserName(e.target.value)}
      />
      <button
        onClick={onSetUsername}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered
            ? "oklch(62.7% 0.194 149.214)"
            : "oklch(72.3% 0.219 149.579)",
        }}
        className="px-4 py-2 rounded text-white font-medium"
      >
        Join Chat
      </button>
    </div>
  );
};

export default UsernameForm;

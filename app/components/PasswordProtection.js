"use client";
import { useState } from "react";

export default function PasswordProtection({
  onSuccess,
  correctPassword = "pass2025",
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      onSuccess();
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen mt-[20%] flex justify-center bg-[#FBF7F7] monoFont">
      <div className="p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sorry, you need a secret code here!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className={`w-full p-2 border ${
                error ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#A7EB7B]`}
              placeholder="Enter code"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">Incorrect password</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#A7EB7B] text-black py-2 px-4 hover:bg-opacity-80 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";

const Tutor = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
        <div className="h-96 bg-gray-200 rounded-lg overflow-y-auto p-4">
          <p className="text-lg text-white">{inputText}</p>
        </div>
      </div>
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6 mb-8">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text here..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default Tutor;

// 09_SecretRoom.jsx
import { useState } from "react";

export default function SecretRoom({ question }) {
  const [reply, setReply] = useState("");

  const handleQuestion = (e) => {
    console.log(e); 
    setReply(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center py-10 bg-slate-800 w-full text-center">
      <h1 className="text-white font-bold text-4xl mb-4">SecretRoom</h1>
      
      <p className="text-purple-300">Message from the outside ✉️:</p>
      <p className="text-yellow-300 text-xl mb-6">
        {question || "Waiting for a message..."}
      </p>

      <p className="text-green-300">Reply to the outside 👨‍💻:</p>

      <textarea 
        className="bg-white text-black p-2 rounded my-2 w-[80%] max-w-[400px]" 
        placeholder="Type your reply here..."
        onChange={handleQuestion}
      />

      <p className="text-yellow-300">
        ⌛ {reply || "Waiting for a reply..."}
      </p>
    </div>
  );
}
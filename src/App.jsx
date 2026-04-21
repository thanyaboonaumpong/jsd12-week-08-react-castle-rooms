// App.jsx
import { useState } from "react";
import Castle from "./components/01_Castle";

export default function App() {
  const [question, setQuestion] = useState("");

  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  };

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <p className="text-purple-300">
        Message for JSD12: 
        <span className="text-yellow-300 ml-2">
          {question || "Waiting for a message..."}
        </span>
      </p>

      <textarea
        value={question}
        onChange={handleQuestion}
        className="bg-white text-black rounded px-2 py-1"
        placeholder="Type your message here..."
      />

      {/* แก้ตรงนี้: ส่งของด้วยชื่อ banana, apple, orange คะ */}
      <Castle banana={question} apple={""} orange={""} />
    </div>
  );
}
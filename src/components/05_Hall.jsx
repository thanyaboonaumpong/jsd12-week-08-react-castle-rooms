// 05_Hall.jsx
import Corridor from "./06_Corridor";

export default function Hall({ question }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-emerald-500 w-[90%]">
      <h1 className="text-white font-bold text-2xl">Hall</h1>
      <Corridor question={question} />
    </div>
  );
}
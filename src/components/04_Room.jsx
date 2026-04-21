// 04_Room.jsx
import Hall from "./05_Hall";

export default function Room({ question }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-green-500 w-[90%] mb-10">
      <h1 className="text-white font-bold text-2xl">Room</h1>
      <Hall question={question} />
    </div>
  );
}
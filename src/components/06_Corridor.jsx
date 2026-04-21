// 06_Corridor.jsx
import Gallery from "./07_Gallery";

export default function Corridor({ question }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-blue-500 w-[90%]">
      <h1 className="text-white font-bold text-2xl">Corridor</h1>
      <Gallery question={question} />
    </div>
  );
}
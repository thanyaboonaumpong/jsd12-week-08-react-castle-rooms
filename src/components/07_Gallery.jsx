// 07_Gallery.jsx
import Nook from "./08_Nook";

export default function Gallery({ question }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-indigo-500 w-[90%]">
      <h1 className="text-white font-bold text-2xl">Gallery</h1>
      <Nook question={question} />
    </div>
  );
}
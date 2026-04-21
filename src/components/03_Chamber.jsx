import Room from "./04_Room";

export default function Chamber({ question }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-yellow-500 w-[90%]">
      <h1 className="text-white font-bold text-2xl">Chamber</h1>
    
      <Room question={question} />
    </div>
  );
}
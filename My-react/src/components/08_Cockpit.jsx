import EngineRoom from "./09_EngineRoom";
export default function Cockpit(props) {
  return (
    <div className="flex flex-col items-center py-10 bg-purple-600 w-[95%] mb-10">
      <h1 className="text-white font-bold text-xl">08: Cockpit</h1>
      <EngineRoom {...props} />
    </div>
  );
}
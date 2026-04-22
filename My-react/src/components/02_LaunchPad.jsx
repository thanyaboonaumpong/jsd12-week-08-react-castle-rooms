import RocketFrame from "./03_RocketFrame";
export default function LaunchPad(props) {
  return (
    <div className="flex flex-col items-center py-10 bg-orange-500 w-[95%]">
      <h1 className="text-white font-bold text-xl">02: Launch Pad</h1>
      <RocketFrame {...props} />
    </div>
  );
}
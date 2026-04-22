import LaunchPad from "./02_LaunchPad";
export default function SpaceCenter(props) {
  return (
    <div className="flex flex-col items-center pt-10 bg-red-600 w-full mt-10 rounded-t-3xl">
      <h1 className="text-white font-bold text-2xl">01: Space Center</h1>
      <LaunchPad {...props} />
    </div>
  );
}
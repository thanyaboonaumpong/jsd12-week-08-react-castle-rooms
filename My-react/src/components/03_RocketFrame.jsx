import FuelTank from "./04_FuelTank";
export default function RocketFrame(props) {
  return (
    <div className="flex flex-col items-center py-10 bg-yellow-500 w-[95%]">
      <h1 className="text-white font-bold text-xl">03: Rocket Frame</h1>
      <FuelTank {...props} />
    </div>
  );
}
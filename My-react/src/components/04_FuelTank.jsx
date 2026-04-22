import OxygenSystem from "./05_OxygenSystem";
export default function FuelTank(props) {
  return (
    <div className="flex flex-col items-center py-10 bg-green-500 w-[95%]">
      <h1 className="text-white font-bold text-xl">04: Fuel Tank</h1>
      <OxygenSystem {...props} />
    </div>
  );
}
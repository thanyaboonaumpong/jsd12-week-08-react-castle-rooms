import WireTunnel from "./06_WireTunnel";
export default function OxygenSystem(props) {
  return (
    <div className="flex flex-col items-center py-10 bg-emerald-500 w-[95%]">
      <h1 className="text-white font-bold text-xl">05: Oxygen System</h1>
      <WireTunnel {...props} />
    </div>
  );
}
import PayloadBay from "./07_PayloadBay";
export default function WireTunnel(props) {
  return (
    <div className="flex flex-col items-center py-10 bg-blue-500 w-[95%]">
      <h1 className="text-white font-bold text-xl">06: Wire Tunnel</h1>
      <PayloadBay {...props} />
    </div>
  );
}
import Cockpit from "./08_Cockpit";
export default function PayloadBay(props) {
  return (
    <div className="flex flex-col items-center py-10 bg-indigo-500 w-[95%]">
      <h1 className="text-white font-bold text-xl">07: Payload Bay</h1>
      <Cockpit {...props} />
    </div>
  );
}
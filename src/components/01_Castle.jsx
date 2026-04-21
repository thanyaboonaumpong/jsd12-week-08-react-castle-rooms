import Tower from "./02_Tower";
export default function Castle({ banana, apple, orange }) { 
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
      <h1 className="text-white font-bold text-2xl">Castle</h1>
      <Tower question={banana} /> 
    </div>
  );
}
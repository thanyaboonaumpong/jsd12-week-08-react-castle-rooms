import Chamber from "./03_Chamber";

export default function Tower({ question }) { 
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-orange-500 w-[90%] mb-10">
      <h1 className="text-white font-bold text-2xl">Tower</h1>
      <p className="text-white mt-2">
        {question}
      </p>
      <Chamber question={question} /> 
    </div>
  );
}
// 08_Nook.jsx
import SecretRoom from "./09_SecretRoom";

export default function Nook({ question }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 bg-purple-600 w-[90%]">
      <h1 className="text-white font-bold text-2xl">Nook</h1>
      <SecretRoom question={question} />
    </div>
  );
}
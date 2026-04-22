import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import SpaceCenter from "./components/01_SpaceCenter";

export default function App() {
  const [question, setQuestion] = useState(""); 
  const [answer, setAnswer] = useState("");     
  const [launchReady, setLaunchReady] = useState(false);
  const [astronauts, setAstronauts] = useState([]);
  const [gamePhase, setGamePhase] = useState("idle");
  const [fuelLevel, setFuelLevel] = useState(0);
  const [showFuelingModal, setShowFuelingModal] = useState(false);

  // ตรวจรหัส "launch" เพื่อเริ่มภารกิจค๊ะ
  useEffect(() => {
    if (!launchReady && /launch/i.test(answer)) {
      setLaunchReady(true);
    }
  }, [answer, launchReady]);

  // ระบบเติมเชื้อเพลิงค๊ะ
  useEffect(() => {
    if (gamePhase !== "fueling") return;
    const timer = setTimeout(() => {
      if (fuelLevel < 100) {
        setFuelLevel((p) => Math.min(p + 5, 100));
      } else {
        setShowFuelingModal(false);
        setGamePhase("ready_to_fly");
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [fuelLevel, gamePhase]);

  // พลุฉลองเมื่อสำเร็จค๊ะ
  useEffect(() => {
    if (gamePhase === "launched") {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    }
  }, [gamePhase]);

  const handleCallCrew = async () => {
    setGamePhase("fetching");
    const names = ["deoxys-normal", "starmie", "lunatone"];
    const results = await Promise.all(names.map(n => fetch(`https://pokeapi.co/api/v2/pokemon/${n}`).then(r => r.json())));
    setAstronauts(results.map(p => ({ name: p.name, sprite: p.sprites.front_default })));
    setGamePhase("crew_ready");
  };

  return (
    <div className="pb-80 py-10 flex flex-col items-center min-h-screen bg-slate-900 text-white font-sans">
      <h1 className="text-3xl font-bold text-blue-400 mb-6 flex items-center gap-2">
        🚀 Rocket Mission Control
      </h1>
      
      <div className="flex gap-4 mb-6">
        {astronauts.map(a => (
          <div key={a.name} className="flex flex-col items-center bg-slate-800 p-2 rounded-lg border border-blue-500/30">
            <img src={a.sprite} className="w-14 h-14" alt={a.name} />
            <span className="text-[10px] uppercase font-bold text-blue-300">{a.name}</span>
          </div>
        ))}
      </div>

      {launchReady && gamePhase === "idle" && (
        <button 
          onClick={handleCallCrew} 
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold mb-6 shadow-lg transition-all active:scale-95"
        >
          Assemble Space Crew 👨‍🚀
        </button>
      )}

      {/* กล่องคำสั่งด้านบนที่สว่างสดใสค๊ะ */}
      <div className="mt-2 w-[90%] max-w-md mx-auto p-5 bg-slate-700 rounded-2xl border border-slate-600 shadow-inner mb-8">
        <p className="text-purple-300 text-sm mb-3 font-semibold text-left ml-1">
           Command Center Output:
        </p>
        
        <textarea 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          style={{ 
            backgroundColor: 'white', 
            color: 'black', 
            minHeight: '100px' 
          }} 
          className="p-3 rounded-xl w-full shadow-lg outline-none focus:ring-4 focus:ring-purple-500/50 transition-all font-medium" 
          placeholder="Type your command here..." 
        />
        
        <div className="flex justify-between mt-3 px-1">
          <p className="text-gray-400 text-[10px]">MISSION STATUS: <span className="text-purple-400 font-mono">{gamePhase.toUpperCase()}</span></p>
          <p className="text-gray-400 text-[10px]">SIGNAL: <span className="text-green-500 font-mono">ENCRYPTED</span></p>
        </div>
      </div>

      <SpaceCenter 
        question={question} 
        answer={answer} 
        handleAnswer={(e) => setAnswer(e.target.value)}
        gamePhase={gamePhase}
        setGamePhase={setGamePhase}
        setShowFuelingModal={setShowFuelingModal}
      />

      {/* Modal เติมเชื้อเพลิง (จุดที่เคย Error หนูแก้ปิดเครื่องหมายคำพูดให้แล้วค๊ะ!) */}
      {showFuelingModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 text-white">
          <div className="bg-slate-800 p-10 rounded-3xl border-2 border-blue-500 text-center shadow-2xl">
            <p className="text-2xl font-bold mb-6">FUELING SYSTEM: {fuelLevel}%</p>
            <div className="w-72 bg-gray-700 h-6 rounded-full overflow-hidden border border-gray-600">
              <div 
                className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full transition-all duration-75" 
                style={{ width: `${fuelLevel}%` }} 
              />
            </div>
            <p className="mt-4 text-blue-400 animate-pulse font-mono text-sm">LOADING PROPELLANT...</p>
          </div>
        </div>
      )}
    </div>
  );
}
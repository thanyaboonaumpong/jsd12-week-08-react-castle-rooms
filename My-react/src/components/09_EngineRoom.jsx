// บรรทัดที่ 1-2 ต้องมีแค่ export เท่านั้นค๊ะ ห้ามมี import ตัวอื่นมาปน
export default function EngineRoom({ 
  question, 
  answer, 
  handleAnswer, 
  gamePhase, 
  setGamePhase, 
  setShowFuelingModal 
}) {
  const isLaunched = gamePhase === "launched";

  const handleAction = () => {
    if (gamePhase === "crew_ready") {
      setShowFuelingModal(true);
      setGamePhase("fueling");
    } else if (gamePhase === "ready_to_fly") {
      setGamePhase("launched");
    }
  };

  return (
    <div className="flex flex-col items-center py-10 bg-slate-800 w-full text-center border-t-4 border-blue-500 shadow-2xl">
      <h1 className="text-white font-bold text-3xl mb-4">09: Engine Room</h1>
      
      {!isLaunched ? (
        <div className="mb-4">
          <p className="text-blue-300 italic mb-1 text-sm">Command from Control Center:</p>
          <p className="text-yellow-300 text-xl font-bold mb-6">
             {question || "Waiting for signal..."}
          </p>
          
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2619/2619080.png" 
            className={`w-32 my-6 mx-auto transition-all duration-500 ${gamePhase === 'ready_to_fly' ? 'scale-110 shadow-blue-500/50 drop-shadow-2xl' : ''}`} 
            alt="Rocket"
          />
          
          {(gamePhase === "crew_ready" || gamePhase === "ready_to_fly") && (
            <button 
              onClick={handleAction} 
              className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-full font-bold shadow-xl transition-all active:scale-95"
            >
              {gamePhase === "crew_ready" ? "Start Fueling ⛽" : "Launch Now! 🚀"}
            </button>
          )}
        </div>
      ) : (
        <div className="py-10 animate-bounce">
          <h2 className="text-5xl font-bold text-yellow-400">BLAST OFF! 🚀</h2>
          <p className="text-white mt-4 text-xl">Mission Accomplished!</p>
        </div>
      )}

      {/* ช่องกรอกสีขาวที่โอนิจังต้องการค๊ะ */}
      <div className="mt-8 w-[90%] max-w-md mx-auto p-5 bg-slate-700 rounded-2xl border border-slate-600 shadow-inner">
        <p className="text-green-400 text-sm mb-3 font-semibold text-left">
           Reply Status:
        </p>
        
        <textarea 
          value={answer} 
          onChange={handleAnswer} 
          style={{ 
            backgroundColor: 'white', 
            color: 'black', 
            minHeight: '100px' 
          }} 
          className="p-3 rounded-xl w-full shadow-lg outline-none focus:ring-4 focus:ring-blue-500/50 transition-all font-medium" 
          placeholder="Type 'launch' to start mission..." 
        />
        
        <div className="flex justify-between mt-4 px-1">
          <p className="text-gray-400 text-[10px]">CURRENT PHASE: <span className="text-blue-400 font-mono">{gamePhase.toUpperCase()}</span></p>
          <p className="text-gray-400 text-[10px]">ENGINE STATUS: <span className="text-green-500 font-mono">READY</span></p>
        </div>
      </div>
    </div>
  );
}
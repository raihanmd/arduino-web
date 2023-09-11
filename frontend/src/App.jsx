import { useState } from "react";

const fetchArduino = async (data) => {
  await fetch("http://localhost:3000/arduino", {
    method: "POST",
    body: JSON.stringify({ data }),
    headers: { "Content-Type": "application/json" },
  });
};

function App() {
  const [greenLED, setGreenLED] = useState(false);
  const [redLED, setRedLED] = useState(false);
  const [yellowLED, setYellowLED] = useState(false);
  const [buzzer, setBuzzer] = useState(false);

  return (
    <>
      <div className="w-full py-20 px-60 text-center flex flex-col gap-28 items-center">
        <h1 className="text-5xl font-bold text-white">Arduino Cuoy! 😁👍</h1>
        <div className="flex flex-col gap-5">
          <div className="w-[215px] flex flex-col gap-4">
            <p>Lampu Merah: {redLED ? "☀️" : "🌑"}</p>
            <button
              onClick={() => {
                fetchArduino(redLED ? "2" : "1");
                setRedLED((prev) => !prev);
              }}
              className="btn btn-secondary"
            >
              {redLED ? "Matikan" : "Nyalakan"} lampu merah
            </button>
          </div>
          <div className="w-[215px] flex flex-col gap-4">
            <p>Lampu Hijau: {greenLED ? "☀️" : "🌑"}</p>
            <button
              onClick={() => {
                fetchArduino(greenLED ? "4" : "3");
                setGreenLED((prev) => !prev);
              }}
              className="btn btn-primary"
            >
              {greenLED ? "Matikan" : "Nyalakan"} lampu hijau
            </button>
          </div>
          <div className="w-[220px] flex flex-col gap-4">
            <p>Lampu Kuning: {yellowLED ? "☀️" : "🌑"}</p>
            <button
              onClick={() => {
                fetchArduino(yellowLED ? "6" : "5");
                setYellowLED((prev) => !prev);
              }}
              className="btn btn-accent"
            >
              {yellowLED ? "Matikan" : "Nyalakan"} lampu kuning
            </button>
          </div>
          <div className="w-[215px] flex flex-col gap-4">
            <p>Buzzer: {buzzer ? "🔊" : "🔈"}</p>
            <button
              onClick={() => {
                fetchArduino(buzzer ? "8" : "7");
                setBuzzer((prev) => !prev);
              }}
              className="btn btn-warning"
            >
              {buzzer ? "Matikan" : "Nyalakan"} buzzer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

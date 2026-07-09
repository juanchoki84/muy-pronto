import { useEffect, useState } from "react";
import "./App.css";
import LogoMark from "./components/LogoMark";

const launchDate = new Date("2026-09-30T12:00:00-03:00");

function getTimeLeft(targetDate) {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownItem({ value, label }) {
  return (
    <div className="countdownItem">
      <span className="countdownValue">{String(value).padStart(2, "0")}</span>
      <span className="countdownLabel">{label}</span>
    </div>
  );
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="comingSoonPage">
      <div className="comingSoonBackground" aria-hidden="true">
        <span className="bgRing bgRingTopRight" />
        <span className="bgRing bgRingBottomLeft" />

        <span className="bgDot bgDotTeal" />
        <span className="bgDot bgDotYellow" />
        <span className="bgSpark bgSparkOne">✦</span>
        <span className="bgSpark bgSparkTwo">✦</span>

        <div className="exchangeScene">
          <span className="exchangeCurve exchangeCurveLeft" />
          <span className="exchangeCurve exchangeCurveRight" />
          <span className="exchangeCenterGlow" />

          <span className="exchangeNode exchangeNodeLeft">
            <span>✦</span>
          </span>

          <span className="exchangeNode exchangeNodeRight">
            <span>✦</span>
          </span>
        </div>
      </div>

      <section className="comingSoonCard">
        <div className="comingSoonLogoWrap">
          <LogoMark size="large" />
        </div>

        <div className="comingSoonContent">
          <h1>
            Muy
            <span> pronto.</span>
          </h1>

          <p>Una nueva experiencia está cerca.</p>

          <div className="launchCountdown">
            <span className="countdownIntro">Lanzamiento en</span>

            <div className="countdownGrid">
              <CountdownItem value={timeLeft.days} label="días" />
              <CountdownItem value={timeLeft.hours} label="horas" />
              <CountdownItem value={timeLeft.minutes} label="min" />
              <CountdownItem value={timeLeft.seconds} label="seg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
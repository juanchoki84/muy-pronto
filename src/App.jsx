import "./App.css";

function LogoMark({ size = "large" }) {
  return (
    <span className={`logoMark ${size === "large" ? "logoMarkLarge" : ""}`}>
      <span className="logoGlow" />
      <span className="logoArrow leftArrow">→</span>
      <span className="logoArrow rightArrow">←</span>
      <span className="logoDot logoDotOne" />
      <span className="logoDot logoDotTwo" />
    </span>
  );
}

export default function App() {
  return (
    <main className="comingSoonPage">
      <section className="comingSoonCard">
        <LogoMark size="large" />

        <div>
          <h1>Muy pronto.</h1>
          <p>
            Una nueva experiencia esta cerca.
          </p>
        </div>
      </section>
    </main>
  );
}
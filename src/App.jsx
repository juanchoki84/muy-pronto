import "./App.css";

function LogoMark({ size = "large", muted = false }) {
  return (
    <span
      className={[
        "logoMark",
        size === "large" ? "logoMarkLarge" : "",
        muted ? "logoMarkMuted" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <img src="/logo-telocambio.png" alt="TeLoCambio" />
    </span>
  );
}

export default function App() {
  return (
    <main className="comingSoonPage">
      <div className="comingSoonBackground" aria-hidden="true">
        <span className="bgLogo bgLogoOne">
          <LogoMark size="large" muted />
        </span>

        <span className="bgLogo bgLogoTwo">
          <LogoMark size="large" muted />
        </span>

        <span className="bgLogo bgLogoThree">
          <LogoMark size="large" muted />
        </span>

        <span className="decorLine decorLineOne" />
        <span className="decorLine decorLineTwo" />
        <span className="decorLine decorLineThree" />

        <span className="decorArrow decorArrowOne">↗</span>
        <span className="decorArrow decorArrowTwo">↔</span>
        <span className="decorArrow decorArrowThree">→</span>
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
        </div>
      </section>
    </main>
  );
}
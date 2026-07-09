function LogoMark({ size = "normal", muted = false }) {
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

export default LogoMark;
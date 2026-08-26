export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Challenge JOVI 2026 · Grupo Tróia</p>

        <h1 id="hero-title">
          A câmera que entende <em>o seu momento.</em>
        </h1>

        <p className="hero-description">
          JOVI Scene reconhece o contexto e oferece apenas o que importa
          para estudantes registrarem, aprenderem e se expressarem.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#solucao">
            Conhecer a solução ↗
          </a>

          <a className="secondary-button" href="#laboratorio">
            Abrir demonstração
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Demonstração da câmera JOVI">
        <span>SCENE AI</span>
        <strong>Modo Estudo</strong>
        <small>Contexto detectado</small>
      </div>
    </section>
  );
}
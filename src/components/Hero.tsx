import { useCounter } from '../hooks'

// Mini card that floats on hero visual
function HeroCard() {
  const revenue = useCounter(84750, 2000, 'R$ ')
  const orders = useCounter(312, 1600)
  const clients = useCounter(128, 1400)

  const heights = [38, 62, 48, 82, 58, 90, 70]

  return (
    <div className="hero-visual">
      <div className="hero-card-main">
        {/* Topbar */}
        <div className="hcard-topbar">
          <div className="hcard-dots">
            <div className="hcard-dot dot-r" />
            <div className="hcard-dot dot-y" />
            <div className="hcard-dot dot-g" />
          </div>
          <span className="hcard-label">czz ERP — Dashboard</span>
        </div>

        {/* KPIs */}
        <div className="hcard-kpis">
          <div className="hcard-kpi" ref={revenue.ref}>
            <div className="hcard-kpi-val">{revenue.display}</div>
            <div className="hcard-kpi-lbl">Faturamento</div>
          </div>
          <div className="hcard-kpi" ref={orders.ref}>
            <div className="hcard-kpi-val">{orders.display}</div>
            <div className="hcard-kpi-lbl">Pedidos</div>
          </div>
          <div className="hcard-kpi" ref={clients.ref}>
            <div className="hcard-kpi-val">{clients.display}</div>
            <div className="hcard-kpi-lbl">Clientes</div>
          </div>
        </div>

        {/* Chart */}
        <div className="hcard-chart" aria-label="Gráfico de vendas">
          {heights.map((h, i) => (
            <div
              key={i}
              className="chart-bar-light"
              style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }}
            />
          ))}
        </div>

        {/* Rows */}
        <div className="hcard-rows">
          <div className="hcard-row">
            <div className="hcard-row-left">
              <span className="hcard-row-icon">📦</span> Estoque
            </div>
            <div className="hcard-row-right">842 itens</div>
          </div>
          <div className="hcard-row">
            <div className="hcard-row-left">
              <span className="hcard-row-icon">✅</span> Status
            </div>
            <div className="hcard-row-right status-ok">Operando</div>
          </div>
        </div>
      </div>

      {/* Floating mini card */}
      <div className="hero-mini-card" aria-hidden="true">
        <div className="mini-card-icon">📈</div>
        <div>
          <div className="mini-card-label">Crescimento mensal</div>
          <div className="mini-card-val">+24% este mês</div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Apresentação">
      {/* Blobs & grid */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          {/* Left: text */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="pulse" />
              Soluções em TI sob medida
            </div>

            <h1 className="hero-title">
              Sistemas que{' '}
              <span className="gradient-text">impulsionam</span>
              {' '}o seu negócio
            </h1>

            <p className="hero-subtitle">
              Da landing page ao ERP completo — desenvolvemos software profissional,
              escalável e adaptado exatamente à sua realidade.
            </p>

            <div className="hero-actions">
              <a href="#contato" className="btn-primary" id="hero-btn-cta">
                <span>🚀</span> Quero meu projeto
              </a>
              <a href="#servicos" className="btn-outline" id="hero-btn-services">
                Ver serviços
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Sob medida</div>
              </div>
              <div>
                <div className="stat-number">+10</div>
                <div className="stat-label">Tipos de sistemas</div>
              </div>
              <div>
                <div className="stat-number">Full</div>
                <div className="stat-label">Stack moderno</div>
              </div>
            </div>
          </div>

          {/* Right: mockup visual */}
          <HeroCard />
        </div>
      </div>
    </section>
  )
}

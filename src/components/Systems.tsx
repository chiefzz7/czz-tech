import { useReveal } from '../hooks'
import { useCounter } from '../hooks'

const systemsList = [
  { icon: '📦', name: 'ERP — Gestão Empresarial', desc: 'Estoque, compras, vendas, financeiro e RH em um só sistema' },
  { icon: '🛒', name: 'PDV — Ponto de Venda', desc: 'Sistema de caixa rápido com emissão de NF e controle de caixa' },
  { icon: '📊', name: 'Dashboards & BI', desc: 'Métricas em tempo real para decisões mais inteligentes' },
  { icon: '👥', name: 'CRM & Gestão de Clientes', desc: 'Pipeline de vendas, histórico e automações de follow-up' },
  { icon: '🔗', name: 'Integrações via API', desc: 'WhatsApp, gateways de pagamento, sistemas externos e mais' },
]

const barHeights = [40, 60, 50, 80, 55, 90, 72]

function SystemsMockup() {
  const revenue = useCounter(84750, 2000, 'R$ ')
  const orders = useCounter(312, 1600)
  const clients = useCounter(128, 1400)

  return (
    <div className="sys-mockup">
      <div className="mockup-bar">
        <div className="m-dot dot-r" />
        <div className="m-dot dot-y" />
        <div className="m-dot dot-g" />
        <span className="m-title">czz ERP — Dashboard Principal</span>
      </div>
      <div className="mockup-body">
        <div className="m-kpis">
          <div className="m-kpi" ref={revenue.ref}>
            <div className="m-kpi-val">{revenue.display}</div>
            <div className="m-kpi-lbl">Faturamento</div>
          </div>
          <div className="m-kpi" ref={orders.ref}>
            <div className="m-kpi-val">{orders.display}</div>
            <div className="m-kpi-lbl">Pedidos</div>
          </div>
          <div className="m-kpi" ref={clients.ref}>
            <div className="m-kpi-val">{clients.display}</div>
            <div className="m-kpi-lbl">Clientes</div>
          </div>
        </div>

        <div className="m-chart" aria-label="Gráfico de vendas">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className="m-bar"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        <div className="m-rows">
          <div className="m-row">
            <div className="m-row-left"><span>📦</span> Estoque</div>
            <div className="m-row-right">842 itens</div>
          </div>
          <div className="m-row">
            <div className="m-row-left"><span>✅</span> Status</div>
            <div className="m-row-right ok">Operando</div>
          </div>
          <div className="m-row">
            <div className="m-row-left"><span>💳</span> Caixa</div>
            <div className="m-row-right">Aberto</div>
          </div>
          <div className="m-row">
            <div className="m-row-left"><span>📈</span> Crescimento</div>
            <div className="m-row-right up">+24%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Systems() {
  const textRef = useReveal()
  const visualRef = useReveal()

  return (
    <section id="sistemas" className="systems" aria-label="Sistemas internos">
      <div className="container">
        <div className="systems-wrapper">
          {/* Text */}
          <div className="reveal" ref={textRef}>
            <div className="section-tag">Especialidade principal</div>
            <h2>
              Sistemas que <span className="gradient-text">realmente funcionam</span> para o seu negócio
            </h2>
            <p>
              Chega de planilhas e processos manuais. Desenvolvemos sistemas sob medida
              que se adaptam à sua operação — não o contrário.
              Controle total, em tempo real, de qualquer lugar.
            </p>

            <div className="sys-list">
              {systemsList.map((item, i) => (
                <div key={i} className="sys-item">
                  <div className="sys-icon">{item.icon}</div>
                  <div>
                    <div className="sys-name">{item.name}</div>
                    <div className="sys-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="reveal delay-2" ref={visualRef}>
            <SystemsMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

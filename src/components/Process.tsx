import { useReveal } from '../hooks'

const steps = [
  {
    num: '01',
    title: 'Briefing',
    desc: 'Entendemos sua necessidade, mapeamos os requisitos e definimos o escopo sem enrolação.',
  },
  {
    num: '02',
    title: 'Design & Arquitetura',
    desc: 'Planejamos a estrutura técnica, criamos os fluxos e validamos com você antes de codar.',
  },
  {
    num: '03',
    title: 'Desenvolvimento',
    desc: 'Desenvolvemos com entregas frequentes. Você acompanha o progresso em tempo real.',
  },
  {
    num: '04',
    title: 'Entrega & Suporte',
    desc: 'Deploy em produção, treinamento e suporte pós-entrega. O projeto é seu para sempre.',
  },
]

// Individual step as its own component so it can use hooks
function Step({ num, title, desc, delay }: { num: string; title: string; desc: string; delay?: number }) {
  const ref = useReveal()
  return (
    <div
      id={`step-${num}`}
      className={`process-step reveal${delay ? ` delay-${delay}` : ''}`}
      ref={ref}
    >
      <div className="step-num">{num}</div>
      <h3 className="step-title">{title}</h3>
      <p className="step-desc">{desc}</p>
    </div>
  )
}

export default function Process() {
  const headerRef = useReveal()

  return (
    <section id="processo" className="process" aria-label="Como trabalhamos">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <div className="section-tag">Como funciona</div>
          <h2 className="section-title">
            Do briefing à <span className="gradient-text">entrega em produção</span>
          </h2>
          <p className="section-desc">
            Processo claro, comunicação direta e entregas dentro do prazo.
            Sem surpresas, sem burocracia.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <Step key={step.num} {...step} delay={i > 0 ? i : undefined} />
          ))}
        </div>
      </div>
    </section>
  )
}

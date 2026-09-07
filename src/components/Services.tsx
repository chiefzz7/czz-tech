import { useReveal } from '../hooks'

interface ServiceCardProps {
  id: string
  icon: string
  iconClass: string
  title: string
  description: string
  tags: string[]
  featured?: boolean
  delay?: number
}

function ServiceCard({ id, icon, iconClass, title, description, tags, featured, delay }: ServiceCardProps) {
  const ref = useReveal()
  return (
    <div
      id={id}
      ref={ref}
      className={`svc-card reveal${featured ? ' featured' : ''}${delay ? ` delay-${delay}` : ''}`}
    >
      <div className={`svc-icon ${iconClass}`}>{icon}</div>
      <h3 className="svc-title">{title}</h3>
      <p className="svc-desc">{description}</p>
      <div className="svc-tags">
        {tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicos" className="services" aria-label="Serviços">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">O que desenvolvemos</div>
          <h2 className="section-title">
            Soluções completas em <span className="gradient-text">software</span>
          </h2>
          <p className="section-desc">
            Do mais simples ao mais robusto, cada projeto é construído com atenção
            aos detalhes, performance e experiência do usuário.
          </p>
        </div>

        {/* Destaques: Sistemas Internos + Landing Pages */}
        <div className="services-hero-row">
          <ServiceCard
            id="svc-sistemas"
            icon="🖥️"
            iconClass="icon-blue"
            title="Sistemas Internos"
            description="Automatize processos, controle estoque, vendas, financeiro e muito mais. ERPs completos, PDVs modernos e dashboards administrativos totalmente personalizados para o seu negócio — sem limitações de plataformas genéricas."
            tags={['ERP', 'PDV', 'Dashboard', 'Estoque', 'Financeiro', 'CRM']}
            featured
          />
          <ServiceCard
            id="svc-landpage"
            icon="🌐"
            iconClass="icon-blue"
            title="Landing Pages & Sites"
            description="Sites modernos, rápidos e focados em conversão. Landing pages que vendem, sites institucionais que transmitem credibilidade e portfólios que se destacam — todos com design profissional e SEO integrado."
            tags={['Landing Page', 'Site Institucional', 'Portfólio', 'SEO', 'Alta conversão']}
            featured
            delay={1}
          />
        </div>

        {/* Demais serviços */}
        <div className="services-grid">
          <ServiceCard
            id="svc-saas"
            icon="☁️"
            iconClass="icon-green"
            title="SaaS"
            description="Transforme sua ideia em um produto digital escalável com planos de assinatura, multi-tenancy, billing e painel administrativo."
            tags={['Multi-tenant', 'Assinaturas', 'Billing', 'API']}
          />
          <ServiceCard
            id="svc-automacao"
            icon="⚡"
            iconClass="icon-orange"
            title="Automações & Integrações"
            description="Conecte sistemas, automatize tarefas repetitivas e integre APIs. Economize horas de trabalho manual com fluxos inteligentes."
            tags={['Webhooks', 'REST API', 'Automação', 'Bots']}
            delay={1}
          />
          <ServiceCard
            id="svc-mobile"
            icon="📱"
            iconClass="icon-purple"
            title="Apps Mobile"
            description="Aplicativos para iOS e Android com React Native. Apps de vendas, delivery e controle interno com uma única base de código."
            tags={['iOS', 'Android', 'React Native']}
            delay={2}
          />
        </div>
      </div>
    </section>
  )
}

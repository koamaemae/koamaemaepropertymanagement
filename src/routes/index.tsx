import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: KoaMaemaeHome,
})

function Nav() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem 4rem',
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, transparent 100%)',
      }}
    >
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 300, letterSpacing: '0.12em', color: 'var(--color-cream)' }}>
        KOA MA<span style={{ fontSize: '0.85em' }}>ʻ</span>EMA<span style={{ fontSize: '0.85em' }}>ʻ</span>E
      </div>
      <a
        href="#consultation"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.65rem',
          fontWeight: 400,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--color-gold)',
          textDecoration: 'none',
          borderBottom: '1px solid var(--color-gold)',
          paddingBottom: '2px',
        }}
      >
        Request Consultation
      </a>
    </nav>
  )
}

function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 4rem 8rem',
        position: 'relative',
        background: 'linear-gradient(135deg, var(--color-emerald) 0%, var(--color-black) 60%)',
        overflow: 'hidden',
      }}
    >
      {/* Architectural overlay lines */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0, bottom: 0,
        width: '40%',
        background: 'linear-gradient(to left, rgba(201,169,110,0.04) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '12%',
        width: '1px',
        height: '40%',
        background: 'linear-gradient(to bottom, transparent, var(--color-gold), transparent)',
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: '720px', position: 'relative' }}>
        <span className="section-label" style={{ display: 'block', marginBottom: '2.5rem' }}>
          Private Estate Stewardship
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
          fontWeight: 300,
          color: 'var(--color-cream)',
          marginBottom: '2.5rem',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
        }}>
          Estate continuity,<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>without interruption.</em>
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.95rem',
          fontWeight: 300,
          color: 'var(--color-warm)',
          maxWidth: '480px',
          lineHeight: 1.85,
          letterSpacing: '0.03em',
          marginBottom: '4rem',
        }}>
          Discreet stewardship and concierge property care for high-value private residences.
          We maintain the integrity of your estate — precisely, quietly, and without exception.
        </p>
        <a
          href="#consultation"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-black)',
            backgroundColor: 'var(--color-gold)',
            textDecoration: 'none',
            padding: '1.1rem 2.8rem',
          }}
        >
          Request Private Consultation
        </a>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '3rem',
        right: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        opacity: 0.4,
      }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', writingMode: 'vertical-rl', color: 'var(--color-warm)' }}>Scroll</span>
        <div style={{ width: '1px', height: '60px', background: 'var(--color-warm)' }} />
      </div>
    </section>
  )
}

function SectionDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '0 4rem', marginBottom: '0' }}>
      <div style={{ flex: 1, height: '1px', background: 'var(--color-muted)' }} />
      <div style={{ width: '4px', height: '4px', background: 'var(--color-gold)', borderRadius: '50%', margin: '0 1.5rem', flexShrink: 0 }} />
      <div style={{ flex: 1, height: '1px', background: 'var(--color-muted)' }} />
    </div>
  )
}

interface ServiceSectionProps {
  id?: string
  number: string
  label: string
  title: string
  body: string
  reverse?: boolean
  services: string[]
  accent?: string
}

function ServiceSection({ id, number, label, title, body, reverse = false, services, accent }: ServiceSectionProps) {
  return (
    <section
      id={id}
      style={{
        padding: '10rem 4rem',
        display: 'flex',
        flexDirection: reverse ? 'row-reverse' : 'row',
        gap: '6rem',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {/* Image placeholder */}
      <div style={{
        flex: '0 0 45%',
        aspectRatio: '3/4',
        background: accent || 'linear-gradient(135deg, var(--color-emerald) 0%, var(--color-charcoal) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '2rem',
          right: '2rem',
          height: '1px',
          background: 'var(--color-gold)',
          opacity: 0.4,
        }} />
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.75rem', color: 'var(--color-gold)', opacity: 0.6 }}>{number}</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--color-muted)' }} />
        </div>
        <span className="section-label" style={{ display: 'block', marginBottom: '1.5rem' }}>{label}</span>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
          fontWeight: 300,
          color: 'var(--color-cream)',
          marginBottom: '2rem',
          lineHeight: 1.1,
        }}>{title}</h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9rem',
          fontWeight: 300,
          color: 'var(--color-stone)',
          lineHeight: 1.9,
          letterSpacing: '0.03em',
          marginBottom: '3rem',
          maxWidth: '440px',
        }}>{body}</p>

        <div style={{ borderTop: '1px solid var(--color-muted)', paddingTop: '2rem' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.85rem 0',
              borderBottom: '1px solid rgba(46,46,46,0.5)',
            }}>
              <div style={{ width: '20px', height: '1px', background: 'var(--color-gold)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 300, letterSpacing: '0.08em', color: 'var(--color-warm)' }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ConsultationSection() {
  return (
    <section
      id="consultation"
      style={{
        padding: '12rem 4rem',
        background: 'linear-gradient(135deg, var(--color-emerald) 0%, var(--color-charcoal) 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background geometric */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        border: '1px solid rgba(201,169,110,0.08)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px',
        height: '900px',
        border: '1px solid rgba(201,169,110,0.04)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: '640px', margin: '0 auto' }}>
        <span className="gold-rule" style={{ margin: '0 auto 2.5rem' }} />
        <span className="section-label" style={{ display: 'block', marginBottom: '2rem' }}>04 — Private Consultation</span>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
          fontWeight: 300,
          color: 'var(--color-cream)',
          marginBottom: '2rem',
          lineHeight: 1.1,
        }}>
          Discreet by nature.<br />
          <em style={{ fontStyle: 'italic', color: 'var(--color-gold-light)' }}>Exceptional by standard.</em>
        </h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.9rem',
          fontWeight: 300,
          color: 'var(--color-warm)',
          lineHeight: 1.9,
          letterSpacing: '0.03em',
          marginBottom: '4rem',
        }}>
          Every engagement begins with a private consultation.
          We learn your property, your standards, and your expectations —
          and we build a stewardship program to match.
        </p>
        <a
          href="mailto:inquire@koamaemae.com"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.65rem',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-black)',
            backgroundColor: 'var(--color-gold)',
            textDecoration: 'none',
            padding: '1.2rem 3.2rem',
          }}
        >
          Request Private Consultation
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{
      padding: '4rem',
      borderTop: '1px solid var(--color-muted)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 300, letterSpacing: '0.1em', color: 'var(--color-warm)' }}>
        KOA MAʻEMAʻE
      </div>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 300, letterSpacing: '0.12em', color: 'var(--color-stone)', textTransform: 'uppercase' }}>
        Private Estate Stewardship &amp; Concierge Property Care
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 300, letterSpacing: '0.08em', color: 'var(--color-muted)' }}>
        © {new Date().getFullYear()} KOA MAʻEMAʻE. All rights reserved.
      </p>
    </footer>
  )
}

function KoaMaemaeHome() {
  return (
    <div style={{ background: 'var(--color-black)', minHeight: '100vh' }}>
      <Nav />
      <Hero />

      <SectionDivider />

      <ServiceSection
        id="stewardship"
        number="01"
        label="Stewardship"
        title="The art of maintained presence"
        body="We provide comprehensive, ongoing stewardship for luxury private residences — ensuring your property is maintained to the highest standard at all times, whether you are in residence or away."
        services={[
          'Estate Essentials',
          'Executive Stewardship',
          'Private Estate Command',
        ]}
        accent="linear-gradient(160deg, var(--color-emerald) 0%, #0d1f18 100%)"
      />

      <SectionDivider />

      <ServiceSection
        id="concierge"
        number="02"
        label="Concierge"
        title="Anticipatory care, at every level"
        body="Beyond maintenance, we orchestrate every aspect of your estate's life — from vendor coordination and seasonal preparation to pre-arrival readiness and beyond."
        services={[
          'Pre-arrival preparation',
          'Vendor & contractor coordination',
          'Seasonal property transitions',
          'On-call estate management',
        ]}
        reverse
        accent="linear-gradient(160deg, #1c1812 0%, var(--color-charcoal) 100%)"
      />

      <SectionDivider />

      <ServiceSection
        id="security"
        number="03"
        label="Security & Discretion"
        title="Trusted with what matters most"
        body="Every member of our team operates under strict confidentiality. We protect not only your property, but your privacy — serving with the same discretion expected at the highest levels."
        services={[
          'Confidentiality protocols',
          'Trusted access management',
          'Incident response & reporting',
          'Vetted & bonded staff',
        ]}
        accent="linear-gradient(160deg, #0a0f0d 0%, var(--color-emerald-mid) 100%)"
      />

      <ConsultationSection />
      <Footer />
    </div>
  )
}

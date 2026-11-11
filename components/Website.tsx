'use client';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowDown, ArrowUp, ArrowRight, Menu, X, Plus, Minus, MoveUpRight, CircleDot, Check, Globe2, ChevronLeft, ChevronRight, ExternalLink, MousePointer2, Code2, ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getContent, Locale } from '@/lib/content';
import { contactEmail } from '@/lib/site';

type Copy = ReturnType<typeof getContent>;

const projects: { name: string; url?: string; number: string; slides: string[] }[] = [
  {
    name: '147PACIFIC', url: 'https://147pacific.com/en', number: '01', slides: [
      '/projects/147pacific/147pacific-main-1.webp', '/projects/147pacific/147pacific-main-2.webp', '/projects/147pacific/147pacific-shooping.webp']
  },
  {
    name: 'HECOSVC', url: 'https://hecosvc.com/en', number: '02', slides: [
      '/projects/hecosvc/hecosvc-main-1.webp', '/projects/hecosvc/hecosvc-main-2.webp', '/projects/hecosvc/hecosvc-services.webp']
  },
  {
    name: 'PROGRESSIVE AUTO SPORTS', url: 'https://storefront-production-5594.up.railway.app/', number: '03', slides: [
      '/projects/progressive/progressive-auto-sports-main-1.webp', '/projects/progressive/progressive-auto-sports-gallery.webp', '/projects/progressive/progressive-auto-sports-wheels-shop.webp']
  },
  {
    name: 'Lero Booking', number: '04', url: 'https://lero-booking.vercel.app/', slides: [
      '/projects/lero-booking/lero-booking-main.webp', '/projects/lero-booking/lero-booking-client.webp', '/projects/lero-booking/lero-booking-faq.webp']
  },
  {
    name: 'City2City', url: 'https://city2city.ru/', number: '05', slides: [
      '/projects/city2city/city2city-main.webp', '/projects/city2city/city2city-steps.webp', '/projects/city2city/city2city-contact.webp']
  },
  {
    name: 'W3League', url: 'https://w3league.net/ru', number: '06', slides: [
      '/projects/w3league/w3league-ranking.webp', '/projects/w3league/w3league-profile.webp']
  }
];

function LanguageSwitch({ locale }: { locale: Locale }) {
  const [hash, setHash] = useState('');
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);
  return (
    <>
      <Link href={`/ru${hash}`} hrefLang="ru" aria-current={locale === 'ru' ? 'page' : undefined}>RU</Link>
      <span>/</span>
      <Link href={`/en${hash}`} hrefLang="en" aria-current={locale === 'en' ? 'page' : undefined}>EN</Link>
    </>
  );
}

function HeroCollage({ t }: { t: Copy }) {
  const reduce = useReducedMotion();
  return <div className="hero-collage" aria-label={t.collageAria}>
    <div className="hero-glow" aria-hidden="true" />
    <motion.div className="hero-shot hero-shot-first" initial={reduce ? false : { opacity: 0, y: 45, rotate: -10 }} animate={{ opacity: 1, y: 0, rotate: -9 }} transition={{ duration: .85, delay: .3 }}><div className="shot-bar"><i /><i /><i /><span>147PACIFIC</span></div><Image src={projects[0].slides[0]} alt={t.heroAlts[0]} fill sizes="(max-width: 760px) 70vw, 32vw" priority /></motion.div>
    <motion.div className="hero-shot hero-shot-second" initial={reduce ? false : { opacity: 0, y: 55, rotate: 9 }} animate={{ opacity: 1, y: 0, rotate: 8 }} transition={{ duration: .85, delay: .45 }}><div className="shot-bar"><i /><i /><i /><span>HECOSVC</span></div><Image src={projects[1].slides[0]} alt={t.heroAlts[1]} fill sizes="(max-width: 760px) 70vw, 32vw" priority /></motion.div>
    <motion.div className="hero-shot hero-shot-third" initial={reduce ? false : { opacity: 0, y: 65, rotate: -3 }} animate={{ opacity: 1, y: 0, rotate: -3 }} transition={{ duration: .9, delay: .6 }}><div className="shot-bar"><i /><i /><i /><span>PROGRESSIVE AUTO SPORTS</span></div><Image src={projects[2].slides[0]} alt={t.heroAlts[2]} fill sizes="(max-width: 760px) 76vw, 36vw" priority /></motion.div>
    <span className="collage-label">{t.collageLabel} <ArrowUpRight size={15} /></span>
  </div>;
}

function ProjectGallery({ project, t }: { project: typeof projects[number], t: Copy }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduce = useReducedMotion();
  const go = (step: number) => { setDirection(step); setIndex(v => (v + step + project.slides.length) % project.slides.length); };
  return <div className="case-gallery" role="region" aria-roledescription="carousel" aria-label={`${project.name} ${t.galleryLabel}`}>
    <div className="case-window-bar"><span className="window-dots"><i /><i /><i /></span><span>{project.name}</span><span>{String(index + 1).padStart(2, '0')} / {String(project.slides.length).padStart(2, '0')}</span></div>
    <div className="case-image-wrap"><AnimatePresence initial={false} custom={direction} mode="wait"><motion.div key={project.slides[index]} className="case-slide" initial={reduce ? false : { opacity: 0, x: direction * 35 }} animate={{ opacity: 1, x: 0 }} exit={reduce ? { opacity: 0 } : { opacity: 0, x: direction * -35 }} transition={{ duration: .3, ease: 'easeInOut' }}><Image src={project.slides[index]} alt={`${project.name} — ${t.screenshotAlt} ${index + 1}`} fill sizes="(max-width:760px) 95vw, 33vw" style={{ objectFit: 'contain', objectPosition: 'top center' }} /></motion.div></AnimatePresence><div className="gallery-overlay"><div className="gallery-dots">{project.slides.map((_, i) => <button key={i} aria-label={`${t.showImage} ${i + 1}`} aria-current={i === index ? 'true' : undefined} onClick={() => { setDirection(i >= index ? 1 : -1); setIndex(i); }} />)}</div><div className="gallery-arrows"><button onClick={() => go(-1)} aria-label={t.prevImage}><ChevronLeft size={18} /></button><button onClick={() => go(1)} aria-label={t.nextImage}><ChevronRight size={18} /></button></div></div></div>
  </div>;
}

function ContactMotion({ t }: { t: Copy }) {
  const reduce = useReducedMotion();
  return <div className="contact-motion" aria-label={t.contactMotionAria}>
    <div className="contact-motion-grid" />
    <motion.div className="contact-path" animate={reduce ? {} : { rotate: [-4, 4, -4] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
    <motion.div className="contact-device" animate={reduce ? {} : { y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><div className="device-top"><i /><i /><i /><span>{t.deviceChrome}</span></div><div className="device-content"><span className="device-tag">01 / {t.deviceIdea}</span><strong>{t.deviceHeadline}</strong><div className="device-line" /><div className="device-line short" /><div className="device-cta">{t.deviceCta} <ArrowUpRight size={15} /></div></div></motion.div>
    <motion.div className="floating-chip floating-chip-one" animate={reduce ? {} : { y: [0, 9, 0], rotate: [-5, -1, -5] }} transition={{ duration: 4.2, repeat: Infinity }}><Code2 size={17} />{t.chipDesign}</motion.div>
    <motion.div className="floating-chip floating-chip-two" animate={reduce ? {} : { y: [0, -8, 0], rotate: [5, 1, 5] }} transition={{ duration: 4.8, repeat: Infinity }}><ShoppingBag size={17} />{t.chipCommerce}</motion.div>
    <motion.div className="floating-cursor" animate={reduce ? {} : { x: [0, 35, 5, 0], y: [0, -30, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}><MousePointer2 size={28} fill="currentColor" /></motion.div>
  </div>;
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ duration: .75, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}

function Wheel({ small = false }: { small?: boolean }) { return <svg className={small ? 'wheel-svg small' : 'wheel-svg'} viewBox="0 0 300 300" fill="none" aria-hidden="true"><circle cx="150" cy="150" r="139" stroke="#a6aa9f" strokeWidth="8" /><circle cx="150" cy="150" r="124" fill="#111514" stroke="#454d47" strokeWidth="7" /><circle cx="150" cy="150" r="107" stroke="#919b8d" strokeWidth="3" />{Array.from({ length: 10 }, (_, i) => <g key={i} transform={`rotate(${i * 36} 150 150)`}><path d="M141 133 L130 53 L147 45 L156 131Z" fill="#788078" stroke="#1d2420" strokeWidth="2" /><path d="M160 134 L174 56 L185 64 L169 140Z" fill="#b5bcb0" stroke="#232c25" strokeWidth="2" /></g>)}<circle cx="150" cy="150" r="33" fill="#252b26" stroke="#a4aba0" strokeWidth="5" /><circle cx="150" cy="150" r="12" fill="#b4c879" />{Array.from({ length: 5 }, (_, i) => <circle key={i} cx={150 + 23 * Math.cos(i * Math.PI * 2 / 5)} cy={150 + 23 * Math.sin(i * Math.PI * 2 / 5)} r="3.8" fill="#c5c9c0" />)}</svg>; }

function Preview({ type }: { type: string }) { return <div className={`preview preview-${type}`} aria-label={`${type} project conceptual visual`}><div className="browser-top"><span /><span /><span /><i>brim / selected project</i></div>{type === 'wheel' ? <><div className="preview-meta">PROGRESSIVE <b>AUTO SPORTS</b><span>WHEELS / PERFORMANCE</span></div><Wheel /><div className="preview-bottom">FIND YOUR FIT <ArrowUpRight size={16} /></div></> : type === 'truck' ? <><div className="preview-meta">147<span>PACIFIC</span></div><div className="truck-illustration"><div className="truck-body" /><div className="truck-window" /><div className="truck-wheel left" /><div className="truck-wheel right" /></div><div className="preview-bottom">BUILT FOR THE ROAD <ArrowUpRight size={16} /></div></> : <><div className="preview-meta">HECO<span>SVC</span></div><div className="service-art"><div className="lift lift-a" /><div className="lift lift-b" /><div className="lift-top" /><div className="service-car" /><div className="service-car-window" /><div className="service-wheel l" /><div className="service-wheel r" /></div><div className="preview-bottom">EQUIPMENT THAT WORKS <ArrowUpRight size={16} /></div></>}</div>; }

function Header({ locale, t }: { locale: Locale, t: Copy }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner"><Link href={`/${locale}`} className="wordmark" aria-label={t.homeAria}>BRIM<span className="wordmark-icon">✳</span>SYSTEMS</Link><nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label={t.navAria}>{['work', 'expertise', 'process', 'about'].map((id, i) => <a key={id} onClick={() => setOpen(false)} href={`#${id}`}>{t.nav[i]}</a>)}<div className="language" aria-label={t.language}><Globe2 size={15} /><LanguageSwitch locale={locale} /></div><a className="header-cta" href="#contact">{t.navCta}<ArrowUpRight size={16} /></a></nav><button className="mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open}>{open ? <X /> : <Menu />}</button></div></header>;
}

function FAQ({ t }: { t: Copy }) {
  const [active, setActive] = useState<number | null>(0);
  return <section className="faq-section"><div className="container faq-grid"><Reveal><p className="eyebrow dark">{t.faqLabel}</p><h2>{t.faqTitle}</h2></Reveal><div className="faq-items">{t.faqs.map((f, i) => <Reveal key={i}><div className="faq-item"><button aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)}><span>{f.q}</span>{active === i ? <Minus size={19} /> : <Plus size={19} />}</button><AnimatePresence initial={false}>{active === i && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .35, ease: [.22, 1, .36, 1] }}><p>{f.a}</p></motion.div>}</AnimatePresence></div></Reveal>)}</div></div></section>;
}

export default function Website({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const [top, setTop] = useState(false);
  useEffect(() => { const fn = () => setTop(window.scrollY > 600); window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn); }, []);
  const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent(t.contactSubject)}&body=${encodeURIComponent(t.contactBody)}`;
  return <>
    <Header locale={locale} t={t} />
    <main>
      <div className="hero-screen"><section className="hero" id="home"><div className="hero-noise" /><div className="container hero-inner"><div className="hero-copy"><Reveal><p className="eyebrow hero-eyebrow"><span className="status-dot" />{t.eyebrow}</p></Reveal><Reveal delay={.08}><h1>{t.heroA}<br />{t.heroB}<br /><em>{t.heroC}</em></h1></Reveal><Reveal delay={.18}><p className="hero-desc">{t.heroDesc}</p><div className="hero-actions"><a href="#contact" className="button button-lime">{t.heroCta}<ArrowUpRight size={19} /></a><a href="#work" className="text-link">{t.heroSecondary}<ArrowRight size={18} /></a></div></Reveal></div><HeroCollage t={t} /><div className="hero-bottom"><a href="#work"><ArrowDown size={18} />{t.scroll}</a><span>{t.heroMetaA} <CircleDot size={10} /> {t.heroMetaB}</span></div></div></section>
        <div className="value-strip"><div className="container strip-inner">{t.strip.map((v, i) => <span key={i}><Check size={16} />{v}</span>)}</div></div></div>
      <section className="section work-section" id="work"><div className="container"><Reveal><div className="section-heading"><div><p className="eyebrow dark">{t.workLabel}</p><h2>{t.workTitle}<br /><em>{t.workAccent}</em></h2></div><p className="section-intro">{t.workDesc}</p></div></Reveal><div className="projects-grid">{projects.map((p, i) => <Reveal className={`project project-${i}`} key={p.name} delay={i * .08}><ProjectGallery project={p} t={t} /><div className="project-info"><div><span className="project-number">{p.number} / {t.caseTypes[i]}</span><h3>{p.name}</h3><p>{t.caseDescriptions[i]}</p>{p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="case-visit">{t.viewProject} <ExternalLink size={15} /></a>}</div>{p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="round-arrow" aria-label={`${t.viewProject}: ${p.name}`}><ArrowUpRight size={22} /></a>}</div></Reveal>)}</div><p className="case-disclaimer">{t.caseNote}</p></div></section>
      <section className="section expertise-section" id="expertise"><div className="container"><Reveal><div className="section-heading"><div><p className="eyebrow">{t.expertiseLabel}</p><h2>{t.expertiseTitle}<br /><em>{t.expertiseAccent}</em></h2></div><p className="section-intro">{t.expertiseDesc}</p></div></Reveal><div className="service-grid">{t.services.map((s, i) => <Reveal key={s.n} delay={i * .07}><article className="service-card"><div className="service-top"><span>{s.n} / 04</span><MoveUpRight size={22} /></div><h3>{s.title}</h3><p>{s.desc}</p><div className="service-tags">{s.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article></Reveal>)}</div></div></section>
      <section className="audience-section"><div className="container audience-inner"><Reveal><p className="eyebrow dark">{t.audienceLabel}</p><h2>{t.audienceTitle}<br /><em>{t.audienceAccent}</em></h2><p>{t.audienceDesc}</p></Reveal><Reveal className="audience-list">{t.audiences.map((a, i) => <div className="audience-item" key={a}><span>0{i + 1}</span><strong>{a}</strong><ArrowUpRight size={18} /></div>)}</Reveal></div></section>
      <section className="section process-section" id="process"><div className="container"><Reveal><p className="eyebrow dark">{t.processLabel}</p><h2>{t.processTitle}<br /><em>{t.processAccent}</em></h2></Reveal><div className="process-grid">{t.process.map((p, i) => <Reveal key={p.n} delay={i * .08}><div className="process-card"><div className="process-step"><span>{p.n}</span><div className="process-rule" /></div><h3>{p.title}</h3><p>{p.desc}</p></div></Reveal>)}</div></div></section>
      <section className="about-section" id="about"><div className="container about-inner"><Reveal><p className="eyebrow">{t.aboutLabel}</p><h2>{t.aboutTitle}<br /><em>{t.aboutAccent}</em></h2></Reveal><Reveal><div className="about-right"><span className="about-symbol">✳</span><p>{t.aboutDesc}</p><a href="#contact" className="text-link light">{t.navCta}<ArrowUpRight size={19} /></a></div></Reveal></div></section>
      <FAQ t={t} />
      <section className="contact-section" id="contact"><div className="container contact-inner"><Reveal><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactTitle}<br /><em>{t.contactAccent}</em></h2><p>{t.contactDesc}</p><a href={emailHref} className="button button-lime">{t.contactButton}<ArrowUpRight size={19} /></a></Reveal><ContactMotion t={t} /></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-top"><div className="footer-primary"><p className="footer-kicker">{t.footerKicker}</p><Link className="footer-wordmark" href={`/${locale}`}>BRIM<span>✳</span>SYSTEMS</Link><p>{t.footerText}</p></div><div className="footer-side"><span>{t.footerExplore}</span><a href="#work">{t.nav[0]} <ArrowUpRight size={15} /></a><a href="#expertise">{t.nav[1]} <ArrowUpRight size={15} /></a><a href="#process">{t.nav[2]} <ArrowUpRight size={15} /></a><a href="#about">{t.nav[3]} <ArrowUpRight size={15} /></a></div><div className="footer-side"><span>{t.footerHello}</span><a href={emailHref}>{contactEmail} <ArrowUpRight size={15} /></a><a href="#contact">{t.navCta} <ArrowUpRight size={15} /></a><div className="footer-langs" aria-label={t.language}><LanguageSwitch locale={locale} /></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} BRIMSYSTEMS. {t.rights}</span><span>{t.footerNote}</span><a href="#home">{t.backToTop} ↑</a></div></div></footer>
    {top && <motion.button initial={{ opacity: 0, scale: .7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="back-top" aria-label={t.backToTop} title={t.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp size={21} /></motion.button>}
  </>;
}

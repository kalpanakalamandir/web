import { HERO_STATS, HERO_CARDS } from "./siteData";
import styles from "./Hero.module.css";

function StatBox({ num, label }) {
  return (
    <div className={styles.statBox}>
      <div className={styles.statNum}>{num}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function HeroCard({ icon, title, desc, accent, first }) {
  return (
    <div
      className={`${styles.card} ${accent ? styles.accent : ""} ${first ? styles.first : ""}`}
    >
      <div className={styles.cardIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgText} aria-hidden="true">
        KKM
      </div>

      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.tag}>
          Est. 1989 · Jharkhand's Pioneer Ad Agency
        </div>
        <h1 className={styles.h1} data-aos="fade-right">
          We
          <br />
          Design.
          <br />
          <em>We Execute.</em>
        </h1>
        <p className={styles.sub}>
          Premium printing, signage & corporate branding solutions — serving the
          East Zone with excellence for over 35 years.
        </p>
        <div className={styles.btns}>
          <a href="#services" className={styles.btnPrimary}>
            Explore Services
          </a>
          <a href="#cta" className={styles.btnOutline}>
            Get a Quote
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.stats}>
          {HERO_STATS.map((s) => (
            <StatBox key={s.label} {...s} />
          ))}
        </div>
        {HERO_CARDS.map((card, i) => (
          <HeroCard key={card.title} {...card} first={i === 0} />
        ))}
      </div>
    </section>
  );
}

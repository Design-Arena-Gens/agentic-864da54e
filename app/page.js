"use client";

import { Disclosure } from "@headlessui/react";
import {
  ArrowRightIcon,
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CircleStackIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  SparklesIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#expertise", label: "Expertise" },
  { href: "#process", label: "Méthode" },
  { href: "#solutions", label: "Solutions" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
];

const highlights = [
  {
    icon: <SparklesIcon className="h-7 w-7 text-white" />,
    title: "Chatbots intelligents",
    description:
      "Des agents conversationnels alignés sur vos workflows, entraînés sur vos données et pilotés par l'IA générative.",
  },
  {
    icon: <Squares2X2Icon className="h-7 w-7 text-white" />,
    title: "Automatisations n8n",
    description:
      "Des scénarios sur-mesure qui orchestrent vos outils SaaS, notifications et pipelines de données 24/7.",
  },
  {
    icon: <BoltIcon className="h-7 w-7 text-white" />,
    title: "Livraison rapide",
    description:
      "Un cycle agile : cadrage express en 48h, MVP en 10 jours, itérations continues propulsées par la data.",
  },
];

const solutions = [
  {
    title: "Chatbot concierge",
    description:
      "Assistant IA premium pour accueillir, qualifier et convertir vos leads sans friction, intégré à votre CRM.",
    items: [
      "Qualification automatique",
      "Personnalisation en temps réel",
      "Escalade intelligente vers vos équipes",
    ],
  },
  {
    title: "Support augmenté",
    description:
      "Un agent qui comprend votre base de connaissances, résout 70% des tickets et collecte des insights clients.",
    items: [
      "Routage dynamique",
      "Score de satisfaction conversationnelle",
      "Synthèses vers Slack ou Teams",
    ],
  },
  {
    title: "Opérations automatisées",
    description:
      "Flux n8n orchestrés pour synchroniser vos données, déclencher des actions marketing et générer vos rapports.",
    items: [
      "Enrichissement de données",
      "Suivi KPI multi-sources",
      "Alertes et triggers basés sur l'IA",
    ],
  },
];

const steps = [
  {
    title: "Immersion éclair",
    description:
      "Cartographie de vos parcours clients et identification des micro-moments à automatiser.",
    stat: "48h",
    detail: "pour lancer la mission",
  },
  {
    title: "Prototype guidé",
    description:
      "Création d'un chatbot piloté par GPT et relié à vos sources via n8n, prêt à être testé par vos équipes.",
    stat: "10 j",
    detail: "pour livrer le MVP",
  },
  {
    title: "Optimisation continue",
    description:
      "Analyse des conversations, A/B testing sur le ton, entraînement continu et nouvelles automatisations.",
    stat: "+40%",
    detail: "de gains de productivité",
  },
];

const testimonials = [
  {
    quote:
      "Intelliwave a remplacé un process support de 5 personnes par un agent IA qui résout 75% des demandes en totale autonomie.",
    author: "Nadia Ferrel",
    role: "COO, WaveDesk",
  },
  {
    quote:
      "En 3 semaines, notre cycle de vente a gagné 12 jours grâce à la qualification automatisée et aux relances orchestrées par n8n.",
    author: "Thomas Girard",
    role: "Head of Growth, LinkFlow",
  },
];

const faqs = [
  {
    question: "Sur quelles données entraînez-vous les chatbots ?",
    answer:
      "Nous ingérons vos bases de connaissances, FAQ, CRM et historiques de conversations. Les données sont chiffrées au repos et nous définissons un périmètre d'entraînement précis pour garantir la conformité RGPD.",
  },
  {
    question: "Combien de temps pour un premier livrable ?",
    answer:
      "Après l'atelier d'immersion, nous livrons un MVP fonctionnel sous 10 jours ouvrés, incluant l'intégration n8n et la connexion à vos outils clés.",
  },
  {
    question: "Proposez-vous un accompagnement continu ?",
    answer:
      "Oui, nous assurons la maintenance proactive, l'entraînement continu du modèle et l'ajout d'automatisations mensuelles selon vos objectifs.",
  },
];

const techStack = [
  "OpenAI / Anthropic",
  "Pinecone",
  "Supabase",
  "Notion",
  "HubSpot",
  "Salesforce",
  "Slack",
  "Intercom",
  "Aircall",
  "Zapier",
  "Make",
  "Google Workspace",
];

export default function Home() {
  return (
    <>
      <header style={{ width: "min(1120px, 92vw)", margin: "0 auto", padding: "32px 0" }}>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "999px",
            padding: "12px 22px",
            backdropFilter: "blur(16px)",
            background: "rgba(15, 16, 48, 0.6)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                height: "44px",
                width: "44px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
                display: "grid",
                placeItems: "center",
                color: "#050614",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              IW
            </div>
            <strong style={{ fontSize: "18px", letterSpacing: "0.04em" }}>Intelliwave</strong>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "15px" }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={{ color: "var(--fg-muted)" }}>
                {link.label}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a className="btn-ghost" href="#contact">
              Parlons-en
            </a>
            <a className="btn-primary" href="#contact">
              Réserver un audit
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" style={{ paddingTop: "40px" }}>
          <div className="gradient-card" style={{ padding: "64px", position: "relative", overflow: "hidden" }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{ maxWidth: "640px" }}
            >
              <span className="chip">Agence IA & Automatisation</span>
              <h1>
                Libérez une nouvelle vague de productivité avec <span className="highlight">Intelliwave</span>
              </h1>
              <p>
                Nous construisons des chatbots sur-mesure dopés à l'IA et des scénarios n8n qui automatisent vos opérations, libèrent vos équipes et enchantent vos clients.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "38px" }}>
                <a className="btn-primary" href="#contact">
                  Découvrir nos offres
                </a>
                <a className="btn-ghost" href="#process">
                  Voir la méthode
                </a>
              </div>
              <div style={{ display: "flex", gap: "28px", marginTop: "48px" }}>
                <div className="stat-block">
                  <strong>+150</strong>
                  <span>workflows automatisés</span>
                </div>
                <div className="stat-block">
                  <strong>92%</strong>
                  <span>de satisfaction client</span>
                </div>
                <div className="stat-block">
                  <strong>3x</strong>
                  <span>ROI moyen en 6 mois</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{
                position: "absolute",
                right: "-120px",
                top: "-40px",
                height: "540px",
                width: "540px",
                background:
                  "radial-gradient(circle at center, rgba(108, 240, 194, 0.35) 0%, rgba(91, 141, 239, 0.15) 45%, transparent 70%)",
                filter: "blur(0px)",
              }}
            />
          </div>
        </section>

        <section id="expertise">
          <div className="section-header">
            <span>Notre signature</span>
            <h2>Des expériences conversationnelles qui génèrent des résultats tangibles</h2>
            <p>
              Chaque chatbot est piloté par des scénarios n8n conçus pour vos processus métier. Nous monitorons en continu les performances pour ajuster l'expérience et maximiser la valeur.
            </p>
          </div>
          <div className="grid-3">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div
                  style={{
                    height: "54px",
                    width: "54px",
                    borderRadius: "18px",
                    background: "rgba(91, 141, 239, 0.22)",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: "22px",
                    border: "1px solid rgba(91, 141, 239, 0.34)",
                  }}
                >
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="process">
          <div className="section-header">
            <span>Workflow Intelliwave</span>
            <h2>Un parcours maîtrisé du cadrage à la croissance autonome</h2>
            <p>
              Notre approche combine ateliers immersifs, design conversationnel et automatisations robustes pour livrer rapidement un agent fiable et évolutif.
            </p>
          </div>
          <div className="grid-3">
            {steps.map((step) => (
              <motion.div
                key={step.title}
                className="card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55 }}
              >
                <div className="chip" style={{ background: "rgba(108, 240, 194, 0.12)", color: "var(--accent)" }}>
                  {step.stat}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div style={{ marginTop: "18px", color: "var(--fg-muted)", fontSize: "14px" }}>{step.detail}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="solutions">
          <div className="section-header">
            <span>Solutions prêtes à l'emploi</span>
            <h2>Des offres modulaires qui s'adaptent à vos enjeux</h2>
            <p>
              Choisissez un pack clé en main ou une construction sur mesure. Nous alignons chaque scénario sur vos indicateurs business et nous mesurons l'impact semaine après semaine.
            </p>
          </div>
          <div className="grid-3">
            {solutions.map((solution) => (
              <div key={solution.title} className="card" style={{ position: "relative", overflow: "hidden" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: "0",
                    background: "radial-gradient(circle at top, rgba(91, 141, 239, 0.26), transparent 60%)",
                    opacity: 0.5,
                  }}
                />
                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "18px", color: "var(--fg-muted)" }}>
                    {solution.items.map((item) => (
                      <li key={item} style={{ listStyle: "disc" }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "var(--accent)",
                      fontWeight: 600,
                      marginTop: "8px",
                    }}
                  >
                    Réserver une démo <ArrowRightIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="temoignages">
          <div className="section-header">
            <span>Impact mesurable</span>
            <h2>Ils surfent déjà sur la vague Intelliwave</h2>
            <p>
              Notre obsession : créer des expériences qui transforment vos conversations en croissance durable.
            </p>
          </div>
          <div className="grid-2">
            {testimonials.map((item) => (
              <div key={item.author} className="gradient-card" style={{ padding: "36px" }}>
                <p style={{ fontSize: "20px", lineHeight: 1.6, color: "#fff", marginBottom: "24px" }}>
                  « {item.quote} »
                </p>
                <div style={{ color: "var(--fg-muted)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <strong style={{ color: "#fff", fontSize: "16px" }}>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="stack">
          <div className="gradient-card" style={{ display: "grid", gap: "32px" }}>
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span>Tech stack</span>
              <h2>Un socle robuste pour vos automations</h2>
              <p>
                Intelliwave assemble les meilleures briques technologiques pour des automatisations fiables et scalables. Nous sélectionnons l'IA la plus adaptée à votre cas d'usage et surveillons en continu la performance.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "16px",
              }}
            >
              {techStack.map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "14px",
                    padding: "16px 18px",
                    background: "rgba(255, 255, 255, 0.06)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    textAlign: "center",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="section-header">
            <span>Questions fréquentes</span>
            <h2>Tout ce que vous vouliez savoir sur Intelliwave</h2>
          </div>
          <div className="grid-2" style={{ gap: "18px" }}>
            {faqs.map((faq) => (
              <Disclosure key={faq.question}>
                {({ open }) => (
                  <div className="card" style={{ padding: "28px 28px" }}>
                    <Disclosure.Button
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "18px",
                        color: "#fff",
                        textAlign: "left",
                        fontSize: "18px",
                        fontWeight: 600,
                      }}
                    >
                      {faq.question}
                      <span style={{ fontSize: "24px", color: "var(--accent)" }}>{open ? "−" : "+"}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel style={{ marginTop: "16px", color: "var(--fg-muted)", lineHeight: 1.7 }}>
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="gradient-card" style={{ display: "grid", gap: "26px" }}>
            <div style={{ display: "grid", gap: "18px" }}>
              <span className="chip" style={{ width: "fit-content" }}>
                Parlez-nous de votre projet
              </span>
              <h2>Prêts à lancer votre assistant intelligent ?</h2>
              <p>
                Confiez-nous votre vision et bénéficiez d'un audit offert de vos opportunités d'automatisation. Nous revenons vers vous sous 24 heures.
              </p>
              <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", color: "var(--fg-muted)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircleIcon className="h-5 w-5" />
                  Audit IA & n8n personnalisé
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircleIcon className="h-5 w-5" />
                  Roadmap de mise en œuvre
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircleIcon className="h-5 w-5" />
                  Projection ROI en 6 semaines
                </div>
              </div>
            </div>
            <form
              style={{
                display: "grid",
                gap: "16px",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                width: "100%",
              }}
            >
              <input type="text" name="name" placeholder="Votre nom" required style={inputStyle} />
              <input type="email" name="email" placeholder="Email professionnel" required style={inputStyle} />
              <input type="text" name="company" placeholder="Entreprise" required style={inputStyle} />
              <input type="text" name="stack" placeholder="Outils actuels (CRM, support...)" style={inputStyle} />
              <textarea
                name="project"
                placeholder="Décrivez votre projet et vos objectifs"
                rows={4}
                style={{ ...inputStyle, gridColumn: "1 / -1", resize: "vertical", minHeight: "120px" }}
              />
              <button type="submit" className="btn-primary" style={{ width: "fit-content", marginTop: "12px" }}>
                Envoyer ma demande
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <main style={{ display: "flex", flexWrap: "wrap", gap: "26px", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--fg-muted)" }}>
            <CpuChipIcon className="h-6 w-6" />
            Intelliwave · Agence IA & Automatisation · Paris · Montréal
          </div>
          <div style={{ display: "flex", gap: "18px", color: "var(--fg-muted)", fontSize: "14px" }}>
            <a href="#expertise">Expertise</a>
            <a href="#process">Méthode</a>
            <a href="#contact">Contact</a>
            <a href="mailto:contact@intelliwave.ai">contact@intelliwave.ai</a>
          </div>
        </main>
      </footer>
    </>
  );
}

const inputStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  borderRadius: "12px",
  padding: "14px 16px",
  color: "#fff",
  fontSize: "15px",
  width: "100%",
  outline: "none",
};

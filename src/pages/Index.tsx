import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Badge as BadgeIcon,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  //Github,
  GitBranch,
  Globe,
  GraduationCap,
  Hexagon,
  Layers,
  //Linkedin,
  Link2,
  Lock,
  Menu,
  Palette,
  SearchCheck,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  //Twitter,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/CountUp";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Problème", href: "#probleme" },
    { label: "Solution", href: "#solution" },
    { label: "Blockchain", href: "#blockchain" },
    { label: "Impact", href: "#impact" },
    { label: "Équipe", href: "#equipe" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center shadow-elegant group-hover:scale-110 transition-smooth">
            <ShieldCheck className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-foreground">
            Skill<span className="text-primary">Badge</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="hero" size="lg">
            Voir la démo
          </Button>
        </div>

        <button
          aria-label="Ouvrir le menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col p-4 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2 font-medium text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button variant="hero" className="w-full mt-2" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Voir la démo
              </a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-blue-soft">
    {/* Glow background */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
      style={{ background: "var(--gradient-glow)" }}
      aria-hidden
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial="hidden" animate="show" variants={stagger}>
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Blockchain NFT • Burkina Faso
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
        >
          Certifiez vos compétences.{" "}
          <span className="text-gradient-hero">Prouvez votre talent.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
        >
          SkillBadge utilise la blockchain NFT pour certifier les compétences
          autodidactes au Burkina Faso. Une vérification{" "}
          <strong className="text-foreground">instantanée</strong>,{" "}
          <strong className="text-foreground">infalsifiable</strong> et{" "}
          <strong className="text-foreground">décentralisée</strong>.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button variant="hero" size="xl">
            <a href="#impact" className="text-white">
              Découvrir comment ça marche
            </a>
          </Button>
          <Button variant="outlineHero" size="xl">
            <a href="#badges">Voir les badges</a>
          </Button>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            +15 000 autodidactes
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success" />6 domaines
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Vérification &lt;1s
          </span>
        </motion.div>
      </motion.div>

      {/* Visual: badge + blockchain */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative flex justify-center"
      >
        <div className="relative w-[340px] h-[420px] sm:w-[400px] sm:h-[480px]">
          {/* Geometric blockchain shapes */}
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent/40 opacity-80 animate-float" />
          <div
            className="absolute -bottom-6 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-success to-success/40 opacity-80 animate-float"
            style={{ animationDelay: "1s" }}
          />
          <Hexagon
            className="absolute top-10 right-0 w-16 h-16 text-primary/30"
            strokeWidth={1.5}
          />
          <Hexagon
            className="absolute bottom-10 left-0 w-12 h-12 text-success/40"
            strokeWidth={1.5}
          />

          {/* Main badge card */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-hero p-[2px] shadow-elegant animate-glow">
            <div className="w-full h-full rounded-3xl bg-card p-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-foreground text-sm">
                    SkillBadge NFT
                  </span>
                </div>
                {/* <span className="text-xs px-2 py-1 rounded-full bg-success/10 text-success font-semibold">
                  VÉRIFIÉ
                </span> */}
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-badge flex items-center justify-center shadow-glow mb-4">
                  <Award
                    className="w-16 h-16 text-primary-foreground"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-extrabold text-xl text-foreground">
                  Développement Web
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Niveau Avancé
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border space-y-2 text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span>Hash</span>
                  <span className="font-mono text-foreground">
                    0x7f3a...e9b2
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Émetteur</span>
                  <span className="text-foreground">Centre Numérique BF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
const ProblemSection = () => {
  const dataPoints = [
    {
      icon: Users,
      highlight: "15 000+",
      text: "Jeunes Burkinabè se forment au numérique chaque année via des canaux informels.",
      hoverColor: "hover:border-red-300",
    },
    {
      icon: Lock,
      highlight: "< 5%",
      text: "Obtiennent des certifications reconnues par les employeurs du secteur.",
      hoverColor: "hover:border-red-300",
    },
    {
      icon: Briefcase,
      highlight: "70%",
      text: "Des employeurs IT burkinabè peinent à évaluer les candidats autodidactes (enquête 2023).",
      hoverColor: "hover:border-red-300",
    },
    {
      icon: GraduationCap,
      highlight: "8 000",
      text: "Développeurs formés à Ouagadougou (2020–2023) sans certification standardisée.",
      hoverColor: "hover:border-red-300",
    },
    {
      icon: Globe,
      highlight: "+40%",
      text: "D'employabilité augmentée grâce à la blockchain en Afrique de l'Est.",
      hoverColor: "hover:border-green-300",
    },
  ];

  return (
    <section id="probleme" className="py-20 bg-surface-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Le défi de l'emploi numérique au Burkina Faso
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Des milliers de talents invisibles. Un écart majeur entre
            compétences réelles et reconnaissance formelle.
          </p>
        </motion.div>

        {/* Liste minimaliste */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="space-y-3"
        >
          {dataPoints.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={`flex items-start gap-4 p-5 bg-card rounded-xl border border-border shadow-sm hover:shadow-md ${item.hoverColor} transition-all duration-300`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-0.5">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="font-bold text-foreground text-lg sm:text-xl">
                    {item.highlight}
                  </span>
                  <span className="text-muted-foreground font-medium ml-1">
                    {item.text}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Source & crédibilité (répond à la remarque du mentor) */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-xs text-muted-foreground/70"
        >
          Source : Données contextuelles MIABE Hackathon 2026 • Enquête terrain
          IT Burkina (2023)
        </motion.p>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    /* {
      value: +150000,
      suffix: "",
      label: "des jeunes sont autodidactes",
      color: "text-primary",
      icon: GraduationCap,
    }, */
    {
      value: 5,
      suffix: "%",
      label: "obtiennent des certifications officielles",
      color: "text-accent",
      icon: Lock,
    },
    {
      value: 70,
      suffix: "%",
      label: "Employeurs peinent à évaluer les candidats",
      color: "text-danger",
      icon: Briefcase,
    },
    {
      value: 90,
      suffix: "%",
      label: "prêts à utiliser SkillBadge",
      color: "text-success",
      icon: CheckCircle2,
    },
  ];
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Le défi de la validation des talents locaux
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Données recueillies auprès des jeunes apprenants et recruteurs au
            Burkina Faso.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div
            variants={fadeUp}
            className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth"
          >
            <GraduationCap className={`w-8 h-8 mx-auto mb-4 text-primary`} />
            <div
              className={`text-5xl sm:text-6xl font-extrabold tracking-tight text-primary`}
            >
              <CountUp suffix="+" end={15000} />
            </div>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground font-medium">
              jeunes sont autodidactes
            </p>
          </motion.div>

          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-smooth"
            >
              <s.icon className={`w-8 h-8 mx-auto mb-4 ${s.color}`} />
              <div
                className={`text-5xl sm:text-6xl font-extrabold tracking-tight ${s.color}`}
              >
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground font-medium">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const steps = [
    {
      num: "1",
      title: "Le formateur émet un badge",
      desc: "Un centre de formation habilité crée un badge de compétence et l'attribue à un apprenant ayant satisfait aux critères d'évaluation définis.",
      footer: "Cercle Numérique · Laafi Tech · Yida Digital · Bootcamps · ONG",
      tags: null,
      highlight: false,
      verified: false,
    },
    {
      num: "2",
      title: "L'apprenant collecte ses badges",
      desc: "Chaque badge rejoint automatiquement le portfolio blockchain de l'apprenant — public, partageable, accessible depuis son téléphone.",
      footer: null,
      tags: ["Expert", "Avancé", "Intermédiaire", "Débutant"],
      highlight: true,
      verified: false,
    },
    {
      num: "3",
      title: "Le recruteur vérifie en secondes",
      desc: "En saisissant l'adresse wallet du candidat, le recruteur voit instantanément tous ses badges certifiés, leurs émetteurs et leur validité.",
      footer: null,
      tags: null,
      highlight: false,
      verified: true,
    },
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-blue-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête unifié */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Notre solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            SkillBadge : la solution blockchain
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Un système de certification numérique fiable, vérifiable
            instantanément et infalsifiable.
          </p>
        </motion.div>

        {/* Les 3 étapes */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className={`relative rounded-2xl p-8 transition-smooth ${
                step.highlight
                  ? "bg-card border-2 border-primary shadow-elegant"
                  : "bg-card border border-border shadow-soft"
              }`}
            >
              {/* Numéro circulaire */}
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-extrabold text-lg flex items-center justify-center mb-6 shadow-lg">
                {step.num}
              </div>

              {/* Titre */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {step.desc}
              </p>

              {/* Tags pour l'étape 2 */}
              {step.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tag === "Expert"
                          ? "bg-purple-100 text-purple-700"
                          : tag === "Avancé"
                            ? "bg-orange-100 text-orange-700"
                            : tag === "Intermédiaire"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-green-100 text-green-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Badge de vérification pour l'étape 3 */}
              {step.verified && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-green-700">
                    Vérification en 0,3 seconde · 100% fiable
                  </p>
                </div>
              )}

              {/* Footer pour l'étape 1 */}
              {step.footer && (
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">{step.footer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
  const cols = [
    {
      icon: GraduationCap,
      color: "bg-primary/10 text-primary",
      title: "Pour les Apprenants",
      points: [
        "Portfolio vérifiable et crédible",
        "Propriété personnelle des badges",
        "Partage facile avec recruteurs",
        "Progression claire et motivante",
      ],
    },
    {
      icon: Briefcase,
      color: "bg-accent/10 text-accent",
      title: "Pour les Recruteurs",
      points: [
        "Vérification instantanée (<1s)",
        "Confiance totale dans les compétences",
        "Gain de temps massif",
        "Accès à plus de talents",
      ],
    },
    {
      icon: Award,
      color: "bg-success/10 text-success",
      title: "Pour les Formateurs",
      points: [
        "Émission sécurisée et signée",
        "Traçabilité complète",
        "Crédibilité renforcée",
        "Zéro risque de contrefaçon",
      ],
    },
  ];
  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Une valeur ajoutée pour chaque utilisateur
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cols.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{
                opacity: 0,
                x: i === 0 ? -40 : i === 2 ? 40 : 0,
                y: i === 1 ? 40 : 0,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elegant transition-smooth"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${c.color}`}
              >
                <c.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {c.title}
              </h3>
              <ul className="space-y-3">
                {c.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlockchainSection = () => (
  <section
    id="blockchain"
    className="py-20 bg-dark text-dark-foreground relative overflow-hidden"
  >
    <div
      className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
      aria-hidden
    />
    <div
      className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-success/10 blur-3xl"
      aria-hidden
    />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-glow text-sm font-semibold mb-5"
        >
          <Cpu className="w-4 h-4" /> Technologie
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-extrabold leading-tight"
        >
          La puissance de la{" "}
          <span className="text-gradient-hero">blockchain NFT</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-5 text-lg text-white/70 leading-relaxed"
        >
          Chaque badge est un NFT unique contenant : identité de l'apprenant,
          compétence certifiée, émetteur, date, et hash cryptographique.
        </motion.p>

        {/* Avantages améliorés - Présentation en cartes */}
        <motion.div variants={stagger} className="mt-8 space-y-4">
          <motion.div
            variants={fadeUp}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-smooth"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-primary-glow" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">Infalsifiable</h3>
              <p className="text-sm text-white/70">
                Enregistré sur blockchain NFT, impossible à contrefaire ou
                modifier.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-smooth"
          >
            <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-success" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">
                Vérification instantanée
              </h3>
              <p className="text-sm text-white/70">
                Vérification en 0,3 seconde par n'importe quel recruteur.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-smooth"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">
                Décentralisé & Transparent
              </h3>
              <p className="text-sm text-white/70">
                Aucune autorité centrale. Toutes les données sont publiques et
                traçables.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-smooth"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-primary-glow" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1">
                Sécurité cryptographique SHA-256
              </h3>
              <p className="text-sm text-white/70">
                Hash cryptographique unique garantissant l'intégrité totale du
                badge.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bouton existant conservé */}
        <motion.div variants={fadeUp} className="mt-8">
          <Button variant="hero" size="lg" asChild>
            <a href="#architecture">En savoir plus sur la technologie</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-glow animate-glow">
          <div className="bg-gradient-hero rounded-2xl p-8 flex flex-col items-center text-center mb-6">
            <Award className="w-20 h-20 text-white mb-3" strokeWidth={1.5} />
            <h3 className="font-extrabold text-white text-lg">
              Développement Web
            </h3>
            <p className="text-white/80 text-sm">Niveau Avancé</p>
          </div>

          <div className="space-y-3 text-sm font-mono">
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-white/50">Hash</span>
              <span className="text-primary-glow">0x7f3a8b...e9b2</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-white/50">Émetteur</span>
              <span className="text-white">Centre Numérique BF</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-white/10">
              <span className="text-white/50">Date</span>
              <span className="text-white">2026-04-12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/50">IPFS</span>
              <span className="text-success">QmX7v...K2p9</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const BadgesPreview = () => {
  const domains = [
    {
      emoji: "💻",
      icon: Code2,
      title: "Développement Web",
      skills: "HTML, CSS, JS, React, Node.js",
      grad: "from-primary/20 to-primary/5",
    },
    {
      emoji: "📱",
      icon: Smartphone,
      title: "Développement Mobile",
      skills: "Flutter, React Native, Kotlin",
      grad: "from-accent/20 to-accent/5",
    },
    {
      emoji: "📊",
      icon: Database,
      title: "Data & IA",
      skills: "Python, Machine Learning, SQL",
      grad: "from-success/20 to-success/5",
    },
    {
      emoji: "🔐",
      icon: Shield,
      title: "Cybersécurité",
      skills: "Pentesting, Sécurité réseaux",
      grad: "from-danger/20 to-danger/5",
    },
    {
      emoji: "🎨",
      icon: Palette,
      title: "UI/UX Design",
      skills: "Figma, Prototypage, Design System",
      grad: "from-primary/20 to-accent/10",
    },
    {
      emoji: "⚙️",
      icon: Cpu,
      title: "DevOps",
      skills: "Git, CI/CD, Docker, Agile",
      grad: "from-success/20 to-primary/10",
    },
  ];
  return (
    <section id="badges" className="py-20 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            6 domaines de certification
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Couvrez l'essentiel des métiers du numérique avec 3 niveaux par
            badge.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {domains.map((d) => (
            <motion.div
              key={d.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group rounded-2xl p-6 bg-gradient-to-br ${d.grad} border border-border bg-card hover:shadow-elegant transition-smooth`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-2xl shadow-soft">
                  {d.emoji}
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                  3 niveaux
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {d.title}
              </h3>
              <p className="text-sm text-muted-foreground">{d.skills}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const members = [
    {
      name: "Seydou Bagaya",
      role: "Product Lead",
      photo: "/images/team/BAGAYA Seydou.jpeg",
      initials: "SB",
      grad: "from-primary to-primary-glow",
    },
    {
      name: "Neimata Oudraogo",
      role: "UI/UX Designer",
      photo: "/images/team/OUEDRAOGO Nemata.jpeg",
      initials: "NO",
      grad: "from-accent to-accent/60",
    },
    {
      name: "Dan Kafando",
      role: "Blockcain Dev",
      photo: "/images/team/KAFANDO Dan.jpeg",
      initials: "DK",
      grad: "from-success to-success/60",
    },
    {
      name: "Firmin Yameogo",
      role: "Frontend Dev",
      photo: "/images/team/YAMEOGO Firmin.jpeg",
      initials: "FY",
      grad: "from-primary to-accent",
    },
  ];
  return (
    <section id="equipe" className="py-20 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Notre Equipe
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Une équipe pluridisciplinaire passionnée par l'impact numérique en
            Afrique.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {members.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group bg-card rounded-2xl p-6 text-center border border-border shadow-soft hover:shadow-elegant transition-smooth"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div
                  className={` absolute inset-0 /* w-full h-full */ rounded-full bg-gradient-to-br ${m.grad} flex items-center justify-center text-white font-extrabold text-2xl shadow-elegant absolute top-0 left-0`}
                >
                  {m.initials}
                </div>
                <img
                  src={m.photo}
                  alt={m.name}
                  className=" relative w-full h-full rounded-full object-cover shadow-elegant z-10 transition-opacity duration-300"
                  onError={(e) => {
                    e.currentTarget.style.opacity = "0";
                  }}
                />
              </div>
              <h3 className="font-bold text-foreground">{m.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ArchitectureSection = () => (
  <section
    id="architecture"
    className="py-16 bg-surface-soft border-t border-border"
  >
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-6 text-foreground">
        Stack Technique & Architecture
      </h2>
      <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
          Solidity / ERC-1155
        </span>
        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
          Polygon Amoy
        </span>
        <span className="px-3 py-1 bg-success/10 text-success rounded-full font-medium">
          IPFS / Pinata
        </span>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full font-medium">
          React + Vite
        </span>
        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full font-medium">
          Wagmi / Viem
        </span>
      </div>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
      >
        Voir le code source & schéma d'architecture →
      </a>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-cta rounded-3xl px-6 py-16 sm:p-16 text-center text-white shadow-elegant relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
            Prêt à transformer l'emploi numérique au Burkina Faso ?
          </h2>
          <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
            Rejoignez SkillBadge et commencez à certifier vos compétences dès
            aujourd'hui.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ctaWhite" size="xl" className="animate-pulse-slow">
              <a
                href="https://tally.so/r/Y5zJN5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commencer maintenant
              </a>
            </Button>
            <Button variant="ctaOutline" size="xl">
              <a href="mailto:seydoubagaya2002@gmail.com">Contactez-nous</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[hsl(220_30%_8%)] text-white/70 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {/* Colonne 1 : Logo + Description */}
        <div>
          <a href="#" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-lg text-white">
              Skill<span className="text-primary-glow">Badge</span>
            </span>
          </a>
          <p className="text-sm leading-relaxed">
            Certification blockchain des compétences autodidactes au Burkina
            Faso.
          </p>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div>
          <h4 className="font-bold text-white mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#probleme"
                className="hover:text-white transition-smooth"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#solution"
                className="hover:text-white transition-smooth"
              >
                Badges
              </a>
            </li>
            <li>
              <a
                href="#blockchain"
                className="hover:text-white transition-smooth"
              >
                Blockchain
              </a>
            </li>
            <li>
              <a href="#equipe" className="hover:text-white transition-smooth">
                Équipe
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@skillbadge.bf"
                className="hover:text-white transition-smooth"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Réseaux sociaux */}

        <div>
          <h4 className="font-bold text-white mb-4">Suivez-nous</h4>
          <div className="flex items-center gap-4">
            {/* GitHub → GitBranch */}
            <a
              href="https://github.com/votre-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white hover:text-primary-glow transition-smooth"
              aria-label="GitHub"
            >
              <GitBranch className="w-5 h-5" />
            </a>

            {/* LinkedIn → Link2 */}
            <a
              href="https://linkedin.com/company/skillbadge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white hover:text-primary-glow transition-smooth"
              aria-label="LinkedIn"
            >
              <Link2 className="w-5 h-5" />
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/skillbadge"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white hover:text-primary-glow transition-smooth"
              aria-label="X (Twitter)"
            >
              <X className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-10 text-sm text-white/50">
            <p>
              SkillBadge est en cours de développement. Version présélection
              MIABE.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center items-center gap-3 text-xs">
        <p>© 2026 SkillBadge — MIABE Hackathon. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProblemSection />
      {/* <StatsSection /> */}
      <SolutionSection />
      <ImpactSection />
      {/* <HowItWorks /> */}
      <BlockchainSection />
      <BadgesPreview />
      <TeamSection />
      <ArchitectureSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;

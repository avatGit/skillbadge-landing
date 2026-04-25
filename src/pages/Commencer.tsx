import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Building2,
  Briefcase,
  ShieldCheck,
  Zap,
  Globe,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Commencer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const profiles = [
    {
      icon: Users,
      title: "Je suis apprenant",
      description:
        "Crée ton portfolio blockchain et certifie tes compétences autodidactes.",
      link: "/login?role=apprenant",
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: GraduationCap,
      title: "Je suis formateur",
      description:
        "Émets des badges NFT pour valider les compétences de tes apprenants.",
      link: "/login?role=formateur",
      color:
        "bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg",
      textColor: "text-blue-700",
      bgColor: "bg-white",
    },
    {
      icon: Building2,
      title: "Je suis une organisation",
      description:
        "Gère les certifications de ton centre de formation ou ton ONG à grande échelle.",
      link: "/login?role=organisation",
      color:
        "bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg",
      textColor: "text-blue-700",
      bgColor: "bg-white",
    },
    {
      icon: Briefcase,
      title: "Je suis recruteur",
      description:
        "Vérifie instantanément l'authenticité des badges de tes candidats.",
      link: "/verify",
      color:
        "bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg",
      textColor: "text-blue-700",
      bgColor: "bg-white",
    },
  ];

  const trustBadges = [
    {
      icon: ShieldCheck,
      title: "Sécurisé par blockchain",
      description: "Badges NFT infalsifiables",
    },
    {
      icon: Zap,
      title: "Vérification instantanée",
      description: "En moins d'une seconde",
    },
    {
      icon: Globe,
      title: "Accessible partout",
      description: "Depuis n'importe où",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header Section */}
      <div className="pt-16 pb-12 px-4 text-center">
        {/* Badge supérieur */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8"
        >
          <Zap className="w-4 h-4" />
          BLOCKCHAIN • VÉRIFIABLE • CERTIFIÉ
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
        >
          Prouvez vos{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            compétences numériques
          </span>
          <br />
          avec des badges blockchain
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          Obtenez des certifications vérifiables sur la blockchain.
          <br className="hidden sm:block" />
          Recrutez des profils qualifiés pour vos postes en toute confiance.
        </motion.p>
      </div>

      {/* Section "Je suis..." */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wide mb-10"
        >
          JE SUIS...
        </motion.p>

        {/* Grille des profils */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {profiles.map((profile, index) => (
            <Link key={profile.title} to={profile.link} className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className={`${profile.color} rounded-2xl p-8 text-center transition-all duration-300 ${
                  profile.title === "Je suis apprenant"
                    ? "text-white shadow-xl"
                    : "text-slate-700 shadow-md"
                }`}
              >
                {/* Icône */}
                <div
                  className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center ${
                    profile.title === "Je suis apprenant"
                      ? "bg-white/20"
                      : profile.bgColor
                  }`}
                >
                  <profile.icon
                    className={`w-8 h-8 ${
                      profile.title === "Je suis apprenant"
                        ? "text-white"
                        : profile.textColor
                    }`}
                  />
                </div>

                {/* Titre */}
                <h3
                  className={`text-xl font-bold mb-3 ${
                    profile.title === "Je suis apprenant"
                      ? "text-white"
                      : profile.textColor
                  }`}
                >
                  {profile.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    profile.title === "Je suis apprenant"
                      ? "text-blue-100"
                      : "text-slate-600"
                  }`}
                >
                  {profile.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Trust Badges (au lieu des stats) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                <badge.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">{badge.title}</h4>
              <p className="text-sm text-slate-600">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Texte de réassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 max-w-2xl mx-auto"
        >
          Rejoignez l'écosystème SkillBadge et transformez vos compétences en
          opportunités concrètes.
        </motion.p>
      </div>
    </div>
  );
};

export default Commencer;

export type ProjectLink = {
  readonly label: string
  readonly url: string
  readonly icon: 'globe' | 'github' | 'book' | 'chart'
}

export type Project = {
  readonly title: string
  readonly description: string
  readonly tags: readonly string[]
  readonly image: string
  readonly links: readonly ProjectLink[]
  readonly expanded: {
    readonly features: readonly string[]
    readonly technicalDetails: string
  }
}

export type Event = {
  readonly title: string
  readonly date: string
  readonly description: string
  readonly tags: readonly string[]
  readonly image?: string
  readonly link?: {
    readonly url: string
    readonly label: string
  }
}

export const texts = {
  metadata: {
    siteTitle: "Mathys Cogné Foucault - Développeur | Portfolio",
    siteDescription: "Développeur Web3 & IA spécialisé en blockchain, React, TypeScript et Next.js. Étudiant à 42, passionné par l'innovation technologique et les hackathons. Découvrez mes projets et compétences.",
    siteKeywords: "développeur web3, blockchain, intelligence artificielle, React, TypeScript, Next.js, École 42, développeur frontend, portfolio, hackathons, projets tech, cybersécurité, no-code, IA",
    authorName: "Mathys Cogné Foucault",
    twitterHandle: "@MathysCF",
    siteLocale: "fr-FR",
    siteType: "website",
    siteCategory: "Technology"
  },
  hero: {
    title: "Développeur WEB3",
    name: "Mathys Cogné-Foucault",
    description1: "Étudiant à l'École 42, passionné par les hackathons et les défis innovants. La recherche de solutions créatives et l'exploration des frontières technologiques.",
    description2: "Spécialisé en Web3 et IA, je m'épanouis dans l'univers de la blockchain, de l'intelligence artificielle et de la cybersécurité."
  },
  notFound: {
    title: "404",
    heading: "Oups ! On dirait que vous vous êtes perdu dans le métaverse...",
    description: "Pas de panique ! Même les meilleurs développeurs se perdent parfois.",
    buttonText: "Retour à la terre ferme"
  },
  resume: {
    title: "Parcours",
    subtitle: "De l'expérience terrain à l'expertise technique",
    experience: {
      title: "Mon Parcours Professionnel",
      items: [
        {
          company: "42Blockchain",
          role: "Membre - Contributeur",
          period: "février 2025 - Présent",
          logo: "/images/companies/42blockchain.svg",
          url: "https://42blockchain.com/"
        },
        {
          company: "Café Joyeux",
          role: "Superviseur",
          period: "novembre 2024 - Présent",
          logo: "/images/companies/cafe-joyeux.jpeg",
          url: "https://www.cafejoyeux.com"
        },
        {
          company: "POKAWA",
          role: "Directeur Multisite",
          period: "mars 2021 - avril 2023",
          logo: "/images/companies/pokawa.jpeg",
          url: "https://pokawa.com"
        },
        {
          company: "Les Burgers de Papa",
          role: "Directeur Adjoint",
          period: "août 2020 - mars 2021",
          logo: "/images/companies/burgers-papa.jpeg",
          url: "https://lesburgersdepapa.fr"
        },
        {
          company: "McDonald's",
          role: "Manager Opérationnel",
          period: "octobre 2017 - août 2020",
          logo: "/images/companies/mcdonalds.jpeg",
          url: "https://www.mcdonalds.fr"
        }
      ]
    },
    education: {
      title: "Mon Parcours Académique",
      items: [
        {
          school: "42",
          degree: "Ingenieur logiciel",
          period: "2024 - 2026",
          logo: "/images/education/42born2code_logo.jpeg",
          url: "https://42.fr"
        },
        {
          school: "OpenClassrooms",
          degree: "Developpeur Front-End",
          period: "2024",
          logo: "/images/education/openclassrooms_logo.jpeg",
          url: "https://openclassrooms.com"
        }
      ]
    },
    skills: {
      title: "Mes Technologies Maîtrisées",
      items: [
        "React JS",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Postgres",
        "Docker",
        "C",
        "C++"
      ]
    }
  },
  projects: {
    title: "Mes Projets",
    subtitle: "Innovation et créativité au service du web3",
    features: "Fonctionnalités",
    technicalDetails: "Détails Techniques",
    viewMore: "Voir plus",
    items: [
      {
        title: "PatcherAI",
        description: "Un builder no-code d'agents IA intuitif avec interface drag and drop. Permet de créer et déployer des agents IA personnalisés sans écrire de code.",
        tags: ["React", "TypeScript", "AI", "No-Code", "Drag and Drop", "LLM"],
        image: "/images/projects/patcherai.webp",
        links: [
          { label: "En développement", url: "#", icon: "globe" }
        ],
        expanded: {
          features: [
            "Interface drag and drop intuitive",
            "Création d'agents IA sans code",
            "Personnalisation complète des comportements",
            "Intégration avec différents modèles de langage",
            "Déploiement simplifié",
            "Monitoring des performances",
            "Bibliothèque de composants réutilisables"
          ],
          technicalDetails: "PatcherAI est développé avec React et TypeScript, utilisant une architecture modulaire pour permettre la création visuelle d'agents IA. Le système utilise une approche basée sur les composants pour assembler différentes capacités d'IA, avec un moteur d'exécution qui traduit les configurations visuelles en instructions pour les LLM. L'interface utilisateur est conçue pour être accessible aux non-développeurs tout en offrant des fonctionnalités avancées pour les utilisateurs expérimentés."
        }
      },
      {
        title: "42 Blockchain Website",
        description: "Contribution au développement du site web officiel de l'association 42 Blockchain, une communauté dédiée à l'apprentissage et à la promotion des technologies blockchain au sein de l'École 42.",
        tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Web3"],
        image: "/images/projects/42blockchain.jpeg",
        links: [
          { label: "Site", url: "https://42blockchain.com/", icon: "globe" },
          { label: "GitHub", url: "https://github.com/iceywil/42Blockchain-Website", icon: "github" }
        ],
        expanded: {
          features: [
            "Interface moderne et responsive",
            "Présentation des événements et ateliers de l'association",
            "Ressources éducatives sur la blockchain",
            "Présentation des projets des membres",
            "Intégration avec les réseaux sociaux",
            "Section actualités et blog"
          ],
          technicalDetails: "Site développé avec Next.js et TypeScript, utilisant TailwindCSS pour le styling. L'architecture est basée sur des composants réutilisables et une approche JAMstack pour des performances optimales. Le site sert de vitrine pour l'association 42 Blockchain et facilite la diffusion de connaissances sur les technologies blockchain au sein de la communauté de l'École 42."
        }
      },
      {
        title: "Cub3D",
        description: "Un projet inspiré de Wolfenstein 3D, l'un des premiers jeux de tir à la première personne. Exploration des techniques de ray-casting pour créer une représentation 3D d'un labyrinthe.",
        tags: ["C", "Ray-casting", "3D", "Game Development", "42 School"],
        image: "/images/projects/cub3dm.png",
        links: [
          { label: "GitHub", url: "https://github.com/MathysCogne/42_Cub3D", icon: "github" }
        ],
        expanded: {
          features: [
            "Rendu 3D utilisant le ray-casting",
            "Textures personnalisées et carte configurable",
            "Mouvements et interactions du joueur",
            "Affichage d'une mini-carte",
            "Sprites animés",
            "Système de portes",
            "Gestion complète du point de vue à 360 degrés",
            "Interaction à la souris pour un ciblage précis et un contrôle de la caméra",
            "Armes et statistiques du joueur (Santé, endurance...)"
          ],
          technicalDetails: "Développé en C, ce projet met en œuvre des techniques avancées de ray-casting pour simuler un environnement 3D à partir d'une carte 2D. Le moteur graphique gère les collisions, les textures, l'éclairage et les interactions. Le format de carte .cub personnalisé permet de définir les textures et la disposition du labyrinthe. L'implémentation comprend des calculs trigonométriques précis pour la projection des rayons et la détection des murs."
        }
      },
      {
        title: "Philosophers",
        description: "Une implémentation du célèbre problème des philosophes dînants, explorant les défis de concurrence et de synchronisation en programmation.",
        tags: ["C", "Threads", "Mutexes", "Processes", "Semaphores", "42 School"],
        image: "/images/projects/philosophersm.png",
        links: [
          { label: "GitHub", url: "https://github.com/MathysCogne/42_Philosophers", icon: "github" },
          { label: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dining_philosophers_problem", icon: "book" }
        ],
        expanded: {
          features: [
            "Version obligatoire : Threads et Mutexes",
            "Gestion des ressources partagées avec des mutexes",
            "Simulation multi-thread avec un philosophe par thread",
            "Surveillance des états et détection de la mort par famine",
            "Version bonus : Processus et Sémaphores",
            "Simulation multi-processus avec des philosophes indépendants",
            "Synchronisation efficace avec des sémaphores",
            "Surveillance centralisée par un processus parent"
          ],
          technicalDetails: "Ce projet aborde le défi classique de la gestion des ressources partagées en informatique. La version principale utilise des threads et des mutexes pour synchroniser l'accès aux fourchettes entre les philosophes, évitant les interblocages tout en surveillant avec précision les timestamps. La version bonus implémente la même simulation avec des processus séparés et des sémaphores, démontrant une approche différente de la synchronisation et de la communication inter-processus. Les deux versions nécessitent une gestion précise du temps pour détecter quand un philosophe meurt de faim."
        }
      }
    ]
  },
  blog: {
    title: "Blog Tech & Web3",
    description: "Découvrez mes articles sur le développement web, la blockchain, l'IA et les technologies émergentes. Tutoriels, analyses et retours d'expérience d'un développeur passionné."
  },
  hackathons: {
    title: "Hackathons & Événements",
    subtitle: "Mes aventures dans le monde des défis technologiques",
    events: [
      {
        title: "Hackathon ETHGlobal Cannes",
        date: "Juillet 2025",
        description: "## ETH Global Cannes\n\n **Comming soon** \n\n.\n\n.\n\n.\n\n.",
        tags: ["ETH", "Web3"],
        link: {
          url: "https://ethglobal.com/events/cannes",
          label: "Site de l'événement"
        }
      },
      {
        title: "Paris Blockchain Week",
        date: "Avril 2025",
        description: "## Hackathon Paris Blockchain Week\n\n **Comming soon** \n\n.\n\n.\n\n.\n\n.",
        tags: ["XRPL", "Solana", "Web3"],
        link: {
          url: "https://www.parisblockchainweek.com",
          label: "Site de l'événement"
        }
      },
      {
        title: "AI Action Summit Hackathon",
        date: "Février 2025",
        description: "## Doctolib, Paris\n\nNous avons développé un agent IA pour réduire l'attente lors des appels aux numéros d'urgence en santé (trois minutes en moyenne, avec des pics à 30 minutes en hiver).\n\nNotre solution prend le relais pendant ces périodes d'attente, recueille les informations essentielles (nom, prénom, localisation, description de l'incident) et guide l'appelant à travers les gestes de premiers secours via un dialogue interactif et modulaire jusqu'à ce que l'opérateur prenne le relais.\n\nUn super week-end avec peu de sommeil avec notre équipe \"Les Hackatistes du Dimanche\" dans les locaux de Doctolib.",
        tags: ["IA", "Santé", "Agent IA", "Urgences"],
        link: {
          url: "https://github.com/MathysCogne/Hackathon_AI-Action-Summit_2025",
          label: "Voir le projet"
        }
      },
      {
        title: "Kiln Hackathon",
        date: "Janvier 2025",
        description: "## 🏆  Kiln, Paris\n\n **2ème place** dans la catégorie Kiln Connect avec notre équipe \"Les Hackatistes du Dimanche\". \n\n Nous avons développé un Agent IA connecté en temps réel à l'API de Kiln pour faciliter l'accès aux données blockchain.\n\nNotre solution vectorise les requêtes utilisateurs, détermine l'appel API le plus pertinent, enrichit les données récupérées et les transmet à un LLM avec un pré-prompt dynamique.\n\nL'outil fournit des insights précis et actualisés sur la blockchain : suivi des rewards, statut des validateurs, analyse de wallet et plus encore.\n\n",
        tags: ["IA", "Blockchain", "LLM", "Kiln"],
        link: {
          url: "https://github.com/MathysCogne/hackathon_kiln",
          label: "Voir le projet"
        }
      },
    ]
  },
  footer: {
    morphingTexts: [
      "Créons l'avenir",
      "Discutons ensemble",
      "Innovons ensemble",
      "Concrétisons vos idées",
      "Travaillons ensemble",
      "Créons l'avenir"
    ]
  }
} as const; 
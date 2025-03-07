```
app/
├── api/                    # Routes API (endpoints)
│   ├── og/                # Génération d'images OpenGraph
│   └── rss/               # Flux RSS
├── blog/                  # Feature blog
│   ├── _components/       # Composants privés du blog
│   │   └── posts.tsx
│   ├── _lib/             # Logique métier du blog
│   │   └── blog.ts
│   ├── _posts/           # Contenu MDX
│   ├── [slug]/           # Routes dynamiques
│   │   └── page.tsx
│   └── page.tsx
├── shared/               # Composants partagés
│   └── components/
│       ├── nav.tsx
│       └── footer.tsx
├── styles/              # Styles globaux
├── page.tsx             # Page d'accueil
├── layout.tsx           # Layout principal
├── sitemap.ts          # Configuration et génération du sitemap
└── robots.ts           # Configuration des robots

```
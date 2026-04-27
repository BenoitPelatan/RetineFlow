# Handoff : RetinaFlow — Design System « Précision clinique »

## Vue d'ensemble

RetinaFlow est un logiciel destiné aux ophtalmologistes. Ce paquet livre la **direction visuelle « Précision clinique »** : un langage institutionnel, dense et géométrique, pensé pour des cliniciens qui lisent un dossier avant de lire une interface. Il couvre logo, palette de couleurs, typographie, iconographie et composants UI de base (boutons, champs, cartes, alertes).

## À propos des fichiers de design

Les fichiers du dossier `design_reference/` sont des **références de design produites en HTML/JSX** — des prototypes qui décrivent l'intention visuelle et le comportement, **pas du code de production à copier tel quel**.

La tâche est de **recréer ces designs dans l'environnement existant du projet cible** (React, Next.js, Vue, etc.) en utilisant les patterns et bibliothèques déjà en place. Si le projet n'a pas encore d'environnement, choisir le framework le plus adapté.

Ce que tu trouveras dans `design_reference/` :
- `RetinaFlow Design System v2.html` — page complète du design system, ouvrable dans un navigateur
- `direction-a.jsx` — composants React inline qui composent la page (logo, boutons, champs, cartes, alertes)
- `shared.jsx` — primitives partagées (`Section`, `Swatch`, `TypeSpec`, `IconStub`, `IconCell`, `SubRule`, `Label`, `Placeholder`)
- `tweaks-panel.jsx` — panneau de réglages de la couleur primaire (à NE PAS porter en production)

Ce que tu trouveras à la racine du dossier de handoff :
- `tokens.json` — tokens design en JSON (consommables par Style Dictionary, Tailwind config, etc.)
- `tokens.css` — variables CSS prêtes à l'emploi
- `tailwind.tokens.js` — extrait pour `tailwind.config.js` si Tailwind est utilisé

## Fidélité

**Haute fidélité (hifi)**. Les couleurs, typographies, espacements et états sont arrêtés. À recréer pixel-près en utilisant les bibliothèques de composants existantes du codebase (Radix, shadcn, MUI, etc. si présentes), sinon en composants natifs.

## Principes directeurs

1. **Lisible à distance** — typographie, contraste et rythme calés pour la lumière fluorescente et les écrans 24".
2. **Densité sans bruit** — tableaux, graphiques et formulaires d'abord. Le blanc est un outil, pas un luxe.
3. **Couleur calibrée** — la couleur est réservée au statut. Jamais décorative sur les surfaces cliniques.

## Design tokens

### Couleurs — Neutres (Ink)
| Token         | Valeur    | Usage                                     |
|---------------|-----------|-------------------------------------------|
| `ink.900`     | `#0B1B2B` | Texte principal, surfaces inversées       |
| `ink.700`     | `#1F3142` | Texte secondaire foncé                    |
| `ink.500`     | `#3C4A5A` | Texte support / muted-strong              |
| `ink.300`     | `#7B8794` | Texte muted, libellés mono                |
| `ink.100`     | `#E2E7EC` | Filets, séparateurs (`rule`)              |
| `surface`     | `#FFFFFF` | Fond carte / champ                        |
| `bg`          | `#FBFCFD` | Fond de page                              |

### Couleurs — Primaire (échelle dérivée par `color-mix` en oklch)
Couleur primaire de référence : **`#0B5FA5`** (bleu médical profond). L'échelle se calcule à partir de cette base ; si tu utilises un système qui n'a pas `color-mix`, voici les valeurs résolues à partir de `#0B5FA5` :

| Token           | Recette                                      | Hex résolu approx. | Ink   |
|-----------------|----------------------------------------------|--------------------|-------|
| `primary.900`   | `color-mix(in oklch, primary 70%, #001220)`  | `#093F6F`          | white |
| `primary.700`   | `color-mix(in oklch, primary 88%, #001220)`  | `#0A538F`          | white |
| `primary.500`   | base                                         | `#0B5FA5`          | white |
| `primary.300`   | `color-mix(in oklch, primary 45%, white)`    | `#7DA8C8`          | ink   |
| `primary.100`   | `color-mix(in oklch, primary 14%, white)`    | `#DCE8F1`          | ink   |
| `primary.tint`  | `color-mix(in oklch, primary 12%, white)`    | `#E1EBF3`          | ink   |
| `primary.ink`   | `#FFFFFF`                                    | `#FFFFFF`          | —     |

### Couleurs — Sémantique
| Token       | Valeur    | Usage                              |
|-------------|-----------|------------------------------------|
| `success`   | `#1E7F5A` | Validation, état OK                |
| `warning`   | `#B26A00` | Avertissement, calibration due     |
| `critical`  | `#A8202F` | Seuil dépassé, erreur, sortie      |
| `info`      | `#1F4B8A` | Information neutre                 |

Les fonds des alertes utilisent `color-mix(in oklch, <semantic> 6%, white)` ; le bandeau gauche utilise la couleur sémantique pleine.

### Typographie
- **Display / Body** : `Inter Tight`, fallback `'Helvetica Neue', Helvetica, Arial, sans-serif`
- **Mono (data, libellés métadonnées)** : `JetBrains Mono`, fallback `ui-monospace, 'SF Mono', Menlo, monospace`

Échelle :
| Nom          | Taille | Line-height | Weight | Tracking   | Famille  |
|--------------|--------|-------------|--------|------------|----------|
| `display/xl` | 88     | 1.0         | 500    | -0.03em    | display  |
| `display/l`  | 56     | 1.05        | 500    | -0.02em    | display  |
| `title/m`    | 28     | 1.2         | 500    | -0.01em    | display  |
| `body/l`     | 18     | 1.55        | 400    | 0          | body     |
| `body/m`     | 15     | 1.55        | 400    | 0          | body     |
| `caption`    | 12     | 1.4         | 500    | 0.06em     | body     |
| `mono/data`  | 14     | 1.4         | 500    | 0          | mono     |

Les titres de section dans la page utilisent `display/l` (56px) ; le hero utilise un display custom à 120px / lh 0.95 / -0.035em.

### Espacement
- **Padding latéral de page** : 64px
- **Padding section verticale** : 96px en haut, 48px en bas
- **Padding intérieur card** : 24px (compact), 32px (standard), 40-48px (hero)
- **Gap grilles** : 12 / 16 / 24 / 32 selon densité
- Pas d'échelle 4/8 stricte ; le design est dense par intention.

### Border-radius
- **2px** sur boutons et inputs (radius quasi-nul, lecture institutionnelle)
- **0** sur cartes, alertes, swatches, sections — surfaces droites
- **50%** uniquement sur le logo (cercles concentriques)

### Bordures
- `1px solid var(--rule)` (= `#E2E7EC`) — séparateur standard, contour de cartes
- `1px solid var(--ink)` — bouton secondaire (contour fort)
- Pas d'ombre portée. Le système est strictement plat.

### Logo
Construction concentrique (schéma de fovéa) sur grille 24×24 :
- **Anneau extérieur** : `r = 0.46 × size`, stroke `0.045 × size` (min 2px)
- **Anneau intérieur** : `r = 0.28 × size`, même stroke
- **Point central** : `r = 0.10 × size`, plein
- **Wordmark** : `Inter Tight` 500, tracking `-0.025em`, taille `≈ size × 0.78`
- **Taille minimale d'affichage** : 24px
- **Variantes** : Clair (ink + primary), Inversé (white sur ink), Marque (white sur primary), Teinte (ink + primary sur primary.tint)

Voir `design_reference/direction-a.jsx` → `LogoMarkA` pour le SVG exact.

### Icônes
Tracés d'épaisseur unique **1.5px**, grille **24 unités**, `stroke-linecap: round`, `stroke-linejoin: round`. Géométriques, jamais illustratives. Jeu fourni : `iris`, `scan`, `lens`, `drop`, `wave`, `cross`, `doc`, `calendar`, `user`, `alert`, `check`, `search` (12 sur ~96 prévus en production).

Voir `IconStub` dans `design_reference/shared.jsx` pour les SVG paths.

## Composants

### Button
4 variantes : `primary`, `secondary`, `ghost`, `critical`. Plus état `disabled` (opacity 0.4, `cursor: not-allowed`) et taille `small`.

| Variante   | Background          | Text             | Border              |
|------------|---------------------|------------------|---------------------|
| primary    | `primary.500`       | `primary.ink`    | `primary.500`       |
| secondary  | `surface`           | `ink.900`        | `ink.900`           |
| ghost      | transparent         | `ink.900`        | transparent         |
| critical   | `critical` (#A8202F)| white            | `critical`          |

- **Default** : font Inter Tight 500, 15px (small : 13px), tracking `-0.005em`
- **Padding** : 12px 20px (small : 8px 14px)
- **Radius** : 2px
- **Transition** : `background 120ms ease`
- **Hover** (à implémenter, non couvert dans la maquette) : assombrir le fond de ~8% en oklch
- **Focus visible** : `outline: 2px solid primary.500; outline-offset: 2px`

### Field (input + textarea)
- **Label** au-dessus, en mono 11px, tracking `0.12em`, uppercase, `ink.300`
- **Input** : font body 15px, padding `12px 14px`, border `1px solid rule`, radius 2px, fond `surface`
- **Textarea** : min-height 96px, `resize: vertical`
- **Hint** : 12px `ink.300` sous le champ
- **Focus** (à implémenter) : `border-color: primary.500; outline: 1px solid primary.500`

### Card
Trois patterns illustrés :

1. **PatientCard** — surface blanche, header mono (IPP + statut coloré), nom 22px / 500, méta 14px, séparateur, métriques OD/OG en mono.
2. **MetricCard** — fond `ink.900`, blanc dessus. Big number `display` 56px, delta mono 12px, sparkline 12 barres en `rgba(255,255,255,0.5)`.
3. **AlertCard** (action card) — fond `primary.tint`, border `1px solid primary`, eyebrow mono « ACTION REQUISE », titre 18px, bouton primary small.

Tous les cards ont **0 radius**, **1px border rule**, **24px de padding**.

### Alert
Layout `grid: 4px 1fr auto`. Bandeau gauche en couleur sémantique pleine, contenu sur fond `<sémantique> 6% in oklch sur white`, label `tone` en mono à droite. Border `1px solid rule`.

4 tons : `info`, `warning`, `critical`, `success`.

### Section (layout primitive)
- Padding vertical : `96px 0 48px`
- Top border : `1px solid rule` (sauf première section)
- **Eyebrow** mono 12px tracking `0.18em` uppercase muted, marge bas 16px
- **Titre** display 56px / lh 1.05 / `-0.02em` / weight 500 / max-width 900px
- **Description** body 18px / lh 1.55 / `muted-strong` / max-width 720px / margin-top 20px
- Contenu : `marginTop: 48px`

### SubRule
Filet horizontal avec libellé mono à gauche. Marge `48px 0 24px`. Utilisé pour subdiviser une Section.

## Comportements & interactions

Le prototype est statique. À implémenter côté dev en respectant ces règles :

- **Hover boutons** : assombrir le fond de ~8% (`color-mix(in oklch, <bg> 92%, black)`)
- **Active boutons** : assombrir de ~14%
- **Focus visible** : outline 2px primary.500, offset 2px (jamais supprimer pour des raisons d'accessibilité — clinique = clavier-first)
- **Transitions** : 120ms ease sur background uniquement. **Pas d'animation décorative.**
- **Loading** : skeleton plat en `ink.100`, jamais de spinner animé sur les surfaces de données.
- **Empty states** : copie courte en `body/m muted-strong`, alignée à gauche.

## États & gestion de données

Hors scope de ce handoff (purement design system). À adresser au cas par cas dans les écrans produit.

## Accessibilité

- **Contraste** : `ink.900` sur `surface` = AAA. Toutes les combinaisons primaires/sémantiques avec `primary.ink`/`white` ≥ AA.
- **Cibles tactiles** : minimum 44px sur les écrans tactiles (à respecter même si la maquette est dense).
- **Focus** : visible et clavier-navigable obligatoire.
- **Mouvement** : aucune animation > 200ms. Respecter `prefers-reduced-motion`.

## Fichiers livrés

```
design_handoff_retinaflow/
├── README.md                  ← ce fichier
├── tokens.json                ← tokens design en JSON
├── tokens.css                 ← variables CSS
├── tailwind.tokens.js         ← extrait pour tailwind.config.js
└── design_reference/
    ├── RetinaFlow Design System v2.html
    ├── direction-a.jsx
    ├── shared.jsx
    └── tweaks-panel.jsx
```

## Notes pour l'implémentation

1. **Ne pas porter le `tweaks-panel`** — c'est un outil de revue design, pas un composant produit.
2. **Inter Tight** et **JetBrains Mono** sont fournis par Google Fonts. Self-host recommandé en production.
3. Si le codebase utilise déjà un système de tokens (CSS vars, Tailwind, Radix tokens, MUI theme), **mapper** ces tokens dessus plutôt que dupliquer.
4. La couleur primaire `#0B5FA5` est ajustable en théorie ; en production, exposer une CSS var `--rf-primary` au niveau racine pour permettre des thèmes futurs.
5. Aucune ombre portée n'est utilisée. Si le codebase en a par défaut, **les désactiver** sur les composants RetinaFlow.

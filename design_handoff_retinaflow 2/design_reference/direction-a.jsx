// Direction A — "Clinical Precision"
// Deep navy, geometric sans-serif (Inter Tight as a stand-in for proprietary geometric grotesks),
// dense and institutional. Logo: solid wordmark + concentric mark.

const DirectionA = ({ primary }) => {
  // Local theme — overrides CSS vars within the artboard
  const theme = {
    "--bg": "#FBFCFD",
    "--surface": "#FFFFFF",
    "--ink": "#0B1B2B",
    "--muted-strong": "#3C4A5A",
    "--muted": "#7B8794",
    "--rule": "#E2E7EC",
    "--rule-strong": "#0B1B2B",
    "--primary": primary,
    "--primary-ink": "#FFFFFF",
    "--primary-tint": `color-mix(in oklch, ${primary} 12%, white)`,
    "--font-display": "'Inter Tight', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    "--font-body": "'Inter Tight', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    "--font-mono": "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace",
  };

  // Color tokens
  const palette = [
    { name: "Ink/900", value: "#0B1B2B", token: "ink.900", ink: "white" },
    { name: "Ink/700", value: "#1F3142", token: "ink.700", ink: "white" },
    { name: "Ink/500", value: "#3C4A5A", token: "ink.500", ink: "white" },
    { name: "Ink/300", value: "#7B8794", token: "ink.300", ink: "white" },
    { name: "Ink/100", value: "#E2E7EC", token: "ink.100", ink: "#0B1B2B" },
    { name: "Surface", value: "#FFFFFF", token: "surface", ink: "#0B1B2B" },
  ];

  const primaryScale = [
    { name: "Primary/900", value: `color-mix(in oklch, ${primary} 70%, #001220)`, token: "primary.900", ink: "white" },
    { name: "Primary/700", value: `color-mix(in oklch, ${primary} 88%, #001220)`, token: "primary.700", ink: "white" },
    { name: "Primary/500", value: primary, token: "primary.500", ink: "white" },
    { name: "Primary/300", value: `color-mix(in oklch, ${primary} 45%, white)`, token: "primary.300", ink: "#0B1B2B" },
    { name: "Primary/100", value: `color-mix(in oklch, ${primary} 14%, white)`, token: "primary.100", ink: "#0B1B2B" },
  ];

  const semantic = [
    { name: "Success", value: "#1E7F5A", token: "success", ink: "white" },
    { name: "Warning", value: "#B26A00", token: "warning", ink: "white" },
    { name: "Critical", value: "#A8202F", token: "critical", ink: "white" },
    { name: "Info", value: "#1F4B8A", token: "info", ink: "white" },
  ];

  return (
    <div style={{ ...theme, background: "var(--bg)", color: "var(--ink)", fontFamily: "var(--font-body)" }}>
      {/* HEADER STRIP */}
      <div style={{
        background: "var(--ink)",
        color: "white",
        padding: "20px 64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      }}>
        <span>Direction A · Précision clinique</span>
        <span style={{ opacity: 0.6 }}>RetinaFlow / Système de design / 2026</span>
      </div>

      <div style={{ padding: "0 64px" }}>
        {/* HERO */}
        <section style={{ padding: "120px 0 96px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                01 — Précision clinique
              </div>
              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: 120,
                lineHeight: 0.95,
                letterSpacing: "-0.035em",
                margin: "32px 0 0",
                fontWeight: 500,
                color: "var(--ink)",
              }}>
                Pensé pour la<br />clinique, pas<br />pour le navigateur.
              </h1>
              <p style={{ fontSize: 20, lineHeight: 1.5, color: "var(--muted-strong)", maxWidth: 540, marginTop: 32 }}>
                Un système précis et institutionnel conçu pour les ophtalmologistes. Dense par défaut, calme à grande échelle.
              </p>
            </div>
            {/* Logo lockup */}
            <div style={{ border: "1px solid var(--rule)", padding: 40, background: "var(--surface)" }}>
              <Label>Verrouillage principal</Label>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 24 }}>
                <LogoMarkA size={56} color="var(--primary)" />
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 44,
                  letterSpacing: "-0.025em",
                  fontWeight: 500,
                  color: "var(--ink)",
                }}>
                  RetinaFlow
                </div>
              </div>
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <Label>Symbole seul</Label>
                  <div style={{ marginTop: 16 }}>
                    <LogoMarkA size={48} color="var(--primary)" />
                  </div>
                </div>
                <div>
                  <Label>Inversé</Label>
                  <div style={{ marginTop: 16, background: "var(--ink)", padding: 12, display: "inline-flex" }}>
                    <LogoMarkA size={48} color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <Section eyebrow="01.1" title="Trois principes" description="Le système répond aux cliniciens qui lisent un dossier avant de lire une interface. La précision avant le plaisir. L'information avant l'animation. La confiance avant la nouveauté.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--rule)", border: "1px solid var(--rule)" }}>
            {[
              { n: "01", t: "Lisible à distance", d: "Typographie, contraste et rythme calés pour la lumière fluorescente et les écrans 24\"." },
              { n: "02", t: "Densité sans bruit", d: "Tableaux, graphiques et formulaires d'abord. Le blanc est un outil, pas un luxe." },
              { n: "03", t: "Couleur calibrée", d: "La couleur est réservée au statut. Jamais décorative sur les surfaces cliniques." },
            ].map(p => (
              <div key={p.n} style={{ background: "var(--surface)", padding: 32 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--muted)" }}>{p.n}</div>
                <div style={{ fontSize: 24, fontWeight: 500, marginTop: 24, letterSpacing: "-0.01em" }}>{p.t}</div>
                <div style={{ fontSize: 15, lineHeight: 1.55, color: "var(--muted-strong)", marginTop: 12 }}>{p.d}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* LOGO CONSTRUCTION */}
        <Section eyebrow="02" title="Logo & symbole" description="Le symbole est une construction concentrique — une fovéa, le point focal de la rétine. Construit sur une grille de 24 unités ; jamais reproduit en dessous de 24px.">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div style={{ border: "1px solid var(--rule)", background: "var(--surface)", padding: 48, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 360, position: "relative" }}>
              <LogoMarkA size={220} color="var(--primary)" showGrid />
              <div style={{ position: "absolute", bottom: 16, left: 16, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", color: "var(--muted)" }}>GRILLE 24 × 24</div>
            </div>
            <div style={{ border: "1px solid var(--rule)", background: "var(--ink)", padding: 48, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 360 }}>
              <LogoMarkA size={220} color="white" />
            </div>
          </div>

          <SubRule>Variantes du logotype</SubRule>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {[
              { bg: "var(--surface)", color: "var(--ink)", primary: "var(--primary)", label: "Clair" },
              { bg: "var(--ink)", color: "white", primary: "white", label: "Inversé" },
              { bg: "var(--primary)", color: "white", primary: "white", label: "Marque" },
              { bg: "var(--primary-tint)", color: "var(--ink)", primary: "var(--primary)", label: "Teinte" },
            ].map(v => (
              <div key={v.label} style={{ background: v.bg, border: "1px solid var(--rule)", padding: 40, display: "flex", alignItems: "center", gap: 16 }}>
                <LogoMarkA size={36} color={v.primary} />
                <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", color: v.color }}>RetinaFlow</div>
                <div style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", color: v.color, opacity: 0.6 }}>{v.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* COLOR */}
        <Section eyebrow="03" title="Tokens couleurs" description="Une échelle plate, sans dégradés. La primaire est réservée à l'action. Les couleurs sémantiques sont les seules couleurs narratives sur les surfaces de données.">
          <SubRule>Neutres</SubRule>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
            {palette.map(c => <Swatch key={c.name} {...c} />)}
          </div>

          <SubRule>Primaire (modifiable)</SubRule>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {primaryScale.map(c => <Swatch key={c.name} {...c} />)}
          </div>

          <SubRule>Sémantique</SubRule>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {semantic.map(c => <Swatch key={c.name} {...c} />)}
          </div>
        </Section>

        {/* TYPE */}
        <Section eyebrow="04" title="Typographie" description="Une seule famille géométrique, huit tailles. Mono pour les données et les métadonnées. Pas de serif d'affichage — la vitesse de lecture l'emporte.">
          <TypeSpec name="display/xl" sample="Épaisseur maculaire — œil gauche" fontSize={88} lineHeight={1.0} weight={500} tracking="-0.03em" fontFamily="var(--font-display)" />
          <TypeSpec name="display/l"  sample="Vue d'ensemble des cohortes" fontSize={56} lineHeight={1.05} weight={500} tracking="-0.02em" fontFamily="var(--font-display)" />
          <TypeSpec name="title/m"    sample="Visite du 12 avr. 2026 · 14h32" fontSize={28} lineHeight={1.2} weight={500} tracking="-0.01em" fontFamily="var(--font-display)" />
          <TypeSpec name="body/l"     sample="OCT terminé. En attente de revue clinicienne avant export du dossier." fontSize={18} lineHeight={1.55} weight={400} tracking="0" fontFamily="var(--font-body)" />
          <TypeSpec name="body/m"     sample="OCT terminé. En attente de revue clinicienne avant export du dossier." fontSize={15} lineHeight={1.55} weight={400} tracking="0" fontFamily="var(--font-body)" />
          <TypeSpec name="caption"    sample="IPP-2189 · ID 4421" fontSize={12} lineHeight={1.4} weight={500} tracking="0.06em" fontFamily="var(--font-body)" />
          <TypeSpec name="mono/data"  sample="OD 285 µm   OG 271 µm   Δ +14" fontSize={14} lineHeight={1.4} weight={500} tracking="0" fontFamily="var(--font-mono)" />
        </Section>

        {/* ICONS */}
        <Section eyebrow="05" title="Jeu d'icônes" description="Tracés d'épaisseur unique, 1.5px sur une grille de 24 unités. Géométriques, jamais illustratives. Les icônes s'alignent sur la même ligne de base que la typographie environnante.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12 }}>
            {[
              { kind: "iris", name: "iris" },
              { kind: "scan", name: "scan" },
              { kind: "lens", name: "lentille" },
              { kind: "drop", name: "goutte" },
              { kind: "wave", name: "onde" },
              { kind: "cross", name: "croix" },
              { kind: "doc", name: "document" },
              { kind: "calendar", name: "calendrier" },
              { kind: "user", name: "patient" },
              { kind: "alert", name: "alerte" },
              { kind: "check", name: "valider" },
              { kind: "search", name: "recherche" },
            ].map(i => <IconCell key={i.name} {...i} />)}
          </div>
          <div style={{ marginTop: 24, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--muted)" }}>
            12 sur 96 du jeu de production — marqueurs pour le catalogue complet.
          </div>
        </Section>

        {/* COMPONENTS */}
        <Section eyebrow="06" title="Composants" description="Une base rigide. Boutons, champs, cartes, alertes — le vocabulaire opérationnel de chaque écran clinique.">
          <SubRule>Boutons</SubRule>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <ButtonA variant="primary">Confirmer la revue</ButtonA>
            <ButtonA variant="secondary">Enregistrer brouillon</ButtonA>
            <ButtonA variant="ghost">Annuler</ButtonA>
            <ButtonA variant="primary" disabled>Désactivé</ButtonA>
            <ButtonA variant="primary" small>Petit</ButtonA>
            <ButtonA variant="critical">Sortie patient</ButtonA>
          </div>

          <SubRule>Champs de formulaire</SubRule>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32, maxWidth: 900 }}>
            <FieldA label="IPP patient" value="IPP-2189-04" hint="Pré-rempli depuis le dossier" />
            <FieldA label="Code diagnostic" value="" placeholder="CIM-10" />
            <FieldA label="Date de visite" value="2026-04-12" />
            <FieldA label="Notes" value="OCT bilatéral acquis ; qualité 9/10." textarea />
          </div>

          <SubRule>Cartes</SubRule>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <PatientCardA />
            <MetricCardA />
            <AlertCardA />
          </div>

          <SubRule>Alertes</SubRule>
          <div style={{ display: "grid", gap: 12 }}>
            <AlertA tone="info" title="Scan en file d'attente" body="L'OCT du patient IPP-2189 est en attente de transfert depuis la salle d'imagerie." />
            <AlertA tone="warning" title="Calibration due dans 3 jours" body="La fenêtre de calibration de l'OCT-3 expire le 30 avril 2026." />
            <AlertA tone="critical" title="Seuil d'épaisseur maculaire dépassé" body="Patient IPP-1109 — Δ +52 µm par rapport à la référence. Revue recommandée." />
            <AlertA tone="success" title="Compte rendu signé" body="Dr Aubry a validé le résumé de visite à 16h04." />
          </div>
        </Section>

        <div style={{ height: 96 }} />
      </div>
    </div>
  );
};

// --- Logo mark ----------------------------------------------------
const LogoMarkA = ({ size = 64, color = "currentColor", showGrid = false }) => {
  const s = size;
  const c = s / 2;
  // Concentric: outer ring, inner ring, center dot — a fovea schematic.
  const outerR = s * 0.46;
  const innerR = s * 0.28;
  const dotR = s * 0.10;
  const stroke = Math.max(2, s * 0.045);
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} aria-label="RetinaFlow mark">
      {showGrid && (
        <g stroke="rgba(0,0,0,0.06)" strokeWidth={1}>
          {Array.from({ length: 24 }).map((_, i) => (
            <line key={`h${i}`} x1={0} y1={(i + 1) * (s / 24)} x2={s} y2={(i + 1) * (s / 24)} />
          ))}
          {Array.from({ length: 24 }).map((_, i) => (
            <line key={`v${i}`} x1={(i + 1) * (s / 24)} y1={0} x2={(i + 1) * (s / 24)} y2={s} />
          ))}
        </g>
      )}
      <circle cx={c} cy={c} r={outerR} fill="none" stroke={color} strokeWidth={stroke} />
      <circle cx={c} cy={c} r={innerR} fill="none" stroke={color} strokeWidth={stroke} />
      <circle cx={c} cy={c} r={dotR} fill={color} />
    </svg>
  );
};

// --- Components ---------------------------------------------------
const ButtonA = ({ variant = "primary", small, disabled, children }) => {
  const base = {
    fontFamily: "var(--font-display)",
    fontSize: small ? 13 : 15,
    fontWeight: 500,
    letterSpacing: "-0.005em",
    padding: small ? "8px 14px" : "12px 20px",
    border: "1px solid transparent",
    borderRadius: 2,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background 120ms ease",
  };
  const variants = {
    primary:   { background: "var(--primary)", color: "var(--primary-ink)", borderColor: "var(--primary)" },
    secondary: { background: "var(--surface)", color: "var(--ink)", borderColor: "var(--ink)" },
    ghost:     { background: "transparent", color: "var(--ink)", borderColor: "transparent" },
    critical:  { background: "#A8202F", color: "white", borderColor: "#A8202F" },
  };
  return <button style={{ ...base, ...variants[variant] }} disabled={disabled}>{children}</button>;
};

const FieldA = ({ label, value, hint, placeholder, textarea }) => (
  <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>{label}</span>
    {textarea ? (
      <textarea defaultValue={value} placeholder={placeholder} style={{
        fontFamily: "var(--font-body)",
        fontSize: 15,
        padding: "12px 14px",
        border: "1px solid var(--rule)",
        borderRadius: 2,
        background: "var(--surface)",
        color: "var(--ink)",
        minHeight: 96,
        resize: "vertical",
      }} />
    ) : (
      <input defaultValue={value} placeholder={placeholder} style={{
        fontFamily: "var(--font-body)",
        fontSize: 15,
        padding: "12px 14px",
        border: "1px solid var(--rule)",
        borderRadius: 2,
        background: "var(--surface)",
        color: "var(--ink)",
      }} />
    )}
    {hint && <span style={{ fontSize: 12, color: "var(--muted)" }}>{hint}</span>}
  </label>
);

const PatientCardA = () => (
  <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", padding: 24 }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", color: "var(--muted)" }}>IPP · 2189-04</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--primary)" }}>● ACTIF</div>
    </div>
    <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em", marginTop: 16 }}>Camille Roussel</div>
    <div style={{ fontSize: 14, color: "var(--muted-strong)", marginTop: 4 }}>F · 64 ans · Née le 1962-03-08</div>
    <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontFamily: "var(--font-mono)", fontSize: 12 }}>
      <div><div style={{ color: "var(--muted)" }}>OD</div><div>285 µm</div></div>
      <div><div style={{ color: "var(--muted)" }}>OG</div><div>271 µm</div></div>
    </div>
  </div>
);

const MetricCardA = () => (
  <div style={{ background: "var(--ink)", color: "white", padding: 24 }}>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)" }}>SCANS / 24H</div>
    <div style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 500, letterSpacing: "-0.03em", marginTop: 16, lineHeight: 1 }}>1 284</div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 12 }}>
      <span style={{ color: "color-mix(in oklch, white 70%, var(--primary))" }}>▲ 8,4 %</span>
      <span style={{ color: "rgba(255,255,255,0.6)" }}>vs 24h préc.</span>
    </div>
    <div style={{ marginTop: 24, height: 48, display: "flex", alignItems: "flex-end", gap: 4 }}>
      {[14, 22, 18, 28, 34, 30, 42, 38, 46, 40, 52, 48].map((h, i) => (
        <div key={i} style={{ flex: 1, height: `${h}px`, background: "rgba(255,255,255,0.5)" }} />
      ))}
    </div>
  </div>
);

const AlertCardA = () => (
  <div style={{ background: "var(--primary-tint)", border: "1px solid var(--primary)", padding: 24, color: "var(--ink)" }}>
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <IconStub kind="alert" size={20} stroke={1.5} color="var(--primary)" />
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--primary)" }}>Action requise</div>
    </div>
    <div style={{ fontSize: 18, fontWeight: 500, marginTop: 16, lineHeight: 1.35 }}>3 OCT requièrent une validation médicale avant la fin de la garde.</div>
    <div style={{ marginTop: 20 }}>
      <ButtonA variant="primary" small>Ouvrir la file</ButtonA>
    </div>
  </div>
);

const AlertA = ({ tone, title, body }) => {
  const tones = {
    info:     { bar: "#1F4B8A", bg: "color-mix(in oklch, #1F4B8A 6%, white)" },
    warning:  { bar: "#B26A00", bg: "color-mix(in oklch, #B26A00 6%, white)" },
    critical: { bar: "#A8202F", bg: "color-mix(in oklch, #A8202F 6%, white)" },
    success:  { bar: "#1E7F5A", bg: "color-mix(in oklch, #1E7F5A 6%, white)" },
  };
  const t = tones[tone];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "4px 1fr auto", gap: 0, background: t.bg, border: "1px solid var(--rule)" }}>
      <div style={{ background: t.bar }} />
      <div style={{ padding: "16px 20px" }}>
        <div style={{ fontSize: 15, fontWeight: 500, color: "var(--ink)" }}>{title}</div>
        <div style={{ fontSize: 14, color: "var(--muted-strong)", marginTop: 4 }}>{body}</div>
      </div>
      <div style={{ padding: 16, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--muted)", textTransform: "uppercase" }}>{tone}</div>
    </div>
  );
};

Object.assign(window, { DirectionA });

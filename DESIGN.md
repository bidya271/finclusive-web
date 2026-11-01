# Finclusive.si DESIGN.md
# Source of Truth for Visual Design, Spatial Tokens & Interaction Systems

## 1. Brand Essence & Emotional Feeling Curve
- **Brand Identity**: Sovereign Agentic AI & Autonomous Engineering Infrastructure for Regulated Banking and Global Financial Institutions.
- **First 3 Seconds**: A feeling of quiet institutional authority, Swiss engineering precision, and fluid cinematic intelligence. Not a startup template, but an enterprise-grade technology accelerator.
- **Emotional Arc**: 
  1. *Immediate Authority* (Hero & Display Typography)
  2. *Interactive Proof* (Live Agent Swarm State Machine)
  3. *Structural Substance* (Viom-grade Accelerators)
  4. *Technical Reality* (Real MCP Schemas & Code)
  5. *Clear Trajectory* (Engineering Roadmap & Partnership Intake)

---

## 2. Color System & Surfaces
```css
:root {
  /* Surfaces */
  --bg-page: #FAF8F5;          /* Warm linen canvas */
  --bg-surface: #FFFFFF;       /* Crisp card plane */
  --bg-subtle: #F2EFE9;        /* Warm secondary tone step */
  --bg-obsidian: #0D1411;      /* Deep midnight green-charcoal */
  --bg-obsidian-subtle: #141E1A;/* Terminal surface */
  
  /* Ink & Typography */
  --text-main: #141715;        /* Deep carbon ink */
  --text-muted: #575E59;       /* Secondary body copy */
  --text-faint: #8E9690;       /* Footers and metadata */
  
  /* Accents */
  --brand-green: #068241;      /* RemitPe signature emerald */
  --brand-green-hover: #056B35;/* Active state */
  --brand-green-tint: #E8F5EE; /* Status highlight */
  --brand-purple: #5033A4;     /* Deep royal purple */
  --brand-purple-tint: #F3EFFE;/* Accent tint */
  
  /* Dividers */
  --divider: #EAE6DF;
  --divider-dark: #232E27;
}
```

---

## 3. Typographic Hierarchy
- **Display Headlines**: `Instrument Serif`, Regular (400), `clamp(2.8rem, 7.5vw, 6.2rem)`, `line-height: 0.98`, `letter-spacing: -0.035em`.
- **Subheadings**: `Instrument Serif`, Regular (400), `clamp(2.2rem, 5vw, 4rem)`, `line-height: 1.05`.
- **Body Text**: `Inter` / `Geist Sans`, Regular (400) & Medium (500), `16px–18px`, `line-height: 1.6`.
- **Code & Telemetry**: `JetBrains Mono` / `Geist Mono`, `13px–14px`, reserved exclusively for code blocks and active telemetry data.

---

## 4. Spatial Layout & Rules
- **Margins**: Equal outer margins (24px mobile, 48px–64px desktop).
- **Section Spacing**: 96px–140px vertical separation.
- **Card Radius**: `16px` to `24px` rounded radii for modern architectural feel.
- **Elevation**: Soft organic ambient shadows (`0 20px 40px -15px rgba(20, 23, 21, 0.05)`). No harsh brutalist drop cutouts.
- **Motion**: Lenis smooth scroll normalization with cubic bezier transition physics.

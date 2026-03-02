# Component library — Superteam Ukraine

Use this to build the **Component library** page in Figma. Create reusable components and variants where noted.

---

## 1. Buttons

### Primary (CTA)
- **Background:** Accent `#facc15`
- **Text:** On accent `#0a0c14`, Plus Jakarta Sans Semibold, 14px
- **Padding:** 10px 20px (min height 44px for touch)
- **Border radius:** 8px
- **Shadow:** `0 0 20px rgba(250,204,21,0.35)`
- **Hover:** Slightly lighter yellow, stronger shadow
- **Example label:** "Join the Community"

### Secondary (outline)
- **Background:** Transparent / surface
- **Border:** 1px `#323850`
- **Text:** `#f8fafc`, Plus Jakarta Sans Medium, 14px
- **Padding:** 10px 20px
- **Border radius:** 8px
- **Hover:** Border tint accent, background slightly elevated
- **Example label:** "What we do"

### Text link (accent)
- **Text:** `#facc15`, Caption, medium. Underline on hover.
- **Used for:** "See events ↗", "Apply for grants", "Join Telegram ↗"

---

## 2. Header

- **Sticky bar,** full width, background `#0f121c` at 95% opacity, bottom border `#323850` 60%
- **Left:** Logo (Ukraine flag 20×20px) + "Superteam Ukraine" (desktop) / "ST UA" (mobile)
- **Right (desktop):** Nav links (Home, Events, Team, Grants, Community, FAQ) + Telegram + X
- **Mobile:** Hamburger icon; open state shows nav links in a column, min touch target 44px
- **Nav link style:** Caption, muted color, hover to primary text

---

## 3. Footer

- **Top:** 1px gradient bar (Ukraine blue → yellow)
- **Background:** Surface at 50% opacity
- **Layout:** Two rows — (1) Logo + "Superteam Ukraine" / "ex Kumeka Team · #1 Solana Web3 hub in Ukraine"; nav: Telegram, X/Twitter, Superteam Global, Solana. (2) Newsletter block: "Stay updated", email input, "Subscribe" button. (3) Tagline + copyright.
- **Links:** Accent color, caption weight
- **Copyright:** "© [year] Superteam Ukraine. ex Kumeka Team." — caption, subtle text color

---

## 4. Cards

### Section card (e.g. Mission, What we do)
- **Background:** Surface `#161a28` or Surface elevated `#202638`
- **Border:** 1px `#323850` at 50%
- **Border radius:** 12px
- **Padding:** 24px
- **Hover:** Border tint accent, card shadow (see Style guide)

### Stat card (By the numbers)
- Same as section card; add **left border** 4px accent `#facc15`
- **Number:** Display font, 30–36px, accent color
- **Label:** Caption, muted, below number

### Event card
- Same base as section card; content: title (title style), location (caption), date (caption), CTA link with ↗

### Partner card
- Same base; content: partner name (title), short description (caption). Hover: slight scale (e.g. 102%), stronger border/shadow.

### Team card
- Same base; **avatar:** circle, 64×64px, background surface-muted, centered "?" in subtle text color (placeholder). Name (title), role (caption).

---

## 5. Section block

- **Container:** Max width 1152px, centered, horizontal padding 16–24px, vertical padding 80–96px
- **Eyebrow:** Caption, uppercase, letter-spacing 0.1em, accent (optional: small wheat icon before "What we stand for")
- **Title:** Display style, primary text
- **Intro paragraph:** Body, muted, max-width ~672px
- **Content:** Grid or list of cards (see above)

---

## 6. Hero block

- **Background:** Page bg + wheat pattern (optional) + gradient overlays (purple top-left, Ukraine blue top)
- **Top bar:** 1px gradient (transparent → Ukraine blue → Ukraine yellow)
- **Content left:** Eyebrow "ex Kumeka Team" → Headline → Body paragraph → Primary + Secondary buttons
- **Right (desktop):** Decorative wheat icon or empty; optional placeholder area
- **Media placeholder:** Large rounded rectangle (e.g. 16:9), overlay text "Slider or video goes here", "Community · Solana · Ukraine", "Real-life events in Kyiv, Lviv & online", primary button "Join the Community"

---

## 7. FAQ item

- **Container:** Card style
- **Question row:** Title font, semibold, primary text; right-aligned "+" / "−" in a circle (accent bg)
- **Answer:** Collapsible; caption, muted, padding below question when expanded

---

## 8. Form elements

### Email input (newsletter)
- **Background:** `#0f121c`
- **Border:** 1px border color, focus: accent
- **Text:** Caption, primary color. Placeholder: subtle
- **Border radius:** 8px
- **Padding:** 8px 12px

### Subscribe button
- Same as primary button; label "Subscribe"

---

## 9. Back to top

- **Position:** Fixed bottom-right, 24px from edges
- **Shape:** Circle, 44×44px, surface background, border, accent arrow "↑"
- **Visible:** After scroll (e.g. >400px); not a Figma component state, just show one state

---

## 10. Skip link

- **Position:** Fixed top-left, off-screen until focused
- **Style:** Accent background, dark text, padding, rounded. Shown on focus for accessibility (optional in Figma).

---

## Variants to create in Figma

- **Button:** Primary / Secondary
- **Card:** Default / Hover (optional)
- **Header:** Desktop / Mobile (closed) / Mobile (open)
- **FAQ item:** Collapsed / Expanded

const HERO_IMAGES = {
  budget: [
    "https://images.pixora.es/images/pixora-assets/hero/budget/budget-1.webp",
    "https://images.pixora.es/images/pixora-assets/hero/budget/budget-2.webp",
    "https://images.pixora.es/images/pixora-assets/hero/budget/budget-3.webp",
    "https://images.pixora.es/images/pixora-assets/hero/budget/budget-4.webp",
    "https://images.pixora.es/images/pixora-assets/hero/budget/budget-5.webp",
  ],
  track: [
    "https://images.pixora.es/images/pixora-assets/hero/track/track-1.webp",
    "https://images.pixora.es/images/pixora-assets/hero/track/track-2.webp",
    "https://images.pixora.es/images/pixora-assets/hero/track/track-3.webp",
    "https://images.pixora.es/images/pixora-assets/hero/track/track-4.webp",
    "https://images.pixora.es/images/pixora-assets/hero/track/track-5.webp",
  ],
  play: [
    "https://images.pixora.es/images/pixora-assets/hero/play/play-1.webp",
    "https://images.pixora.es/images/pixora-assets/hero/play/play-2.webp",
    "https://images.pixora.es/images/pixora-assets/hero/play/play-3.webp",
    "https://images.pixora.es/images/pixora-assets/hero/play/play-4.webp",
    "https://images.pixora.es/images/pixora-assets/hero/play/play-5.webp",
  ],
};

const APP_CARD_IMAGES = {
  budget: HERO_IMAGES.budget[0],
  track: HERO_IMAGES.track[0],
  play: HERO_IMAGES.play[0],
};

const SITE_BASE_URL = new URL(".", document.currentScript?.src || window.location.href);

function siteAsset(path) {
  return new URL(path.replace(/^\/+/, ""), SITE_BASE_URL).href;
}

const PIXORA_APPS = {
  budget: {
    key: "budget",
    name: "PIXORA Budget",
    shortName: "Budget",
    route: "budget/index.html",
    tone: "budget",
    pageTitle: "PIXORA Budget | Personal Finance, Budgeting and Spending Plans",
    eyebrow: "PIXORA BUDGET",
    kicker: "Personal finance",
    headline: "Know what you can spend with confidence.",
    lead: "Plan spending, track accounts and keep investments, loans and mortgages visible in one calm personal finance app.",
    description:
      "PIXORA Budget helps you understand available cash, planned spending, investments and debt without losing sight of everyday money.",
    price: "€4.99",
    priceNote: "Personal budgeting app",
    image: APP_CARD_IMAGES.budget,
    heroImages: HERO_IMAGES.budget,
    heroAlt: "PIXORA Budget app screen",
    cta: "Explore Budget",
    primaryCta: "See how it works",
    secondaryCta: "Contact PIXORA",
    finalCtaHeading: "Download PIXORA Budget",
    finalCtaText: "Available on Google Play. Search PIXORA Budget to start managing your money.",
    finalCtaButton: "Search on Google Play",
    features: [
      "See available cash clearly",
      "Plan monthly spending",
      "Track investments and debt",
    ],
    whatItIs:
      "PIXORA Budget brings personal accounts, income, spending, transfers, plans, investments and debt into one organised money view.",
    whoFor:
      "For people who want a practical way to understand everyday cash, planned spending and longer-term financial commitments.",
    whyPeopleUseIt: [
      "To see what is actually available to spend after protected balances and plans are considered.",
      "To compare monthly spending against plans before small habits become expensive surprises.",
      "To keep investments, loans and mortgages visible beside daily money decisions.",
      "To use local data, backup options and app lock controls for a more private finance routine.",
    ],
    keyFeatures: [
      "See spendable cash clearly",
      "Track income, expenses and transfers",
      "Plan monthly spending by category",
      "Keep investments visible",
      "Follow loan and mortgage progress",
      "Review insights, charts, backup and PIN lock",
    ],
    howItWorks: [
      {
        title: "Plan your money",
        text: "Track accounts, spending plans, transfers and everyday cash flow.",
      },
      {
        title: "Understand what's available",
        text: "Separate spendable cash from savings, investments and protected balances.",
      },
      {
        title: "Stay close to progress",
        text: "Review spending, investments, loans, mortgages and monthly movement.",
      },
    ],
    featureCallouts: [
      {
        title: "Cash balance",
        text: "See total account, savings and investment balances converted into your base currency.",
      },
      {
        title: "Available to spend",
        text: "Keep spendable money separate from savings, investments and protected balances.",
      },
      {
        title: "Monthly performance",
        text: "Review what is left after income and spending for the selected month.",
      },
      {
        title: "Quick actions",
        text: "Use the add button and bottom navigation to move between daily money tasks.",
      },
    ],
    supportTitle: "Explore more of PIXORA Budget",
    supportScreenshots: [
      { image: HERO_IMAGES.budget[1], label: "Spending Plans" },
      { image: HERO_IMAGES.budget[3], label: "Transactions" },
      { image: HERO_IMAGES.budget[2], label: "Investments" },
      { image: HERO_IMAGES.budget[4], label: "Insights & charts" },
    ],
  },
  track: {
    key: "track",
    name: "PIXORA Track",
    shortName: "Track",
    route: "track/index.html",
    tone: "track",
    pageTitle: "PIXORA Track | Business Finance, Cash Position and Performance",
    eyebrow: "PIXORA TRACK",
    kicker: "Business finance",
    headline: "See your business position clearly.",
    lead: "Track income, expenses, unpaid items, cash, tax amounts and reports without falling back into spreadsheet guesswork.",
    description:
      "PIXORA Track helps small businesses follow cash, performance, unpaid items and core finance reports in one focused workflow.",
    price: "€9.99",
    priceNote: "Business finance tracking",
    image: APP_CARD_IMAGES.track,
    heroImages: HERO_IMAGES.track,
    heroAlt: "PIXORA Track app screen",
    cta: "Explore Track",
    primaryCta: "See how it works",
    secondaryCta: "Contact PIXORA",
    finalCtaHeading: "Download PIXORA Track",
    finalCtaText: "Available on Google Play. Search PIXORA Track to track your business finances.",
    finalCtaButton: "Search on Google Play",
    features: [
      "Understand cash position",
      "Track paid and unpaid activity",
      "Review business reports",
    ],
    whatItIs:
      "PIXORA Track is a business finance tracker for paid transactions, unpaid items, bank balances, tax amounts and financial reports.",
    whoFor:
      "For small business owners and operators who need a clear day-to-day view of cash, activity and performance.",
    whyPeopleUseIt: [
      "To separate paid transactions from unpaid income and outgoings.",
      "To understand cash position across business bank accounts.",
      "To review revenue, expenses, net profit and balance sheet position.",
      "To keep sales tax, exports and financial-year close workflows organised.",
    ],
    keyFeatures: [
      "Track paid income and expenses",
      "Stay on top of unpaid income and expenses",
      "Track cash across business accounts",
      "Understand profit and financial position",
      "Keep tax amounts visible",
      "Export, back up and close financial years",
    ],
    howItWorks: [
      {
        title: "Record business activity",
        text: "Track income, expenses, unpaid items and bank movements.",
      },
      {
        title: "Monitor cash and performance",
        text: "See cash position, pending outgoings, profit and financial reports.",
      },
      {
        title: "Keep records organised",
        text: "Use reports, exports, tax handling and financial-year workflows.",
      },
    ],
    featureCallouts: [
      {
        title: "Cash position",
        text: "Show current cash balance, available cash and pending outgoings.",
      },
      {
        title: "Business performance",
        text: "Highlight monthly net profit, revenue and movement from the previous month.",
      },
      {
        title: "Navigation",
        text: "Quick access to dashboard, transactions, insights and settings.",
      },
      {
        title: "Add button",
        text: "Quickly add new business activity from the dashboard.",
      },
    ],
    supportTitle: "Explore more of PIXORA Track",
    supportScreenshots: [
      { image: HERO_IMAGES.track[4], label: "Transactions" },
      { image: HERO_IMAGES.track[1], label: "Profit & Loss" },
      { image: HERO_IMAGES.track[2], label: "Balance Sheet" },
      { image: HERO_IMAGES.track[3], label: "Cash / Banks" },
    ],
  },
  play: {
    key: "play",
    name: "PIXORA Play",
    shortName: "Play",
    route: "play/index.html",
    tone: "play",
    pageTitle: "PIXORA Play | Colouring, Drawing and Family Creativity",
    eyebrow: "PIXORA PLAY",
    kicker: "Family creativity",
    headline: "Creative screen time with room to play.",
    lead: "Colour, draw and solve playful puzzles in a bright family-friendly app with saved artwork and level progress.",
    description:
      "PIXORA Play gives families colouring, drawing and puzzle activities with saved creativity and level-based challenges.",
    price: "Free",
    priceNote: "Optional premium planned",
    image: APP_CARD_IMAGES.play,
    heroImages: HERO_IMAGES.play,
    heroAlt: "PIXORA Play app screen",
    cta: "Explore Play",
    primaryCta: "See activities",
    secondaryCta: "Contact PIXORA",
    finalCtaHeading: "Download PIXORA Play",
    finalCtaText: "Available on Google Play. Search PIXORA Play and start creating.",
    finalCtaButton: "Search on Google Play",
    features: [
      "Colour and draw freely",
      "Play puzzle challenges",
      "Save progress locally",
    ],
    whatItIs:
      "PIXORA Play combines colouring packs, a drawing canvas and puzzle games in one creative app for families.",
    whoFor:
      "For families looking for creative activities, saved artwork and gentle puzzle challenges.",
    whyPeopleUseIt: [
      "To give children a simple space for colouring and drawing.",
      "To mix creative activities with memory, maze and rope puzzle challenges.",
      "To keep artwork and puzzle progress saved locally.",
      "To offer a brighter, more focused play experience with a premium ad-free option.",
    ],
    keyFeatures: [
      "Choose themed colouring packs",
      "Save colouring pages and drawings",
      "Create with brushes, colours and stamps",
      "Play memory, maze and rope puzzles",
      "Keep level progress locally",
      "Remove ads with Premium",
    ],
    howItWorks: [
      {
        title: "Choose an activity",
        text: "Start with colouring, drawing, memory cards, mazes or rope puzzles.",
      },
      {
        title: "Create and solve",
        text: "Use brushes, colours, stamps and puzzle challenges to play creatively.",
      },
      {
        title: "Keep progressing",
        text: "Save artwork and move through level-based puzzle challenges.",
      },
    ],
    featureCallouts: [
      {
        title: "Activity home",
        text: "Start from a friendly home screen built around creative play.",
      },
      {
        title: "Colouring",
        text: "Pick a picture pack and colour it in.",
      },
      {
        title: "Drawing",
        text: "Open a blank page for doodles with fun brushes.",
      },
      {
        title: "Puzzles",
        text: "Jump into playful challenges for memory, mazes and rope puzzles.",
      },
    ],
    supportTitle: "Explore more of PIXORA Play",
    supportScreenshots: [
      { image: HERO_IMAGES.play[1], label: "Colouring" },
      { image: HERO_IMAGES.play[2], label: "Drawing" },
      { image: HERO_IMAGES.play[4], label: "Memory Cards" },
      { image: HERO_IMAGES.play[3], label: "Maze / Puzzles" },
    ],
  },
};

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function appList() {
  return [PIXORA_APPS.budget, PIXORA_APPS.track, PIXORA_APPS.play];
}

function screenshotButton({ image, label, className, imageClassName = "" }) {
  const imageClass = imageClassName ? ` class="${imageClassName}"` : "";
  return `
    <button class="${className}" type="button" data-screenshot-src="${image}" data-screenshot-caption="${label}" aria-label="Open ${label} screenshot larger">
      <img${imageClass} src="${image}" alt="${label}" width="1480" height="2800" loading="lazy" decoding="async" />
    </button>
  `;
}

function supportScreenButton({ image, label, appName }) {
  return `
    <button class="support-screen-card" type="button" data-screenshot-src="${image}" data-screenshot-caption="${appName} ${label}" aria-label="Open ${appName} ${label} screenshot larger">
      <span>${label}</span>
    </button>
  `;
}

function renderSupportSection(app) {
  if (app.supportScreenshots?.length) {
    return `
      <section class="app-content-section app-support-section">
        <div class="section-head-left">
          <div class="tag">More screens</div>
          <h2>${app.supportTitle}</h2>
        </div>
        <div class="support-screen-grid">
          ${app.supportScreenshots.map((shot) => supportScreenButton({
            image: shot.image,
            label: shot.label,
            appName: app.name,
          })).join("")}
        </div>
      </section>
    `;
  }

  return "";
}

function closeMobileNav() {
  const header = document.querySelector(".header");
  const navToggle = document.querySelector(".nav-toggle");
  if (!header || !navToggle) return;
  header.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function initNavigation() {
  const header = document.querySelector(".header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("navMenu");
  if (!header || !navToggle || !navMenu) return;

  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeMobileNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileNav();
  });
}

function createHeroPhone(app, position) {
  const link = document.createElement("a");
  link.className = `hero-phone hero-phone-${position} app-tone-${app.tone}`;
  link.href = app.route;
  link.setAttribute("aria-label", app.cta);

  const image = document.createElement("img");
  image.src = pickRandom(app.heroImages);
  image.alt = app.heroAlt;
  image.width = 1480;
  image.height = 2800;
  image.sizes =
    position === "budget"
      ? "(max-width: 620px) 42vw, (max-width: 900px) 30vw, 430px"
      : "(max-width: 620px) 30vw, (max-width: 900px) 24vw, 350px";
  image.decoding = "async";
  image.loading = "eager";
  if (position === "budget") {
    image.fetchPriority = "high";
    image.setAttribute("fetchpriority", "high");
  }

  const inner = document.createElement("span");
  inner.className = "hero-phone-inner";
  inner.append(image);

  const overlay = document.createElement("span");
  overlay.className = "hero-phone-overlay";
  overlay.innerHTML = `
    <strong>${app.name}</strong>
    <span class="hero-phone-cta-desktop">${app.cta}</span>
    <span class="hero-phone-cta-mobile">Open ${app.shortName}</span>
  `;

  link.append(inner, overlay);
  return link;
}

function initHeroPhoneTaps() {
  const stage = document.querySelector("[data-hero-phones]");
  if (!stage) return;

  const prefersTapPreview = window.matchMedia("(hover: none), (pointer: coarse)");

  const clearSelectedPhone = () => {
    stage.querySelectorAll(".hero-phone.is-selected").forEach((phone) => {
      phone.classList.remove("is-selected");
      phone.setAttribute("aria-expanded", "false");
    });
  };

  stage.querySelectorAll(".hero-phone").forEach((phone) => {
    phone.setAttribute("aria-expanded", "false");

    phone.addEventListener("click", (event) => {
      if (event.detail === 0) return;
      if (!prefersTapPreview.matches) return;

      const isSelected = phone.classList.contains("is-selected");
      const tappedBadge = event.target.closest(".hero-phone-overlay");

      if (!isSelected || !tappedBadge) {
        event.preventDefault();
        clearSelectedPhone();
        phone.classList.add("is-selected");
        phone.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!prefersTapPreview.matches || stage.contains(event.target)) return;
    clearSelectedPhone();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") clearSelectedPhone();
  });
}

function renderHeroSection() {
  const mount = document.querySelector("[data-hero-phones]");
  if (!mount) return;
  mount.replaceChildren(
    createHeroPhone(PIXORA_APPS.track, "track"),
    createHeroPhone(PIXORA_APPS.budget, "budget"),
    createHeroPhone(PIXORA_APPS.play, "play")
  );
  initHeroPhoneTaps();
}

function renderAppCards() {
  const mount = document.querySelector("[data-app-card-list]");
  if (!mount) return;

  const cards = appList().map((app) => {
    const article = document.createElement("article");
    article.className = `apple-product apple-product-${app.key}`;
    article.innerHTML = `
      <div class="apple-product-inner">
        <div class="apple-product-media">
          <img src="${app.image}" alt="${app.heroAlt}" loading="lazy" decoding="async" />
        </div>
        <div class="apple-product-copy">
          <div class="product-kicker">${app.name}</div>
          <h2>${app.headline}</h2>
          <p>${app.lead}</p>
          <div class="apple-card-points">
            ${app.features.map((feature) => `<span>${feature}</span>`).join("")}
          </div>
          <a class="panel-cta" href="${app.route}">Learn more →</a>
        </div>
      </div>
    `;
    return article;
  });

  mount.replaceChildren(...cards);
}

function renderAppPage() {
  const mount = document.querySelector("[data-app-page]");
  if (!mount) return;
  const key = mount.dataset.appPage;
  const app = PIXORA_APPS[key];
  if (!app) return;

  document.title = app.pageTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", app.description);

  mount.classList.add(`pixora-${app.key}-page`);
  mount.innerHTML = `
    <div class="product-page-inner">
      <section class="app-page-hero">
        <div class="app-page-copy">
          <div class="tag">${app.eyebrow}</div>
          <h1>${app.headline}</h1>
          <p class="product-lead">${app.description}</p>
          <div class="app-page-actions">
            <a class="btn-gradient" href="#features">${app.primaryCta}</a>
          <a class="btn-ghost" href="../index.html#contact">${app.secondaryCta}</a>
          </div>
        </div>
        <div class="app-page-media">
          <img src="${app.heroImages[0]}" alt="${app.heroAlt}" width="1480" height="2800" loading="eager" decoding="async" fetchpriority="high" />
        </div>
      </section>

      <section class="app-content-section app-intro-section" id="features">
        <article class="panel app-story-card app-story-card-large">
          <span class="section-label">What it is</span>
          <h2>${app.shortName === "Play" ? "Creative play, all in one place." : app.shortName === "Track" ? "Business finance, easier to follow." : "Personal finance, clearly organised."}</h2>
          <p>${app.whatItIs}</p>
        </article>
        <article class="panel app-story-card">
          <span class="section-label">Who it's for</span>
          <h2>${app.shortName === "Play" ? "Families and young creators." : app.shortName === "Track" ? "Small business finance." : "Everyday money management."}</h2>
          <p>${app.whoFor}</p>
        </article>
      </section>

      <section class="app-content-section app-outcomes-section">
        <div class="section-head-left">
          <div class="tag">Why people use it</div>
          <h2>${app.shortName === "Play" ? "Create, solve and keep going." : app.shortName === "Track" ? "Stay close to cash and performance." : "Make better money decisions."}</h2>
        </div>
        <div class="outcome-grid">
          ${app.whyPeopleUseIt.map((item) => `<article class="outcome-card"><p>${item}</p></article>`).join("")}
        </div>
      </section>

      <section class="app-content-section app-key-features">
        <div class="section-head-left">
          <div class="tag">Key features</div>
          <h2>${app.shortName === "Play" ? "Built for creative activity." : app.shortName === "Track" ? "A practical business toolkit." : "Everything important stays visible."}</h2>
        </div>
        <div class="feature-pill-grid">
          ${app.keyFeatures.map((feature) => `<span>${feature}</span>`).join("")}
        </div>
      </section>

      <section class="app-content-section app-how-section">
        <div class="section-head-left">
          <div class="tag">How it works</div>
          <h2>${app.shortName === "Play" ? "Pick up, play and keep progressing." : app.shortName === "Track" ? "Record, review and stay organised." : "Plan, understand and review."}</h2>
        </div>
        <div class="how-grid">
          ${app.howItWorks.map((step, index) => `
            <article class="how-card">
              <span>${index + 1}</span>
              <h3>${step.title}</h3>
              <p>${step.text}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="app-content-section app-feature-callout-section">
        <div class="section-head-left">
          <div class="tag">Feature callout</div>
          <h2>Understand the main screen at a glance.</h2>
        </div>
        <div class="feature-callout-stage">
          <div class="feature-callout-phone">
            ${screenshotButton({ image: app.heroImages[0], label: `${app.name} main screen`, className: "feature-callout-phone-button" })}
          </div>
          ${app.featureCallouts.map((callout, index) => `
            <article class="feature-callout-card feature-callout-card-${index + 1}">
              <span>${index + 1}</span>
              <h3>${callout.title}</h3>
              <p>${callout.text}</p>
            </article>
          `).join("")}
        </div>
      </section>

      ${renderSupportSection(app)}

      <section class="app-final-cta">
        <div class="app-final-cta-copy">
          <h2>${app.finalCtaHeading}</h2>
          <p>${app.finalCtaText}</p>
        </div>
        <a class="btn-gradient" href="https://play.google.com/store/search?q=${encodeURIComponent(app.name)}&c=apps" target="_blank" rel="noopener noreferrer">${app.finalCtaButton}</a>
      </section>
    </div>
  `;
}

function renderSiteFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;
  const prefix = footer.dataset.linkPrefix || "";

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-col footer-col-brand">
        <a href="${prefix}index.html" class="footer-brand" aria-label="Go to PIXORA homepage">
          <img src="https://images.pixora.es/images/pixora-logo.png" alt="PIXORA logo" class="logo-img" />
        </a>
        <p class="footer-text">
          PIXORA builds simple, modern apps for budgeting, business finance and family creativity.
        </p>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="${prefix}index.html#about">About</a>
        <a href="${prefix}index.html#apps">Apps</a>
        <a href="${prefix}index.html#contact">Contact</a>
      </div>
      <div class="footer-col">
        <h4>Apps</h4>
        <a href="${prefix}budget/index.html">PIXORA Budget</a>
        <a href="${prefix}track/index.html">PIXORA Track</a>
        <a href="${prefix}play/index.html">PIXORA Play</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="${prefix}privacy/index.html">Privacy Policy</a>
        <a href="${prefix}terms/index.html">Terms &amp; Conditions</a>
      </div>
      <div class="footer-col footer-col-contact">
        <h4>Contact</h4>
        <a href="mailto:hello@pixora.es">hello@pixora.es</a>
        <a href="https://www.instagram.com/pixora.es" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.facebook.com/pixora.es" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 PIXORA. All rights reserved.</span>
    </div>
  `;
}

function initBackToTop() {
  const backToTop = document.getElementById("backToTop");
  if (!backToTop) return;

  const toggleBackToTop = () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 420);
  };

  backToTop.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  });

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
}

function initScreenshotLightbox() {
  const triggers = document.querySelectorAll("[data-screenshot-src]");
  if (!triggers.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "screenshot-lightbox";
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <button class="screenshot-lightbox-close" type="button" aria-label="Close screenshot">×</button>
    <figure>
      <img alt="" />
      <figcaption></figcaption>
    </figure>
  `;
  document.body.append(lightbox);

  const image = lightbox.querySelector("img");
  const caption = lightbox.querySelector("figcaption");
  const closeButton = lightbox.querySelector(".screenshot-lightbox-close");

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove("has-screenshot-lightbox");
    image.removeAttribute("src");
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const label = trigger.dataset.screenshotCaption || "PIXORA app screenshot";
      image.src = trigger.dataset.screenshotSrc;
      image.alt = label;
      caption.textContent = label;
      lightbox.hidden = false;
      document.body.classList.add("has-screenshot-lightbox");
      closeButton.focus();
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  renderHeroSection();
  renderAppCards();
  renderAppPage();
  initScreenshotLightbox();
  renderSiteFooter();
  initBackToTop();
});

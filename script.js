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

const PIXORA_BUDGET_OPEN_TEST_URL = "https://play.google.com/apps/testing/com.pixora.budgetapp";
// TODO: Verify the final PIXORA Track Google Play Open Testing URL before publishing.
const PIXORA_TRACK_OPEN_TEST_URL = "https://play.google.com/apps/testing/com.pixora.trackapp";
// TODO: Verify the final PIXORA Play Google Play Open Testing URL before publishing.
const PIXORA_PLAY_OPEN_TEST_URL = "https://play.google.com/apps/testing/com.pixora.play";

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
    headline: "Know exactly what you can safely spend.",
    lead: "PIXORA Budget helps you separate everyday spending money from savings, investments and future commitments, so you can manage your money with confidence.",
    description:
      "PIXORA Budget helps you separate everyday spending money from savings, investments and future commitments, so you can manage your money with confidence.",
    price: "€4.99",
    priceNote: "Personal budgeting app",
    image: APP_CARD_IMAGES.budget,
    heroImages: HERO_IMAGES.budget,
    heroAlt: "PIXORA Budget app screen",
    cta: "Try PIXORA Budget",
    primaryCta: "Try PIXORA Budget",
    ctaUrl: PIXORA_BUDGET_OPEN_TEST_URL,
    ctaNote: "PIXORA Budget is currently available on Google Play as Open Testing.",
    whyLabel: "Why PIXORA Budget",
    whyHeading: "Budgeting that protects the money you need later.",
    keyFeaturesHeading: "The essentials, kept close.",
    howHeading: "Plan, understand and review.",
    features: [
      "See available cash clearly",
      "Plan monthly spending",
      "Track investments and debt",
    ],
    whyPeopleUseIt: [
      {
        title: "Know what's safe to spend",
        text: "Separate everyday spending money from savings, investments and protected balances.",
      },
      {
        title: "Plan ahead",
        text: "Create monthly spending plans and compare actual spending against your plans.",
      },
      {
        title: "See the full picture",
        text: "Keep accounts, loans, mortgages, investments and cash flow visible in one place.",
      },
    ],
    keyFeatures: [
      { icon: "$", label: "Spendable cash" },
      { icon: "+/-", label: "Income, expenses and transfers" },
      { icon: "01", label: "Monthly spending plans" },
      { icon: "%", label: "Investments" },
      { icon: "L", label: "Loans and mortgages" },
      { icon: "CH", label: "Insights and charts" },
      { icon: "BK", label: "Backup options" },
      { icon: "PIN", label: "PIN lock" },
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
        title: "Review your progress",
        text: "Review spending, investments, loans, mortgages and monthly movement.",
      },
    ],
    featureCallouts: [
      {
        title: "Cash balance",
        text: "See your total bank, savings and investment balances.",
      },
      {
        title: "Available to spend",
        text: "Understand what money is actually spendable.",
      },
      {
        title: "Monthly performance",
        text: "Review what is left after income and spending.",
      },
      {
        title: "Quick actions",
        text: "Add transactions and move between daily money tasks.",
      },
    ],
    highlightsLabel: "Main screen highlights",
    highlightsTitle: "Main screen highlights",
    privacyTitle: "Your data stays yours.",
    privacyText:
      "PIXORA Budget is designed to help you manage your money privately with local data, backup options and app lock controls.",
    privacyPoints: [
      "Local-first money tracking",
      "Backup options",
      "PIN lock support",
    ],
    carouselTitle: "App screens",
    carouselScreenshots: [
      {
        image: HERO_IMAGES.budget[0],
        label: "Home / Budget Overview",
        alt: "PIXORA Budget home screen showing cash balance, available to spend and monthly performance.",
      },
      {
        image: HERO_IMAGES.budget[1],
        label: "Spending Plans",
        alt: "PIXORA Budget spending plans screen for tracking planned monthly spending.",
      },
      {
        image: HERO_IMAGES.budget[2],
        label: "Transactions",
        alt: "PIXORA Budget transactions screen for reviewing income, expenses and transfers.",
      },
      {
        image: HERO_IMAGES.budget[3],
        label: "Investments",
        alt: "PIXORA Budget investments screen showing investment balances and progress.",
      },
      {
        image: HERO_IMAGES.budget[4],
        label: "Insights & Charts",
        alt: "PIXORA Budget insights and charts screen showing spending performance.",
      },
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
    lead: "PIXORA Track helps small businesses follow cash, unpaid items, performance and core finance reports in one focused workflow.",
    description:
      "PIXORA Track helps small businesses follow cash, performance, unpaid items and core finance reports in one focused workflow.",
    price: "€9.99",
    priceNote: "Business finance tracking",
    image: APP_CARD_IMAGES.track,
    heroImages: HERO_IMAGES.track,
    heroAlt: "PIXORA Track app screen",
    cta: "Try PIXORA Track",
    primaryCta: "Try PIXORA Track",
    ctaUrl: PIXORA_TRACK_OPEN_TEST_URL,
    ctaNote: "PIXORA Track is currently available on Google Play as Open Testing.",
    whyLabel: "Why PIXORA Track",
    whyHeading: "Business finance that stays easy to review.",
    keyFeaturesHeading: "Everything important stays visible.",
    howHeading: "Record, monitor and stay organised.",
    features: [
      "Understand cash position",
      "Track paid and unpaid activity",
      "Review business reports",
    ],
    whyPeopleUseIt: [
      {
        title: "Track business cash",
        text: "See cash balances, available cash and pending outgoings across your business.",
      },
      {
        title: "Stay on top of unpaid items",
        text: "Separate paid transactions from unpaid income and expenses so nothing gets missed.",
      },
      {
        title: "Review performance clearly",
        text: "Follow revenue, expenses, net profit and balance sheet position in one place.",
      },
    ],
    keyFeatures: [
      { icon: "+/-", label: "Paid income and expenses" },
      { icon: "UP", label: "Unpaid income and expenses" },
      { icon: "$", label: "Cash and bank balances" },
      { icon: "P&L", label: "Profit & loss" },
      { icon: "BS", label: "Balance sheet" },
      { icon: "TAX", label: "Sales tax tracking" },
      { icon: "EX", label: "Exports and backups" },
      { icon: "FY", label: "Financial year close workflow" },
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
    highlightsLabel: "Main screen highlights",
    highlightsTitle: "Main screen highlights",
    privacyTitle: "Business records stay organised.",
    privacyText:
      "PIXORA Track is designed to help small businesses keep finance records clear, backed up and easy to review.",
    privacyPoints: [
      "Backup options",
      "Export support",
      "Organised financial-year workflows",
    ],
    carouselTitle: "App screens",
    carouselScreenshots: [
      {
        image: HERO_IMAGES.track[0],
        label: "Dashboard",
        alt: "PIXORA Track dashboard showing cash position, available cash, pending outgoings and performance.",
      },
      {
        image: HERO_IMAGES.track[1],
        label: "Transactions",
        alt: "PIXORA Track transactions screen showing business income, expenses and activity.",
      },
      {
        image: HERO_IMAGES.track[2],
        label: "Profit & Loss",
        alt: "PIXORA Track profit and loss screen showing revenue, expenses and net profit.",
      },
      {
        image: HERO_IMAGES.track[3],
        label: "Balance Sheet",
        alt: "PIXORA Track balance sheet screen showing business financial position.",
      },
      {
        image: HERO_IMAGES.track[4],
        label: "Cash / Banks",
        alt: "PIXORA Track cash and banks screen showing business bank balances.",
      },
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
    lead: "PIXORA Play gives families colouring, drawing and puzzle activities with saved creativity and level-based challenges.",
    description:
      "PIXORA Play gives families colouring, drawing and puzzle activities with saved creativity and level-based challenges.",
    price: "Free",
    priceNote: "Optional premium planned",
    image: APP_CARD_IMAGES.play,
    heroImages: HERO_IMAGES.play,
    heroAlt: "PIXORA Play app screen",
    cta: "Try PIXORA Play",
    primaryCta: "Try PIXORA Play",
    ctaUrl: PIXORA_PLAY_OPEN_TEST_URL,
    ctaNote: "PIXORA Play is currently available on Google Play as Open Testing.",
    whyLabel: "Why PIXORA Play",
    whyHeading: "Creative activities in one focused family app.",
    keyFeaturesHeading: "Creative tools and puzzle play.",
    howHeading: "Choose, create and keep progressing.",
    features: [
      "Colour and draw freely",
      "Play puzzle challenges",
      "Save progress locally",
    ],
    whyPeopleUseIt: [
      {
        title: "Creative play in one place",
        text: "Colouring, drawing and puzzle activities sit together in one simple family app.",
      },
      {
        title: "Made for young creators",
        text: "Give children a focused space to create, solve and keep progressing.",
      },
      {
        title: "Saved progress",
        text: "Keep artwork and puzzle progress saved locally so children can come back later.",
      },
    ],
    keyFeatures: [
      { icon: "PK", label: "Themed colouring packs" },
      { icon: "SV", label: "Saved colouring pages" },
      { icon: "DR", label: "Drawing canvas" },
      { icon: "BR", label: "Brushes, colours and stamps" },
      { icon: "MC", label: "Memory cards" },
      { icon: "MZ", label: "Maze puzzles" },
      { icon: "RP", label: "Rope puzzles" },
      { icon: "LP", label: "Local progress" },
      { icon: "AD", label: "Premium ad-free option" },
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
    highlightsLabel: "Main screen highlights",
    highlightsTitle: "Main screen highlights",
    privacyTitle: "Creative progress stays saved.",
    privacyText:
      "PIXORA Play is designed to keep artwork and puzzle progress saved locally, giving families a simple creative space.",
    privacyPoints: [
      "Saved artwork",
      "Local progress",
      "Premium ad-free option",
    ],
    carouselTitle: "App screens",
    carouselScreenshots: [
      {
        image: HERO_IMAGES.play[0],
        label: "Home",
        alt: "PIXORA Play home screen showing colouring, drawing and puzzle activities.",
      },
      {
        image: HERO_IMAGES.play[1],
        label: "Colouring",
        alt: "PIXORA Play colouring screen showing themed colouring packs.",
      },
      {
        image: HERO_IMAGES.play[2],
        label: "Drawing",
        alt: "PIXORA Play drawing screen with brushes, colours and stamps.",
      },
      {
        image: HERO_IMAGES.play[3],
        label: "Memory Cards",
        alt: "PIXORA Play memory cards puzzle screen.",
      },
      {
        image: HERO_IMAGES.play[4],
        label: "Maze / Puzzles",
        alt: "PIXORA Play puzzle screen showing maze and challenge activities.",
      },
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

function renderExternalCta(app, className = "btn-gradient") {
  return `
    <a class="${className}" href="${app.ctaUrl}" target="_blank" rel="noopener noreferrer">${app.cta}</a>
  `;
}

function renderFocusedProductPage(app) {
  const carouselTitleId = `${app.key}ScreensTitle`;

  return `
    <div class="product-page-inner focus-landing">
      <section class="focus-hero">
        <div class="focus-hero-copy">
          <h1>${app.headline}</h1>
          <p class="product-lead">${app.lead}</p>
          <div class="focus-hero-actions">
            ${renderExternalCta(app)}
            <p class="cta-note">${app.ctaNote}</p>
          </div>
        </div>
        <div class="focus-hero-media">
          <img src="${app.carouselScreenshots[0].image}" srcset="${app.carouselScreenshots[0].image} 1480w" sizes="(max-width: 620px) 72vw, (max-width: 980px) 320px, 360px" alt="${app.carouselScreenshots[0].alt}" width="1480" height="2800" loading="eager" decoding="async" fetchpriority="high" />
        </div>
      </section>

      <section class="app-content-section focus-why-section" id="why">
        <div class="section-head-left">
          <span class="section-label">${app.whyLabel}</span>
          <h2>${app.whyHeading}</h2>
        </div>
        <div class="focus-card-grid">
          ${app.whyPeopleUseIt.map((item) => `
            <article class="focus-value-card">
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="app-content-section focus-key-section">
        <div class="section-head-left">
          <span class="section-label">Key features</span>
          <h2>${app.keyFeaturesHeading}</h2>
        </div>
        <div class="focus-feature-list">
          ${app.keyFeatures.map((feature) => `
            <span class="focus-feature-item">
              <span aria-hidden="true">${feature.icon}</span>
              ${feature.label}
            </span>
          `).join("")}
        </div>
      </section>

      <section class="app-content-section app-how-section focus-how-section">
        <div class="section-head-left">
          <span class="section-label">How it works</span>
          <h2>${app.howHeading}</h2>
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

      <section class="app-content-section focus-carousel-section" aria-labelledby="${carouselTitleId}">
        <div class="section-head-left">
          <span class="section-label">App screens carousel</span>
          <h2 id="${carouselTitleId}">${app.carouselTitle}</h2>
        </div>
        <div class="focus-carousel" data-focus-carousel>
          <button class="focus-carousel-arrow focus-carousel-prev" type="button" data-carousel-prev aria-label="Previous screenshot">
            <span aria-hidden="true">&lsaquo;</span>
          </button>
          <div class="focus-carousel-track" data-carousel-track>
            ${app.carouselScreenshots.map((shot, index) => `
              <figure class="focus-carousel-slide" data-carousel-slide>
                <img src="${shot.image}" srcset="${shot.image} 1480w" sizes="(max-width: 620px) 300px, (max-width: 980px) 420px, 480px" alt="${shot.alt}" width="1480" height="2800" loading="${index === 0 ? "eager" : "lazy"}" decoding="async"${index === 0 ? " fetchpriority=\"high\"" : ""} />
                <figcaption>${shot.label}</figcaption>
              </figure>
            `).join("")}
          </div>
          <button class="focus-carousel-arrow focus-carousel-next" type="button" data-carousel-next aria-label="Next screenshot">
            <span aria-hidden="true">&rsaquo;</span>
          </button>
          <div class="focus-carousel-dots" data-carousel-dots>
            ${app.carouselScreenshots.map((shot, index) => `
              <button type="button" data-carousel-dot="${index}" aria-label="Show ${shot.label}"${index === 0 ? " aria-current=\"true\"" : ""}></button>
            `).join("")}
          </div>
        </div>
      </section>

      ${app.highlightsTitle ? `
        <section class="app-content-section focus-highlights-section">
          <div class="section-head-left">
            <span class="section-label">${app.highlightsLabel}</span>
            <h2>${app.highlightsTitle}</h2>
          </div>
          <div class="focus-card-grid focus-highlight-grid">
            ${app.featureCallouts.map((item) => `
              <article class="focus-value-card">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
              </article>
            `).join("")}
          </div>
        </section>
      ` : ""}

      <section class="app-content-section focus-trust-wrap">
        <div class="section-head-left">
          <span class="section-label">Privacy / Trust</span>
          <h2>${app.privacyTitle}</h2>
        </div>
        <div class="focus-trust-section">
          <div class="focus-trust-copy">
          <p>${app.privacyText}</p>
          </div>
          <div class="focus-trust-points">
            ${app.privacyPoints.map((point) => `<span>${point}</span>`).join("")}
          </div>
        </div>
      </section>

      ${app.finalCtaHeading ? `
        <section class="app-final-cta focus-download-cta">
          <div class="app-final-cta-copy">
            <h2>${app.finalCtaHeading}</h2>
            <p>${app.finalCtaText}</p>
          </div>
          ${renderExternalCta(app)}
        </section>
      ` : ""}
    </div>
  `;
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
    <span>View page</span>
  `;

  link.append(inner, overlay);
  return link;
}

function renderHeroSection() {
  const mount = document.querySelector("[data-hero-phones]");
  if (!mount) return;
  mount.replaceChildren(
    createHeroPhone(PIXORA_APPS.track, "track"),
    createHeroPhone(PIXORA_APPS.budget, "budget"),
    createHeroPhone(PIXORA_APPS.play, "play")
  );
  initHeroPhonePreviews(mount);
}

function initHeroPhonePreviews(stage) {
  const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)");

  const clearPreviewedPhones = (exceptPhone = null) => {
    stage.querySelectorAll(".hero-phone.is-previewed").forEach((phone) => {
      if (phone !== exceptPhone) phone.classList.remove("is-previewed");
    });
  };

  stage.querySelectorAll(".hero-phone").forEach((phone) => {
    phone.addEventListener("click", (event) => {
      if (event.detail === 0) return;
      if (fineHover.matches) return;

      if (!phone.classList.contains("is-previewed")) {
        event.preventDefault();
        clearPreviewedPhones(phone);
        phone.classList.add("is-previewed");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!stage.contains(event.target)) clearPreviewedPhones();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") clearPreviewedPhones();
  });

  fineHover.addEventListener("change", () => {
    if (fineHover.matches) clearPreviewedPhones();
  });
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
  if (app.key === "budget" || app.key === "track" || app.key === "play") {
    mount.innerHTML = renderFocusedProductPage(app);
    return;
  }

  mount.innerHTML = `
    <div class="product-page-inner">
      <section class="app-page-hero">
        <div class="app-page-copy">
          <h1>${app.headline}</h1>
          <p class="product-lead">${app.description}</p>
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

function initBudgetCarousel() {
  document.querySelectorAll("[data-focus-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
    const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    if (!track || !slides.length) return;

    let activeIndex = 0;
    let scrollTimer = null;

    const setActive = (index) => {
      activeIndex = Math.max(0, Math.min(index, slides.length - 1));
      dots.forEach((dot, dotIndex) => {
        if (dotIndex === activeIndex) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
    };

    const goTo = (index) => {
      const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
      slides[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setActive(nextIndex);
    };

    const syncFromScroll = () => {
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      const closestIndex = slides.reduce((closest, slide, index) => {
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const distance = Math.abs(slideCenter - trackCenter);
        return distance < closest.distance ? { index, distance } : closest;
      }, { index: activeIndex, distance: Number.POSITIVE_INFINITY }).index;
      setActive(closestIndex);
    };

    prev?.addEventListener("click", () => goTo(activeIndex - 1));
    next?.addEventListener("click", () => goTo(activeIndex + 1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => goTo(index)));
    track.addEventListener("scroll", () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(syncFromScroll, 80);
    }, { passive: true });

    setActive(0);
  });
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

function ensureBackToTop() {
  if (document.getElementById("backToTop")) return;

  const backToTop = document.createElement("a");
  backToTop.href = "#top";
  backToTop.className = "back-to-top";
  backToTop.id = "backToTop";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.innerHTML = `
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  document.body.append(backToTop);
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
  initBudgetCarousel();
  initScreenshotLightbox();
  renderSiteFooter();
  ensureBackToTop();
  initBackToTop();
});

const modal = document.getElementById("questionnaireModal");
const textArea = document.getElementById("questionnaireText");
const modalTitle = document.getElementById("modalTitle");
const modalTierTag = document.getElementById("modalTierTag");
const modalSub = document.getElementById("modalSub");
const copyBtn = document.getElementById("copyBtn");
const emailBtn = document.getElementById("emailBtn");

const EMAIL_TO = "hello@pixora.es";

const questionnaires = {
  basic: {
    tag: "Basic Questionnaire",
    title: "Basic (Landing Page) — Project Questionnaire",
    sub: "Answer what you can. Copy + paste your answers underneath each question.",
    text: `BASIC — LANDING PAGE QUESTIONNAIRE

1) Business details
- Business name:
- What do you do? (1–2 sentences)
- What makes you different from competitors?

2) Goal & call-to-action
- Main goal of the page (leads / enquiries / calls / WhatsApp / bookings):
- What do you want the visitor to do? (CTA)
- What should the main button say? (e.g. “Get a Quote”, “Contact Us”, “Book Now”)

3) Target audience
- Who is this for? (type of customer)
- Location(s) you serve (optional):

4) Sections (Basic includes: Hero, About, Services, Contact)
- Confirm the services you want listed (bullet points):
- Any extra sections you want? (testimonials / FAQ / gallery) (optional)

5) Design direction
- Share 2–3 websites you like (links):
- What do you like about them? (clean, bold, minimal, colours, layout)
- Any colours or styles to avoid?

6) Content & assets
- Do you have a logo? (Yes/No)
- Brand colours (if any):
- Do you have text/copy ready? (Yes/No)
- Do you have images/photos? (Yes/No)

7) Contact details
- Preferred contact method (form / email / phone / WhatsApp):
- Contact details to display:

8) Domain/hosting
- Do you already have a domain/hosting? (Yes/No)
- Any deadline or ideal launch date?

Please reply with your answers under each question.`
  },

  standard: {
    tag: "Standard Questionnaire",
    title: "Standard (Up to 5 Pages) — Project Questionnaire",
    sub: "Answer what you can. Clear answers = faster build and smoother delivery.",
    text: `STANDARD — UP TO 5 PAGES QUESTIONNAIRE

1) Business details
- Business name:
- What do you do? (short description)
- What makes you different?

2) Pages required (up to 5)
List the pages you want (example: Home / About / Services / Portfolio / Contact)

Your page list:
- Page 1:
- Page 2:
- Page 3:
- Page 4:
- Page 5:

3) Goals & conversion
- Primary goal (leads / enquiries / bookings / calls / WhatsApp):
- What should the main CTA say?
- Any secondary goal? (optional)

4) Content for each page
For EACH page, list 3–6 bullet points of what it should include.
- Page 1 bullets:
- Page 2 bullets:
- Page 3 bullets:
- Page 4 bullets:
- Page 5 bullets:

5) Services
- List your services (bullet points):
- Any pricing to show? (Yes/No) (optional)

6) Design direction
- Share 2–3 websites you like (links):
- What do you like about them?
- Any colours or styles to avoid?

7) SEO foundations (optional but helpful)
- Top 3 keywords you want to be found for:
  1)
  2)
  3)
- Location(s) served:

8) Contact & lead capture
- Preferred contact method (form / email / phone / WhatsApp):
- What info should the form capture? (name/email/phone/message etc.)

9) Assets & admin
- Logo available? (Yes/No)
- Brand colours / fonts:
- Domain/hosting ready? (Yes/No)
- Desired launch date:

Please reply with your answers under each question.`
  },

  pro: {
    tag: "Professional Questionnaire",
    title: "Professional (Up to 10 Pages) — Project Questionnaire",
    sub: "More detail helps us build a scalable site with a premium finish.",
    text: `PROFESSIONAL — UP TO 10 PAGES QUESTIONNAIRE

1) Business details
- Business name:
- Short description of what you do:
- What outcomes do you want from the website? (leads, bookings, credibility, sales)

2) Site structure (up to 10 pages)
List the pages you want now (and optional future pages).

Your page list:
1)
2)
3)
4)
5)
6)
7)
8)
9)
10)

3) Branding + design direction
- Logo available? (Yes/No)
- Brand colours:
- Share 3–5 sites you like (links):
- What should the site feel like? (premium / minimal / bold / creative / corporate)
- Any “do not do” items? (things you dislike)

4) Content & media
- Copy/text ready? (Yes/No)
- Images available? (Yes/No)
- Do you need help writing copy? (Yes/No)

5) SEO foundations
- Primary keywords (up to 5):
  1)
  2)
  3)
  4)
  5)
- Locations served:
- Competitors (2–3 links optional):

6) Features (tick any)
- Blog / articles
- Portfolio / gallery
- Testimonials
- FAQs
- Newsletter signup
- Booking enquiry / appointments
- Other (describe):

7) Lead capture & contact
- Preferred contact method (form/email/phone/WhatsApp):
- What form fields do you want?
- Where should leads go? (email address)

8) Timeline & logistics
- Desired launch date:
- Domain/hosting ready? (Yes/No)
- Any important notes or constraints?

9) Founding client (optional)
- Are you open to being a “Founding Client” in exchange for a small discount and a testimonial? (Yes/No)

Please reply with your answers under each question.`
  }
};

function openModal(tierKey) {
  const q = questionnaires[tierKey];
  if (!q) return;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  modalTierTag.textContent = q.tag;
  modalTitle.textContent = q.title;
  modalSub.textContent = q.sub;
  textArea.value = q.text;

  const subject = encodeURIComponent(`PIXORA — ${q.title} (Client Answers)`);
  const body = encodeURIComponent(q.text + "\n\n--- YOUR ANSWERS BELOW ---\n");
  emailBtn.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

document.addEventListener("click", async (e) => {
  const openBtn = e.target.closest("[data-open-questionnaire]");
  if (openBtn) {
    openModal(openBtn.getAttribute("data-open-questionnaire"));
    return;
  }

  if (e.target.matches("[data-close-modal]") || e.target.closest("[data-close-modal]")) {
    closeModal();
    return;
  }

  if (e.target === copyBtn) {
    try {
      await navigator.clipboard.writeText(textArea.value);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
    } catch {
      // fallback: select text for manual copy
      textArea.focus();
      textArea.select();
      copyBtn.textContent = "Select & Copy";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
    }
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

/* =========================
   Custom Select Dropdown
========================= */

document.querySelectorAll(".custom-select").forEach(select => {
  const trigger = select.querySelector(".select-trigger");
  const options = select.querySelectorAll(".option");
  const hiddenInput = select.querySelector("input[type='hidden']");
  const display = trigger.querySelector("span");

  trigger.addEventListener("click", () => {
    document.querySelectorAll(".custom-select").forEach(s => {
      if (s !== select) s.classList.remove("active");
    });
    select.classList.toggle("active");
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      display.textContent = option.textContent;
      hiddenInput.value = option.dataset.value;
      select.classList.remove("active");
    });
  });
});

document.addEventListener("click", e => {
  if (!e.target.closest(".custom-select")) {
    document.querySelectorAll(".custom-select").forEach(select => {
      select.classList.remove("active");
    });
  }
});


// =========================
// Mobile nav dropdown
// =========================
const headerEl = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("navMenu");

if (headerEl && navToggle && navMenu) {
  const closeNav = () => {
    headerEl.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = headerEl.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close when clicking a link
  navMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeNav);
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!headerEl.contains(e.target)) closeNav();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });
}


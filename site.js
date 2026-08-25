(function () {
  const products = window.LUNVYQE_PRODUCTS || [];

  const copy = {
    en: {
      "nav.products": "Products",
      "nav.system": "Daily System",
      "nav.support": "Support",
      "hero.eyebrow": "Original Home Essentials Brand",
      "hero.title": "Simple tools for a home that resets itself.",
      "hero.body": "LUNVYQE designs storage, cleaning, kitchen, laundry, and entryway essentials with calm colors, visible order, and daily-use durability.",
      "hero.cta": "Shop The Collection",
      "hero.secondary": "Explore The System",
      "intro.oneTitle": "Made for daily reach",
      "intro.oneBody": "Comfortable shapes, soft-touch finishes, and visible labels.",
      "intro.twoTitle": "Designed as a set",
      "intro.twoBody": "Matching tones across kitchen, cleaning, laundry, and storage.",
      "intro.threeTitle": "Logo-built identity",
      "intro.threeBody": "Every product carries the LUNVYQE home-and-leaf mark.",
      "products.eyebrow": "Product Line",
      "products.title": "Home basics with a cleaner rhythm.",
      "products.body": "Choose a product to view details. Each LUNVYQE item is imagined as part of one practical household system.",
      "system.eyebrow": "Daily System",
      "system.title": "Four small routines, one calmer home.",
      "system.card1Title": "Store",
      "system.card1Body": "Stackable bins and clear containers make common items easier to see, reach, and return.",
      "system.card2Title": "Wipe",
      "system.card2Body": "Soft towels and brush tools keep kitchen, entryway, and surface cleaning quick.",
      "system.card3Title": "Refresh",
      "system.card3Body": "Mop pads, mats, and drying pieces help the home feel reset after ordinary use.",
      "system.card4Title": "Repeat",
      "system.card4Body": "The same colors and clear marks help the whole lineup feel intentional.",
      "feature.eyebrow": "Brand Promise",
      "feature.title": "Not precious. Just quietly better.",
      "feature.body": "LUNVYQE is an independent household daily necessities brand. It focuses on useful shapes, tidy storage, soft materials, and branding that feels built into the product instead of pasted on top.",
      "feature.stat1": "Core products",
      "feature.stat2": "Home zones",
      "feature.stat3": "Unified daily system",
      "support.eyebrow": "Support",
      "support.title": "Built for practical household use.",
      "support.body": "For wholesale, product questions, or launch cooperation, contact the LUNVYQE support team.",
      "support.emailLabel": "Email",
      "support.hoursLabel": "Service Hours",
      "support.hours": "Monday to Friday, 9:00-18:00",
      "support.noteLabel": "Note",
      "support.note": "This demo website uses original AI-generated brand visuals.",
      "footer.copy": "LUNVYQE is an independent everyday household goods brand concept.",
      "detail.back": "Back To All Products",
      "detail.overview": "Overview",
      "detail.features": "Features",
      "detail.specs": "Specifications",
      "detail.buy": "Request Quote",
      "detail.related": "More From LUNVYQE",
      "card.view": "View Details"
    },
    zh: {
      "nav.products": "产品系列",
      "nav.system": "日常系统",
      "nav.support": "联系支持",
      "hero.eyebrow": "原创家常日用品品牌",
      "hero.title": "让家务顺手一点，让家每天更好复位。",
      "hero.body": "LUNVYQE 专注收纳、清洁、餐厨、晾晒和玄关日用品，用柔和配色、清晰秩序和耐用细节服务日常家庭生活。",
      "hero.cta": "查看产品",
      "hero.secondary": "了解系统",
      "intro.oneTitle": "为每天顺手取用而做",
      "intro.oneBody": "舒适形态、柔和触感和清晰标识。",
      "intro.twoTitle": "按系列统一设计",
      "intro.twoBody": "厨房、清洁、洗衣和收纳都保持同一套配色。",
      "intro.threeTitle": "品牌标识自然融入",
      "intro.threeBody": "每款产品都带有 LUNVYQE 家与叶子的标识。",
      "products.eyebrow": "产品系列",
      "products.title": "让家常用品拥有更干净的节奏。",
      "products.body": "点击任意产品查看详情。每件 LUNVYQE 产品都被设计成一个实用家庭系统的一部分。",
      "system.eyebrow": "日常系统",
      "system.title": "四个小习惯，一个更从容的家。",
      "system.card1Title": "收纳",
      "system.card1Body": "可叠放收纳箱和透明密封盒，让常用物品更容易看见、拿取和归位。",
      "system.card2Title": "擦拭",
      "system.card2Body": "柔洁巾和刷具让厨房、玄关和台面清洁更快完成。",
      "system.card3Title": "复位",
      "system.card3Body": "拖把、地垫和晾晒用品帮助日常使用后的家恢复清爽。",
      "system.card4Title": "重复",
      "system.card4Body": "统一的颜色和标识，让整套产品看起来更有秩序。",
      "feature.eyebrow": "品牌承诺",
      "feature.title": "不夸张，只是把日常做得更顺手。",
      "feature.body": "LUNVYQE 是独立家常日用品品牌，关注实用形态、整洁收纳、柔软材料，以及像产品本身一部分一样自然存在的品牌标识。",
      "feature.stat1": "核心产品",
      "feature.stat2": "家庭场景",
      "feature.stat3": "统一日用系统",
      "support.eyebrow": "联系支持",
      "support.title": "为真实家庭日用而设计。",
      "support.body": "如需批发合作、产品咨询或上新合作，可联系 LUNVYQE 团队。",
      "support.emailLabel": "邮箱",
      "support.hoursLabel": "服务时间",
      "support.hours": "周一至周五 9:00-18:00",
      "support.noteLabel": "说明",
      "support.note": "此演示网站使用原创 AI 生成品牌视觉。",
      "footer.copy": "LUNVYQE 是一个独立日用家居品牌概念。",
      "detail.back": "返回全部产品",
      "detail.overview": "产品介绍",
      "detail.features": "产品特点",
      "detail.specs": "规格信息",
      "detail.buy": "咨询报价",
      "detail.related": "更多 LUNVYQE 产品",
      "card.view": "查看详情"
    }
  };

  function getLanguage() {
    return localStorage.getItem("lunvyqe-language") || "en";
  }

  function t(key, lang) {
    return copy[lang][key] || copy.en[key] || key;
  }

  function localText(value, lang) {
    if (!value) return "";
    return value[lang] || value.en || "";
  }

  function renderStaticCopy(lang) {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n, lang);
    });
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = lang === "zh" ? "EN" : "中文";
      button.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
    });
  }

  function productCard(product, lang) {
    return `
      <article class="product-card">
        <a class="product-image-link" href="${product.page}">
          <img src="${product.image}" alt="${localText(product.name, lang)}">
        </a>
        <div class="product-card-body">
          <p class="product-category">${localText(product.category, lang)}</p>
          <h3>${localText(product.name, lang)}</h3>
          <p>${localText(product.summary, lang)}</p>
          <div class="product-card-row">
            <span>${product.price}</span>
            <a href="${product.page}">${t("card.view", lang)}</a>
          </div>
        </div>
      </article>
    `;
  }

  function renderProductGrid(lang) {
    const grid = document.querySelector("[data-product-grid]");
    if (!grid) return;
    grid.innerHTML = products.map((product) => productCard(product, lang)).join("");
  }

  function renderProductDetail(lang) {
    const mount = document.querySelector("[data-product-detail]");
    if (!mount) return;

    const productId = document.body.dataset.productId;
    const product = products.find((item) => item.id === productId);
    if (!product) {
      mount.innerHTML = `<section class="section-shell"><h1>Product not found</h1></section>`;
      return;
    }

    document.title = `${localText(product.name, lang)} | LUNVYQE`;

    const related = products
      .filter((item) => item.id !== product.id)
      .slice(0, 3)
      .map((item) => productCard(item, lang))
      .join("");

    mount.innerHTML = `
      <section class="detail-hero">
        <div class="detail-image">
          <img src="${product.image}" alt="${localText(product.name, lang)}">
        </div>
        <div class="detail-copy">
          <a class="back-link" href="index.html#products">${t("detail.back", lang)}</a>
          <p class="eyebrow">${localText(product.category, lang)}</p>
          <h1>${localText(product.name, lang)}</h1>
          <p class="detail-summary">${localText(product.summary, lang)}</p>
          <div class="price-row">
            <strong>${product.price}</strong>
            <a class="button primary" href="mailto:hello@lunvyqe-home.com?subject=LUNVYQE%20${encodeURIComponent(localText(product.name, "en"))}">${t("detail.buy", lang)}</a>
          </div>
        </div>
      </section>

      <section class="detail-info">
        <article>
          <h2>${t("detail.overview", lang)}</h2>
          <p>${localText(product.details, lang)}</p>
        </article>
        <article>
          <h2>${t("detail.features", lang)}</h2>
          <ul>
            ${product.features[lang].map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </article>
        <article>
          <h2>${t("detail.specs", lang)}</h2>
          <ul>
            ${product.specs[lang].map((spec) => `<li>${spec}</li>`).join("")}
          </ul>
        </article>
      </section>

      <section class="section-shell related-section">
        <div class="section-heading compact">
          <p class="eyebrow">LUNVYQE</p>
          <h2>${t("detail.related", lang)}</h2>
        </div>
        <div class="product-grid compact-grid">${related}</div>
      </section>
    `;
  }

  function setLanguage(lang) {
    localStorage.setItem("lunvyqe-language", lang);
    renderStaticCopy(lang);
    renderProductGrid(lang);
    renderProductDetail(lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(getLanguage());
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(getLanguage() === "zh" ? "en" : "zh");
      });
    });
  });
})();

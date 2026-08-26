document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("content");
    const themeToggle = document.getElementById("theme-toggle");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxClose = lightbox.querySelector(".lightbox-close");
    const templates = {
        "pt-br": "./templates/portugues.html",
        en: "./templates/ingles.html",
        es: "./templates/espanol.html"
    };
    let currentLang = "pt-br";

    function themeLabel(nextTheme) {
        const labels = {
            "pt-br": { light: "Mudar para tema claro", dark: "Mudar para tema escuro" },
            en: { light: "Switch to light theme", dark: "Switch to dark theme" },
            es: { light: "Cambiar a tema claro", dark: "Cambiar a tema oscuro" }
        };
        return (labels[currentLang] || labels["pt-br"])[nextTheme];
    }

    function visibleTheme() {
        const stored = localStorage.getItem("theme");
        if (stored === "light" || stored === "dark") {
            return stored;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function applyTheme(theme) {
        if (theme === "light" || theme === "dark") {
            document.documentElement.setAttribute("data-theme", theme);
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
        const next = visibleTheme() === "dark" ? "light" : "dark";
        themeToggle.setAttribute("aria-label", themeLabel(next));
    }

    function toggleTheme() {
        const next = visibleTheme() === "dark" ? "light" : "dark";
        localStorage.setItem("theme", next);
        applyTheme(next);
    }

    function loadContent(lang) {
        const url = templates[lang] || templates["pt-br"];

        fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(function (data) {
                contentDiv.innerHTML = data;
                document.body.classList.remove("nav-open");
                shuffleCertificates();
                bindContentEvents();
            })
            .catch(function (error) {
                console.error("Erro ao carregar o conteúdo:", error);
                contentDiv.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
            });
    }

    function shuffleCertificates() {
        const grid = contentDiv.querySelector(".certs-grid");
        if (!grid) {
            return;
        }
        const cards = Array.from(grid.children);
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const swap = cards[i];
            cards[i] = cards[j];
            cards[j] = swap;
        }
        cards.forEach(function (card) {
            grid.appendChild(card);
        });
    }

    function closeMenu() {
        const nav = contentDiv.querySelector(".site-nav");
        const toggle = contentDiv.querySelector(".menu-toggle");
        nav?.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
    }

    function setLanguage(lang) {
        if (!templates[lang] || lang === currentLang) {
            closeMenu();
            return;
        }
        currentLang = lang;
        document.documentElement.lang = lang;
        applyTheme(localStorage.getItem("theme"));
        loadContent(lang);
    }

    function bindContentEvents() {
        contentDiv.querySelectorAll(".download-cv").forEach(function (button) {
            button.addEventListener("click", function () {
                const resumes = {
                    "pt-br": { href: "pdf/curriculo-pt.pdf", download: "curriculo.pdf" },
                    en: { href: "pdf/curriculo-en.pdf", download: "resume.pdf" },
                    es: { href: "pdf/curriculo-es.pdf", download: "curriculum.pdf" }
                };
                const file = resumes[currentLang] || resumes["pt-br"];
                const link = document.createElement("a");
                link.href = file.href;
                link.download = file.download;
                link.click();
            });
        });

        const menuToggle = contentDiv.querySelector(".menu-toggle");
        const nav = contentDiv.querySelector(".site-nav");

        menuToggle?.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            document.body.classList.toggle("nav-open", isOpen);
        });

        nav?.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        contentDiv.querySelectorAll("[data-lang]").forEach(function (button) {
            button.addEventListener("click", function () {
                setLanguage(button.dataset.lang);
            });
        });

        contentDiv.querySelectorAll(".cert-card").forEach(function (card) {
            card.addEventListener("click", function () {
                openLightbox(card.dataset.src, card.dataset.title || card.querySelector("span")?.textContent || "");
            });
        });
    }

    function openLightbox(src, title) {
        if (!src) {
            return;
        }
        lightboxImage.src = src;
        lightboxImage.alt = title;
        lightboxCaption.textContent = title;
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImage.src = "";
        document.body.style.overflow = "";
    }

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    lightboxClose.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
            closeMenu();
        }
    });

    themeToggle.addEventListener("click", toggleTheme);

    const storedTheme = localStorage.getItem("theme");
    applyTheme(storedTheme === "light" || storedTheme === "dark" ? storedTheme : null);
    document.documentElement.lang = currentLang;
    loadContent(currentLang);
});

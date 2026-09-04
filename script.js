function switchPage(pageId) {
    const pageAliases = {
        "tentang-saya": "tentang",
        "about": "tentang"
    };

    const targetId = pageAliases[pageId] || pageId;

    document.querySelectorAll(".page-section").forEach(page => {
        page.classList.remove("active-page");
    });

    const targetPage = document.getElementById(targetId);

    if (!targetPage) {
        console.error("Section tidak ditemukan:", targetId);
        return;
    }

    targetPage.classList.add("active-page");

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");
    });

    const activeNav =
        document.getElementById("nav-" + pageId) ||
        document.getElementById("nav-" + targetId);

    if (activeNav) {
        activeNav.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
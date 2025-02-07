document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".iframe-container");

    // Intersection Observer untuk menandai elemen aktif
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                containers.forEach(el => el.classList.remove("active"));
                entry.target.classList.add("active");
            }
        });
    }, { threshold: 0.6 });

    containers.forEach(container => observer.observe(container));

    // Navigasi dengan Keyboard (Arrow Up/Down)
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
            scrollToNext();
        } else if (e.key === "ArrowUp") {
            scrollToPrev();
        }
    });

    // Swipe Navigation untuk Mobile
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener("touchstart", (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener("touchend", (e) => {
        touchEndY = e.changedTouches[0].screenY;
        if (touchStartY - touchEndY > 50) {
            scrollToNext();
        } else if (touchEndY - touchStartY > 50) {
            scrollToPrev();
        }
    });
});

// Fungsi untuk Scroll ke Elemen Berikutnya
function scrollToNext() {
    const current = document.querySelector(".iframe-container.active");
    if (!current) return;
    
    const next = current.nextElementSibling;
    if (next) {
        next.scrollIntoView({ behavior: "smooth" });
    }
}

// Fungsi untuk Scroll ke Elemen Sebelumnya
function scrollToPrev() {
    const current = document.querySelector(".iframe-container.active");
    if (!current) return;

    const prev = current.previousElementSibling;
    if (prev) {
        prev.scrollIntoView({ behavior: "smooth" });
    }
} 
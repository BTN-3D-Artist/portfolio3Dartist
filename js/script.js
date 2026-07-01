// JavaScript code for "Back to Top" button functionality
const backToTopButton = document.getElementById("backToTop");

// 1. Lắng nghe sự kiện cuộn chuột của người dùng
window.addEventListener("scroll", () => {
    // Nếu cuộn xuống quá 400px thì hiện nút, ngược lại thì ẩn đi
    if (window.scrollY > 400) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

// 2. Xử lý sự kiện click để cuộn mượt lên đầu trang
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Cuộn mượt mà không bị giật khựng
    });
});

// JavaScript code for responsive navigation menu functionality
const navBar = document.getElementById("navBar");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const navLinks = document.querySelectorAll(".nav-link");

// Mở menu
menuOpen.addEventListener("click", () => {
    navBar.classList.add("active");
    document.body.classList.add("menu-open");
});

// Đóng menu
const closeMenu = () => {
    navBar.classList.remove("active");
    document.body.classList.remove("menu-open");
};

menuClose.addEventListener("click", closeMenu);

// Đóng menu khi bấm vào một link (để trang cuộn xuống section đó)
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});
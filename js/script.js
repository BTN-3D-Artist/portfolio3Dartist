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

// --- XỬ LÝ ĐÓNG MỞ MENU MOBILE ---
const navBar = document.getElementById("navBar");
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const navLinks = document.querySelectorAll(".nav-link");

// 1. Khi Click vào nút 3 gạch -> Mở menu trượt ra
if (menuOpen) {
    menuOpen.addEventListener("click", () => {
        navBar.classList.add("active");
        document.body.classList.add("menu-open"); // Khóa cuộn trang nền
    });
}

// Hàm dùng chung để đóng menu
const closeMenu = () => {
    navBar.classList.remove("active");
    document.body.classList.remove("menu-open"); // Mở lại cuộn trang
};

// 2. Khi Click vào nút dấu X -> Đóng menu
if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
}

// 3. Khi bấm vào các mục điều hướng (Home, About...) -> Tự động đóng menu và cuộn xuống
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});
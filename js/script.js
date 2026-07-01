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
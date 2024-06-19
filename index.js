const disclaimer = document.getElementById("disclaimer")
const link = document.querySelectorAll("a")
const hamburgerBtn = document.getElementById("hamburger")

// EVENT LISTENER
disclaimer.addEventListener("click", () => {
    alert("Penafian (Disclaimer): Laman web ini bukan laman web rasmi PADU. Laman web ini hanyalah sebuah laman web demo dan ia dibina sebagai salah satu projek peribadi saya.")
})

link.forEach(link => {
    link.addEventListener("click", () => {
        alert("Kebiasaannya, pautan ini berfungsi. Tetapi untuk tujuan demonstrasi, pautan ini tidak akan bawa anda ke destinasi tertentu.")
    })
})

hamburgerBtn.addEventListener("click", () => {
    console.log("It's working")
})
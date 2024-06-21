const hamburgerBtn = document.getElementById("btn-hamburger")
const closeBtn = document.getElementById("btn-close")
const navLinkMain = document.getElementById("nav-main")
const navLinkSecondary = document.getElementById("nav-secondary")
const disclaimer = document.getElementById("disclaimer")
const btnFAQ = document.querySelectorAll(".btn-faq")
const navLink = document.querySelectorAll(".anchor-link")

// EVENT LISTENER
hamburgerBtn.addEventListener("click", toggleNavigation)
closeBtn.addEventListener("click", toggleNavigation)
navLinkMain.addEventListener("click", toggleNavigation)

navLink.forEach(link => {
    link.addEventListener("click", () => {
        alert("Kebiasaannya, pautan ini berfungsi. Tetapi untuk tujuan demonstrasi, pautan ini tidak akan bawa anda ke destinasi tertentu.")
    })
})

disclaimer.addEventListener("click", () => {
    alert(`Penafian (Disclaimer): Laman web ini bukanlah laman web rasmi PADU. Laman web ini hanyalah sebuah laman web demo dan ia dibina sebagai salah satu projek peribadi saya.

Saya hanya memfokuskan kepada susun atur (layout) pada laman ini dan ia tidak sama sekali meminta apa-apa maklumat sensitif daripada anda.`)
})

btnFAQ.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const targetId = e.currentTarget.getAttribute("data-target")
        const targetEl = document.getElementById(targetId)

        targetEl.classList.toggle("hidden")

        // change icon graphic
        const icon = e.currentTarget.querySelector("i")
        icon.classList.toggle("fa-chevron-down")
        icon.classList.toggle("fa-chevron-up")
    })
})


// FUNCTION
function toggleNavigation() {
    navLinkMain.classList.toggle("hidden")
    navLinkSecondary.classList.toggle("hidden")
    hamburgerBtn.classList.toggle("hidden")
    closeBtn.classList.toggle("hidden")
}


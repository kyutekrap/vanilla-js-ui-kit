export function startLoader() {
    const loader = document.querySelector(".loader");
    if (loader instanceof HTMLElement) {
        loader.classList.remove("active");
    }
}
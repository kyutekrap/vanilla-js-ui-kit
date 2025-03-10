export function toggleDarkMode() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}
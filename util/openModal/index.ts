export function openModal(args: Node[]): void {
    const backdrop = document.querySelector(".modal");
    const modal = document.querySelector(".modal .modal-content .vbox");

    if (backdrop instanceof HTMLElement && modal instanceof HTMLElement) {
        modal.innerHTML = "";

        args.forEach((arg) => {
            modal.appendChild(arg);
        });

        backdrop.classList.add("open");
    }
}

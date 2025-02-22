import { FormProps } from "../../props/index.js";

class Factory {
    constructor(parent) {
        this.parent = parent;
    }

    createForm() {
        const form = document.createElement("form");
        form.classList.add("form");
        form.classList.add(this.parent.layout === "vertical" ? "vbox" : "hbox");
        for (var i=0; i < this.parent.children.length; i++) {
            form.appendChild(this.parent.children[i]);
        }
        return form;
    }
}

export class FormBase extends Factory {

    _form;

    constructor(props = new FormProps()) {
        super({...new FormProps(), ...props})
    }

    initialize() {
        this._form = super.createForm();
    }

    onSubmit() {
        return;
    }
}
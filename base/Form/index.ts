import { FormProps } from "../../props";

class Factory {

    _props: FormProps;

    constructor(props: FormProps) {
        this._props = props;
    }

    createForm(): HTMLFormElement {
        const form = document.createElement("form");
        form.classList.add("form");
        form.classList.add(this._props.layout === "vertical" ? "vbox" : "hbox");
        for (var i=0; i < this._props.children.length; i++) {
            form.appendChild(this._props.children[i]);
        }
        return form;
    }
}

export abstract class FormBase extends Factory {

    _form: HTMLFormElement;

    constructor(props: FormProps) {
        super(props);
        this._form = super.createForm();
    }

    abstract onSubmit(): void;

    _onSubmit() {
        return;
    }
}
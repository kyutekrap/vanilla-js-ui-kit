import { FormProps } from "../../props/Form";

export class FormFactory {

    _props: FormProps;

    constructor(props: FormProps) {
        this._props = props;
    }

    createForm(): HTMLFormElement {
        const form = document.createElement("form");
        form.classList.add("form");
        form.classList.add(this._props.layout === "vertical" ? "vBox" : "hBox");
        for (var i=0; i < this._props.children.length; i++) {
            form.appendChild(this._props.children[i]);
        }
        return form;
    }
}
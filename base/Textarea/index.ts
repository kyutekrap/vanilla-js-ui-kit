import { TextareaProps } from "../../props/Textarea";
import { TextareaFactory } from "../../factory/Textarea";

export abstract class TextareaBase extends TextareaFactory {

    _textarea: HTMLTextAreaElement;

    constructor(props: TextareaProps) {
        super(props);
        this._textarea = super.createTextarea();
    }
}
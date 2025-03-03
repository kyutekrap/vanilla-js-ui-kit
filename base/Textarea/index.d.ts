import { TextareaProps } from "../../props/Textarea";
import { TextareaFactory } from "../../factory/Textarea";
export declare abstract class TextareaBase extends TextareaFactory {
    _textarea: HTMLTextAreaElement;
    constructor(props: TextareaProps);
}

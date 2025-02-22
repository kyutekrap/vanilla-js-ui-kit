export class AccordionBase extends Factory {
    _isOpen: boolean;
    _accordion: any;
    _header: any;
    _headerTitle: any;
    _headerImage: any;
    _content: any;
    initialize(): void;
    onToggle(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createHeader(): HBox;
    createHeaderTitle(): HTMLSpanElement;
    createHeaderImage(): any;
    createContent(): VBox;
}
import { HBoxBase as HBox } from "../HBox/index.js";
import { VBoxBase as VBox } from "../VBox/index.js";
export {};

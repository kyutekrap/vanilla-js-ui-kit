export class BorderLineBase extends Factory {
    _borderLine: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createBorderLine(): HTMLDivElement;
}
export {};

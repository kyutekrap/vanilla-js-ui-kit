export class FlexBoxBase extends Factory {
    _flexBox: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createFlexBox(): HTMLDivElement;
}
export {};

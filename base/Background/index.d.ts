export class BackgroundBase extends Factory {
    _background: any;
    _badge: any;
    initialize(): void;
    onClick(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createBackground(): HTMLDivElement;
    createBadge(): HTMLDivElement | undefined;
}
export {};

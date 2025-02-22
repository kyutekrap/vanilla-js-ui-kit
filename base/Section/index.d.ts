export class SectionBase extends Factory {
    _section: any;
    initialize(): void;
}
declare class Factory {
    constructor(parent: any);
    parent: any;
    createSection(): any;
}
export {};

export class FlexBoxProps {
    constructor(alignSelf = "flex-start", flexGrow = 0, children = []) {
        this.alignSelf = alignSelf;
        this.flexGrow = flexGrow;
        this.children = children;
    }
}
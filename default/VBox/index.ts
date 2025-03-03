import { VBoxBase } from "../../base/VBox";
import { VBoxProps } from "../../props/VBox";

export class VBoxDefault extends VBoxBase {
    constructor(props: VBoxProps = { children: [] }) {
        super(props);
    }
}
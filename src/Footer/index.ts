import { SmallDefault, FooterDefault } from "../../default";

export class Footer {

    constructor() {
        this.createFooter();
    }

    createFooter() {
        const copyright = new SmallDefault("Created by Kyutekrap");
        new FooterDefault({
            children: [copyright._small]
        });
    }
}
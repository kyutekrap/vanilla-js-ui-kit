export class TableProps {
    columns: string[] = [];
    data: Record<string, any>[] = [];
    checkbox: boolean = false;
    useAutoSort: boolean = false;
    controls: any = null;
    defaultWidth: string | null = null;
}

export class TableProps {
    columns: string[] ;
    data: Record<string, any>[];
    checkbox: boolean ;
    useAutoSort: boolean;
    controls: any ;
    defaultWidth: string | null;
}

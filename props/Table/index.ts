export interface TableProps {
    columns: string[] ;
    data: Record<string, any>[];
    checkbox?: boolean;
    useAutoSort?: boolean;
    controls?: Node;
    defaultWidth?: number;
}

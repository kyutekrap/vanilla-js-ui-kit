export interface TableProps {
    columns: string[];
    data: Record<string, any>[];
    resizable?: boolean;
    checkbox?: boolean;
    sortable?: boolean;
}
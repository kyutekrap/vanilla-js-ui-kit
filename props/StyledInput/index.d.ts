export interface StyledInputProps {
    variant?: "number" | "text" | "date" | "datetime-local" | "checkbox" | "password" | "email" | "url" | "file";
    editable?: boolean;
    placeholder?: string;
    value?: string;
    width?: string;
    name?: string;
    required?: boolean;
    position?: "left" | "right";
    content: HTMLElement;
}

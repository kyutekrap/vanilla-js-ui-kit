export interface InputProps {
    variant?: "number" | "text" | "date" | "datetime-local" | "checkbox" | "radio" | "password" | "email" | "url" | "file";
    editable?: boolean;
    placeholder?: string;
    value?: string;
    width?: string;
    name?: string;
    required?: boolean;
}

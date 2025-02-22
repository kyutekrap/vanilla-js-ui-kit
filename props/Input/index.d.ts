export class InputProps {
    variant: "number" | "text" | "date" | "datetime-local" | "checkbox" | "password" | "email" | "url" | "file" = "text";
    editable: boolean = true;
    placeholder: string = "";
    value: string = "";
    width: string = "100%";
    name: string = "";
    required: boolean = false;
}

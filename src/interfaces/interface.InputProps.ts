export interface InputProps {
    label: string;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
}
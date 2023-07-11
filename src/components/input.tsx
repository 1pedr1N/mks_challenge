import { InputProps } from "@/interfaces/interface.InputProps";
import * as S from "@/styles/components/input";
const Input = (props: InputProps) => {
    return (
        <S.Container>
        <S.Label>{props.label}</S.Label>
        <S.Input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
        </S.Container>
    );
    }
    export default Input;
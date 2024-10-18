import { Container } from "./style";

export function Input({icon: Icon, ...rest}) {
    return (
        <Container>
            {Icon && <Icon size={20} id="icon"/>}
            <input {...rest}/>
        </Container>
    )
}
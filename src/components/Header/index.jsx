import { styled } from "styled-components"
import InputText from "../InputText";

const HeaderStyle = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Header = () => {
    return (<HeaderStyle>
        <img src="/images/logo.png" alt="" />
        <InputText />
    </HeaderStyle>)
}

export default Header;
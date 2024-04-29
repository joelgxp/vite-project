import styled from "styled-components";

const ItemListaStyle = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9' };
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItemNavegacao = ({children, iconActive, iconInactive, ativo = false }) => {
    return <ItemListaStyle $ativo={ativo}>
        <img src={ ativo ? iconActive : iconInactive } alt="" />
        {children}
    </ItemListaStyle>
}

export default ItemNavegacao;
import styled from "styled-components";

import ItemNavegacao from "./ItemNavegacao";

const ListStyle = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const SideBar = () => {
    return (
        <aside>
            <nav>
                <ListStyle>
                    <ItemNavegacao 
                        iconActive="/icons/home-ativo.png"
                        iconInactive="/icons/home-inativo.png"
                        ativo={true}
                    >
                        Inicio
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconActive="/icons/mais-vistas-ativo.png"
                        iconInactive="/icons/mais-vistas-inativo.png"
                    >
                        Mais Vistas
                    </ItemNavegacao>
                </ListStyle>
            </nav>
        </aside>
    )
};

export default SideBar;
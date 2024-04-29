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
                    <ItemNavegacao
                        iconActivo="/icons/mais-curtidas-ativo.png"
                        iconInactive="/icons/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconActive="/icons/novas-ativo.png"
                        iconInactive="/icons/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconActive="/icons/surpreenda-me-ativo.png"
                        iconInactive="/icons/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListStyle>
            </nav>
        </aside>
    )
};

export default SideBar;
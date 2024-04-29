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
                        iconeAtivo="/icons/mais-curtidas-ativo.png"
                        iconeInativo="/icons/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icons/novas-ativo.png"
                        iconeInativo="/icons/novas-inativo.png"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icons/surpreenda-me-ativo.png"
                        iconeInativo="/icons/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListStyle>
            </nav>
        </aside>
    )
};

export default SideBar;
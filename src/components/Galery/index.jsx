import styled from "styled-components";

import Titulo from "../Titulo"
import Tags from "./Tags";
import Populares from "./Populares";

const GaleryContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galery = () => {
    return (
        <>
            <Tags />
            <GaleryContainer>
                <SecaoFluida>
                    <Titulo><h2>Navegue pela galeria</h2></Titulo>

                </SecaoFluida>
                <Populares />

            </GaleryContainer>
        </>
    )
}

export default Galery;
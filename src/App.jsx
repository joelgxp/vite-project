import styled from "styled-components"

import GlobalStyles from "./components/GlobalStyle"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"

import bannerBackground from "./assets/banner.png"
import Galery from "./components/Galery"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

function App() {

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <ConteudoGaleria>
            <Banner
              text="A galeria mais completa de foto do espaço"
              backgroundImage={bannerBackground}
            />
            <Galery />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App

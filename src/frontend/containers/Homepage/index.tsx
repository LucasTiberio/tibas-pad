import Logo from "../../components/Logo";
import NotepadEntryPointForm from "../../components/NotepadEntryPointForm";
import StoragedNoteList from "../../components/StoragedNoteList";
import { CenterWrapper, Container, Potentials } from "./style";

const Homepage = () => {
  return (
    <Container>
      <CenterWrapper>
        <Logo />
        <h2>Tibas Garden</h2>
        presents
      </CenterWrapper>

      <NotepadEntryPointForm />

      <Potentials>
        <li>Sem login, só Tibas</li>
        <li>Tem auto-save, Tibas facilitou</li>
        <ul>Em todas plataformas, Tibas onipresente</ul>
        <ul>Fonte singular, bem Tibinha</ul>
        <li>Tibas Pad ❤️</li>
      </Potentials>

      {/* CookieStoragedInBrowser */}
      <StoragedNoteList />

      {/* <CenterWrapper>
        <p>Tibas Garden ❤️</p>
      </CenterWrapper> */}
    </Container>
  );
}

export default Homepage;
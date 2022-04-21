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
        <ul>Sem perder nada, Tibas onipresente</ul>
        <li>Tem auto-save, Tibas facilitou</li>
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
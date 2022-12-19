import Button from "./components/Button";
import Container from "./components/Container";
import InfoBox from "./components/InfoBox";

function App() {
  return (
    <main>
      <Container direction={"column"}>
        <Button color="danger">Click me!</Button>
        <Button>Click me!</Button>
      </Container>
      <Container>
        <Button>Click me!</Button>
        <Button>Click me!</Button>
        <Button>Click me!</Button>
      </Container>
      <InfoBox
        variant="success"
        title="This is an Info"
        message="Read it carefully."
      />
      <InfoBox
        variant="error"
        title="Error"
        message="Something went horribly wrong D:"
      />
    </main>
  );
}

export default App;

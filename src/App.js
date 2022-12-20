import { useState } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import InfoBox from "./components/InfoBox";

function App() {
  return (
    <main>
      <Container direction="row" bgColor="red">
        <Button color="danger">Click Me!</Button>
        <Button>Click Me!</Button>
        <Button>Click Me!</Button>
      </Container>
      <Container direction="column" bgColor="rgb(0 0 0 / 0.3)">
        <Button>Click Me!</Button>
        <Button>Click Me!</Button>
        <Button>Click Me!</Button>
      </Container>
      <InfoBox
        title="An important Info"
        message="You should read this!"
        variant={"success"}
      />
      <InfoBox
        title="An important Info"
        message="You should read this!"
        variant="error"
      />
      <InfoBox title="An important Info" message="You should read this!" />
    </main>
  );
}

export default App;

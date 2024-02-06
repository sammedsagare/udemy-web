import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import { List } from "./components/List";

import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title="Hello World!" />
      <Section title="Title3e" children="This is my section" />
      <Counter setCount={setCount} children={`Count: ${count}`} />
      <List
        items={["One", "Two", "Three"]}
        render={(item: string) => <span className="gold bold">{item}</span>}
      />
    </>
  );
}

export default App;

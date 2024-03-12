import OtherComponent from "./OtherComponent";
import { useCounterStore } from "../store";
import { logCount } from "../utils/counter";

function App() {
  const count = useCounterStore((state) => state.count);
  logCount();

  return (
    <>
      <OtherComponent count={count} />
    </>
  );
}

export default App;

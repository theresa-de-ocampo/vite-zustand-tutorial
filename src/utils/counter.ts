import { useCounterStore } from "../store";

function logCount() {
  const count = useCounterStore.getState().count;
  console.log(count);
}

function doubleCount() {
  useCounterStore.setState((prevState) => ({ count: prevState.count * 2 }));
}

export { logCount, doubleCount };

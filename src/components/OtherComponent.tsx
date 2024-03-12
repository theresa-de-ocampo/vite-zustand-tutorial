import { useCounterStore } from "../store";
import { doubleCount } from "../utils/counter";

export default function OtherComponent({ count }: Props) {
  /**
   * Best Practices to Prevent Performance Problems
   * (1) Whenever you're accessing a piece of state or a function,
   * you'll always want to be as specific as possible and only access the thing that you need.
   *
   * const { count } = useCounterStore((state) => state)
   *
   * This would actually be less performant, because whatever you provide as the return for the
   * elector is what the component will listen to.
   * Providing just `state` will make OtherComponent listen to the entire state, and re-render
   * whenever anything in it changes.
   *
   * (2) Each store should just have 1 functionality.
   * You wouldn't want everything in 1 huge file, or 1 giant store.
   * That would be a nightmare to maintin, and will not scale well.
   */

  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <main>
      <h1>{count}</h1>
      <footer>
        <button onClick={incrementAsync}>Increment Async</button>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={doubleCount}>Double</button>
      </footer>
    </main>
  );
}

type Props = {
  count: number;
};

import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

// This does not have to be a custom hook
// You can actually use this outside of a component,
// and just access it directly in any random function
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    // set({ count: 1 });
    set((prevState) => ({ count: prevState.count + 1 }));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((prevState) => ({ count: prevState.count + 1 }));
  },
  decrement: () => {
    // set({ count: -1 });
    set((prevState) => ({ count: prevState.count - 1 }));
  }
}));

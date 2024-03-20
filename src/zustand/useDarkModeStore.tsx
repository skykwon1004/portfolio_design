import create, { SetState } from "zustand";

interface DarkModeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkModeStore = create<DarkModeStore>(
  (set: SetState<DarkModeStore>) => ({
    darkMode: true,
    toggleDarkMode: () =>
      set((state: DarkModeStore) => ({ darkMode: !state.darkMode })),
  })
);

export default useDarkModeStore;

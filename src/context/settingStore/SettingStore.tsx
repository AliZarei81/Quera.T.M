import { createContext, useEffect, useState } from "react";

interface SettingState {
  theme: string | undefined;
  darkModeEnabled: boolean | undefined;
}

interface SettingContext {
  state: SettingState;
  setState: () => void;
}

export const SettingContext = createContext<{
  context: SettingState | null;
  setContext: (newValue: SettingState) => void;
}>({
  context: null,
  setContext: () => undefined,
});

export const SettingContextProvider = ({ children }: { children: any }) => {
  const [state, setState] = useState<SettingState | null>({
    theme: "#208D8E",
    darkModeEnabled: false,
  });
  useEffect(() => {
    const settings = localStorage.getItem("settings");
    if (settings) {
      setState(JSON.parse(settings));
    }
  }, []);
  return (
    <SettingContext.Provider value={{ context: state, setContext: setState }}>
      {children}
    </SettingContext.Provider>
  );
};

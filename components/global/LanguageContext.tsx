"use client";
import React, { createContext, useContext, useReducer } from "react";

type LanguageState = {
  currentLang: "en" | "fa";
};

type LanguageAction = {
  type: "TOGGLE_LANGUAGE" | "SET_LANGUAGE";
  payload?: "en" | "fa";
};

const initialState: LanguageState = {
  currentLang: "en",
};

const languageReducer = (
  state: LanguageState,
  action: LanguageAction
): LanguageState => {
  switch (action.type) {
    case "TOGGLE_LANGUAGE":
      return {
        currentLang: state.currentLang === "en" ? "fa" : "en",
      };
    case "SET_LANGUAGE":
      return {
        currentLang: action.payload || "en",
      };
    default:
      return state;
  }
};

const LanguageContext = createContext<{
  state: LanguageState;
  dispatch: React.Dispatch<LanguageAction>;
}>({ state: initialState, dispatch: () => null });

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(languageReducer, initialState);

  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

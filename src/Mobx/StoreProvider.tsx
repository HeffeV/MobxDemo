import React from "react";
import { CoWorkerStore } from "./Stores/CoWorkerStore";

interface Props {}

export type RootStore = {
  coWorkerStore: CoWorkerStore;
};

const storeContext = React.createContext<RootStore | null>(null);

export function createRootStore(): RootStore {
  const coWorkerStore = new CoWorkerStore();

  const rootStore: RootStore = {
    coWorkerStore,
  };

  return rootStore;
}

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const rootStore = createRootStore();

  return (
    <storeContext.Provider value={rootStore}>{children}</storeContext.Provider>
  );
};

export const useStore = (): RootStore => {
  const rootStore = React.useContext(storeContext);

  if (!rootStore) {
    throw new Error("useStore must be used within a StoreProvider.");
  }

  return rootStore;
};

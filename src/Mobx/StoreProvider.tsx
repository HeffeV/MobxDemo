import React from "react";
import { CoWorkerStore } from "./Stores/CoWorkerStore";
import { ObservableCoWorkerStore } from "./Stores/ObservableCoWorkerStore";

interface Props {}

export type RootStore = {
  coWorkerStore: CoWorkerStore;
  observableCoWorkerStore: ObservableCoWorkerStore;
};

const storeContext = React.createContext<RootStore | null>(null);

export function createRootStore(): RootStore {
  const coWorkerStore = new CoWorkerStore();
  const observableCoWorkerStore = new ObservableCoWorkerStore();

  const rootStore: RootStore = {
    coWorkerStore,
    observableCoWorkerStore,
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

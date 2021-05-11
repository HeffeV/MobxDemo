import { makeObservable, observable, computed, action } from "mobx";
import { CoWorker } from "../../Types/CoWorker";

export class ObservableCoWorkerStore {
  coWorkers: CoWorker[] = [{ firstName: "Jeff", lastName: "Vandenbroeck" }];

  constructor() {
    makeObservable(this, {
      coWorkers: observable,
      allCoWorkers: computed,
      addCoWorker: action,
    });
  }

  get allCoWorkers(): CoWorker[] {
    return this.coWorkers;
  }

  addCoWorker(coWorker: CoWorker) {
    this.coWorkers.push(coWorker);
    console.log(this.coWorkers);
  }
}

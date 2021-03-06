import { CoWorker } from "../../Types/CoWorker";

export class CoWorkerStore {
  coWorkers: CoWorker[] = [{ firstName: "Jeff", lastName: "Vandenbroeck" }];

  get allCoWorkers(): CoWorker[] {
    return this.coWorkers;
  }

  addCoWorker(coWorker: CoWorker) {
    this.coWorkers.push(coWorker);
    console.log(this.coWorkers);
  }
}

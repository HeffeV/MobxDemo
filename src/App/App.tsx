import React from "react";
import { StoreProvider } from "../Mobx/StoreProvider";
import { Grid } from "@material-ui/core";
import DefaultCoWorkerTable from "../DisplayCoWorkers/Default/DefaultCoWorkerTable";
import MobxCoWorkerTable from "../DisplayCoWorkers/Mobx/MobxCoWorkerTable";
import DefaultManageCoWorker from "../ManageCoWorkers/Default/DefaultManageCoWorker";
import MobxManageCoWorkers from "../ManageCoWorkers/Mobx/MobxManageCoWorkers";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Grid container spacing={3} direction="row" style={{ padding: "50px" }}>
        <Grid item xs={12} md={6}>
          <DefaultManageCoWorker />
        </Grid>
        <Grid item xs={12} md={6}>
          <DefaultCoWorkerTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <MobxManageCoWorkers />
        </Grid>
        <Grid item xs={12} md={6}>
          <MobxCoWorkerTable />
        </Grid>
      </Grid>
    </StoreProvider>
  );
};

export default App;

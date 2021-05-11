import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { useStore } from "../../Mobx/StoreProvider";
import { CoWorker } from "../../Types/CoWorker";
import { observer } from "mobx-react-lite";

const MobxCoWorkerTable: React.FC = () => {
  const { observableCoWorkerStore } = useStore();

  return (
    <Card>
      <CardHeader title="Mobx CoWorker Table" />
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {observableCoWorkerStore.coWorkers.map(
              (coWorker: CoWorker, index: number) => (
                <TableRow key={index}>
                  <TableCell scope="row">{index}</TableCell>
                  <TableCell>{coWorker.firstName}</TableCell>
                  <TableCell>{coWorker.lastName}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default observer(MobxCoWorkerTable);

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

const DefaultCoWorkerTable: React.FC = () => {
  const { coWorkerStore } = useStore();

  return (
    <Card>
      <CardHeader title="Default CoWorker Table" />
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
            {coWorkerStore.coWorkers.map(
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

export default DefaultCoWorkerTable;

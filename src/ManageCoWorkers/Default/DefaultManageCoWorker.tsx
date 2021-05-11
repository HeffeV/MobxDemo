import React from "react";
import { Card, CardContent, CardHeader, Button, Grid } from "@material-ui/core";
import { useStore } from "../../Mobx/StoreProvider";
import { Field, Form } from "react-final-form";
import { TextField } from "../../InputFields/TextField/TextField";
import { CoWorker } from "../../Types/CoWorker";

const DefaultManageCoWorkers: React.FC = () => {
  const { coWorkerStore } = useStore();

  return (
    <Card>
      <CardHeader title="Default Manage CoWorkers" />
      <CardContent>
        <Form
          onSubmit={(values: CoWorker) => coWorkerStore.addCoWorker(values)}
        >
          {({ handleSubmit, form, submitting, hasValidationErrors }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    name="firstName"
                    component={TextField}
                    type="text"
                    placeholder={"First name"}
                    fullWidth
                    label={"First name"}
                    showCharacterLeft
                    maxLength={100}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="lastName"
                    component={TextField}
                    type="text"
                    placeholder={"Last name"}
                    fullWidth
                    label={"Last name"}
                    showCharacterLeft
                    maxLength={100}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={submitting || hasValidationErrors}
                      >
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </Form>
      </CardContent>
    </Card>
  );
};

export default DefaultManageCoWorkers;

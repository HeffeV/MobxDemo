import * as React from "react";
import { FieldRenderProps } from "react-final-form";
import MaterialUITextField from "@material-ui/core/TextField";

export const TextField: React.FC<FieldRenderProps<any>> = ({
  input: { name, onChange, value, ...restInput },
  meta,
  showCharacterLeft,
  maxLength,
  label,
  ...rest
}) => {
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  let characterLeftText = "";

  if (showCharacterLeft && meta.active) {
    if (value.length <= maxLength) {
      characterLeftText = `Characters left ${maxLength - value.length}`;
    }
  }

  return (
    <MaterialUITextField
      {...rest}
      name={name}
      label={`${label} ${characterLeftText}`}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value}
    />
  );
};

export default TextField;

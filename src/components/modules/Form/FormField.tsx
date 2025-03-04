import { IFormFieldProps } from "../../../types";
import { TextField } from "@mui/material";

const FormField: React.FC<IFormFieldProps> = ({
  name,
  label,
  value,
  onChange,
  multiline = false,
  minRows = 1,
}) => {
  return (
    <TextField
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      sx={{ width: "100%", margin: "8px 0" }}
      multiline={multiline}
      minRows={minRows}
    />
  );
};

export default FormField;

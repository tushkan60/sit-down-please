import Checkbox from "@mui/material/Checkbox";
import classes from "../filter-form/FilterForm.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";

export const CheckBox = (props) => {
  return (
    <FormControlLabel
      checked={props.checked}
      onChange={props.onChange}
      value={props.value}
      className={classes.filter__check}
      control={
        <Checkbox
          name={props.name}
          sx={{
            padding: "6px",
            color: "var(--color-gray)",
            "&.Mui-checked": {
              color: "var(--primary-color)",
            },
          }}
        />
      }
      label={props.label}
      labelPlacement="end"
    />
  );
};

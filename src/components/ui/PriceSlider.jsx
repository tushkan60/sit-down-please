import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { Input, FormControl, InputLabel, TextField } from "@mui/material";
import classes from "./PriceSlider.module.css";

export default function PriceSlider(props) {
  const [value, setValue] = useState([2000, 150000]);

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
    props.onValueChange(newValue);
  };

  const handleInputChange = (event, index) => {
    const newValue =
      event.target.value === "" ? "" : Number(event.target.value);
    const updatedValue = [...value];
    updatedValue[index] = newValue;
    setValue(updatedValue);
    props.onValueChange(updatedValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <div className={classes.input__group}>
        <FormControl>
          <TextField
            label={"От"}
            size="small"
            className={classes.slider__input}
            value={value[0]}
            onChange={(e) => handleInputChange(e, 0)}
            inputProps={{
              step: 1000,
              min: 0,
              max: 200000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            label={"До"}
            size="small"
            className={classes.slider__input}
            value={value[1]}
            onChange={(e) => handleInputChange(e, 1)}
            inputProps={{
              step: 1000,
              min: 0,
              max: 200000,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </FormControl>
      </div>
      <Slider
        getAriaLabel={() => "price range"}
        value={value}
        min={0}
        max={200000}
        step={1000}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        sx={{
          width: 300,
          color: "var(--primary-color)",
          "& .MuiSlider-thumb": {
            width: "0",
            height: "0",
            borderRadius: "1px",
            position: "absolute",
            right: "91",
            top: "calc(50% - 13px/2 + 13px)",
            borderLeft: "5px solid transparent",
            borderRight: "5px solid transparent",
            borderBottom: "15px solid var(--primary-color)",
          },
        }}
      />
    </Box>
  );
}

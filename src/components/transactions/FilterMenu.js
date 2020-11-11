import React from "react";
import menuIcon from "../../assets/icons/menu.png";
import CategoriesMenu from "./CategoriesMenu";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { StyledCategoriesButtonWrapper, StyledImage } from "../styled";
import { CSSTransition } from "react-transition-group";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { useState } from "react";
const FilterMenu = ({
  toggleCategoriesMenu,
  isCategoriesOpen,
  minDate,
  setMinDate,
  maxDate,
  setMaxDate,
  categories,
  setSelectedCategory,
}) => {
  const [timeFrameSelect, setTimeFrameSelect] = useState(0);
  const setTimeFrameFilter = (value) => {
    const now = new Date();
    const tempDate = new Date();
    switch (value) {
      case 0: {
        setMaxDate(null);
        setMinDate(null);

        break;
      }
      case 1: {
        setMaxDate(now);
        setMinDate(tempDate.setDate(now.getDate() - 7));
        break;
      }
      case 2: {
        setMaxDate(now);
        setMinDate(tempDate.setMonth(now.getMonth() - 1));
        console.log(tempDate.setMonth(now.getMonth() - 1));
        break;
      }
      default: {
        return null;
      }
    }
  };
  const handleTimeFrameChange = (e) => {
    setTimeFrameSelect(e.target.value);

    setTimeFrameFilter(e.target.value);
  };
  return (
    <>
      {categories ? (
        <>
          <StyledCategoriesButtonWrapper>
            <button onClick={toggleCategoriesMenu} width={90} noMx noBorder>
              <StyledImage src={menuIcon} />
            </button>
            <CSSTransition
              timeout={100}
              in={isCategoriesOpen}
              classNames="menu"
              unmountOnExit
              mountOnEnter
            >
              <CategoriesMenu
                categories={categories}
                setCategory={(category) => {
                  setSelectedCategory(category);
                }}
              />
            </CSSTransition>
          </StyledCategoriesButtonWrapper>
        </>
      ) : null}
      <InputLabel id="select-label">Time frame</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={timeFrameSelect}
        onChange={handleTimeFrameChange}
      >
        <MenuItem value={0}>None</MenuItem>
        <MenuItem value={1}>Last week</MenuItem>
        <MenuItem value={2}>Last month</MenuItem>
        <MenuItem value={3}>Select custom</MenuItem>
      </Select>

      {timeFrameSelect === 3 ? (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={minDate}
              onChange={(minDate) => setMinDate(minDate)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />

            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline2"
              label="Date picker inline"
              value={maxDate}
              onChange={(maxDate) => setMaxDate(maxDate)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      ) : null}
    </>
  );
};

export default FilterMenu;

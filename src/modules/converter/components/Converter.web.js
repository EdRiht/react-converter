import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { colors, spacing } from "../../../styles";
import { Grid, TextField, Fab, Tooltip } from "@material-ui/core";
import SwapHoriz from "@material-ui/icons/SwapHoriz";
import { toArabic, toRoman } from "../services";

const CONVERT_TYPES = {
  arabic: "arabic",
  roman: "roman"
};

const LABLES = {
  [CONVERT_TYPES.arabic]: {
    from: "Roman",
    to: "Arabic"
  },
  [CONVERT_TYPES.roman]: {
    from: "Arabic",
    to: "Roman"
  }
};

class Converter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentType: CONVERT_TYPES.roman,
      fromInput: "",
      toInput: "",
      hasError: false
    };

    this.onChangeClick = this.onChangeClick.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  get helperTextForFromValue() {
    const { hasError, currentType } = this.state;

    if (hasError) {
      return "Incorrect value.";
    } else if (currentType === CONVERT_TYPES.roman) {
      return "Enter an integer number between 1 and 3999";
    }

    return null;
  }

  onChangeClick = () => {
    const nextType =
      this.state.currentType === CONVERT_TYPES.arabic
        ? CONVERT_TYPES.roman
        : CONVERT_TYPES.arabic;
    this.setState({ currentType: nextType, fromInput: "", toInput: "" });
  };

  onChangeInput = event => {
    const { currentType } = this.state;
    const { value } = event.target;

    if (value) {
      const normalizedValue =
        currentType === CONVERT_TYPES.arabic ? toArabic(value) : toRoman(value);

      this.setState({
        fromInput: value,
        toInput: normalizedValue || "",
        hasError: !normalizedValue
      });
    } else {
      this.setState({
        hasError: false,
        fromInput: "",
        toInput: ""
      });
    }
  };

  render() {
    const { currentType } = this.state;
    return (
      <Grid container={true} spacing={2} justify="center">
        <Grid item={true} xs={12} sm={4} alignItems="center" justify="center">
          <TextField
            disabled
            fullWidth
            id="filled-disabled"
            label="From"
            value={LABLES[currentType].from}
            variant="filled"
          />
        </Grid>
        <Grid item={true} xs={12} sm={1} justify="center" alignItems="center">
          <Tooltip
            title="Change"
            aria-label="change"
            onClick={this.onChangeClick}
          >
            <Fab color="primary" className={this.props.classes.fab}>
              <SwapHoriz />
            </Fab>
          </Tooltip>
        </Grid>
        <Grid item={true} xs={12} sm={4} justify="center" alignItems="center">
          <TextField
            disabled
            fullWidth
            id="filled-disabled"
            label="To"
            value={LABLES[currentType].to}
            variant="filled"
          />
        </Grid>
        <Grid item={true} xs={12} sm={6} justify="center" alignItems="center">
          <TextField
            required
            fullWidth
            id="outlined-required"
            label={`From ${LABLES[currentType].from}`}
            value={this.state.fromInput}
            onChange={this.onChangeInput}
            error={this.state.hasError}
            helperText={this.helperTextForFromValue}
            variant="outlined"
          />
        </Grid>
        <Grid item={true} xs={12} sm={6} justify="center" alignItems="center">
          <TextField
            required
            fullWidth
            disabled
            id="outlined-required"
            label={`To ${LABLES[currentType].to}`}
            value={this.state.toInput}
            variant="outlined"
          />
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  button: {
    backgroundColor: colors.primary,
    color: colors.white,
    marginBottom: spacing.s3
  },
  fab: {
    margin: theme.spacing(2)
  }
});

export default withStyles(styles)(Converter);

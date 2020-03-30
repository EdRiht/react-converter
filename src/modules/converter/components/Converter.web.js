import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { colors, spacing } from "../../../styles";
import { Grid, TextField, Fab, Tooltip } from "@material-ui/core";
import SwapHoriz from "@material-ui/icons/SwapHoriz";

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
    };

    this.onChangeClick = this.onChangeClick.bind(this);
  }

  onChangeClick = () => {
    const nextType =
      this.state.currentType === CONVERT_TYPES.arabic
        ? CONVERT_TYPES.roman
        : CONVERT_TYPES.arabic;
    this.setState({ currentType: nextType });
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
            value=""
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
            value=""
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

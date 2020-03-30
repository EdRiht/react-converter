import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { colors, spacing, hexToRGB } from "../../../../styles";

class Root extends React.PureComponent {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <h1>Converter</h1>
        </div>
        <div className={classes.content}>
          <div className={classes.container}>{children}</div>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  header: {
    paddingLeft: spacing.s2,
    color: colors.gray.lightGray
  },
  wrapper: {
    position: "relative",
    float: "right",
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
    backgroundColor: `rgba(${hexToRGB(colors.gray.lightGray)} , 0.15)`,
    color: colors.blue.darkBlue
  },
  content: {
    padding: `${spacing.s7}px ${spacing.s11}px`,
    minHeight: `calc(100vh - 160px)`
  },
  container: {
    paddingRight: spacing.s3,
    paddingLeft: spacing.s3
  }
});

export default withStyles(styles)(Root);

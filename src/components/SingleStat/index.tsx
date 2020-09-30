import React from "react";

import { Card, Grid, Theme, Typography } from "@material-ui/core";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

export interface SingleStatProps extends WithStyles<typeof styles> {
  /**
   * The title of the statistic
   */
  title: string;
  /**
   * The prefix shown before the value
   */
  prefix?: string;
  /**
   * The value of the statistic
   */
  value: number;
  /**
   * The state of the value
   */
  state?: "loaded" | "loading" | "errored";
}

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      padding: spacing(1),
      textAlign: "center",
      borderWidth: 1,
      borderColor: palette.grey[300],
      borderStyle: "solid",
      minHeight: 100,
    },
    title: {
      paddingTop: 12,
      paddingBottom: 15,
      lineHeight: 1,
    },
    value: {
      color: palette.primary.main,
      fontWeight: 800,
      fontSize: "52px",
      fontFamily: "ModernEraBold",
      lineHeight: 1,
      marginBottom: 0,
    },
  });

/**
 * Primary component for showing a single statistic
 */
export const SingleStatComponent: React.FC<SingleStatProps> = ({
  classes,
  title,
  prefix = "",
  value = 0,
  state = "loaded",
  ...props
}) => {
  let suffix = "",
    newValue = `${value}`;

  if (value > 1000000) {
    newValue = (value / 1000000).toFixed(1);
    suffix = "m";
  } else if (value > 1000) {
    newValue = (value / 1000).toFixed(0);
    suffix = "k";
  }
  return (
    <Card elevation={0} className={classes.root} {...props}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="body1" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {state === "loaded" && (
            <Typography variant="h2" className={classes.value}>
              {prefix}
              {newValue}
              {suffix}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export const SingleStat = withStyles(styles)(SingleStatComponent);

import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

import { Button as MaterialButton } from "@material-ui/core";

export interface ButtonProps extends WithStyles<typeof styles> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const styles = () =>
  createStyles({
    linkButton: {
      fontFamily: "ModernEraBold",
      textAlign: "center",
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
      color: "#FFFFFF",
      fontSize: "21px",
      textTransform: "none",
      boxShadow: "none",
    },
  });

/**
 * Primary UI component for user interaction
 */
export const ButtonComp: React.FC<ButtonProps> = ({
  primary = false,
  label,
  classes,
  ...props
}) => {
  return (
    <MaterialButton
      variant="contained"
      color={primary ? "primary" : "secondary"}
      className={classes.linkButton}
      {...props}
    >
      {label}
    </MaterialButton>
  );
};

export const Button = withStyles(styles)(ButtonComp);

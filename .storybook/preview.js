import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { cmcDefault } from "../src/themes";

addDecorator((storyFn) => (
  <ThemeProvider theme={cmcDefault}>{storyFn()}</ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

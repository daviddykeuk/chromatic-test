import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import { Button, ButtonComp, ButtonProps } from "../../../components/Button";

export default {
  title: "Button",
  component: ButtonComp,
  decorators: [withDesign],
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/2yGI2OBJczXsBa1VrvAvZe/Premium-Account-Drafts?node-id=1170%3A232",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "View your Analytics",
};

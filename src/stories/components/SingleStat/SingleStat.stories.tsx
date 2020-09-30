import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import {
  SingleStat,
  SingleStatProps,
  SingleStatComponent,
} from "../../../components/SingleStat";

export default {
  title: "Single Statistic",
  component: SingleStatComponent,
  decorators: [withDesign],
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/2yGI2OBJczXsBa1VrvAvZe/Premium-Account-Drafts?node-id=1100%3A82",
    },
  },
} as Meta;

const Template: Story<SingleStatProps> = (args) => (
  <div style={{ width: 221 }}>
    <SingleStat {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Cash balance",
  prefix: "£",
  value: 129000,
  state: "loaded",
};

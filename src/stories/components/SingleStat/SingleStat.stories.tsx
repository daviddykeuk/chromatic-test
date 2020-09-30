import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  SingleStat,
  SingleStatProps,
  SingleStatComponent,
} from "../../../components/SingleStat";

export default {
  title: "Single Statistic",
  component: SingleStatComponent,
} as Meta;

const Template: Story<SingleStatProps> = (args) => <SingleStat {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Single stat",
  prefix: "£",
  value: 200,
  state: "loaded",
};

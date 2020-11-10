import React from "react";

import LoginForm from '@blocks/login-form';
import {Story} from "@storybook/react";

export default {
  title: "Blocks/LoginForm",
  component: LoginForm
}

const Template: Story = (args) => <LoginForm {...args} />;

export const Common = Template.bind({});
Common.args = {};

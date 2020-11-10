import React from 'react';

import {Story, Meta} from '@storybook/react/types-6-0';

import "@main-styles";
import TextField, {TextFieldProps} from './TextField';

export default {
  title    : 'Components/TextField',
  component: TextField
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Common = Template.bind({});
Common.args = {
  id: 'common_text_field',
  label: 'Common'
};

export const HasMessage = Template.bind({});
HasMessage.args = {
  id: 'has_message_text_field',
  label: 'Has message',
  message: 'Message here'
};

export const HasError = Template.bind({});
HasError.args = {
  id: 'has_error_text_field',
  label: 'Has error',
  hasError: true
};

export const HasErrorMessage = Template.bind({});
HasErrorMessage.args = {
  id: 'has_error_message_text_field',
  label: 'Has error message',
  hasError: true,
  message: 'Error message here'
};

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {Common, HasErrorMessage} from '../TextField.stories';
const getEl = () => screen.getByTestId('text_field');

it('Renders common TextField with a proper label', () => {
  render(<Common {...Common.args} />);
  expect(getEl().querySelector('label')).toHaveTextContent('Common');
});

it('Renders common TextField with proper label "for" property', () => {
  render(<Common {...Common.args} />);
  let inputId = getEl().querySelector('input').id;

  expect(getEl().querySelector('label').getAttribute('for')).toBe(inputId);
});

it('Renders with Error message', () => {
  render(<HasErrorMessage {...HasErrorMessage.args} />);

  expect(getEl().classList.contains('text-field--has-error')).toBeTruthy();
  expect(getEl().querySelector('.text-field__message')).toHaveTextContent('Error message here');
});

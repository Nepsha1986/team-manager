import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {Primary, Secondary} from '../Button.stories';

it('Renders Primary button with a proper classname', () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByRole('button')).toHaveClass('button--primary');
});

it('Renders Secondary button with a proper classname', () => {
  render(<Primary {...Secondary.args} />);
  expect(screen.getByRole('button')).toHaveClass('button--secondary');
});

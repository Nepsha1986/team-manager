import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import {Common} from '../LoginForm.stories';

it('Renders login form', () => {
  render(<Common {...Common.args} />);
  expect(screen.getByTestId('login_form')).toBeVisible();
});


// Form.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OperandContext } from './context/OperandContext';
import Form from './Form'; // Adjust the import path as necessary

describe('Form Component', () => {
  test('the button is disabled when the operand field is empty', async () => {
    const operand = 1;
    render(
      <OperandContext.Provider value={{ operand }}>
        <Form />
      </OperandContext.Provider>
    );
    // Initialize user-event
    const user = userEvent.setup();
    const operandInput = screen.getByRole('spinbutton', {
      name: /Calculate with/i,
    });
    const calculateButton = screen.getByRole('button', { name: /Submit/i });
    expect(calculateButton).not.toBeDisabled();
    await user.clear(operandInput);
    expect(calculateButton).toBeDisabled();
  });
});

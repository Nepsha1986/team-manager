import React from 'react';
import classNames from 'classnames';

import './text-field.scss';

export interface TextFieldProps {
  /**
   * ID of TextField Component
   */
  id: string

  /**
   * Value of TextField Component
   */
  value: string,

  /**
   * Label of TextField Component
   */
  label?: string,

  /**
   * State of TextField
   */
  hasError?: boolean,

  /**
   * Additional information
   */
  message?: string,

  [x:string]: any;
}

/**
 * Text field UI Component
 */
const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  hasError = false,
  value,
  message,
  ...props
}) => {
  let textFieldClass = classNames('text-field', {
    'text-field--has-error': hasError,
  });

  return (
    <div
      data-testid="text_field"
      className={textFieldClass}
    >
      {label &&
      <label
        htmlFor={id}
        className={'text-field__label'}
      >
        {label}
      </label>
      }
      <input
        id={id}
        className={'text-field__input'}
        type="text"
        value={value}
        {...props}
      />
      {message && <div className="text-field__message">
        {message}
      </div>}
    </div>
  )
};

export default TextField;

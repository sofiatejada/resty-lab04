import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from './Display';

describe('display', () => {
  it('renders display', () => {
    const hola = {
      'Hola': 'Rock, Paper, REST!'
    };

    render(
      <Display display={hola} />
    );
    
    const display = screen.getByText('"Rock, Paper, REST!"');
    expect(display).toMatchSnapshot();
  });
});

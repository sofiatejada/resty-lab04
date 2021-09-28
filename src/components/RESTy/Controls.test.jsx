import React from 'react';
import { render, screen } from '@testing-library/react';
import Controls from './Controls';

describe('controls', () => {
  it('displays controls', () => {
    render(
      <Controls 
        url="" data="" handleChange={() => {}} handleSubmit={() => {}} />
    );

    const controls = screen.getByLabelText('form');
    expect(controls).toMatchSnapshot();
  });
});

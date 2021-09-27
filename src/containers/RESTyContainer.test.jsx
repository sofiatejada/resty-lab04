import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import RESTyContainer from './RESTyContainer';
import userEvent from '@testing-library/user-event';

describe('container', () => {
  it.skip('fetches stuff', async () => {
    render(
      <RESTyContainer />
    );

    const urlInput = await screen.findByPlaceholderText('URL');
    // eslint-disable-next-line max-len
    userEvent.type(urlInput, 'https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=3&page=2');

    const thing = await screen.findByLabelText('GET');
    userEvent.click(thing);

    const butt = await screen.findByRole('button');
    userEvent.click(butt);

    return waitFor(() => {
      const something = screen.getByText('"Phoebe Heyerdahl"', {}, {
        timeout: 5000
      });
      expect(something).toBeTruthy();
    });
  });
});


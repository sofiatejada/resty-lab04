import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({ handleChange, handleSubmit }) {
  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>

      <input aria-label="url" placeholder="URL" type="text" />

      <section>

        <label htmlFor="GET">
          GET
          <input id="get" value="GET" name="method" type="radio" />
        </label>

        <label htmlFor="POST">
          POST
          <input id="post" value="POST" name="method" type="radio" />
        </label>

        <label htmlFor="PUT">
          PUT
          <input id="put" value="PUT" name="method" type="radio" />
        </label>

        <label htmlFor="DELETE">
          DELETE
          <input id="delete" value="DELETE" name="method" type="radio" />
        </label>

        <button aria-label="submit-button">Submit</button>
      </section>

      <section>

        <textarea aria-label="data" name="data" placeholder="JSON Body" />

      </section>

    </form>
  );
}

Controls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

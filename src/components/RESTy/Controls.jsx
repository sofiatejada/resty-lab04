import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({ 
  data,
  method,
  url,
  handleChange, 
  handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>

      <input 
        name="url"
        aria-label="url" 
        placeholder="URL" 
        type="url"
        value={url}
        onChange={handleChange} />

      <section>
        <label htmlFor="GET">
          GET
          <input id="GET" value="GET" name="method" type="radio" 
            onChange={handleChange}/>
        </label>

        <label htmlFor="POST">
          POST
          <input id="POST" value="POST" name="method" type="radio" 
            onChange={handleChange}/>
        </label>

        <label htmlFor="PUT">
          PUT
          <input id="PUT" value="PUT" name="method" type="radio" 
            onChange={handleChange}/>
        </label>

        <label htmlFor="DELETE">
          DELETE
          <input id="DELETE" value="DELETE" name="method" type="radio"
            onChange={handleChange} />
        </label>

        <button aria-label="submit-button">Submit</button>
      </section>
      <textarea 
        aria-label="data" 
        name="data"
        value={data}
        onChange={handleChange}
        placeholder="JSON Body" />
    </form>
  );
}

Controls.propTypes = {
  data: PropTypes.string,
  method: PropTypes.string,
  url: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

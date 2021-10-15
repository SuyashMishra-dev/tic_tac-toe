import React from 'react';
import propTypes from 'prop-types';

const ChangeTheme = ({ changeTheme }) => (
  <div className="checkbox-container">
    <div className="toggle-button-cover">
      <div className="button-cover">
        <div className="button r" id="button-6">
          <input onChange={changeTheme} type="checkbox" className="checkbox" />
          <div className="knobs">
          </div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
  </div>
);

ChangeTheme.propTypes = {
  changeTheme: propTypes.func,
};


export default ChangeTheme;

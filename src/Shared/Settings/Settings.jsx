/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';

import ThemeContext from '../../Context/ThemeContext';
import SettingImg from '../../Assets/Images/setting.png';

export default function Settings(props) {
  const [ toggleSettings, setToggleSetting ] = useState(false);
  const [ theme, setTheme ] = useState('light');
  const themeContext = useContext(ThemeContext);

  useEffect(
    () => {
      props.updateThemeContext(theme);
    },
    [ theme ]
  );

  return (
    <div className={`ui-builder ${toggleSettings === true ? 'open' : ''}`}>
      <span
        className="style-logger"
        data-test="style-logger"
        onClick={() => setToggleSetting(!toggleSettings)}
      >
        <img src={SettingImg} data-test="setting-img" alt="Setting" />
      </span>
      <div className="ui-block" data-test="ui-block">
        <div className="style-head">
          <h5 className="mb-0">Settings</h5>
        </div>
        <div className="style-body">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="light-theme-radio"
              name="themeRadio"
              onClick={() => {
                setTheme('light');
              }}
              defaultChecked={themeContext === 'light'}
            />
            <label className="form-check-label" htmlFor="light-theme-radio">
              Light Theme
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="themeRadio"
              id="dark-theme-radio"
              defaultChecked={themeContext === 'dark'}
              onClick={() => {
                setTheme('dark');
              }}
            />
            <label className="form-check-label" htmlFor="dark-theme-radio">
              Dark Theme
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

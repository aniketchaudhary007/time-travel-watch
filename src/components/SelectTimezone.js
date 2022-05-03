import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import OuterWrapper from './styles/OuterWrapper';
import InnerWrapper from './styles/InnerWrapper';
import SubtitleWrapper from './styles/SubtitleWrapper';
import Button from './styles/Button';
import ButtonWrapper from './styles/ButtonWrapper';
import ButtonIcon from './styles/ButtonIcon';
import BackImage from '../images/back-arrow.svg';
import DoneImage from '../images/Icon-checked.svg';
import { TIMEZONE_OPTIONS } from '../const';
import SelectDropdownWrapper from './styles/SelectDropdownWrapper';

function SelectTimezone({ timezone, renderWatchScreen, updateTimezoneinWatch }) {
  const [newTimezone, setNewTimezone] = useState(timezone);

  const handleTimezoneChange = (event) => {
    setNewTimezone(event.target.value);
  };

  const uniqueTimezones = [...new Set([newTimezone, ...TIMEZONE_OPTIONS])];

  return (
    <OuterWrapper>
      <InnerWrapper>
        <SubtitleWrapper>
          Choose timezone
        </SubtitleWrapper>
        <SelectDropdownWrapper value={newTimezone} onChange={handleTimezoneChange}>
          {uniqueTimezones.map((tz) => (
            <option key={tz} value={tz}>{tz}</option>
          ))}
        </SelectDropdownWrapper>
      </InnerWrapper>
      <ButtonWrapper>
        <Button onClick={renderWatchScreen}>
          <ButtonIcon src={BackImage} alt="back" />
          Back
        </Button>
        <Button onClick={() => updateTimezoneinWatch(newTimezone)}>
          <ButtonIcon src={DoneImage} alt="done" />
          Done
        </Button>
      </ButtonWrapper>
    </OuterWrapper>
  );
}

SelectTimezone.propTypes = {
  renderWatchScreen: PropTypes.func.isRequired,
  timezone: PropTypes.string.isRequired,
  updateTimezoneinWatch: PropTypes.func.isRequired,
};

export default SelectTimezone;

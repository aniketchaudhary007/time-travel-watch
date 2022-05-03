import React from 'react';
import * as PropTypes from 'prop-types';
import OuterWrapper from './styles/OuterWrapper';
import InnerWrapper from './styles/InnerWrapper';
import DateWrapper from './styles/DateWrapper';
import TimeWrapper from './styles/TimeWrapper';
import Button from './styles/Button';
import VectorImage from '../images/vector.svg';
import TimezoneImage from '../images/timezoneIcon.svg';
import ButtonIcon from './styles/ButtonIcon';
import ButtonWrapper from './styles/ButtonWrapper';
import TimezoneWrapper from './styles/TimezoneWrapper';

function PresentWatchFace({
  time, date, timezone, renderSelectTimezoneScreen, renderSelectYearScreen,
}) {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <TimeWrapper>
          {time}
        </TimeWrapper>
        <DateWrapper>
          {date}
        </DateWrapper>
        <TimezoneWrapper>
          {timezone}
        </TimezoneWrapper>
      </InnerWrapper>
      <ButtonWrapper>
        <Button onClick={renderSelectYearScreen}>
          <ButtonIcon src={VectorImage} alt="jump" />
          Jump
        </Button>
        <Button onClick={renderSelectTimezoneScreen}>
          <ButtonIcon src={TimezoneImage} alt="timezone" />
          Timezone
        </Button>
      </ButtonWrapper>
    </OuterWrapper>
  );
}

PresentWatchFace.propTypes = {
  time: PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  renderSelectYearScreen: PropTypes.func.isRequired,
  renderSelectTimezoneScreen: PropTypes.func.isRequired,
};

export default PresentWatchFace;

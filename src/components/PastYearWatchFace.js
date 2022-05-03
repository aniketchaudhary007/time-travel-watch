import React from 'react';
import * as PropTypes from 'prop-types';
import OuterWrapper from './styles/OuterWrapper';
import InnerWrapper from './styles/InnerWrapper';
import DateWrapper from './styles/DateWrapper';
import TimeWrapper from './styles/TimeWrapper';
import Button from './styles/Button';
import ResetImage from '../images/reset-icon.svg';
import ButtonIcon from './styles/ButtonIcon';
import ButtonWrapper from './styles/ButtonWrapper';
import SubtitleWrapper from './styles/SubtitleWrapper';
import TimezoneWrapper from './styles/TimezoneWrapper';

function PastYearWatchFace({
  time, date, timezone, resetTime,
}) {
  return (
    <OuterWrapper>
      <InnerWrapper isPast>
        <SubtitleWrapper isPast>
          You’re in the past!
        </SubtitleWrapper>
        <TimeWrapper>
          {time}
        </TimeWrapper>
        <DateWrapper isPast>
          {date}
        </DateWrapper>
        <TimezoneWrapper>
          {timezone}
        </TimezoneWrapper>
      </InnerWrapper>
      <ButtonWrapper>
        <Button onClick={resetTime}>
          <ButtonIcon src={ResetImage} alt="reset" />
          Reset
        </Button>
      </ButtonWrapper>
    </OuterWrapper>
  );
}

PastYearWatchFace.propTypes = {
  time: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  resetTime: PropTypes.func.isRequired,
};

export default PastYearWatchFace;

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

function FutureYearWatchFace({
  time, timezone, date, resetTime,
}) {
  return (
    <OuterWrapper>
      <InnerWrapper isFuture>
        <SubtitleWrapper isFuture>
          You’re in the future!
        </SubtitleWrapper>
        <TimeWrapper>
          {time}
        </TimeWrapper>
        <DateWrapper isFuture>
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

FutureYearWatchFace.propTypes = {
  time: PropTypes.number.isRequired,
  timezone: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  resetTime: PropTypes.func.isRequired,
};

export default FutureYearWatchFace;

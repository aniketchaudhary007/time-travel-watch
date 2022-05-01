import React from 'react';
import OuterWrapper from './styles/OuterWrapper';
import InnerWrapper from './styles/InnerWrapper';
import DateWrapper from './styles/DateWrapper';
import TimeWrapper from './styles/TimeWrapper';
import JumpButton from './styles/JumpButton';
import VectorImage from '../images/vector.svg';
import TimezoneImage from '../images/timezoneIcon.svg';
import ButtonIcon from './styles/ButtonIcon';
import TimezoneButton from './styles/TimezoneButton';
import ButtonWrapper from './styles/ButtonWrapper';

function PresentWatchFace({ time, date }) {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <TimeWrapper>
          {time}
        </TimeWrapper>
        <DateWrapper>
          {date}
        </DateWrapper>
      </InnerWrapper>
      <ButtonWrapper>
        <JumpButton>
          <ButtonIcon src={VectorImage} alt="jump" />
          Jump
        </JumpButton>
        <TimezoneButton>
          <ButtonIcon src={TimezoneImage} alt="timezone" />
          Timezone
        </TimezoneButton>
      </ButtonWrapper>
    </OuterWrapper>
  );
}

export default PresentWatchFace;

import React from 'react';
import * as PropTypes from 'prop-types';
import OuterWrapper from './styles/OuterWrapper';
import InnerWrapper from './styles/InnerWrapper';
import SubtitleWrapper from './styles/DateWrapper';
import Button from './styles/Button';
import ButtonWrapper from './styles/ButtonWrapper';
import ButtonIcon from './styles/ButtonIcon';
import BackImage from '../images/back-arrow.svg';
import DoneImage from '../images/Icon-checked.svg';
import SelectDropdownWrapper from './styles/SelectDropdownWrapper';
import { YEARS } from '../const';

function SelectYear({
  year, updateWatchFaceAccToYear, renderWatchScreen, handleYearChange,
}) {
  const uniqueYears = [...new Set([year, ...YEARS])];
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SubtitleWrapper>
          Choose year
        </SubtitleWrapper>
        <SelectDropdownWrapper value={year} onChange={handleYearChange}>
          {uniqueYears.map((yr) => (
            <option key={yr} value={yr}>{yr}</option>
          ))}
        </SelectDropdownWrapper>
      </InnerWrapper>
      <ButtonWrapper>
        <Button onClick={renderWatchScreen}>
          <ButtonIcon src={BackImage} alt="back" />
          Back
        </Button>
        <Button onClick={updateWatchFaceAccToYear}>
          <ButtonIcon src={DoneImage} alt="done" />
          Done
        </Button>
      </ButtonWrapper>
    </OuterWrapper>
  );
}

SelectYear.propTypes = {
  handleYearChange: PropTypes.func.isRequired,
  renderWatchScreen: PropTypes.func.isRequired,
  updateWatchFaceAccToYear: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
};

export default SelectYear;

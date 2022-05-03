import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { WATCH_FORMAT } from './const';
import PresentWatchFace from './components/PresentWatchFace';
import FutureYearWatchFace from './components/FutureYearWatchFace';
import PastYearWatchFace from './components/PastYearWatchFace';
import SelectTimezone from './components/SelectTimezone';
import SelectYear from './components/SelectYear';
import 'moment-timezone';

const LOCAL_TIMEZONE = moment.tz.guess();

function App() {
  const [time, setTime] = useState(0);
  const [date, setDate] = useState('');
  const [year, setYear] = useState(moment().year());
  const [selectTimezone, setSelectTimezone] = useState(false);
  const [selectYear, setSelectYear] = useState(false);
  const [timezone, setTimezone] = useState(LOCAL_TIMEZONE);
  const [watchFace, setWatchFace] = useState(WATCH_FORMAT.PRESENT_TIME);
  let second = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      // Reset the clock after every 15 seconds.
      if (second && second % 15 === 0) {
        resetTime();
        second = 0;
      }

      if (watchFace === WATCH_FORMAT.PRESENT_TIME) {
        setPresentTime();
      } else if (watchFace === WATCH_FORMAT.FUTURE_TIME) {
        setFutureTime();
      } else {
        setPastTime();
      }
      second += 1;
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone, watchFace]);

  const updateWatchFaceAccToYear = () => {
    const presentYear = moment().year();

    if (presentYear > year) {
      setWatchFace(WATCH_FORMAT.PAST_TIME);
    } else if (presentYear < year) {
      setWatchFace(WATCH_FORMAT.FUTURE_TIME);
    }
    renderWatchScreen();
  };

  const setPresentTime = () => {
    setTime(moment().tz(timezone).format('h:mm:ss A'));
    setDate(moment().tz(timezone).format('ddd, MMMM Do YYYY'));
  };

  const setFutureTime = () => {
    const numberOfYears = year - moment().year();
    setTime(moment().tz(timezone).format('h:mm:ss A'));
    setDate(moment().add(numberOfYears, 'Y').format('ddd, MMMM Do YYYY'));
  };

  const setPastTime = () => {
    const numberOfYears = moment().year() - year;
    setTime(moment().tz(timezone).format('h:mm:ss A'));
    setDate(moment().subtract(numberOfYears, 'Y').format('ddd, MMMM Do YYYY'));
  };

  const renderSelectTimezoneScreen = () => {
    setSelectTimezone(true);
  };

  const renderSelectYearScreen = () => {
    setSelectYear(true);
  };

  const renderWatchScreen = () => {
    setSelectTimezone(false);
    setSelectYear(false);
  };

  const handleYearChange = (event) => {
    setYear(Number(event.target.value));
  };

  const updateTimezoneinWatch = (tz) => {
    setTimezone(tz);
    renderWatchScreen();
  };

  const resetTime = () => {
    renderWatchScreen();
    setWatchFace(WATCH_FORMAT.PRESENT_TIME);
    setTimezone(LOCAL_TIMEZONE);
  };

  // Select the Timezone
  if (selectTimezone) {
    return (
      <SelectTimezone
        timezone={timezone}
        renderWatchScreen={renderWatchScreen}
        updateTimezoneinWatch={updateTimezoneinWatch}
      />
    );
  }

  // Select the year to jump in past or future
  if (selectYear) {
    return (
      <SelectYear
        year={year}
        renderWatchScreen={renderWatchScreen}
        updateWatchFaceAccToYear={updateWatchFaceAccToYear}
        handleYearChange={handleYearChange}
      />
    );
  }

  return (
    <div>
      {watchFace === WATCH_FORMAT.PRESENT_TIME && (
        <PresentWatchFace
          timezone={timezone}
          date={date}
          time={time}
          renderSelectTimezoneScreen={renderSelectTimezoneScreen}
          renderSelectYearScreen={renderSelectYearScreen}
        />
      )}
      {watchFace === WATCH_FORMAT.FUTURE_TIME && (
        <FutureYearWatchFace
          time={time}
          date={date}
          timezone={timezone}
          resetTime={resetTime}
        />
      )}
      {watchFace === WATCH_FORMAT.PAST_TIME && (
        <PastYearWatchFace
          time={time}
          date={date}
          timezone={timezone}
          resetTime={resetTime}
        />
      )}
    </div>
  );
}

export default App;

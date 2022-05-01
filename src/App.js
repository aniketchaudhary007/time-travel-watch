import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { WATCH_FORMAT } from './const';
import PresentWatchFace from './components/PresentWatchFace';
import FutureYearWatchFace from './components/FutureYearWatchFace';
import PastYearWatchFace from './components/PastYearWatchFace';
import 'moment-timezone';

function App() {
  const [time, setTime] = useState(0);
  const [date, setDate] = useState('');
  //  const [timezone, setTimezone] = useState('');
  const [watchFace, setWatchFace] = useState('LOCALTIME');

  const currentTime = () => {
    setTime(moment().format('h:mm:ss A'));
    setDate(moment().format('MMMM Do YYYY'));
    setWatchFace('LOCALTIME');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      currentTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  const newTimezone = () => {
    setTime(moment().tz('America/Los_Angeles').format('h:mm:ss A'));
    setDate(moment().tz('America/Los_Angeles').format('MMMM Do YYYY'));
    setWatchFace('TIMEZONE');
  };

  const futureYear = () => {
    setDate(moment().add(1, 'Y').format('MMMM Do YYYY'));
    setWatchFace('FUTURE_YEAR');
  };

  const pastYear = () => {
    setDate(moment().subtract(1, 'Y').format('MMMM Do YYYY'));
    setWatchFace('PAST_YEAR');
  };

  return (
    <div>
      {watchFace === WATCH_FORMAT.LOCALTIME && (
        <PresentWatchFace
          time={time}
          date={date}

        />
      )}
      {watchFace === WATCH_FORMAT.FUTURE_YEAR && (
        <FutureYearWatchFace
          time={time}
          date={date}
        />
      )}
      {watchFace === WATCH_FORMAT.PAST_YEAR && (
        <PastYearWatchFace
          time={time}
          date={date}
        />
      )}
    </div>
  );
}

export default App;

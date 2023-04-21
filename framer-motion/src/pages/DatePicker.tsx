import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { isSunday } from "date-fns";

const App = () => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());

  return (
    <>
      <DatePicker
        value={startDate}
        onChange={setStartDate}
        minDetail="month"
        tileDisabled={({ date }) => isSunday(date)}
      />
      <DatePicker
        value={endDate}
        onChange={setEndDate}
        minDetail="month"
        tileDisabled={({ date }) => isSunday(date)}
      />
    </>
  );
};

export default App;

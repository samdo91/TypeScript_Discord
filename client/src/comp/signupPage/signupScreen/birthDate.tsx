import styled from "@emotion/styled";
import React from "react";

interface BirthDateProps {
  years: string;
  setYears: React.Dispatch<React.SetStateAction<string>>;
  months: string;
  setMonths: React.Dispatch<React.SetStateAction<string>>;
  days: string;
  setDays: React.Dispatch<React.SetStateAction<string>>;
}

function BirthDate({
  years,
  setYears,
  months,
  setMonths,
  days,
  setDays,
}: BirthDateProps) {
  const yearOptions = Array.from({ length: 124 }, (_, index) => 2023 - index);
  const monthOptions = Array.from({ length: 12 }, (_, index) => index + 1);
  const dayOptions = Array.from({ length: 31 }, (_, index) => index + 1);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYears(event.target.value);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonths(event.target.value);
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDays(event.target.value);
  };

  return (
    <BirthDates>
      <SelectField placeholder="년도" onChange={handleYearChange} value={years}>
        {yearOptions.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </SelectField>

      <SelectField placeholder="월" onChange={handleMonthChange} value={months}>
        {monthOptions.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </SelectField>

      <SelectField placeholder="일" onChange={handleDayChange} value={days}>
        {dayOptions.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </SelectField>
    </BirthDates>
  );
}

export default BirthDate;

const BirthDates = styled.div`
  /* 스타일 추가 */
`;

const SelectField = styled.select`
  width: 11vw;
  padding: 10px;
  box-sizing: border-box;
  font-size: 40px;
  border-radius: 4px;
  margin: 5px;
  /* 추가 스타일 */
`;

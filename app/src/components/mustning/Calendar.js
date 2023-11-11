// CalendarComponent.jsx
import React, { useState } from 'react';
import { Form, Segment } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'semantic-ui-css/semantic.min.css'; // Make sure to import Semantic UI CSS

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>Select a Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default CalendarComponent;

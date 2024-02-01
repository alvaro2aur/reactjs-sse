import React, { useEffect, useState } from 'react';

const EventComponent = () => {
  const [message, setMessage] = useState('No mexcxzcssfage yet.');

  useEffect(() => {
    console.log('EventComponent mounted');
    const eventSource = new EventSource('http://localhost:3001/events');

    if (typeof eventSource === 'undefined') {
      console.log('EventSource not supported');
    }
    eventSource.onmessage = (event) => {
      // const data = JSON.parse(event.data);
      setMessage(JSON.parse(event.data));
    }

    return () => eventSource.close();
  }, [])
  
  return (
    <div>
      <h2>{message.entity}</h2>
      <p>{message.cause} {message.value}</p>
      <p>{message.date}</p>
    </div>
  );
}

export default EventComponent;
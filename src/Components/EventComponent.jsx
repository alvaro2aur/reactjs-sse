import React, { useEffect, useState } from 'react';
import TextExample from './Card';

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
  
  return (<TextExample title={message.entity} subtitle={message.cause} content={message.value} />);
}

export default EventComponent;
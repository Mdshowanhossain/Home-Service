import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        fetch('https://mighty-eyrie-27814.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
          
           
            <div>
                {
                    events.map(event => <Event key="{_id}" event={event}></Event>)
                }
            </div>
            
        </div>
    );
};

export default Home;
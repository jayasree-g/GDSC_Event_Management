import React, { useState, useEffect } from "react";
import { getAllEvents } from "../Apis/events";

interface Event {
  eventId: number;
  name: string;
  time: string;
  venue: string;
  description: string;
}

function UserPortal() {
  const [registeredEvents, setRegisteredEvents] = useState<Event[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  async function fetchData() {
    try {
      const fetchedEvents = await getAllEvents();
      setEvents(fetchedEvents);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleRegisterForEvent(eventId: number) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-full p-4">
      <h2 className="text-2xl font-bold mb-4">User Portal</h2>
      <div>
        <h3 className="text-xl font-semibold">Available Events</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event.eventId}
              className="border border-gray-300 rounded p-4 shadow-md"
            >
              <h4 className="text-lg font-semibold">{event.name}</h4>
              <p>Description: {event.description}</p>
              <p>Date: {event.time}</p>
              <p>Location: {event.venue}</p>
              <button
                onClick={() => handleRegisterForEvent(event.eventId)}
                className="bg-blue-500 text-white rounded px-3 py-1 mt-2 hover:bg-blue-600"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Registered Events</h3>
        <ul>
          {registeredEvents.map((event) => (
            <li key={event.eventId} className="mb-2">
              {event.name} - {event.time} - {event.venue} - {event.description}
              <span className="bg-[#186d67] ml-2">Registered</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserPortal;

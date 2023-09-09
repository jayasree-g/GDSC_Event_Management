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
        <h3 className="text-xl font-semibold mb-4">Available Events</h3>
        <div className="flex flex-col gap-3">
          {events.map((event) => (
            <div
              key={event.eventId}
              className="shadow-lg w-screen hover:scale-105 duration-300 bg-[#1e1e1e] border border-[#323434] p-4"
            >
              <h4 className="text-lg font-semibold mb-3">{event.name}</h4>
              <p>What's Happening: {event.description}</p>
              <p>When: {event.time}</p>
              <p>Where: {event.venue}</p>
              <button
                onClick={() => handleRegisterForEvent(event.eventId)}
                className="bg-[#186d67] text-white rounded px-3 py-1 mt-2 hover:bg-[#183937]"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <h3 className="text-xl font-semibold">Registered Events</h3>
        <ul>
          {registeredEvents.map((event) => (
            <li key={event.eventId} className="mb-2">
              {event.name} - {event.time} - {event.venue} - {event.description}
              <span className="bg-[#186d67] ml-2">Registered</span>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default UserPortal;

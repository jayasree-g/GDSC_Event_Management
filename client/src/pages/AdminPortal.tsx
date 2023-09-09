import React, { useState, useEffect } from "react";
import {
  createEvent,
  deleteEventById,
  getAllEvents,
  updateEvent,
} from "../Apis/events";

interface Event {
  eventId: number;
  name: string;
  time: string;
  venue: string;
  description: string;
}

interface NewEvent {
  name: string;
  time: string;
  venue: string;
  description: string;
}

function AdminPortal() {
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState<NewEvent>({
    name: "",
    time: "",
    venue: "",
    description: "",
  });
  const [editEvent, setEditEvent] = useState<Event | null>();
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);

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

  async function handleCreateEvent() {
    try {
      if (
        !newEvent.name ||
        !newEvent.description ||
        !newEvent.time ||
        !newEvent.venue
      ) {
        document.querySelectorAll(".input-validation").forEach((input) => {
          if (!(input as HTMLInputElement).value) {
            input.classList.add("border-red-500");
          } else {
            input.classList.remove("border-red-500");
          }
        });
        return;
      }

      const createdEvent = await createEvent(newEvent);
      setEvents([...events, createdEvent]);
      setNewEvent({
        name: "",
        time: "",
        venue: "",
        description: "",
      });
      setIsCreatingEvent(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditEvent(editorId: number) {
    try {
      await updateEvent({ editorId, ...editEvent });
      fetchData();
      setEditEvent(null);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteEvent = async (eventId: number) => {
    try {
      await deleteEventById(eventId);
      setEvents(events.filter((event) => event.eventId !== eventId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 ">Admin Portal</h2>
      <button
        onClick={() => setIsCreatingEvent(true)}
        className="bg-[#186d67] text-white rounded px-3 py-1 hover:bg-[#183937] mt-6 mb-3"
      >
        Add New Event
      </button>
      {isCreatingEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-black">
          <div className="bg-white p-4 rounded shadow-md">
            <span
              className="absolute top-2 right-2 text-gray-600 cursor-pointer"
              onClick={() => setIsCreatingEvent(false)}
            >
              &times;
            </span>
            <h3 className="text-xl font-semibold mb-2">Add New Event</h3>
            <input
              type="text"
              placeholder="Event Name"
              value={newEvent.name}
              onChange={(e) =>
                setNewEvent({ ...newEvent, name: e.target.value })
              }
              className="border border-gray-300 rounded px-2 py-1 w-full mb-2 input-validation"
            />
            <input
              type="text"
              placeholder="Event Description"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
              className="border border-gray-300 rounded px-2 py-1 w-full mb-2 input-validation"
            />
            <input
              type="text"
              placeholder="Event Date"
              value={newEvent.time}
              onChange={(e) =>
                setNewEvent({ ...newEvent, time: e.target.value })
              }
              className="border border-gray-300 rounded px-2 py-1 w-full mb-2 input-validation"
            />
            <input
              type="text"
              placeholder="Event Location"
              value={newEvent.venue}
              onChange={(e) =>
                setNewEvent({ ...newEvent, venue: e.target.value })
              }
              className="border border-gray-300 rounded px-2 py-1 w-full mb-2 input-validation"
            />
            <button
              onClick={handleCreateEvent}
              className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsCreatingEvent(false)}
              className="bg-gray-400 text-white rounded px-3 py-1 ml-2 hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div>
        <h3 className="text-xl font-semibold">Event List</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event.eventId}
              className="shadow-lg max-w-sm hover:scale-105 duration-300 bg-[#1e1e1e] border border-[#323434] p-4"
            >
              <h4 className="text-2xl font-semibold">{event.name}</h4>
              <p>
                <span className=" font-semibold text-lg">Event Story!: </span>
                {event.description}
              </p>
              <p>
                <span className=" font-semibold text-lg">Happening on: </span>
                {event.time}
              </p>
              <p>
                <span className=" font-semibold text-lg">Where to be: </span>
                {event.venue}
              </p>
              <div className="mt-2">
                <button
                  onClick={() => setEditEvent(event)}
                  className="bg-[#186d67] text-white rounded px-2 py-1 ml-2 hover:bg-[#1e4b48]"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteEvent(event.eventId)}
                  className="bg-red-500 text-white rounded px-2 py-1 ml-2 hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {editEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 text-black">
          <div className="bg-white p-4 rounded shadow-md">
            <span
              className="absolute top-2 right-2 text-gray-600 cursor-pointer"
              onClick={() => setEditEvent(null)}
            >
              &times;
            </span>
            <h3 className="text-xl font-semibold mb-2">Edit Event</h3>
            <input
              type="text"
              placeholder="Event Name"
              value={editEvent.name}
              onChange={(e) =>
                setEditEvent({ ...editEvent, name: e.target.value })
              }
              className="border border-gray-300 rounded px-2 py-1 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Event Description"
              value={editEvent.description}
              onChange={(e) =>
                setEditEvent({ ...editEvent, description: e.target.value })
              }
              className="border border-gray-300 rounded px-2 py-1 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Event Date"
              value={editEvent.time}
              onChange={(e) =>
                setEditEvent({ ...editEvent, time: e.target.value })
              }
              className="border border-gray-300 rounded px-2 py-1 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Event Location"
              value={editEvent.venue}
              onChange={(e) =>
                setEditEvent({ ...editEvent, venue: e.target.value })
              }
              className="border border-gray-300 rounded px-2 py-1 w-full mb-2"
            />
            <button
              onClick={() => handleEditEvent(editEvent.eventId)}
              className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPortal;

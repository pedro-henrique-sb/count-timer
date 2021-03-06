/* eslint-disable import/extensions */
const { init } = require('./dbInit.js');

const db = init();

function addEvent(name, date) {
  const newEvent = db.prepare(`
    INSERT INTO events (
      name,
      date
    ) VALUES (
      @name,
      @date
    );
  `);

  newEvent.run({ name, date });
}

function updateEvent(id, name, date) {
  const updatedEvent = db.prepare(`
    UPDATE events
    SET name=@name, date=@date
    WHERE id=@id
  `);

  updatedEvent.run({ id, name, date });
}

function searchEvent(eventID) {
  return db.prepare(`SELECT * FROM events WHERE id=${eventID}`).all();
}

function deleteEvent(eventID) {
  db.prepare(`DELETE FROM events WHERE id=${eventID}`).run();
}

function getAllEvents() {
  const allEvents = db.prepare('SELECT * FROM events').all();
  return allEvents;
}

module.exports = {
  addEvent, updateEvent, searchEvent, deleteEvent, getAllEvents,
};

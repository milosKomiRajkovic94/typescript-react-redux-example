import React from 'react';
import { UserEvent, deleteUserEvent } from '../../redux/user-events';
import { useDispatch } from 'react-redux';

interface Props {
    event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteUserEvent(event.id));
    }
    return (
    <div className="calendar-event">
        <div className="calendar-event-info">
        <div className="calendar-event-time">10:00 - 12:00</div>
        <div className="calendar-event-title">{event.title}</div>
        </div>
        <button onClick={handleDeleteClick} className="calendar-event-delete-button">
        &times;
        </button>
    </div>
    );
};

export default EventItem;
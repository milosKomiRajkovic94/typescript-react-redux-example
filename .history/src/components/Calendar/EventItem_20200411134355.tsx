import React, {useState, useEffect, useRef} from 'react';
import { UserEvent, deleteUserEvent, updateUserEvent } from '../../redux/user-events';
import { useDispatch } from 'react-redux';

interface Props {
    event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(false);

    const handleDeleteClick = () => {
        dispatch(deleteUserEvent(event.id));
    }

    const handleTitleClick = () => {
        setEditable(true);
    };

    const onTitleBlur = () => {
        if(title !== event.title){
            dispatch(updateUserEvent({
                ...event, 
                title
            }));
        }
        setEditable(false);
        
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(editable){
            inputRef.current?.focus();
        }
    }, [editable]);

    const [title, setTitle] = useState(event.title);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    return (
    <div className="calendar-event">
        <div className="calendar-event-info">
            <div className="calendar-event-time">10:00 - 12:00</div>
            <div className="calendar-event-title">
                {editable ? (<input type={'text'} ref={inputRef} onChange={handleChange} value={title} onBlur={onTitleBlur} />) : (<span onClick={handleTitleClick}>{title}</span>)}
            </div>
        </div>
        <button onClick={handleDeleteClick} className="calendar-event-delete-button">
        &times;
        </button>
    </div>
    );
};

export default EventItem;
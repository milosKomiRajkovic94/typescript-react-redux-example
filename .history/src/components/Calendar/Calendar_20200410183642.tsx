import React, {useEffect} from 'react';
import './Calendar.css';
import {connect, ConnectedProps} from 'react-redux';
import { RootState } from '../../redux/store';
import { selectUserEventsArray, loadUserEvents } from '../../redux/user-events';

const mapState = (state: RootState) => ({
    events: selectUserEventsArray(state)
});

const mapDispatch = {
    loadUserEvents
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux{}

const Calendar: React.FC<Props> = ({events, loadUserEvents}) => {

    useEffect(() => {
        loadUserEvents();
    }, [])

    return(
        <div
            className={'calendar'}
        >
            <div
                className={'calendar-day'}
            >
                <div 
                    className={'calendar-day-label'}>
                    <span> 1 February </span>
                </div>
                <div
                    className={'calendar-events'}
                >
                    <div
                        className={'calendar-event'}
                    >
                        <div 
                            className={'calendar-event-info'}
                        >
                            <div
                                className={'calendar-event-time'}
                            >
                                10:00 - 12:00
                            </div>
                            <div
                                className={'calendar-event-title'}
                            >
                                Learning TypeScript
                            </div>
                        </div>
                        <button
                            className={'calendar-event-delete-button'}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={'calendar-day'}
            >
                <div 
                    className={'calendar-day-label'}>
                    <span> 1 February </span>
                </div>
                <div
                    className={'calendar-events'}
                >
                    <div
                        className={'calendar-event'}
                    >
                        <div 
                            className={'calendar-event-info'}
                        >
                            <div
                                className={'calendar-event-time'}
                            >
                                10:00 - 12:00
                            </div>
                            <div
                                className={'calendar-event-title'}
                            >
                                Learning TypeScript
                            </div>
                        </div>
                        <button
                            className={'calendar-event-delete-button'}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connector(Calendar);
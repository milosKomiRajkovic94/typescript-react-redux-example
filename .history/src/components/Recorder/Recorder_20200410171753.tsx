import React from 'react';
import './Recorder.css';
import { useDispatch, useSelector } from 'react-redux';
import { start, selectDateStart} from '../../redux/recorder';


const Recorder = () => {

    const dispatch = useDispatch();
    const dateStart = useSelector(selectDateStart);
    const started = dateStart !== '';

    const handleClick = () => {
        dispatch(start())
    }

    return (
        <div
            className={'recorder'}
        >
            <button  className={'recorder-record'}>
                <span></span>
            </button>
            <div className={'recorder-counter'}>00:00:00</div>
        </div>
    )
}

export default Recorder;
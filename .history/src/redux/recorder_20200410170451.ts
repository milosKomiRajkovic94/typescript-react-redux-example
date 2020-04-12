
import { Action } from 'redux';

interface RecorderState {
    dateStart: string;
    dateEnd: string;
}

const START = 'recorder/start';
const STOP = 'recorder/stop';

type StartAction =  Action<typeof START>

const recorderReducer = (state: RecorderState, action) => {
    switch(action.type){
        default: return state;
    }
}

export default recorderReducer;
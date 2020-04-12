interface UserEvent{
    id: number;
    title: string;
    dateStart: string;
    dateEnd: string;
}

interface UserEventsState {
    byIds: Record<UserEvent['id'], UserEvent>;
    allIds: UserEvent['id'][];
}

const userEventsReducer = (state: UserEventsState, action: AnyAction) => {
    switch(action.type){

        default: 
        return state;
    }
}

export default userEventsReducer;


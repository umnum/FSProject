import * as EventAPIUtils from '../util/event_api_util';
import { receiveErrors } from '../actions/session_actions';

export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const REMOVE_EVENT = 'REMOVE_EVENT';

export const receiveEvent = (payload) => {
    return ({ 
        type: RECEIVE_EVENT,
        payload
    });
};

export const receiveEvents = (events) => {
    return ({ 
        type: RECEIVE_EVENTS,
        events
    });
};

export const deleteEvent = (eventId) => {
    return ({
        type: REMOVE_EVENT,
        eventId
    })
};

export const fetchEvent = eventId => {
    return (dispatch => {
        return EventAPIUtils.fetchEvent(eventId)
            .then(response => dispatch(receiveEvent(response)),
                  errors => dispatch(receiveErrors(errors)))
    });
};

export const fetchEvents = () => {
    return (dispatch => {
        return EventAPIUtils.fetchEvents()
            .then(events => dispatch(receiveEvents(events)),
                  errors => dispatch(receiveErrors(errors)));
    });
};

export const createEvent = (payload) => {
    return (dispatch => {
        return EventAPIUtils.createEvent(payload.event)
            .then(event => dispatch(receiveEvent(payload)),
                  errors => dispatch(receiveErrors(errors)));
    });
};

export const updateEvent = (formData) => {
    return (dispatch => {
        return EventAPIUtils.updateEvent(formData)
            .then(event => dispatch(receiveEvent(event)),
                  errors => dispatch(receiveErrors(errors)));
    });
};

export const removeEvent = (eventId) => {
    return (dispatch => {
        return EventAPIUtils.removeEvent(eventId)
            .then(success => dispatch(deleteEvent(eventId)),
                  errors => dispatch(receiveErrors(errors)));
    });
};
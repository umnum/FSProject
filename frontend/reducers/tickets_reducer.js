import { RECEIVE_TICKET, RECEIVE_TICKETS, REMOVE_TICKET } from '../actions/ticket_actions';
import { RECEIVE_PURCHASED_TICKET, RECEIVE_PURCHASED_TICKETS } from '../actions/purchased_ticket_actions';
import { RECEIVE_EVENT } from '../actions/event_actions';

const ticketsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_TICKETS:
            Object.values(action.tickets).forEach(ticket => {
                newState[ticket.id] = ticket;
            });
            return newState;
        case RECEIVE_TICKET:
            newState[action.payload.ticket.id] = action.payload.ticket;
            return newState;
        case RECEIVE_PURCHASED_TICKETS:
            if (Object.keys(action.payload).length === 0) {
                return oldState;
            }
            Object.values(action.payload.tickets).forEach(ticket => {
                newState[ticket.id] = ticket;
            });
            return newState;
        case RECEIVE_PURCHASED_TICKET:
            newState[action.payload.ticket.id] = action.payload.ticket;
        case REMOVE_TICKET:
            delete newState[action.ticketId];
            return newState;
        case RECEIVE_EVENT:
            if (action.payload.tickets === undefined) {
                return oldState;
            }
            Object.values(action.payload.tickets).forEach(ticket => {
                newState[ticket.id] = ticket;
            });
            return newState;
        default:
            return oldState;
    }
}

export default ticketsReducer;
import React from 'react';

class UserEventTicketIndexItem extends React.Component {
    render() {
        const { event, ticket } = this.props;
        if (event === undefined) return null;
        return (
            <div className="user-event-ticket-index-item">
                <div className="user-event-ticket-description">
                    <p>{event.name}</p>
                    <p>{ticket.name}</p>
                </div>
                <div className="user-event-ticket-quantity">
                    <p>{ticket.quantity}</p>
                </div>
                <div className="user-event-ticket-price">
                    <p>{ticket.price} {ticket.currency}</p>
                </div>
            </div>
        )
    }
}

export default UserEventTicketIndexItem;
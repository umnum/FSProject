import React from 'react';
import HeaderContainer from './header/header_container';
import HomeContainer from './home/home_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import EditEventFormContainer from './events/edit_event_form_container';
import CreateEventFormContainer from './events/create_event_form_container';
import EventShowContainer from './events/event_show_container';
import UserEventIndexContainer from './events/user_event_index_container';
import CreateTicketFormContainer from './tickets/create_ticket_form_container';
import EditTicketFormContainer from './tickets/edit_ticket_form_container';
import UserTicketIndexContainer from './tickets/user_ticket_index_container';
import UserPurchasedTicketIndexContainer from './tickets/user_purchased_ticket_index_container';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NotFound from './not_found';

const App = () => {
    return (
        <div>
            <HeaderContainer />
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <ProtectedRoute exact path="/events/:eventId/edit" component={EditEventFormContainer} />
                <ProtectedRoute exact path="/events/new" component={CreateEventFormContainer} />
                <Route exact path="/events/:eventId" component={EventShowContainer} />
                <ProtectedRoute exact path="/users/:userId/events" component={UserEventIndexContainer} />
                <ProtectedRoute exact path="/users/:userId/events/:eventId/tickets" component={UserTicketIndexContainer} />
                <ProtectedRoute exact path="/users/:userId/tickets" component={UserPurchasedTicketIndexContainer} />
                <ProtectedRoute exact path="/tickets/:ticketId/edit" component={EditTicketFormContainer} />
                <ProtectedRoute exact path="/events/:eventId/tickets/new" component={CreateTicketFormContainer} />
                <Route path="/" component={NotFound} />
            </Switch>
        </div>
    );
};

export default App;
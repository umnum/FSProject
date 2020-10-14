/* Header component should have: 
  - logged in:
    * a Main Logo button which links to "/"
    * a "Search events" bar
    - a link for "Create Event"
    - a link to the user's liked events, "Likes"
    - a link to the user's "Tickets"
    - a dropdown profile displaying:
        - username and email 
        * a link to "Log out"
  - logged out:
    - a Main Logo button which links to "/"
    - a "Search events" bar
    - a dropdown for "Organize"
    - a dropdown for "Help"
    - a "Create Event" link to "/signin" and "/signup"
    - a link to "Sign In"
*/
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.clearErrors = this.clearErrors.bind(this);
        this.logout = this.logout.bind(this);
    }
    clearErrors() {
        this.props.clearErrors();
    }
    logout() {
        this.props.logout();
        this.props.history.push("/login");
    }
    render() {
        return (
            <div className="header">
                <div className="left-header">
                    <Link className="home-link" to="/"><i>FSProject</i></Link>
                    <input type="text"/>
                </div>
                <div className="right-header">
                    {this.props.isLoggedIn() ? <Link className="signin-link" onClick={this.clearErrors} to="/login">Sign In</Link> :
                    <div className="dropdown-menu">
                        <a className="dropdown-link">Profile</a>
                        <div className="dropdown-content">
                            <h3>
                                <a>{this.props.currentUser.username}</a>
                                <p>{this.props.currentUser.email}</p>
                            </h3>
                            <h3 onClick={this.logout}>Log Out</h3>
                        </div>
                    </div>}
                 </div>
            </div>
        );
    };
};

export default Header;
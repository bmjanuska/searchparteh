import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, 
  NavLink
} from 'reactstrap';

export class TopNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/book')
      .then(res => {
        this.setState({ books: res.data });
        console.log(this.state.books);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Navbar className="navcolor" expand="md">
          <NavbarBrand href="/"> Search Party <img src="https://66.media.tumblr.com/5f714906e8a8476af8bec47dde453309/tumblr_phe3weCBSC1qegkvoo1_1280.png"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                <Link
                  to="/"
                  className={
                    window.location.pathname === "/home" || window.location.pathname === "/home"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Home
                  </Link>
                  </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link
                  to="/challenge"
                  className={
                    window.location.pathname === "/challenge" || window.location.pathname === "/challenge"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Challenge
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                <Link
                  to="/user"
                  className={
                    window.location.pathname === "/user" || window.location.pathname === "/user"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  My Account
                  </Link>
              </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                <Link
                  to="/search"
                  className={
                    window.location.pathname === "/search" || window.location.pathname === "/search"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Search
                  </Link>
              </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                    {localStorage.getItem('jwtToken') &&
                      <span onClick={this.logout}>Logout</span>
                    }
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;

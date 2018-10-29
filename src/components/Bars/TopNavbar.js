// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";
// import { Container, Row, Col } from 'reactstrap';

// // Navigation 
// // ===========================================================================
// export const TopNavbar = props => (
//   <Navbar className="bg-purp" expand="lg">
//     <Navbar.Brand href="/">
//       <img src="../images/icon-01.svg" alt="Search Party" style={{ width: 40 }} />
//       Search Party
//   </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="mr-auto">

//         <Link
          
//             to="/"
//             className={
//               window.location.pathname === "/home" || window.location.pathname === "/home"
//                 ? "nav-link active"
//                 : "nav-link"
//             }
//           >
//             Home
        
//         </Link>

//         <Link
        
//             to="/challenge"
//             className={
//               window.location.pathname === "/challenge" || window.location.pathname === "/challenge"
//                 ? "nav-link active"
//                 : "nav-link"
//             }
//           >
//             Challenge
        
//         </Link>

//         <Link
//             to="/user"
//             className={
//               window.location.pathname === "/user"
//                 ? "nav-link active"
//                 : "nav-link"
//             }
//           >
//             My Account
          
//         </Link>

//         <Link
//             to="/search"
//             className={
//               window.location.pathname === "/search"
//                 ? "nav-link active"
//                 : "nav-link"
//             }
//           >
//             Search
          
//         </Link>

//         <Link
        
//             to="/login"
//             className={
//               window.location.pathname === "/login"
//                 ? "nav-link active"
//                 : "nav-link"
//             }
//           >
//             Logout
          
//         </Link>

//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>

// );


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
  NavLink} from 'reactstrap';

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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Search Party</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
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
              </NavItem>
              <NavItem>
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
              </NavItem>
              <NavItem>
                <Link
                to="/user"
                className={
                  window.location.pathname === "/user"
                  ? "nav-link active"
                : "nav-link"
              }
              >
              My Account
              </Link>
              </NavItem>

              <NavItem>
                <Link
                to="/user"
                className={
                  window.location.pathname === "/search"
                  ? "nav-link active"
                : "nav-link"
              }
              >
              Search
              </Link>
              </NavItem>

              <NavItem>
                <Link  
                >
                <h3 class="panel-title">
            {localStorage.getItem('jwtToken') &&
              <button class="btn btn-primary" onClick={this.logout}>Logout</button>
            }
          </h3>
                </Link>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { TopNavbar, Footer } from "./components/Bars";
import Challenge from "./pages/Challenge";
import Home from "./pages/Home";
import User from "./pages/User";
import Search from "./pages/Search";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
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
      <Router>
        <div>
          <TopNavbar />
          {/* <h3 class="panel-title">
            {localStorage.getItem('jwtToken') &&
              <button class="btn btn-primary" onClick={this.logout}>Logout</button>
            }
          </h3> */}
          
          <Route exact path="/" component={Home} challenges={this.state.challenges} />
          <Route exact path="/challenge" render={() => <Challenge />} />
          {/* <Route exact path="/challenge" render={ () => <Challenge challenges={this.state.challenges} /> }/> */}
          <Route exact path="/user" component={User} />
          <Route exact path="/search" component={Search} challenges={this.state.challenges} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

      // <div class="container">
      //   <div class="panel panel-default">
      //     <div class="panel-heading">
      //       <h3 class="panel-title">
      //         BOOK CATALOG &nbsp;
      //         {localStorage.getItem('jwtToken') &&
      //           <button class="btn btn-primary" onClick={this.logout}>Logout</button>
      //         }
      //       </h3>
      //     </div>
      //     <div class="panel-body">
      //       <table class="table table-stripe">
      //         <thead>
      //           <tr>
      //             <th>ISBN</th>
      //             <th>Title</th>
      //             <th>Author</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {this.state.books.map(book =>
      //             <tr>
      //               <td><Link to={`/show/${book._id}`}>{book.isbn}</Link></td>
      //               <td>{book.title}</td>
      //               <td>{book.author}</td>
      //             </tr>
      //           )}
      //         </tbody>
      //       </table>
      //     </div>
      //   </div>
      // </div>
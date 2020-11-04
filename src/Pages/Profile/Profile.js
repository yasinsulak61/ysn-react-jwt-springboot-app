import React, { Component } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Aux from "../../hoc/_Aux";

import AuthService from "../../services/auth.service";

export class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
    };
  }
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState(<Redirect from="/auth/signin" />);
    this.setState({ currentUser: currentUser, userReady: true });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { currentUser } = this.state;
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Profil</Card.Title>
                <span className="d-block m-t-5">
                  use props <code>hover</code> with <code>Table</code> component
                </span>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ID</th>
                      <th>Kullanıcı Adı</th>
                      <th>Email</th>
                      <th>Authorities</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="unread">
                      <th scope="row">1</th>
                      <td>{currentUser.id}</td>
                      <td>{currentUser.username}</td>
                      <td>{currentUser.email}</td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          {currentUser.roles &&
                            currentUser.roles.map((role, index) => (
                              <i key={index}>{role}</i>
                            ))}
                        </h6>
                      </td>
                      <td>
                        <a
                          href="#!"
                          className="label theme-bg2 text-white f-12"
                        >
                          Reject
                        </a>
                        <a href="#!" className="label theme-bg text-white f-12">
                          Approve
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Profile;

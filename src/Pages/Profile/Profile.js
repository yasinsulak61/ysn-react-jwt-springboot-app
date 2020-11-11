import React, { Component } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Aux from "../../hoc/_Aux";

import AuthService from "../../services/auth.service";
import DEMO from "../../store/constant";

import avatar1 from "../../assets/images/user/avatar-1.jpg";

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
           <Col md={6} xl={12}>
            <Card className="Recent-Users">
            <Card.Header>
            <Card.Title as="h5">Profil</Card.Title>
            <span className="d-block m-t-5">
              use props <code>hover</code> with <code>Table</code> component
            </span>
          </Card.Header>
              <Card.Body className="px-0 py-2">
                <Table responsive hover>
                  <tbody>
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          src={avatar1}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                          <h6 className="mb-1">ID</h6>
                          <p className="m-0">
                         {currentUser.id}
                      </p>
                    </td>                      
                      <td>
                        <h6 className="mb-1">{currentUser.username}</h6>
                        <p className="m-0">
                        {currentUser.email}
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          11 MAY 12:56
                        </h6>
                      </td>
                      <td>
                      <h6 className="text-muted">
                        <i className="fa fa-circle text-c-blue f-10 m-r-15" />
                        {currentUser.roles &&
                          currentUser.roles.map((role, index) => (
                            <span key={index}>{role}</span>
                          ))}
                      </h6>
                    </td>
                      <td>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg2 text-white f-12"
                        >
                          Reject
                        </a>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg text-white f-12"
                        >
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

import React, { Component } from "react";
import AuthService from "../../store/services/api/AuthenticationServices/auth.service";
import UserService from "../../store/services/api/User/UserService";
import { Row, Col, Card, Table } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Aux from "../../hoc/_Aux";

import DEMO from "../../store/constant";

import avatar1 from "../../assets/images/user/avatar-1.jpg";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      users: [],
    };
  }
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/auth/signin" });
    this.setState({ currentUser: currentUser, userReady: true });

    let usersData = UserService.getUserList();
    this.setState({ users: usersData });
    console.log("Users JS:"+{usersData}+"state:"+this.state.users);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Aux>
        <Row>
          <Col md={6} xl={12}>
            <Card className="Recent-Users">
              <Card.Header>
                <Card.Title as="h5">Kullanıcılar</Card.Title>
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
                        <h6 className="mb-1">Kullanıcı Adı</h6>
                        <p className="m-0">Açıklama</p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          11 MAY 12:56
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

export default Users;

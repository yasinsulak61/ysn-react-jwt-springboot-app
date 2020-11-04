import React, { Component } from "react";
import AuthService from "../../services/auth.service";
import { Row, Col, Card, Table, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Aux from "../../hoc/_Aux";

import DEMO from "../../store/constant";

import avatar1 from "../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../assets/images/user/avatar-3.jpg";

export class Users extends Component {
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

    if (!currentUser) this.setState({ redirect: "/auth/signin" });
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
                <Card.Title as="h5">Kullanıcılar </Card.Title>
                <span className="d-block m-t-5">
                  use props <code>hover</code> with <code>Table</code> component
                </span>
                <Button className="pull-right" variant="success" size="sm">
                  +Ekle
                </Button>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>{currentUser.username}</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <a
                          href="#!"
                          className="label theme-bg2 text-white f-12"
                        >
                          Reject
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={12}>
            <Card className="Recent-Users">
              <Card.Header>
                <Card.Title as="h5">Recent Users</Card.Title>
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
                        <h6 className="mb-1">Isabella Christensen</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
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
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          src={avatar2}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">Mathilde Andersen</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-red f-10 m-r-15" />
                          11 MAY 10:35
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
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          src={avatar3}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">Karla Sorensen</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          9 MAY 17:38
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
                        <h6 className="mb-1">Ida Jorgensen</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted f-w-300">
                          <i className="fa fa-circle text-c-red f-10 m-r-15" />
                          19 MAY 12:56
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
                    <tr className="unread">
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: "40px" }}
                          src={avatar2}
                          alt="activity-user"
                        />
                      </td>
                      <td>
                        <h6 className="mb-1">Albert Andersen</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          21 July 12:56
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

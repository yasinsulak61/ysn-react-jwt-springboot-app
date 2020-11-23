import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col, Card, Table } from "react-bootstrap";
import AuthService from "../../store/services/api/AuthenticationServices/auth.service";

//import * as actionTypes from "../../store/actions/user/actions";
import { bindActionCreators } from "redux";
import * as userActions from "../../store/actions/user/userActions";
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
    };
  }
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/auth/signin" });
    this.props.actions.getUserList();
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    if (this.props.users.data) {
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
                      {this.props.users.data.map((user) => (
                        <tr className="unread" key={user.id}>
                          <td>
                            <img
                              className="rounded-circle"
                              style={{ width: "40px" }}
                              src={avatar1}
                              alt="activity-user"
                            />
                          </td>
                          <td>
                            <h6 className="mb-1">{user.username}</h6>
                            <p className="m-0">{user.email}</p>
                          </td>
                          <td>
                            <h6 className="text-muted">
                              <i className="fa fa-circle text-c-green f-10 m-r-15" />
                              {user.dataChangeCreatedTime}
                            </h6>
                          </td>
                          <td>
                            <a className="label theme-bg2 text-white f-12">
                              {
                                user.roles.map(role =>(
                                  role.name
                                ))
                              }
                            </a>
                          </td>

                          <td>
                            <a
                              href={DEMO.BLANK_LINK}
                              className="label theme-bg2 text-white f-12"
                            >
                              Sil
                            </a>
                            <a
                              href={DEMO.BLANK_LINK}
                              className="label theme-bg text-white f-12"
                            >
                              Düzenle
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Aux>
      );
    } else {
      return null;
    }
  }
}
function mapStateToProps(state) {
  return {
    users: state.userListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUserList: bindActionCreators(userActions.getUserList, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);

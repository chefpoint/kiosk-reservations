/* * */
/* IMPORTS */
import React from "react";

import _ from "lodash";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Header from "../../components/Header";
import Toolbar from "./Toolbar";
import Table from "./Table";
import ReservationDetail from "./ReservationDetail";

import spreadsheets from "../../services/spreadsheets";

/* * */
/* * * * */
export default class Home extends React.Component {
  state = {
    table_reservations: [],
    table_loading: true,
    table_error: "",

    reservationDetail_reservation: [],
    reservationDetail_visible: false,
    reservationDetail_error: ""
  };

  getReservations = async () => {
    try {
      this.setState({ table_loading: true });
      const reservations = await spreadsheets.listRows();
      this.setState({
        table_reservations: reservations.slice(1),
        table_loading: false,
        table_error: ""
      });
    } catch (err) {
      this.setState({ table_loading: false, table_error: err });
    }
  };

  displayReservationDetail = orderID => {
    this.setState({
      reservationDetail_reservation: _.find(this.state.table_reservations, {
        orderID: orderID
      }),
      reservationDetail_visible: true
    });
    console.log(
      _.find(this.state.table_reservations, {
        orderID: orderID
      })
    );
  };

  filterReservations = orderID => {
    this.setState({
      table_reservations: _.filter(this.state.table_reservations, {
        orderID: orderID
      })
    });
  };

  componentDidMount() {
    this.getReservations();
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Header />
          <ReservationDetail
            visible={this.state.reservationDetail_visible}
            reservation={this.state.reservationDetail_reservation}
            invisible={() =>
              this.setState({ reservationDetail_visible: false })
            }
          />
          <Row>
            <Toolbar
              value={this.state.search}
              onChange={event => this.setState({ badgeID: event.target.value })}
            />
          </Row>
          <Row>
            <Table
              reservations={this.state.table_reservations}
              loading={this.state.table_loading}
              error={this.state.table_error}
              onClick={async orderID =>
                await this.displayReservationDetail(orderID)
              }
            />
          </Row>
        </Container>
        {/* <StatusOverlay
          loading={this.state.loading}
          success={this.state.success}
          error={this.state.error}
          location={this.props.match.params.location}
        /> */}
      </React.Fragment>
    );
  }
}

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
    toolbar_location: "TP Atlantico",
    toolbar_date: "",
    toolbar_search: "",

    table_reservations: [],
    table_loading: true,
    table_error: "",

    reservationDetail_reservation: [],
    reservationDetail_loading: false,
    reservationDetail_visible: false,
    reservationDetail_error: ""
  };

  getReservations = async () => {
    try {
      this.setState({ table_loading: true });
      let reservations = await spreadsheets.listRows();
      reservations = reservations.slice(1);
      reservations = _.filter(reservations, r => {
        return (
          r.location === this.state.toolbar_location &&
          r.customerName.includes(this.state.toolbar_search) &&
          r.pickupDate.includes(this.state.toolbar_date)
        );
      });
      reservations = _.orderBy(reservations, ["status"], ["desc"]);
      this.setState({
        table_reservations: reservations,
        table_loading: false,
        table_error: ""
      });
    } catch (err) {
      console.log(err);
      this.setState({ table_loading: false });
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

  toggleReservationStatus = async () => {
    this.setState({ reservationDetail_loading: true });
    const reservation = this.state.reservationDetail_reservation;
    await spreadsheets.updateRows(
      reservation.rowNumber,
      "status",
      reservation.status === "Entregue" ? "Por Levantar" : "Entregue"
    );
    // this.setState({ reservationDetail_visible: false });
    await this.getReservations();
    this.displayReservationDetail(reservation.orderID);
    this.setState({ reservationDetail_loading: false });
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
            loading={this.state.reservationDetail_loading}
            reservation={this.state.reservationDetail_reservation}
            toggleStatus={() => this.toggleReservationStatus()}
            invisible={() =>
              this.setState({ reservationDetail_visible: false })
            }
          />
          <Row>
            <Toolbar
              onLocationChange={event =>
                this.setState({ toolbar_location: event.target.value })
              }
              onDateChange={event =>
                this.setState({ toolbar_date: event.target.value })
              }
              search={this.state.toolbar_search}
              onSearchChange={event =>
                this.setState({ toolbar_search: event.target.value })
              }
              onSubmit={event => {
                event.preventDefault();
                this.getReservations();
              }}
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

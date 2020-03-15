/* * */
/* IMPORTS */
import React from "react";
import Button from "react-bootstrap/Button";

import Player from "../../components/animation/Player";
import animation from "../../components/animation/files/progress-bar.json";

/* * */
/* * * * */
export default class ReservationDetail extends React.Component {
  render() {
    return (
      this.props.visible && (
        <React.Fragment>
          <div className="overlay">
            <div className="card card-center depth animate">
              <div className="card-header">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={this.props.invisible}
                >
                  Fechar
                </Button>
              </div>
              <div className="card-body pb-0">
                {this.props.reservation.status === "Entregue" ? (
                  <span className="badge badge-success">
                    {this.props.reservation.status}
                  </span>
                ) : (
                  <span className="badge badge-warning">
                    {this.props.reservation.status}
                  </span>
                )}
              </div>
              <div className="card-body pb-0">
                <p className="card-text mb-0">
                  <small>Reserva em nome de</small>
                </p>
                <h5 className="card-title mt-0">
                  {this.props.reservation.customerName}
                </h5>
                <p className="card-text mb-0">
                  <small>Data de Levantamento</small>
                </p>
                <h6 className="card-title mt-0">
                  {this.props.reservation.pickupDate}
                </h6>
                <p className="card-text mb-0">
                  <small>Local de Entrega</small>
                </p>
                <h6 className="card-title mt-0">
                  {this.props.reservation.location}
                </h6>
              </div>
              <ul className="list-group list-group-flush">
                {this.props.reservation.gourmet ? (
                  <li className="list-group-item mt-2">
                    <h5 style={{ color: "#674ea7" }}>
                      {this.props.reservation.gourmet} x Gourmet
                    </h5>
                  </li>
                ) : null}
                {this.props.reservation.meat ? (
                  <li className="list-group-item mt-2">
                    <h5 style={{ color: "#b45f06" }}>
                      {this.props.reservation.meat} x Carne
                    </h5>
                  </li>
                ) : null}
                {this.props.reservation.fish ? (
                  <li className="list-group-item mt-2">
                    <h5 style={{ color: "#3d85c6" }}>
                      {this.props.reservation.fish} x Peixe
                    </h5>
                  </li>
                ) : null}
                {this.props.reservation.vegan ? (
                  <li className="list-group-item mt-2">
                    <h5 style={{ color: "#38761d" }}>
                      {this.props.reservation.vegan} x Vegan
                    </h5>
                  </li>
                ) : null}
              </ul>
              <div className="card-body">
                {!this.props.loading &&
                  (this.props.reservation.status === "Entregue" ? (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={this.props.toggleStatus}
                      disabled={this.props.loading}
                    >
                      Marcar como Não Entregue
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="success"
                      onClick={this.props.toggleStatus}
                      disabled={this.props.loading}
                    >
                      Marcar como Entregue
                    </Button>
                  ))}
                {this.props.loading && (
                  <Player animationData={animation} height={31} />
                )}
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  {this.props.reservation.orderID}
                </small>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    );
  }
}

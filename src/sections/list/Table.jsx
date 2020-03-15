/* * */
/* IMPORTS */
import React from "react";

import Player from "../../components/animation/Player";
import animation from "../../components/animation/files/happy-dog.json";

/* * */
/* * * * */
export default function Table({ reservations, loading, error, onClick }) {
  return (
    <div className="text-center w-100">
      {!loading && !error && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Local</th>
              <th>Cliente</th>
              <th>Levantamento</th>
              <th style={{ color: "#674ea7" }}>Gourmet</th>
              <th style={{ color: "#b45f06" }}>Carne</th>
              <th style={{ color: "#3d85c6" }}>Peixe</th>
              <th style={{ color: "#38761d" }}>Vegan</th>
              <th>Estado</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map(r => {
              return (
                <tr
                  key={r.orderID}
                  className="cursor-pointer py-5 align-middle"
                  style={{
                    height: 75,
                    opacity: r.status === "Entregue" ? 0.5 : 1
                  }}
                  onClick={() => onClick(r.orderID)}
                >
                  <td className="align-middle">{r.location}</td>
                  <td className="align-middle">{r.customerName}</td>
                  <td className="align-middle">{r.pickupDate}</td>
                  <td className="align-middle" style={{ color: "#674ea7" }}>
                    <strong>{r.gourmet}</strong>
                  </td>
                  <td className="align-middle" style={{ color: "#b45f06" }}>
                    <strong>{r.meat}</strong>
                  </td>
                  <td className="align-middle" style={{ color: "#3d85c6" }}>
                    <strong>{r.fish}</strong>
                  </td>
                  <td className="align-middle" style={{ color: "#38761d" }}>
                    <strong>{r.vegan}</strong>
                  </td>
                  <td className="align-middle" style={{ color: "#999999" }}>
                    {r.status === "Entregue" ? (
                      <strong style={{ color: "#6aa84f" }}>{r.status}</strong>
                    ) : (
                      <em style={{ color: "#e69138" }}>{r.status}</em>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {loading && (
        <Player animationData={animation} height={200} align="center" />
      )}

      {!loading && error && (
        <React.Fragment>
          <h5 className="mt-3" align="center">
            {error[0].message}
          </h5>
        </React.Fragment>
      )}
    </div>
  );
}

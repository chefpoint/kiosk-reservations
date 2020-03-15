/* * */
/* IMPORTS */
import React from "react";
import moment from "moment";

import { Form, Col, InputGroup, Button } from "react-bootstrap";
import Select from "../../components/Select";
import Input from "../../components/Input";

/* * */
/* * * * */
export default class Toolbar extends React.Component {
  locations = [
    { name: "TP Atlantico", id: "TP Atlantico" },
    { name: "TP Nations", id: "TP Nations" },
    { name: "TP Oceanario", id: "TP Oceanario" },
    { name: "TP Centrum", id: "TP Centrum" }
  ];

  dates = [
    { name: "Sempre", id: "" },
    {
      name: "Ontem",
      id: moment()
        .add(-1, "day")
        .format("DD MMM YYYY")
    },
    { name: "Hoje", id: moment().format("DD MMM YYYY") },
    {
      name: "Amanhã",
      id: moment()
        .add(1, "day")
        .format("DD MMM YYYY")
    }
  ];

  render() {
    return (
      <Form className="pt-4 w-100" onSubmit={this.props.onSubmit}>
        <Form.Row>
          <Form.Group as={Col} md={2} controlId="toolbarLocation">
            <Select
              name="location"
              options={this.locations}
              onChange={this.props.onLocationChange}
            />
          </Form.Group>

          <Form.Group as={Col} md={2} controlId="toolbarDate">
            <Select
              name="date"
              options={this.dates}
              onChange={this.props.onDateChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="toolbarSearch">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">TP</InputGroup.Text>
              </InputGroup.Prepend>
              <Input
                name="search"
                type="text"
                placeholder="Pesquisa por Cliente"
                value={this.props.search}
                onChange={this.props.onSearchChange}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md={2} controlId="toolbarSubmit">
            <Button type="submit" block>
              Filtrar Reservas
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

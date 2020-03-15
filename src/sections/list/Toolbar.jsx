/* * */
/* IMPORTS */
import React from "react";

import { Form, Col, InputGroup, Button } from "react-bootstrap";
import Select from "../../components/Select";
import Input from "../../components/Input";

/* * */
/* * * * */
export default class Toolbar extends React.Component {
  locations = [
    { name: "TP Atlântico", id: "5958000" },
    { name: "TP Nations", id: "18827493" },
    { name: "TP Oceanario", id: "23141531" },
    { name: "TP Centrum", id: "44123848" }
  ];

  dates = [
    { name: "Todos os Meses", id: "since=2020-01-01&until=2020-12-31" },
    { name: "Janeiro 2020", id: "since=2020-01-01&until=2020-01-31" },
    { name: "Fevereiro 2020", id: "since=2020-02-01&until=2020-02-29" },
    { name: "Março 2020", id: "since=2020-03-01&until=2020-03-31" }
  ];

  render() {
    return (
      <Form className="pt-4 w-100" onSubmit={this.props.onSubmit}>
        <Form.Row>
          <Form.Group as={Col} md={3} controlId="toolbarDate">
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
              Ver Reservas
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

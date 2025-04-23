import React from "react";
import { Container, Row, Col, Button, ListGroup, Form } from "react-bootstrap";

const MainPage = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column">
      {/* Шапка */}
      <Row className="bg-white border-bottom p-3 d-flex justify-content-between">
        <Col>
          <a href="#" className="text-decoration-none fw-bold">Hexlet Chat</a>
        </Col>
        <Col className="text-end">
          <Button variant="primary">Выйти</Button>
        </Col>
      </Row>

      {/* Основной контейнер */}
      <Row className="flex-grow-1">
        {/* Список каналов */}
        <Col xs={2} className="bg-light border-end p-3">
          <Button variant="outline-secondary" className="mb-2 w-100">+</Button>
          <ListGroup>
            <ListGroup.Item action># general</ListGroup.Item>
            <ListGroup.Item action># random</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Чат */}
        <Col xs={10} className="d-flex flex-column">
          {/* Заголовок чата */}
          <Row className="bg-light p-3">
            <Col>
              <h5># general</h5>
              <p className="text-muted">0 сообщений</p>
            </Col>
          </Row>

          {/* Сообщения */}
          <Row className="flex-grow-1 bg-white p-3 overflow-auto">
            <Col>
              <p><strong>Автор:</strong> Сообщение</p>
            </Col>
          </Row>

          {/* Форма ввода */}
          <Row className="border-top bg-white p-3">
            <Col>
              <Form className="d-flex">
                <Form.Control type="text" placeholder="Введите сообщение..." />
                <Button variant="primary" className="ms-2">➜</Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;

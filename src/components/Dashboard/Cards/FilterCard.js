import React from 'react'

import { Card, Form, Col, Button } from 'react-bootstrap';

import './Styles.scss'

const FilterCard = () => {
  return (
    <div>
      <span className='Title-Filters' >Filtros</span>

      <Card>
        <Card.Body>
          <Card.Title className='Title'>Preços</Card.Title>

          <Form.Group className='Group-Filters'>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="R$10"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                className='Text-Filters'
              />
              <Form.Check
                type="radio"
                label="R$10 - R$100"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                className='Text-Filters'
              />
              <Form.Check
                type="radio"
                label="R$10 - R$500"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                className='Text-Filters'
              />
              <Form.Check
                type="radio"
                label="R$500"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                className='Text-Filters'
              />
              <Form.Check
                type="radio"
                label="Todos"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>

          <Card.Title className='Title'>
            <div>
              Valores
            </div>
            <div>
              1,99 - 4098
            </div>
          </Card.Title>

          <Form>
            <Form.Group controlId="formBasicRange" className='Group-Filters'>
              <Form.Control type="range" />
            </Form.Group>
          </Form>

          <Card.Title className='Title'>Categorias</Card.Title>

          <Form.Group className='Group-Filters'>
            <Col sm={12} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>

              <div className='Text-Filters'>
                <Form.Check type="checkbox" label="Érico Rocha" />
                <span>
                  1920
                </span>
              </div>
              <div className='Text-Filters'>
                <Form.Check type="checkbox" label="Desafio 6 em 7" />
                <span>
                  1820
                </span>
              </div>
              <div className='Text-Filters'>
                <Form.Check type="checkbox" label="Fórmula de lançamento" />
                <span>
                  462
                </span>
              </div>
              <div className='Text-Filters'>
                <Form.Check type="checkbox" label="KlickPages" />
                <span>
                  6556
                </span>
              </div>
              <div className='Text-Filters'>
                <Form.Check type="checkbox" label="Audio" />
                <span>
                  120
                </span>
              </div>

            </Col>
          </Form.Group>

          <Card.Title className='Title'>Avaliação</Card.Title>

          <Form.Group>
            <Col sm={12} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>

              <div className='Text-Filters'>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
                <span>
                  8500
                </span>
              </div>
              <div className='Text-Filters'>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                </div>
                <span>
                  3250
                </span>
              </div>
              <div className='Text-Filters'>
                <div>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <span>
                  1120
                </span>
              </div>

            </Col>
          </Form.Group>

          <Button className='Button-Clean' size="lg">
            Limpar Filtros
          </Button>

        </Card.Body>
      </Card>

    </div>
  );
}

export default FilterCard;
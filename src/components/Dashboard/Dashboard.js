import React from 'react'
import Cards from './Cards/Cards'
import FilterCard from './Cards/FilterCard'
import { faCog, faHome, faAngleDoubleRight, faSearch, faThLarge, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Dropdown, Container, Row, Col, Button, Pagination } from 'react-bootstrap';
import './Styles.scss'

const Dashboard = () => {

  return (
    <div className='Dashboard-Body'>

      <Container>
        <Row>
          <Col sm className='Col-BreadCrumb'>

            <div>
              <div className='Divider'>
                <strong>Resultados</strong>
              </div>

              <div className='Breadcrumb'>
                <FontAwesomeIcon style={{ marginRight: '0.5em' }} icon={faHome} size="lg" />
                <FontAwesomeIcon style={{ marginRight: '0.5em' }} icon={faAngleDoubleRight} size="lg" />
                <span>Cursos</span>
              </div>
            </div>

            <div className='Gear'>
              <Button className='Button-Gear'>
                <FontAwesomeIcon icon={faCog} size="lg" />
              </Button>
            </div>

          </Col>
        </Row>

        <Row>
          <Col sm >
            <FilterCard />
          </Col>
          
          <Col sm >
            <div className='Info-Search'>
              <span> 200 resultados encontrados </span>

              <div className='Buttons-Search'>
                <Dropdown>
                  <Dropdown.Toggle className='Dropdown-Search'>
                    Listagem
                  </Dropdown.Toggle>
                </Dropdown>

                <Button className='Buttons'>
                  <FontAwesomeIcon icon={faThLarge} size="lg" />
                </Button>
                <Button className='Buttons'>
                  <FontAwesomeIcon icon={faBars} size="lg" />
                </Button>
              </div>

            </div>

            <div>
              <div>
                <FontAwesomeIcon className='Button-Search' icon={faSearch} size="lg" />
              </div>
                <Form.Control size="lg" type="text" placeholder="Buscar" />
            </div>

            <Cards />
            
          </Col>
        </Row>

        <Row>
          <Col sm style={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination size='sm'>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Dashboard;
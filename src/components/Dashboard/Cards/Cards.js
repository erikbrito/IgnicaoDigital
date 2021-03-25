import React from 'react'

import { Card, Button } from 'react-bootstrap';

import imagem from './../../../Assets/imagem.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faStar, faHeart } from "@fortawesome/free-regular-svg-icons";

import './Styles.scss'

import { payload } from './../mock.js'

const Cards = () => {

  return (
    <div>
      {
        payload.map((data, index) => {
          return (
            <Card key={index}>


              <div>
                <img className='Img-Card' src={imagem} alt="" />
              </div>


              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}> {data.title} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> Por <strong> {data.by} </strong></Card.Subtitle>
                <Card.Text> {data.about} </Card.Text>
              </Card.Body>

              <div className='Footer-Card'>

                <div className='Footer-Container'>

                  <div>
                    <div className='Div-Rating'>
                      {data.rating ? (
                        <Button className='Button-Rating'>
                          {data.rating}
                          <FontAwesomeIcon icon={faStar} size="lg" style={{ marginLeft: '0.5em' }} />
                        </Button>
                      ) : <div className='Button-Rating'></div>
                      }
                    </div>

                    <div>
                      <strong>R${data.price}</strong>
                    </div>
                  </div>

                  <div className='Buttons-Cards'>

                    <Button className='Button-Loved' variant="light">
                      <FontAwesomeIcon className='Icon-Button-Card' icon={faHeart} size="lg" />
                      AMEI
                    </Button>
                    <Button className='Button-Shop' variant="secondary">
                      <FontAwesomeIcon className='Icon-Button-Card' icon={faShoppingBag} size="lg" />
                      COMPRAR
                    </Button>
                  </div>


                </div>

              </div>


            </Card>
          )
        })
      }
    </div>
  )
}

export default Cards;
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/my_banner_1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Оригинальное масло</h3>
        <p>Оригинальное масло для вашего автомобиля.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/my_banner_2.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
      <h3>Новое масло</h3>
        <p>Новое масло всегда лучше того масла, которое не новое.</p>        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/my_banner_3.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
      <h3>Проверенное масло</h3>
        <p>Наше масло - самое масляное масло.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider
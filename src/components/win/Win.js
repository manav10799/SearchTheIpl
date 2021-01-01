import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Win.css'

function Win() {
    return (
        <div>
            <div className="home_img">
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://resources.platform.iplt20.com/photo-resources/2020/11/10/82f52657-2dff-4647-8859-4e0fe66bc8b5/RJV39837.jpg?width=1100&height=500"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://resources.platform.iplt20.com/photo-resources/2020/11/10/185e5c2f-6ec0-4089-b08a-86db532c74be/Dream11-IPL2020-THUMBNAIL-FOR-WEBSITE.jpg?width=1100&height=500"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://resources.platform.iplt20.com/photo-resources/2020/11/10/b68eaa82-17fd-444a-b783-9a760af63c71/IPLDM_986.JPG?width=1100&height=500"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
        </div>
    )
}

export default Win

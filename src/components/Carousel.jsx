import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia } from '@mui/material';

const SimpleCarousel = ({product}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        
    };

    const GalaryImg= [
        `${product.images[0]}`,
        'https://cdn.prod.website-files.com/5b3213161e5234bf1cfff9e1/65d73398d5fabe160b7c53b5_data%20(1).jpg',
        'https://cdn.prod.website-files.com/5b3213161e5234bf1cfff9e1/65f17aab753de5bb1ecb5bf4_data%20(5).jpg',
        'https://cdn.shopify.com/s/files/1/0070/7032/files/Reusable_water_bottle.png?v=1597958401',
      ]

    return (
        <div>
          
            <Slider {...settings}>
              {
                GalaryImg.map((imgUrl)=>(
                    <CardMedia
                    component="img"
                    alt={product.title}
                    height="180"
                    image={imgUrl}
                    sx={{paddingBottom:"20px"}}
                    
                />
                ))
              }
            </Slider>
        </div>
    );
}

export default SimpleCarousel;

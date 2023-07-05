import React, { useEffect, useState }  from 'react';
import {PortfolioSection , PortfolioTitle ,Span , PortfolioList , PortfolioItem , Overlay , OverlaySpan , ImageWrapper , Image } from './style.js'
import axios from 'axios';


const Portfolio = ()=> {

    const [ images , setImages ] = useState ([])

    useEffect ( () => {
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})

    } , []
    )

    const PortfolioImages = images.map( (imageItem) => {
        return(
          <ImageWrapper key={imageItem.id}>
          <Image src={imageItem.image} alt=''></Image>
          <Overlay>
              <OverlaySpan>
                Show image
              </OverlaySpan>
          </Overlay>
        </ImageWrapper>

        )
    }
    )

  return (
    <PortfolioSection>
      <PortfolioTitle><Span>My</Span>Portfolio</PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <div className='box'>

        {PortfolioImages}

       </div>
      
    </PortfolioSection>
  )
}


export default Portfolio;
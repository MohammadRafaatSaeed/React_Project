
import React  from 'react';

import {HomeSection,HomeInformation,HomeTitle,HomeInfo,HomeDesc,Span,HomeBtn}from './style.js'

const Home = ()=> {

  return (
    <HomeSection>
        <div className='container'>
            <HomeInformation>
                <HomeTitle>Mohammad Saeed</HomeTitle>
                <HomeInfo>Creative Director</HomeInfo>
                <HomeDesc>
                    I am a professional <Span>UX Designer</Span> and Front-End Developer Creating Modern and reposive designs to web and Mobile . Lets work Together . Thank you.
                </HomeDesc>
                <HomeBtn>Let's Begin</HomeBtn>

            </HomeInformation>

        </div>
    </HomeSection>
  )
}


export default Home;
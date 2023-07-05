
import React  from 'react';
import { Link } from 'react-router-dom';
import {NavbarSection,Logo,LogoText,Ullist,ListItem,Anchor} from'./style.js'




const Navbar = ()=> {

  return (
    <NavbarSection>
      <div className='container'>
        <Logo>
          <LogoText > Ultra Profile</LogoText>
        </Logo>
        
        <Ullist>
          <ListItem><Link className='anchor' to="/"> Home </Link></ListItem>
          <ListItem><Anchor href='#'>Work</Anchor></ListItem>
          <ListItem><Anchor href='#'>Portfolio</Anchor></ListItem>
          <ListItem><Anchor href='#'>Resume</Anchor></ListItem>
          <ListItem><Anchor href='#'>About</Anchor></ListItem>
          <ListItem><Link className='anchor' to="/contact"> Contact </Link></ListItem>
        </Ullist>



      </div>
    </NavbarSection>
  )
}


export default Navbar;
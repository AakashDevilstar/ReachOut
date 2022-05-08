import "bootstrap/dist/css/bootstrap.css"
import { Nav,Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import { useContext, useState } from 'react'
import AppContext from "../App/App-Context"
import ProfilePhoto from "../Assets/ProfilePhoto.jpg"
import { useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate();

  const value = useContext(AppContext);

  const [search, setSearch] = useState('');

  const searchValueChange = (e) => {
    setSearch(e.target.value);
  }

  const searchHandler = async (e) => {
    e.preventDefault();
    // const url = `https://reachout-9b1e7-default-rtdb.firebaseio.com/ReachOut.json?orderBy="nameOfNgo"&equalTo="${search}"`;
    // const response = await fetch(url);
    // const data = await response.json();

    // let name;
    // for(let obj in data) {
    //   name = data[obj].nameOfNGO;
    // }

    navigate('/profile/' + search);
    setSearch('');
  }

  return (
    <Navbar collapseOnSelect expand="lg"  className={`${style.x} sticky-top px-3 me-auto`}>
        <NavLink className={`${style.logo} navbar-brand my-1`} to = {'/'} style={{ textDecoration: 'none' }}>
         ReachOut
        </NavLink>

         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
             <Form className="d-flex ms-auto me-auto my-1">
                 <FormControl
                     type="search"
                     placeholder="Name of NGO"
                     className={`me-2`}
                     aria-label="Search"
                     value={search}
                     onChange={searchValueChange}
                 />
                 <Button onClick={searchHandler} variant="outline-light">Search</Button>
             </Form>

           <Nav>
               <div className={style.sideLinks}>
               <NavLink to = {'/myProfile'} style={{ textDecoration: 'none' }} className={`${style.navbarLink} ${style.viewProfile} px-3 my-1`}>
                 <img src={ProfilePhoto} alt="profile" />
                    My Profile
                  </NavLink>
                  <NavLink onClick={value.logOut} to = {'/'} style={{ textDecoration: 'none' }} className={`${style.navbarLink} ps-3 pe-1 my-1`}>Log Out</NavLink>
               </div>
           </Nav>
         </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
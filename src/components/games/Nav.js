import classes from './Nav.module.css';
import React from 'react';

function Nav(props) {
   return (
      <div className={classes.filter}>
         <h1>Filters</h1>
         <div>{props.children}</div>
      </div>
   );
}

export default Nav;

//Фильтры

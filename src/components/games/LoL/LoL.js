import Games from '../Games';
import React from 'react';
import Header from '../../Header';
import MainName from '../MainName';
import Nav from '../Nav';
import Modal from '../Modal';

var path = window.location.pathname;
var page = path.split('/').pop();
console.log(path);

function LoL() {
   return (
      <>
         <Header />
         <div className="container">
            <main>
               <MainName name={page} />
               <Games />
            </main>
            <aside className="sidebar">
               <Nav />
            </aside>
         </div>
      </>
   );
}

export default LoL;

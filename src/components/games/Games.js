// import jsonfile from './games.json';
import {Outlet} from 'react-router-dom';
import React from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import {useState} from 'react';
// import classes from './Games.module.css';

function Games(props) {
   // const findGame = getGames();
   //  console.log(jsonfile);
   const [showModal, setShowModal] = useState(false);

   function openModal() {
      setShowModal(true);
   }
   function closeModal() {
      setShowModal(false);
   }

   console.log(showModal);

   return (
      <div>
         <div>
            <div>
               <button className="leaveModel_button" onClick={openModal}>
                  Leave Application
               </button>
               <Outlet />
            </div>

            <div>
               {showModal && (
                  <Modal
                     onNicknameInputChange={props.onNicknameInputChange}
                     onInputKeyPress={props.onInputKeyPress}
                     checkingIfLoading={props.checkingIfLoading}
                     accountCheckButton={props.accountCheckButton}
                     accountImg={props.accountImg}
                     accountNickname={props.accountNickname}
                     accountLvl={props.accountLvl}
                     accountRank={props.accountRank}
                     accountRankMmr={props.accountRankMmr}
                     accountKD={props.accountKD}
                     accountPlatform={props.accountPlatform}
                     choosePlatform={props.choosePlatform}
                     chooseLanguage={props.chooseLanguage}
                     chooseGameMode={props.chooseGameMode}
                     chooseRank={props.chooseRank}
                     chooseIfMic={props.chooseIfMic}
                     chooseRegion={props.chooseRegion}
                     onCancel={closeModal}
                  />
               )}
            </div>

            {showModal && <Backdrop onCancel={closeModal} />}
            {/* </div> */}
         </div>
      </div>
   );
}

export default Games;

/* ОСТАВИТЬ ЗАЯВКУ */

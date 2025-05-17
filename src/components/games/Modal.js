// import classes from './Modal.module.css';
import React from 'react';

function Modal(props) {
   return (
      // <div className='modal'>
      <>
         <div className="modal_head">
            <div className="modal_body">
               <ul>
                  <li>
                     <input
                        type="text"
                        maxLength="20"
                        placeholder="Enter nickname..."
                        onChange={props.onNicknameInputChange}
                        onKeyPress={props.onInputKeyPress}
                     />
                     <div>{props.checkingIfLoading}</div>
                  </li>
                  <div>{props.accountCheckButton}</div>
                  <div className="accountInfo">
                     <div className="accountImgDiv">
                        <img src={props.accountImg} alt="" />
                     </div>
                     <div className="accountNickDiv">
                        <h2>{props.accountNickname}</h2>
                        <p>{props.accountLvl}</p>
                     </div>
                     <div className="accountRankDiv">
                        <p>{props.accountRank}</p>
                        <p>{props.accountRankMmr}</p>
                     </div>
                     <div className="accountKDDiv">
                        <p>{props.accountKD}</p>
                        <p>{props.accountPlatform}</p>
                     </div>
                  </div>
                  <li>{props.choosePlatform}</li>
                  <li>{props.chooseGameMode}</li>
                  <li>{props.chooseRank}</li>
                  <li>{props.chooseIfMic}</li>
                  <li>{props.chooseRegion}</li>
               </ul>
            </div>
            <button className="btn" onClick={props.onCancel}>
               Leave application
            </button>
         </div>
      </>
      // </div>
   );
}

export default Modal;

//Оставить заявку

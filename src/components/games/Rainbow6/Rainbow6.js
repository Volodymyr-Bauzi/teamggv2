// import {Outlet} from 'react-router-dom';
import Games from '../Games';
import React, {useState} from 'react';
import Select from 'react-select';
import Nav from '../Nav';
import MainName from '../MainName';
import Header from '../../Header';
import CalculateRank from './CalculateRank';

//ADDED options and <Select />

function Rainbow6() {
   const [inputValue, setInputValue] = useState('');
   const [playerData, setPlayerData] = useState([]);
   const [isLoading, setIsLoading] = useState('');
   // const [accountImg, setAccountImg] = useState('');
   // const [accountNickname, setAccountNickname] = useState('');
   // const [accountLvl, setAccountLvl] = useState('');
   // const [accountKD, setAccountKD] = useState('');
   // const [accountPlatform, setAccountPlatform] = useState('');
   // const [accountRank, setAccountRank] = useState('');

   let userId = '1725461635072493';
   let password = '8dcf9428b06daedebae1f70ca5406fdf';
   let nickName;

   let token = btoa(userId + ':' + password);

   //Get data on nickname enter
   const onEnterPress = (e) => {
      if (e.key === 'Enter' && inputValue !== '') {
         nickName = inputValue;
         fetchingData();
      }
   };

   let pressEnter = () => {
      if (inputValue !== '') {
         nickName = inputValue;
         fetchingData();
      }
   };

   const fetchingData = () => {
      setIsLoading(true);
      console.log(isLoading);
      fetch(`https://api.statsdb.net/r6/pc/player/${nickName}`, {
         credentials: 'include',
         headers: {
            Authorization: 'Basic ' + token,
         },
      })
         .then((resp) => {
            return resp.json();
         })
         .then((data) => {
            setIsLoading(false);
            let player = data.payload;

            // setAccountImg(player.user.avatar);
            // setAccountNickname(player.user.nickname);
            // setAccountLvl(player.stats.progression.level);
            // setAccountRank(player.stats.seasonal.ranked.mmr);
            // setAccountKD(player.preview[0].value);
            // setAccountPlatform(player.user.platform);
            // console.log(player);
            console.log(player);
            setPlayerData({
               nickname: player.user.nickname,
               photo: player.user.avatar,
               lvl: player.stats.progression.level + ' LvL',
               rank: player.stats.seasonal.ranked.mmr,
               KD: 'K/D: ' + player.preview[0].value,
               platform: 'Platform: ' + player.user.platform,
            });
         })
         .catch((error) => {
            console.error('Error:', error);
         });
   };

   const LoadingIndicator = () => {
      console.log('loading');
      return <h1>Loading...</h1>;
   };
   const notLoading = () => {
      console.log('notLoading');
      return <></>;
   };

   // console.log(nickName);

   //For page name
   var path = window.location.pathname;
   var page = path.split('/').pop();
   // console.log(page);

   let selectGameMode, selectRank, selectRegion;

   selectGameMode = [
      {value: 'Casual', label: 'Casual'},
      {value: 'Ranked', label: 'Ranked'},
      {value: 'Terrorist Hunt', label: 'Terrorist Hunt'},
      {value: 'Any', label: 'Any'},
   ];

   selectRank = [
      {value: 'Cooper IV', label: 'Cooper IV'},
      {value: 'Cooper III', label: 'Cooper III'},
      {value: 'Cooper II', label: 'Cooper II'},
      {value: 'Cooper I', label: 'Cooper I'},
      {value: 'Bronze IV', label: 'Bronze IV'},
      {value: 'Bronze III', label: 'Bronze III'},
      {value: 'Bronze II', label: 'Bronze II'},
      {value: 'Bronze I', label: 'Bronze I'},
      {value: 'Silver IV', label: 'Silver IV'},
      {value: 'Silver III', label: 'Silver III'},
      {value: 'Silver II', label: 'Silver II'},
      {value: 'Silver I', label: 'Silver I'},
      {value: 'Gold IV', label: 'Gold IV'},
      {value: 'Gold III', label: 'Gold III'},
      {value: 'Gold II', label: 'Gold II'},
      {value: 'Gold I', label: 'Gold I'},
      {value: 'Plat III', label: 'Plat III'},
      {value: 'Plat II', label: 'Plat II'},
      {value: 'Plat I', label: 'Plat I'},
      {value: 'Diamond III', label: 'Diamond III'},
      {value: 'Diamond II', label: 'Diamond II'},
      {value: 'Diamond I', label: 'Diamond I'},
      {value: 'Champion (5000+)', label: 'Champion (5000+)'},
   ];

   selectRegion = [
      {value: 'EUS', label: 'EUS'},
      {value: 'CUS', label: 'CUS'},
      {value: 'SCUS', label: 'SCUS'},
      {value: 'WUS', label: 'WUS'},
      {value: 'SBR', label: 'SBR'},
      {value: 'NEU', label: 'NEU'},
      {value: 'WEU', label: 'WEU'},
      {value: 'EAS', label: 'EAS'},
      {value: 'SEAS', label: 'SEAS'},
      {value: 'EAU', label: 'EAU'},
      {value: 'WJA', label: 'WJA'},
      {value: 'Any', label: 'Any'},
   ];

   //Styles for <SELECT />
   const customStyles = {
      option: (provided, state) => ({
         ...provided,
         borderBottom: '2px dotted rgb(87, 106, 160)',
         color: state.isSelected ? 'white' : 'black',
         padding: 10,
      }),
      // control: () => ({
      //    // none of react-select's styles are passed to <Control />
      //    // width: 200,
      // }),
      singleValue: (provided, state) => {
         const opacity = state.isDisabled ? 0.5 : 1;
         const transition = 'opacity 300ms';

         return {...provided, opacity, transition};
      },
   };

   const button = (
      <button className="checkNicknameButton" onClick={pressEnter}>
         Check Nickname
      </button>
   );

   const accNick = playerData.nickname;

   // const accImg = <img src={playerData.accountImg} alt="" />;

   const accRank = <img src={CalculateRank(playerData.rank)} alt="" />;
   // console.log(accRank);
   // const accMmr = playerData.accountRank + ' MMR';
   // const accLvl = playerData.accountLvl + ' LvL';
   // const accKD = 'K/D: ' + playerData.accountKD;
   // const soft = 'Platform: ' + playerData.accountPlatform;
   // console.log(playerData.setAccountRank);

   return (
      <div>
         <Header />
         <div className="game_container">
            <main className="game_main">
               <MainName name={page} />

               <Games
                  onNicknameInputChange={(event) =>
                     setInputValue(event.target.value)
                  }
                  onInputKeyPress={onEnterPress}
                  checkingIfLoading={isLoading ? LoadingIndicator : notLoading}
                  accountCheckButton={button}
                  accountImg={playerData.photo}
                  accountNickname={accNick}
                  accountRank={accNick ? accRank : ''}
                  accountRankMmr={accNick ? playerData.rank + ' MMR' : ''}
                  accountLvl={accNick ? playerData.lvl : ''}
                  accountKD={accNick ? playerData.KD : ''}
                  accountPlatform={accNick ? playerData.platform : ''}
                  chooseGameMode={
                     accNick ? (
                        <Select
                           options={selectGameMode}
                           styles={customStyles}
                           placeholder="Choose game mode..."
                        />
                     ) : (
                        ''
                     )
                  }
                  chooseRank={
                     accNick ? (
                        <Select
                           isMulti={true}
                           options={selectRank}
                           styles={customStyles}
                           placeholder="Choose rank to play with..."
                        />
                     ) : (
                        ''
                     )
                  }
                  chooseRegion={
                     accNick ? (
                        <Select
                           isMulti={true}
                           options={selectRegion}
                           styles={customStyles}
                           placeholder="Choose region..."
                        />
                     ) : (
                        ''
                     )
                  }
               />
            </main>
            <aside className="sidebar">
               <Nav />
            </aside>
         </div>
      </div>
   );
}

export default Rainbow6;

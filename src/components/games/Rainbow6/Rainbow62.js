import React, {useState} from 'react';
import {useGetRemoteData, pressEnter, setInputValue} from './useGetRemoteData';
import {useHttpGetRequest} from '../useHttpGetRequest';

import Header from '../../Header';
import Games from '../Games';
import MainName from '../MainName';
import Nav from '../Nav';
import Select from 'react-select';

const Rainbow6 = () => {
   const {account, isLoading} = useGetRemoteData();

   // const [onEnterKey, setOnEnterKey] = useState('');
   //  const [inputValue, setInputValue] = useState('');

   //REMOTE DATA FETCHING
   // useEffect(() => {

   // setOnEnterKey(pressEnter);
   // }, []);

   // console.log(users);

   let path = window.location.pathname;
   let page = path.split('/').pop();

   //PROCESSING DATA
   // console.log(users.user);

   // const filteredaccountUser = acc.map((user) => {
   // return {
   // accountPlatform: users.user.platform,
   // };
   // });
   // const {accountImg: avatar} = user;

   // console.log(filteredUser.mmr);

   let selectGameMode, selectRank, selectRegion;

   const calculateRank = (n) => {
      if (n > 5000) {
         console.log('DONE 5000');
         return 'https://cdn.r6stats.com/seasons/ranks/champions.svg';
      } else if (n > 4100) {
         console.log('DONE 4100');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank20.da30b73c.svg';
      } else if (n > 3800) {
         console.log('DONE 3800');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank17.27fbc796.svg';
      } else if (n > 3500) {
         console.log('DONE 3500');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank18.0942a2f2.svg';
      } else if (n > 3200) {
         console.log('DONE 3200+');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank19.5cc86715.svg';
      } else if (n > 3000) {
         console.log('DONE 3000');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank13.42fb03b4.svg';
      } else if (n > 2800) {
         console.log('DONE 2800');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank14.1e94c7f0.svg';
      } else if (n > 2600) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank15.e8ddab14.svg';
      } else if (n > 2500) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank9.4196c329.svg';
      } else if (n > 2400) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank10.cce1c8c4.svg';
      } else if (n > 2300) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank11.2fffcd0a.svg';
      } else if (n > 2100) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank12.c432740e.svg';
      } else if (n > 2000) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank5.5b0b90e9.svg';
      } else if (n > 1900) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank6.fc40a107.svg';
      } else if (n > 1800) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank7.ba63ea85.svg';
      } else if (n > 1600) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank8.d08a99eb.svg';
      } else if (n > 1500) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank1.79a2af3a.svg';
      } else if (n > 1400) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank2.f2bc8224.svg';
      } else if (n > 1300) {
         console.log('DONE');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank3.f204dd6e.svg';
      } else if (n > 1100) {
         console.log('DONE 1100');
         return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank4.5105339d.svg';
      } else {
         return 'https://preview.redd.it/gfq41hb18zl11.png?width=1342&format=png&auto=webp&s=4ef96afbd14a8a9c0eced26d878337f8b071be29';
      }
   };

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
      //    width: 200,
      // }),
      singleValue: (provided, state) => {
         const opacity = state.isDisabled ? 0.5 : 1;
         const transition = 'opacity 300ms';

         return {...provided, opacity, transition};
      },
   };

   const rank = <img src={calculateRank(account.mmr)} alt="" />;

   // UI RENDERING
   // accountCheckButton={button}
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
                  onInputKeyPress={pressEnter}
                  accountImg={isLoading ? account.avatar : ''}
                  accountNickname={isLoading ? account.nickname : ''}
                  accountRank={isLoading ? account.rank : ''}
                  accountRankMmr={isLoading ? account.mmr : ''}
                  accountLvl={isLoading ? account.lvl : ''}
                  accountKD={isLoading ? account.kD : ''}
                  accountPlatform={isLoading ? account.platform : ''}
                  chooseGameMode={
                     account.avatar ? (
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
                     account.avatar ? (
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
                     account.avatar ? (
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
};
export default Rainbow6;

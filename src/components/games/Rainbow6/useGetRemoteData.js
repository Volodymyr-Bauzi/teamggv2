import {useEffect, useState} from 'react';
import {useHttpGetRequest, jsonUsers} from '../useHttpGetRequest';

export const useGetRemoteData = () => {
   const [inputValue, setInputValue] = useState('');
   let nickName = inputValue;
   const REMOTE_URL = `https://api.statsdb.net/r6/pc/player/${nickName}`;
   const [account, setAccount] = useHttpGetRequest(REMOTE_URL);

   //  useEffect(() => {

   //  });

   let {exists, preview, stats, user} = jsonUsers;
   // console.log(preview, stats, user);
   useEffect(() => {
      if (exists) {
         let {avatar} = user;
         let {value} = preview[0];
         let {
            progression: {level},
         } = stats;
         let {nickname} = user;
         let {
            seasonal: {
               ranked: {mmr},
            },
         } = stats;
         let {platform} = user;
         setAccount({
            avatar: avatar,
            kD: value + ' K/D',
            lvl: level + ' Lvl',
            nickname: nickname,
            // rank: accRank,
            mmr: mmr + ' MMR',
            platform: 'Platform: ' + platform,
         });
      }
   }, [exists, preview, stats, user]);

   return {account, setInputValue};
};

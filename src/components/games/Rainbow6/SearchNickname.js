// import React from 'react';
// import './App.css';

// const SearchNickname = () => {
//   let userId = '1725461635072493';
//   let password = '8dcf9428b06daedebae1f70ca5406fdf';
//   let nickName = inputValue;

//   let token = btoa(userId + ':' + password);

//   fetch(`https://api.statsdb.net/r6/pc/player/${nickName}`, {
//      credentials: 'include',
//      headers: {
//         Authorization: 'Basic ' + token,
//      },
//   })
//      .then((resp) => {
//         return resp.json();
//      })
//      .then((data) => {
//         // let player = data.payload;
//         console.log(data);
//         <div>
//            <img src={data.payload.user.avatar} alt="img" />
//         </div>;
//         // console.log(player.user.nickname + ' - ' + player.user.platform);
//         // console.log('===== Seasonal Ranked =====');
//         // console.log('Rank: ' + player.stats.seasonal.ranked.rank);
//         // console.log('MMR: ' + player.stats.seasonal.ranked.mmr);
//         // console.log(
//         //    'K/D: ' +
//         //       player.stats.seasonal.ranked.kills /
//         //          player.stats.seasonal.ranked.deaths
//         // );
//         // console.log('===== Overall  Ranked =====');
//         // console.log('Wins: ' + player.stats.ranked.wins);
//         // console.log('Matches Played: ' + player.stats.ranked.matchesplayed);
//         // console.log(
//         //    'K/D: ' + player.stats.ranked.kills / player.stats.ranked.deaths
//         // );
//      })
//      .catch((error) => {
//         console.error('Error:', error);
//      });

//     return (
//       <div>
//           <img src={data.payload.user.avatar} alt="img" />
//       </div>
//     )
// }

// export default SearchNickname;

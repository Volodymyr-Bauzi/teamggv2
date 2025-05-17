import { updateGamesWithIcons } from '../utils/gameIcons';

// Function to get games with icons
const getGamesWithIcons = async () => {
  try {
    const gamesWithIcons = await updateGamesWithIcons(games);
    return gamesWithIcons;
  } catch (error) {
    console.error('Error fetching game icons:', error);
    return games; // Return original games if there's an error
  }
};

// For backward compatibility
const getGames = () => games;

export { getGames, getGamesWithIcons };

let games = [
   {
      image: 'https://static.wikia.nocookie.net/leagueoflegends/images/8/86/League_of_legends_logo.png',
      name: 'League of Legends',
      tag: 'Соревновательные Популярные',
      uri: 'LeagueofLegends',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Dota_2_Steam_icon.png/1024px-Dota_2_Steam_icon.png',
      name: 'Dota 2',
      tag: 'Соревновательные Популярные',
      uri: 'Dota2',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Counter-Strike_2_Logo.svg/2048px-Counter-Strike_2_Logo.svg.png',
      name: 'Counter-Strike 2',
      tag: 'Соревновательные Популярные',
      uri: 'CS2',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Minecraft.svg/2048px-Minecraft.svg.png',
      name: 'Minecraft',
      tag: 'Кооперативные Популярные',
      uri: 'Minecraft',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Rust_prototype_logo_2016.svg/2048px-Rust_prototype_logo_2016.svg.png',
      name: 'Rust',
      tag: 'Кооперативные Популярные',
      uri: 'Rust',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_icon.svg/2048px-Epic_Games_icon.svg.png',
      name: 'Fortnite',
      tag: 'Соревновательные Популярные',
      uri: 'Fortnite',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Brawl_Stars_logo.png/1024px-Brawl_Stars_logo.png',
      name: 'Brawl Stars',
      tag: 'Соревновательные Популярные',
      uri: 'BrawlStars',
   },
   {
      image: 'https://play-lh.googleusercontent.com/8gxSJRGVfH-9XeZd8UYvBxSDGRVunBzUJbM1eA0S7v6yU4J9g4Hx0y8s8x6Xq3pJQ',
      name: 'Standoff 2',
      tag: 'Соревновательные',
      uri: 'Standoff2',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PUBG_Logo.svg/1200px-PUBG_Logo.svg.png',
      name: 'PUBG',
      tag: 'Соревновательные Популярные',
      uri: 'PUBG',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/db/Apex_legends_cover.jpg/1200px-Apex_legends_cover.jpg',
      name: 'Apex Legends',
      tag: 'Соревновательные Популярные',
      uri: 'ApexLegends',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1200px-Valorant_logo_-_pink_color_version.svg.png',
      name: 'Valorant',
      tag: 'Соревновательные Популярные',
      uri: 'Valorant',
   },
   {
      image: 'Logo PUBG Mobile',
      name: 'PUBG Mobile',
      tag: 'Онлайн Популярные',
      uri: 'PUBGMobile',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Genshin_Impact_logo.svg/2048px-Genshin_Impact_logo.svg.png',
      name: 'Genshin Impact',
      tag: 'Популярные',
      uri: 'GenshinImpact',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Grand_Theft_Auto_V.png/1200px-Grand_Theft_Auto_V.png',
      name: 'Grand Theft Auto V',
      tag: 'Популярные',
      uri: 'GTAV',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Terraria_Logo.svg/1200px-Terraria_Logo.svg.png',
      name: 'Terraria',
      tag: 'Онлайн Популярные',
      uri: 'Terraria',
   },
   {
      image: "Logo Apex Legends",
      name: 'Apex Legends',
      tag: 'Соревновательные Популярные',
      uri: 'ApexLegends',
   },
   {
      image: "Logo Valorant",
      name: 'Valorant',
      tag: 'Онлайн Популярные',
      uri: 'Valorant',
   },
   {
      image: 'Logo PUBG Mobile',
      name: 'PUBG Mobile',
      tag: 'Онлайн Популярные',
      uri: 'PUBGMobile',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Dead_by_Daylight_Steam_icon.jpg/1200px-Dead_by_Daylight_Steam_icon.jpg',
      name: 'Dead by Daylight',
      tag: 'Онлайн Популярные',
      uri: 'DbD',
   },
   {
      image: "Logo Garry's Mod",
      name: "Garry's Mod",
      tag: 'Онлайн',
      uri: 'GarrysMod',
   },
   {
      image: 'Logo GTA: San Andreas Multiplayer',
      name: 'GTA: San Andreas Multiplayer',
      tag: 'Онлайн',
      uri: 'GTASAMP',
   },
   {
      image: "Logo Tom Clancy's Rainbow Six: Siege",
      name: "Tom Clancy's Rainbow Six: Siege",
      tag: 'Онлайн Соревновательные Популярные',
      uri: 'Rainbow_6',
   },
   {
      image: 'Logo ARK: Survival Evolved',
      name: 'ARK: Survival Evolved',
      tag: 'Онлайн',
      uri: 'ARK',
   },
   {
      image: 'Logo DayZ',
      name: 'DayZ',
      tag: 'Онлайн',
      uri: 'DayZ',
   },
   {
      image: 'Logo Sea of Thieves',
      name: 'Sea of Thieves',
      tag: 'Онлайн',
      uri: 'SeaofThieves',
   },
   {
      image: 'Logo Call of Duty: Warzone',
      name: 'Call of Duty: Warzone',
      tag: 'Онлайн',
      uri: 'CoDWarzone',
   },
   {
      image: 'Logo Gartic Phone',
      name: 'Gartic Phone',
      tag: 'Онлайн',
      uri: 'GarticPhone',
   },
   {
      image: 'Logo Phasmophobia',
      name: 'Phasmophobia',
      tag: 'Онлайн',
      uri: 'Phasmophobia',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/World_of_Tanks_Logo.png/1200px-World_of_Tanks_Logo.png',
      name: 'World of Tanks',
      tag: 'Онлайн',
      uri: 'WoT',
   },
   {
      image: "Logo Don't Starve Together",
      name: "Don't Starve Together",
      tag: 'Онлайн',
      uri: 'DontStarve',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Rocket_League_coverart.jpg/1200px-Rocket_League_coverart.jpg',
      name: 'Rocket League',
      tag: 'Онлайн',
      uri: 'RocketLeague',
   },
   {
      image: 'Logo Escape from Tarkov',
      name: 'Escape from Tarkov',
      tag: 'Онлайн',
      uri: 'EscapefromTarkov',
   },
   {
      image: 'Logo Raft',
      name: 'Raft',
      tag: 'Онлайн',
      uri: 'Raft',
   },
   {
      image: 'Logo Unturned',
      name: 'Unturned',
      tag: 'Онлайн',
      uri: 'Unturned',
   },
   {
      image: 'Logo Warface',
      name: 'Warface',
      tag: 'Онлайн',
      uri: 'Warface',
   },
   {
      image: "Logo Playerunknown's Battlegrounds",
      name: "Player Unknown's Battle grounds",
      tag: 'Онлайн',
      uri: 'PuBg',
   },
   {
      image: 'Logo Mobile Legends',
      name: 'Mobile Legends',
      tag: 'Онлайн',
      uri: 'MobileLegends',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/The_Forest_cover_art.jpg/220px-The_Forest_cover_art.jpg',
      name: 'The Forest',
      tag: 'Онлайн',
      uri: 'TheForest',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/1200px-Overwatch_circle_logo.svg.png',
      name: 'Overwatch',
      tag: 'Онлайн',
      uri: 'Overwatch',
   },
   {
      image: 'Logo Counter-Strike',
      name: 'Counter-Strike',
      tag: 'Онлайн',
      uri: 'CounterStrike',
   },
   {
      image: 'Logo World of Tanks Blitz',
      name: 'World of Tanks Blitz',
      tag: 'Онлайн',
      uri: 'WoTBlitz',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Among_Us_steam_icon.jpg/1200px-Among_Us_steam_icon.jpg',
      name: 'Among Us',
      tag: 'Онлайн',
      uri: 'AmongUs',
   },
   {
      image: 'Logo 7 Days to Die',
      name: '7 Days to Die',
      tag: 'Онлайн',
      uri: 'SevenDaystoDie',
   },
   {
      image: 'Logo Valheim',
      name: 'Valheim',
      tag: 'Онлайн',
      uri: 'Valheim',
   },
   {
      image: 'Logo Call of Duty: Mobile',
      name: 'Call of Duty: Mobile',
      tag: 'Онлайн',
      uri: 'CoDMobile',
   },
   {
      image: 'Logo Far Cry 5',
      name: 'Far Cry 5',
      tag: 'Онлайн',
      uri: 'FarCry5',
   },
   {
      image: 'Logo Scrap Mechanic',
      name: 'Scrap Mechanic',
      tag: 'Онлайн',
      uri: 'ScrapMechanic',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Warframe_icon.png/1200px-Warframe_icon.png',
      name: 'Warframe',
      tag: 'Онлайн',
      uri: 'Warframe',
   },
   {
      image: 'Logo Euro Truck Simulator 2',
      name: 'Euro Truck Simulator 2',
      tag: 'Онлайн',
      uri: 'EuroTruckSimulator2',
   },
   {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Paladins_logo.png/1200px-Paladins_logo.png',
      name: 'Paladins',
      tag: 'Онлайн',
      uri: 'Paladins',
   },
   {
      image: 'Logo War Thunder',
      name: 'War Thunder',
      tag: 'Онлайн',
      uri: 'WarThunder',
   },
   {
      image: 'Logo World of Warcraft',
      name: 'World of Warcraft',
      tag: 'Онлайн',
      uri: 'WoW',
   },
   {
      image: 'Logo Dying Light',
      name: 'Dying Light',
      tag: 'Онлайн',
      uri: 'DyingLight',
   },
   {
      image: 'Logo Forza Horizon 4',
      name: 'Forza Horizon 4',
      tag: 'Онлайн',
      uri: 'ForzaHorizon4',
   },
   {
      image: 'Logo Payday 2',
      name: 'Payday 2',
      tag: 'Онлайн',
      uri: 'Payday2',
   },
   {
      image: 'Logo Hearts of Iron IV',
      name: 'Hearts of Iron IV',
      tag: 'Онлайн',
      uri: 'HoIIV',
   },
   {
      image: 'Logo Farming Simulator 19',
      name: 'Farming Simulator 19',
      tag: 'Онлайн',
      uri: 'FarmingSimulator19',
   },
   {
      image: 'Logo Albion Online',
      name: 'Albion Online',
      tag: 'Онлайн',
      uri: 'AlbionOnline',
   },
   {
      image: 'Logo Satisfactory',
      name: 'Satisfactory',
      tag: 'Онлайн',
      uri: 'Satisfactory',
   },
   {
      image: 'Logo Garena FreeFire: Wonderland',
      name: 'Garena Free Fire: Wonderland',
      tag: 'Онлайн',
      uri: 'GFFWonderland',
   },
   {
      image: 'Logo Portal 2',
      name: 'Portal 2',
      tag: 'Онлайн',
      uri: 'Portal2',
   },
   {
      image: 'Logo Red Dead Redemption 2',
      name: 'Red Dead Redemption 2',
      tag: 'Онлайн',
      uri: 'RDR2',
   },
   {
      image: 'Logo Geometry Dash',
      name: 'Geometry Dash',
      tag: 'Онлайн',
      uri: 'GeometryDash',
   },
   {
      image: 'Logo Project Zomboid',
      name: 'Project Zomboid',
      tag: 'Онлайн',
      uri: 'ProjectZomboid',
   },
   {
      image: 'Logo Battlefield 4',
      name: 'Battlefield 4',
      tag: 'Онлайн',
      uri: 'Battlefield4',
   },
   {
      image: 'Logo Battlefield V',
      name: 'Battlefield V',
      tag: 'Онлайн',
      uri: 'BattlefieldV',
   },
   {
      image: 'Logo Osu!',
      name: 'Osu!',
      tag: 'Онлайн',
      uri: 'Osu',
   },
   {
      image: 'Logo Clash of clans',
      name: 'Clash of clans',
      tag: 'Онлайн',
      uri: 'ClashofClans',
   },
   {
      image: 'Logo Muck',
      name: 'Muck',
      tag: 'Онлайн',
      uri: 'Muck',
   },
   {
      image: 'Logo Stardew Valley',
      name: 'Stardew Valley',
      tag: 'Онлайн',
      uri: 'StardewValley',
   },
   {
      image: 'Logo Arma 3',
      name: 'Arma 3',
      tag: 'Онлайн',
      uri: 'Arma3',
   },
   {
      image: 'Logo Crossout',
      name: 'Crossout',
      tag: 'Онлайн',
      uri: 'Crossout',
   },
   {
      image: 'Logo Deceit',
      name: 'Deceit',
      tag: 'Онлайн',
      uri: 'Deceit',
   },
   {
      image: 'Logo Grounded',
      name: 'Grounded',
      tag: 'Онлайн',
      uri: 'Grounded',
   },
   {
      image: 'Logo Stalcraft',
      name: 'Stalcraft',
      tag: 'Онлайн',
      uri: 'Stalcraft',
   },
   {
      image: 'Logo Borderlands 2',
      name: 'Borderlands 2',
      tag: 'Онлайн',
      uri: 'Borderlands2',
   },
];

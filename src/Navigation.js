import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import App from './App';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';

// import Games from" './components/games/Games"';"
import LoL from './components/games/LoL/LoL';
import Dota from './components/games/Dota/Dota';
import CSGO from './components/games/CSGO/CSGO';
import Minecraft from './components/games/Minecraft/Minecraft';
import Rust from './components/games/Rust/Rust';
import Fortnite from './components/games/Fortnite/Fortnite';
import BrawlStars from './components/games/BrawlStars/BrawlStars';
import Standoff2 from './components/games/Standoff2/Standoff2';
import GenshinImpact from './components/games/GenshinImpact/GenshinImpact';
import Roblox from './components/games/Roblox/Roblox';
import GTAV from './components/games/GTAV/GTAV';
import Terraria from './components/games/Terraria/Terraria';
import ApexLegends from './components/games/ApexLegends/ApexLegends';
import Valorant from './components/games/Valorant/Valorant';
import PUBGMobile from './components/games/PUBGMobile/PUBGMobile';
import DbD from './components/games/DbD/DbD';
import GarrysMod from './components/games/GarrysMod/GarrysMod';
import GTASAMP from './components/games/GTASAMP/GTASAMP';
import Rainbow_6 from './components/games/Rainbow6/Rainbow6';
import ARK from './components/games/ARK/ARK';
import DayZ from './components/games/DayZ/DayZ';
import SeaofThieves from './components/games/SeaofThieves/SeaofThieves';
import CoDWarzone from './components/games/CoDWarzone/CoDWarzone';
import GarticPhone from './components/games/GarticPhone/GarticPhone';
import Phasmophobia from './components/games/Phasmophobia/Phasmophobia';
import WoT from './components/games/WoT/WoT';
import DontStarve from './components/games/DontStarve/DontStarve';
import RocketLeague from './components/games/RocketLeague/RocketLeague';
import EscapefromTarkov from './components/games/EscapefromTarkov/EscapefromTarkov';
import Raft from './components/games/Raft/Raft';
import Unturned from './components/games/Unturned/Unturned';
import Warface from './components/games/Warface/Warface';
import PuBg from './components/games/PuBg/PuBg';
import MobileLegends from './components/games/MobileLegends/MobileLegends';
import TheForest from './components/games/TheForest/TheForest';
import Overwatch from './components/games/Overwatch/Overwatch';
import CounterStrike from './components/games/CounterStrike/CounterStrike';
import WoTBlitz from './components/games/WoTBlitz/WoTBlitz';
import AmongUs from './components/games/AmongUs/AmongUs';
import SevenDaystoDie from './components/games/SevenDaystoDie/SevenDaystoDie';
import Valheim from './components/games/Valheim/Valheim';
import CoDMobile from './components/games/CoDMobile/CoDMobile';
import FarCry5 from './components/games/FarCry5/FarCry5';
import ScrapMechanic from './components/games/ScrapMechanic/ScrapMechanic';
import Warframe from './components/games/Warframe/Warframe';
import EuroTruckSimulator2 from './components/games/EuroTruckSimulator2/EuroTruckSimulator2';
import Paladins from './components/games/Paladins/Paladins';
import WarThunder from './components/games/WarThunder/WarThunder';
import WoW from './components/games/WoW/WoW';
import DyingLight from './components/games/DyingLight/DyingLight';
import ForzaHorizon4 from './components/games/ForzaHorizon4/ForzaHorizon4';
import Payday2 from './components/games/Payday2/Payday2';
import HoIIV from './components/games/HoIIV/HoIIV';
import FarmingSimulator19 from './components/games/FarmingSimulator19/FarmingSimulator19';
import AlbionOnline from './components/games/AlbionOnline/AlbionOnline';
import Satisfactory from './components/games/Satisfactory/Satisfactory';
import GFFWonderland from './components/games/GFFWonderland/GFFWonderland';
import Portal2 from './components/games/Portal2/Portal2';
import RDR2 from './components/games/RDR2/RDR2';
import GeometryDash from './components/games/GeometryDash/GeometryDash';
import ProjectZomboid from './components/games/ProjectZomboid/ProjectZomboid';
import Battlefield4 from './components/games/Battlefield4/Battlefield4';
import BattlefieldV from './components/games/BattlefieldV/BattlefieldV';
import Osu from './components/games/Osu/Osu';
import ClashofClans from './components/games/ClashofClans/ClashofClans';
import Muck from './components/games/Muck/Muck';
import StardewValley from './components/games/StardewValley/StardewValley';
import Arma3 from './components/games/Arma3/Arma3';
import Crossout from './components/games/Crossout/Crossout';
import Deceit from './components/games/Deceit/Deceit';
import Grounded from './components/games/Grounded/Grounded';
import Stalcraft from './components/games/Stalcraft/Stalcraft';
import Borderlands2 from './components/games/Borderlands2/Borderlands2';

function Navigation() {
   return (
      <Routes>
         <Route path="/games/LeagueofLegends" element={<LoL />} />
         <Route path="/games/Rust" element={<Rust />} />
         <Route path="/games/Dota2" element={<Dota />} />
         <Route path="/games/CSGO" element={<CSGO />} />
         <Route path="/games/Minecraft" element={<Minecraft />} />
         <Route path="/games/Fortnite" element={<Fortnite />} />
         <Route path="/games/BrawlStars" element={<BrawlStars />} />
         <Route path="/games/Standoff2" element={<Standoff2 />} />
         <Route path="/games/GenshinImpact" element={<GenshinImpact />} />
         <Route path="/games/Roblox" element={<Roblox />} />
         <Route path="/games/GTAV" element={<GTAV />} />
         <Route path="/games/Terraria" element={<Terraria />} />
         <Route path="/games/ApexLegends" element={<ApexLegends />} />
         <Route path="/games/Valorant" element={<Valorant />} />
         <Route path="/games/PUBGMobile" element={<PUBGMobile />} />
         <Route path="/games/DbD" element={<DbD />} />
         <Route path="/games/GarrysMod" element={<GarrysMod />} />
         <Route path="/games/GTASAMP" element={<GTASAMP />} />
         <Route path="/games/Rainbow_6" element={<Rainbow_6 />} />
         <Route path="/games/ARK" element={<ARK />} />
         <Route path="/games/DayZ" element={<DayZ />} />
         <Route path="/games/SeaofThieves" element={<SeaofThieves />} />
         <Route path="/games/CoDWarzone" element={<CoDWarzone />} />
         <Route path="/games/GarticPhone" element={<GarticPhone />} />
         <Route path="/games/Phasmophobia" element={<Phasmophobia />} />
         <Route path="/games/WoT" element={<WoT />} />
         <Route path="/games/DontStarve" element={<DontStarve />} />
         <Route path="/games/RocketLeague" element={<RocketLeague />} />
         <Route path="/games/EscapeformTarkov" element={<EscapefromTarkov />} />
         <Route path="/games/Raft" element={<Raft />} />
         <Route path="/games/Unturned" element={<Unturned />} />
         <Route path="/games/Warface" element={<Warface />} />
         <Route path="/games/PuBg" element={<PuBg />} />
         <Route path="/games/MobileLegends" element={<MobileLegends />} />
         <Route path="/games/TheForest" element={<TheForest />} />
         <Route path="/games/Overwatch" element={<Overwatch />} />
         <Route path="/games/CounterStrike" element={<CounterStrike />} />
         <Route path="/games/WoTBlitz" element={<WoTBlitz />} />
         <Route path="/games/AmongUs" element={<AmongUs />} />
         <Route path="/games/SevenDaystoDie" element={<SevenDaystoDie />} />
         <Route path="/games/Valheim" element={<Valheim />} />
         <Route path="/games/CoDMobile" element={<CoDMobile />} />
         <Route path="/games/FarCry5" element={<FarCry5 />} />
         <Route path="/games/ScrapMechanic" element={<ScrapMechanic />} />
         <Route path="/games/Warframe" element={<Warframe />} />
         <Route
            path="/games/EuroTruckSimulator2"
            element={<EuroTruckSimulator2 />}
         />
         <Route path="/games/Paladins" element={<Paladins />} />
         <Route path="/games/WarThunder" element={<WarThunder />} />
         <Route path="/games/WoW" element={<WoW />} />
         <Route path="/games/DyingLight" element={<DyingLight />} />
         <Route path="/games/ForzaHorizon4" element={<ForzaHorizon4 />} />
         <Route path="/games/Payday2" element={<Payday2 />} />
         <Route path="/games/HoIIV" element={<HoIIV />} />
         <Route
            path="/games/FarmingSimulator19"
            element={<FarmingSimulator19 />}
         />
         <Route path="/games/AlbionOnline" element={<AlbionOnline />} />
         <Route path="/games/Satisfactory" element={<Satisfactory />} />
         <Route path="/games/GFFWonderland" element={<GFFWonderland />} />
         <Route path="/games/Portal2" element={<Portal2 />} />
         <Route path="/games/RDR2" element={<RDR2 />} />
         <Route path="/games/GeometryDash" element={<GeometryDash />} />
         <Route path="/games/ProjectZomboid" element={<ProjectZomboid />} />
         <Route path="/games/Battlefield4" element={<Battlefield4 />} />
         <Route path="/games/BattlefieldV" element={<BattlefieldV />} />
         <Route path="/games/Osu" element={<Osu />} />
         <Route path="/games/ClashofClans" element={<ClashofClans />} />
         <Route path="/games/Muck" element={<Muck />} />
         <Route path="/games/StardewValley" element={<StardewValley />} />
         <Route path="/games/Arma3" element={<Arma3 />} />
         <Route path="/games/Crossout" element={<Crossout />} />
         <Route path="/games/Deceit" element={<Deceit />} />
         <Route path="/games/Grounded" element={<Grounded />} />
         <Route path="/games/Stalcraft" element={<Stalcraft />} />
         <Route path="/games/Borderlands2" element={<Borderlands2 />} />"
      </Routes>
   );
}

export default Navigation;

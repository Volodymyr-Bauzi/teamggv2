// Game Icons Utility
// Uses RAWG Video Games Database API to fetch game icons

// Get API key from environment variables
const RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

if (!RAWG_API_KEY || RAWG_API_KEY === 'YOUR_RAWG_API_KEY') {
  console.error('Missing or invalid RAWG API key. Please set REACT_APP_RAWG_API_KEY in your .env file');
}

// Cache for storing fetched game data
const gameCache = new Map();

// Mapping of game names to their RAWG API slugs for better search results
const GAME_SLUGS = {
  'League of Legends': 'league-of-legends',
  'Dota 2': 'dota-2',
  'Counter-Strike 2': 'counter-strike-2',
  'Minecraft': 'minecraft',
  'Rust': 'rust',
  'Fortnite': 'fortnite',
  'Brawl Stars': 'brawl-stars',
  'Standoff 2': 'standoff-2',
  'PUBG': 'playerunknowns-battlegrounds',
  'Apex Legends': 'apex-legends',
  'Valorant': 'valorant',
  'Genshin Impact': 'genshin-impact',
  'Grand Theft Auto V': 'grand-theft-auto-v',
  'Terraria': 'terraria',
  'Dead by Daylight': 'dead-by-daylight',
  'Rocket League': 'rocket-league',
  'Among Us': 'among-us',
  'Overwatch': 'overwatch',
  'Warframe': 'warframe',
  'Paladins': 'paladins',
  'World of Tanks': 'world-of-tanks',
  'The Forest': 'the-forest',
  'PUBG Mobile': 'pubg-mobile',
  'Garry\'s Mod': 'garrys-mod',
  'Tom Clancy\'s Rainbow Six: Siege': 'tom-clancys-rainbow-six-siege',
  'ARK: Survival Evolved': 'ark-survival-evolved',
  'DayZ': 'dayz',
  'Sea of Thieves': 'sea-of-thieves',
  'Call of Duty: Warzone': 'call-of-duty-warzone',
  'Phasmophobia': 'phasmophobia',
  'Don\'t Starve Together': 'dont-starve-together',
  'Escape from Tarkov': 'escape-from-tarkov',
  'Raft': 'raft',
  'Unturned': 'unturned',
  'Warface': 'warface',
  'Mobile Legends': 'mobile-legends-bang-bang',
  'Counter-Strike': 'counter-strike',
  'World of Tanks Blitz': 'world-of-tanks-blitz',
  '7 Days to Die': '7-days-to-die',
  'Valheim': 'valheim',
  'Call of Duty: Mobile': 'call-of-duty-mobile',
  'Far Cry 5': 'far-cry-5',
  'Scrap Mechanic': 'scrap-mechanic',
  'Euro Truck Simulator 2': 'euro-truck-simulator-2'
};

/**
 * Fetches game data from RAWG API
 * @param {string} gameName - The name of the game to search for
 * @returns {Promise<Object|null>} - Game data or null if not found
 */
async function fetchGameData(gameName) {
  console.log(`Fetching data for: ${gameName}`);
  
  // Return cached data if available
  if (gameCache.has(gameName)) {
    console.log(`Using cached data for: ${gameName}`);
    return gameCache.get(gameName);
  }

  try {
    const slug = GAME_SLUGS[gameName] || gameName.toLowerCase().replace(/[:']/g, '').replace(/\s+/g, '-');
    const url = `https://api.rawg.io/api/games/${slug}?key=${RAWG_API_KEY}`;
    console.log(`Fetching from: ${url}`);
    
    const response = await fetch(url);
    console.log(`Response status for ${gameName}:`, response.status);

    if (!response.ok) {
      console.log(`Direct fetch failed, trying search for: ${gameName}`);
      // If direct slug search fails, try searching by name
      const searchUrl = `https://api.rawg.io/api/games?search=${encodeURIComponent(gameName)}&key=${RAWG_API_KEY}`;
      console.log(`Searching with URL: ${searchUrl}`);
      
      const searchResponse = await fetch(searchUrl);
      console.log(`Search response status: ${searchResponse.status}`);
      
      if (!searchResponse.ok) {
        console.error(`Search failed for ${gameName}:`, await searchResponse.text());
        return null;
      }
      
      const searchData = await searchResponse.json();
      console.log(`Found ${searchData.count} results for ${gameName}`);
      
      if (searchData.count === 0) {
        console.log(`No results found for ${gameName}`);
        return null;
      }
      
      // Cache the first result
      console.log(`Caching data for ${gameName}`, searchData.results[0]);
      gameCache.set(gameName, searchData.results[0]);
      return searchData.results[0];
    }

    const data = await response.json();
    console.log(`Successfully fetched data for ${gameName}`, data);
    gameCache.set(gameName, data);
    return data;
  } catch (error) {
    console.error(`Error fetching data for ${gameName}:`, error);
    return null;
  }
}

/**
 * Gets the icon URL for a game
 * @param {string} gameName - The name of the game
 * @returns {Promise<string>} - URL of the game's icon
 */
async function getGameIcon(gameName) {
  // Default fallback icon
  const defaultIcon = 'https://via.placeholder.com/256x256/1e293b/94a3b8?text=GAME';
  
  if (!gameName) return defaultIcon;
  
  const gameData = await fetchGameData(gameName);
  if (!gameData) return defaultIcon;
  
  // Try to get the highest quality image available
  return (
    gameData.background_image ||
    gameData.background_image_additional ||
    (gameData.short_screenshots && gameData.short_screenshots[0]?.image) ||
    defaultIcon
  );
}

/**
 * Updates all games with their respective icons
 * @param {Array} games - Array of game objects
 * @returns {Promise<Array>} - Updated array of games with icons
 */
async function updateGamesWithIcons(games) {
  const updatedGames = [];
  
  for (const game of games) {
    const iconUrl = await getGameIcon(game.name);
    updatedGames.push({
      ...game,
      image: iconUrl
    });
  }
  
  return updatedGames;
}

export { getGameIcon, updateGamesWithIcons };

const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KiSBD9l3pte+WOGNERi0orIl5RxI19KKjiIlAgFCBO+O8btN07Hbszs708VRTkycyT5yTfAMmiEhu4BcNvIC+iGlLcHWmbYzAEo8r3cQF6AEEKwRAwM7SaOZmT0WPYWnwua3kS6BaePrFPzeUGG7FcheK2No/lC7j3QF65SeT9AlBVLdvt41ru2yytqiPGeSS4l+PirEarNEynsbgVF6Mnmmgv4N4hwqiISKDlIU5xARMDt2sYFV8rf6OxTzfGcPr80g5UR00NxbUEQhcTjSk4p5VcYX08clzM6F8rvznWGQtV3rzY9gKKzXVmLk/K0oxnGYqdehBYzLnORoOntHyUX0YBwUhHmNCItl/mvTJGOp0H4mmhLGWI21S0QlzaZCP52J/NWXm/mzwZNzqdMl8rfOSqwmCtb+B13y/1aT3XcitQTr6b327cBm+2DCOqp1Kz4+Bz4eviQyvx/+F9OokpmSBXNlb70DNhne+VxUJdzUhx9c4CNsi5bBn3gBjta+VPKtUN23kqKbezpwhaVgQQ7i+ZYTfeKram8qrAxDb3xv4T75BWxa+qhO1VQCNfbtd1mdE42VSHQFpqVXjdZnVevjJHi0LSb7fq5VwvtwcJ+eFVPLuZAdURd8KulGyfXjcQcQNVPNkn1nbiKHh56yjGrY7AkL33QIGDqKQFpFFGujtOkHsAonqHvQLTN3qBcWBuy40p6rFkEoNcd6vcmRgHT9Kb9uBFrGI0y40j4vjYvIAeyIvMw2WJ0SwqaVa0Ji5LGOASDP94m1TXdIHTjOJ5hMAQcKIkM4ooyJws/17+1oSQljDPfyOYgh7wiyw1MRjSosI98Bagiq8DTWS0icbwA14Zs4IwYQYDbiQw47Ggal2L6SOpFaW4pDDNwZCVeVnkZUVW7n/2AMFX+tBP1zXP9oAfFSXdkypPMog+xPXxEnpeVhG6a4k37g64AEPm+zWmNCJB2XVWEVh4YVTjcdcHGPowKfG9BxCuIw93eEAK1cUM1wuLPCvy6GZcqbPSgo65MCOPT5Cv+Jwkuc+ci9xnAYqD54GCpGdPkZHLQg4Kog86Oh7W7WJ+7q59eHT72s46yiVZmlObCxxvKwSEN9/U8JAALjD6YNmFXlzlVhZj8gtczjO2PHs++3FTXFdWczWikwptu46aT7gPaYHht+/rcpyhDk9SVHm5mM5AN60uz7/UMGTFfwri/jfpXQTCFEZJCYZgvLrskmuwufjrca06jrpTVUNVOz1+DOnDdA9Rp+cKboKze+AytySniZc3oXpas9i62INkF9y8Jjno+6hM9B+BgCEgURkb0jHpy/EmSGYObY78IYGhPrpFhRYH81qRp6/LM7eTmXbA7vv9wzJJuCUVwjGVeUVe54S3mvBpcJMu3BaFzoiONy9dtodYPicbHAIDIWjLE3/lEXWmUQdygUeqaj11bZpsd+0SpbeTltJgsrxs7fI6JaHrGutateM6jM36djYLmcsy0Y9JzW/zIHhfB2/rKHn/DUTvRn1Iy4/w21YlsBvRfw3ns8qZe+8Txvue/plCT5mcxrrOsegylefchjc8fTO1lGMsJfV8n5m8OT/sXvVivgP3zr55AqmfFWm3KAkqsgiBHkhgSdXvRv2R98UeSFs1z3cU0g9/A7V7DAaB+1829svDgggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Adrian",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});


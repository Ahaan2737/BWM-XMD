const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWZOqOBj9L3nVvgKyiFVdNaAsghuC69R9iBAwshoCil3+9yl6qe6HuT09PKWAnJyc5XsBWY5LZKMGDF9AQXANKWqXtCkQGAK1CkNEQBcEkEIwBBOzcp0N2SsJMQ1voi83C3K3DuI6Yo66fghnoYgXnroca84zeHRBUR0T7H8D6KVOhxDVsWtk2Fsn3psTbT+zhOnasJt9LJwkUlboHE4U/hk8WkSICc4irTihFBGY2KhZQkx+Rp+ZTQtddPT0eL7ZsXsQ9OrE4Rlr6AO+5sxLsYNauTJQkyg/o7/vBBehz5gsF7lBvCq3emxTdjuNzLynHsIw1bxzxuq3GL/TL3GUoWASoIxi2vxYd83iR/fQlA5FFKFU213lraRqjKenIzc9OEhOJmcvGav+Nv8Z8UvM9CaLJFgc5/i6nDeGsd8H7Kwq5tMtD6mm5cukaBq5ySZfiS/JR1bi/6N7Z3odSGUun24Ov15AEi1mN87rqTwsQ0cSBaLXg07lhwUX/Yx+zijVVbhb9TQPrUNq36/xxoHHNO+PYRiJYUc+Kh7qMRO8/qQPaUW+Y1naWmzbzqrfwXFSz6p1R6Gq7uko2EXL3gzfhbk+zj1OGo39CdzthHi/IfyoFvEiuSZBsSuYRqP7wkiSK2MfDhOOimfl+fVGMWomARiyjy4gKMIlJZDiPGvfcYzYBTCoXeQTRF/lBVOG9M9OYtbBii/QHvV1q19FihkJdVHO7Po8s8rDSUVub/8MuqAguY/KEgUmLmlOmhkqSxihEgz//t0FGbrRN+Pa4/psF4SYlHSdVUWSw+DD1Y+P0PfzKqNuk/mjdoEIGDKfrxGlOIvKVscqg8Q/4RqNTpCWYBjCpESPLghQjX3U4gEpiHZwseNWS3dihZenkZnVTdRSPuXZ2y+hGPLSQBw8oSCQnniBQ08yEpmn45E9BjLrC9JABF2A3zvT7vmjhWRl54uFMr9utsLltLJufund7suE78SvNrxpjwgKwJCSCnXBEfpxVXh5jLJvcK0r3qhLvSpYqtCiJH7RW5qbU7xb+V9w3zwFw5fPOTXKgxZP7E9lz/RU0AXpawRxe3NOECVhIPEixwhD9q/y17XVERbFrwzRFvZd83ZDgCjESQmGYDQxa36xNzX70rsdr4ahaJEyihTw6dFH2N/CtAnIjkvFXtbR8TiT1Vu+Zw+XcZ8hNZNUPRdfk+VB9bPzKX/+FxAwBObO2NwYzDgzUzjJrrZDRpmqF23dcZW1npFAo+pFmZ34sN+pAmag9e8dU+lt19PwBo8ZrzPz8XJOJpy/3SKLG+id2FfaZnxk5ethxtJdBYsicRMeh+zhlPKbdTk9B2KacGHKJ54b3S6B2r8JVbSRsSj6tCAkDPgQHmVFFbeiY7NWI7p23L9vxNwY2DRy3mr4OgaS9/GLXwvy8p6sEKPXaZbB1qH/8OZrxplH9wvE+3j8Q47UzQ6yclHVQu+0j4Se40NjvoWRLNuSbB1rJi8tj3N2Fs9D8Hj87oIigTTMSQqGAGYByXEAuiCBJVU+a+rhFJUUpgUYslJfEgYML7FdkDZKUbgU0o92A6V9LMsAj38AY7jZ4PkHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Zash",
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


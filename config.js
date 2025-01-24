const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOcNFBa2aqkXQERAREW9bW1sxBAx3SUBhav77FnOpMw97zs7ylALS6XT31y8gywnFJm7A5AUUJakhw92SNQUGEzCtggCXoA98yCCYAKTXMe/u1up5RsTxZi748M6YH1gr7xLJktHjED9dXPdtZj2B1z4oqnNC0G8A/cebGYfOKkSLI2RZUEvokOXmQNGn/ImIs8t9WyXcsjaaDrBDhKQkWTgrLjjFJUxM3KwhKb9H/6pYakojKTTKNnd31ItQ2pSRGglu1cyY3fKxfN/VKxiH36OfnsxlIPTkfJZs4Sg0gtmMj6iunzY0EpgI7yIMD0MrtC8f9CkJM+zrPs4YYc23dVds6zYQ9KA3GFBtGpq8HV+43nlK+YqK162tGpyG7spxwXnfI448ek+0XtakAoO6S/Y7K1TZVnNG4TFgJrfa3C19rDFtevxKfF1+ZiX+P7p76mG480MP9sZeuvYvPUO3tz6r2jlHVtPV4/NVnZP9drXex9+jP3WR49nm0lyS2rGQMQuXyrw175HGJzkdb1Z+ssJy4m1mX+hDVpW/ZXkyrGQA62uwPg/LdXo4CidlaG7QbTOLPAv5OJjVG6GuDeQFBmzb5ppt+IsxGPqSrV29eeubfnNL5LbpzSxOpnDnas7T241i3Og+mPCvfVDikFBWQkbyrHsny30A/drFqMTsTV3QNGaqeUVPHmn7Q0qOz9oaW6RyD1HIzOt97NCDOGh6+7OKnkAfFGWOMKXYXxDK8rKxMKUwxBRM/vyrDzJ8Z+++daeJfB8EpKTMy6oiyaH/aernR4hQXmXMbTKkdgtcggn38zVmjGQh7WSsMliiC6mxeoGMgkkAE4pf+8DHNUG4wwN/iwW1rs6DI42yi4zPz2LCFKWjfMmz9198CcrjYIwfkHSWHgajAXyAQcA9iBIcjzhR5mV4Bn1APkam2/NLBwOb2sv7OCufj3x1Z+lj4003kaEeUvnNhXfpcYl9MGFlhfvgDFFcFds8xtlvcDeWKAmOWM3seBPEi3At34x4TrmbZn3BfbcUTF5+1pSa+x3eYmmuT3vDAX2QviWQdDcXhiOJGw8HkiBJE378B/1x64SERfEjw6zD/RC92+FjBklCwQSo9tVN7qGTyFu7Vo7HqasopqJ0Qfg06TPs72lKowo6YXTeCfmZZicNFbeLclrzeHvdy4kbtuiW7HSP0ET/N5CufhSN46ywNbfBRnOHK8HjT3ZyUVfUyl0LXh5Xjqr04hl6hm2jFkslHi4LRyh6xdDwWk00w9ai+3ZRFPJ5FdyHJEpCNXzqTnsPy9fDGvV+KyVmILbY+M1NHFT8OjZ69nWEtW3gIg3Ps7WGAme233haC1f28pk3o1BDYbPc8vugquXEWkjrSFmF0WEc+IetEr6P4VsNJB/1S94m5OUjWgHBb22Wwc6i/zLna8q51/4XjI9+/FVxnXIpjXVd4P3rs2QIjmgi3Xnejg/xKKkNL7dEy9i5c700XPD6+lcfFAlkQV6mYAJg5pc58UEfJJAy5eegbkmKKYNpASa8JEqSIA8Hch+kjVIULoPsc76B0j0m54PXfwCah9Nv+gcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Adrian",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "25670547277",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'typing',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
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


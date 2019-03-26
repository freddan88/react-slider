const fs = require('fs')
fs.writeFileSync('./.env', `REACT_APP_API_KEY=${process.env.API_KEY}\n`)
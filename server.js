// init project
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204


app.get("/api/whoami", function (req, res) {
    res.json({
        ipaddress: req.header('x-forwarded-for'),
        language: req.header('accept-language'),
        software: req.header('user-agent')
    });
});
// Redirect all endpoints to given endpoint
app.use((req, res) => {
    res.redirect('/api/whoami');
});


// listen for requests :)
app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
});

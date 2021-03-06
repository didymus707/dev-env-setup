import express from 'express';
import path from 'path';
import open from 'open';
// import webpack from "webpack";
// import config from '../webpack.config.dev';


const app = express();
const port = 3000;
// const compiler = webpack(config);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})

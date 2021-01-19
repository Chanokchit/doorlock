const port = 9000;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const crypto = require('crypto');

const bothook = require('./bothook');
const botmenu = require('./botmenu');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/bothook', bothook);
app.use('/botmenu', botmenu());

app.get('/', (req, res, next) => {
  console.log(req);
})
app.use('/githook', (req, res, next) => {
    const payload = JSON.stringify(req.body)
    if (!payload) {
      return next('Request body empty')
    }
    const sig = req.get('X-Hub-Signature') || '';
    const hmac = crypto.createHmac('sha1', '4ac6325b5004e7b2dcc0fe758e5b7cea');
    const digest = Buffer.from('sha1=' + hmac.update(payload).digest('hex'), 'utf8');
    const checksum = Buffer.from(sig, 'utf8');
    if (checksum.length !== digest.length || !crypto.timingSafeEqual(digest, checksum)) {
    	console.log('GitHook signature mismatched ');
        return next(`Request body digest (${digest}) did not match ${sigHeaderName} (${checksum})`);
    }
    console.log('GitHook signature Matched');
    process.exit(0);
    //return next();
});


app.get('*', (req, res, next) => {
	console.log(req.body)
	res.send('bot server v1.0.0');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

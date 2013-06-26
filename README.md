## Purpose

To demonstrate simple http server with GET and POST handlers, written in nodejs

### How does it work

##### (1) Start the server

`node app.js`

##### (2) On browser go to:

`http://localhost:3000?valueof=a`

You should see that `apple` shows up in the browser.
This is because `data.json` contains key value pairs, where `apple` corresponds to `a`, `ball` corresponds to `b` etc.

Try: `http://localhost:3000?valueof=d`

Now try: `http://localhost:3000?valueof=m`
This should show `Not Found!` if nothing exists corresponding to `m`


##### (3) From a separate command prompt, execute the following command:

`
curl -XPOST 'http://localhost:3000' -d '{
  "m": "monkey"
}'
`

This is a POST http request. This intends to add `monkey` value corresponding to `m` key in `data.json`.
Verify that a new entry corresponding to `m` now exists in `data.json`.

Now try to go to `http://localhost:3000?valueof=m` on browser.
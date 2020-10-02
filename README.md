# to run a local server
`netlify dev` 
  * to call a locally running functions server (see DEPLOYMENT in /functions)
    * set REACT_APP_FUNCTIONS env var as follows: `REACT_APP_FUNCTIONS="http://localhost:36857" netlify dev`
  * More here: https://github.com/netlify/cli/blob/master/docs/netlify-dev.md

# to deploy
```
netlify build
netlify deploy
```


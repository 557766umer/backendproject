require('dotenv').config()
console.log("start working");
const express = require('express');
const app = express()
const port = process.env.PORT
const githubdata ={
  "login": "557766umer",
  "id": 139982181,
  "node_id": "U_kgDOCFf1ZQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/139982181?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/557766umer",
  "html_url": "https://github.com/557766umer",
  "followers_url": "https://api.github.com/users/557766umer/followers",
  "following_url": "https://api.github.com/users/557766umer/following{/other_user}",
  "gists_url": "https://api.github.com/users/557766umer/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/557766umer/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/557766umer/subscriptions",
  "organizations_url": "https://api.github.com/users/557766umer/orgs",
  "repos_url": "https://api.github.com/users/557766umer/repos",
  "events_url": "https://api.github.com/users/557766umer/events{/privacy}",
  "received_events_url": "https://api.github.com/users/557766umer/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Mohammad Umer",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Hi, I am a software engineering student currently pursuing my bachelor's, exploring Git Hub to improve my skills",
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-07-19T13:14:09Z",
  "updated_at": "2026-09-30T07:53:16Z"
}
app.get('/', (req, res) => {
  res.send('Hello')
})
app.get('/test',(req, res) => {
    res.send("Hi?")
})
app.get('/url',(req,res)=>{
    res.send("<h1>URL</h1>")
})
app.get('/github',(req,res)=>{
  res.json(githubdata)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
# tech-blog
a place far away from civilisation where galaxy brains live and discuss meaningless topics

## Features
* login/logout accounts, that can post threads and reply to them
* handlebars layout

## Reasoning
essentially, using what we have learnt to create a basic fullstack web app with simple authorisation and a fully functional front & back end.

## Challenges & Process
1. I had Users and Posts working quite early in the piece, but working out how to add Replies was a process that took me quite some time. Initially I tried to incorporate a reply into the `Post Model` but after some failures I decided to create an entirely seperate model for it.

2. Once I had the model it was another long journey to work out how to include this data and access it inside handlebars. I think I still struggle with it, but at its basic core I understand that the ROUTES can serialize the data and send it with `res.render()` passed in with a spread operator, eg: `...posts`. I think the route that I took was not necessarily the easiest or quickest one, and there are a few functionalities still lacking, but ultimately I think it at least meets the minimum requirements.

3. JAWSDBURL - it took me many an hour to work out why heroku wasn't accepting this as is, but after `heroku addons:create jawsdb` and adding my credit card information (which will hopefully never have to be used). But, in the end, it did deploy and here we are.

## Link to repo
[Repo](https://github.com/bendemic90/tech-blog)

## Link to deployed website
[Heroku](https://enigmatic-lowlands-66805.herokuapp.com/)
# Conversataal
sources for github.io

http://materializecss.com/getting-started.html
http://materializecss.com/templates/parallax-template/preview.html

## TODO

* only icons for social media
* Test cross browser and mobile
* Links with # do not work. Look for solution for react-router v2 on 
https://github.com/ReactTraining/react-router/issues/394 This causes a problem for links to local anchors in the header
 and footer.


# Dev

in src branch

* nvm use 6.9.4
* in \conversa
* `yarn`
* `gatsby develop`
* open http://0.0.0.0:8000/ (not localhost:8000 because of CORS)

build

* manual: `gatsby build` && `gatsby serve-build`, result in /public
* CI: .travis.yml calls `gatsby build`

# Ops

* On https://github.com/conversataal/conversataal.github.io/settings under "Custom domain" set www.conversaschool.nl
* https://travis-ci.org/conversataal/conversataal.github.io/settings enabled "Build only if .travis.yml is present", because the master branch does not contain a .travis.yml
* sources in src branch, production in master branch. No other possibility for an organization/user page.
* created a github personal access token with public_repo rights under https://github.com/settings/tokens
* set the token in https://travis-ci.org/conversataal/conversataal.github.io/settings for the key GITHUB_TOKEN. This is picked up by $GITHUB_TOKEN in .travis.yml

# Maintenance mode

To run in maintenance mode:

* In .travis.yml set
```
deploy:
  ...
  local_dir: maintenance
  #local_dir: public
```
* Push
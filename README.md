# Conversataal
sources for github.io

http://materializecss.com/getting-started.html
http://materializecss.com/templates/parallax-template/preview.html

## TODO

* menu bar bottom margin
* first deploy
* Remove jquery dependency for parallax scroll and for menu


# Dev

in src branch

* in \conversa
* `yarn`
* `gatsby develop`
* open http://localhost:8000

build

* manual: `gatsby build` && `gatsby serve-build`, result in /public
* CI: .travis.yml calls `tsby build`

# Ops

* On https://github.com/conversataal/conversataal.github.io/settings under "Custom domain" set conversa.mdworld.nl
* https://travis-ci.org/conversataal/conversataal.github.io/settings enabled "Build only if .travis.yml is present", because the master branch does not contain a .travis.yml
* sources in src branch, production in master branch. No other possibility for an organization/user page.
* created a github personal access token with public_repo rights under https://github.com/settings/tokens
* set the token in https://travis-ci.org/conversataal/conversataal.github.io/settings for the key GITHUB_TOKEN. This is picked up by $GITHUB_TOKEN in .travis.yml
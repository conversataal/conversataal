# conversataal
sources for github.io

# dev

in src branch

* `npm i`
* `hexo server`
* open http://localhost:4000

build

* manual: `hexo generate`
* CI: .travis.yml calls `hexo generate`

# ops

* On https://github.com/conversataal/conversataal.github.io/settings under "Custom domain" set conversa.mdworld.nl
* https://travis-ci.org/conversataal/conversataal.github.io/settings enabled "Build only if .travis.yml is present", because the master branch does not contain a .travis.yml
* sources in src branch, production in master branch. No other possibility for an organization/user page.
* created a github personal access token with public_repo rights under https://github.com/settings/tokens
* set the token in https://travis-ci.org/conversataal/conversataal.github.io/settings for the key GITHUB_TOKEN. This is picked up by $GITHUB_TOKEN in .travis.yml
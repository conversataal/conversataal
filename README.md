# conversataal
sources for github.io

# ops

* sources in src branch, production in master branch. No other possibility for an organization/user page.
* created a github personal access token with public_repo rights under https://github.com/settings/tokens
* set the token in https://travis-ci.org/conversataal/conversataal.github.io/settings for the key GITHUB_TOKEN. This is picked up by $GITHUB_TOKEN in .travis.yml
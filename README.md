# Conversataal
sources for github.io

http://materializecss.com/getting-started.html
http://materializecss.com/templates/parallax-template/preview.html

## TODO

* design: http://www.acmethemes.com/demo/?theme=education-base
* palettes
    * purple http://paletton.com/palette.php?uid=13Z0u0klhjZbstNgNohpZf3vr9S
    * red http://paletton.com/palette.php?uid=1000u0kpxmlgGuvlxq1tsibBicS

# Dev

Installation:

* nvm use 7.10.0
* npm i
* elm-package install (requires npm i -g elm@0.16.0)

in src branch

* run `python3 crawl.py`
* run `http-server public/`
* open http://localhost:8000

build

* manual: `python3 crawl.py`, result in /public
* CI: ???

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
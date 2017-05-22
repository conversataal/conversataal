
elm make _Renderer.elm --output=_main.js
echo "var fs = require('fs');" >> _main.js
echo "var elm = Elm.worker(Elm.Renderer);" >> _main.js

echo "fs.writeFile('public/index.html', elm.ports['index']);" >> _main.js


echo "fs.writeFile('public/blog/index.html', elm.ports['blogindex']);" >> _main.js

node _main.js


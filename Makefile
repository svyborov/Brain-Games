install:
	npm install
start-games:
	npx babel-node -- src/bin/brain-games.js
start-even:
	npx babel-node -- src/bin/brain-even.js
start-calc:
	npx babel-node -- src/bin/brain-calc.js

publish:
	npm publish
lint:
	npx eslint .

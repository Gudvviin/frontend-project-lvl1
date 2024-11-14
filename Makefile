install:
	npm ci
	
brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-clac:
	node bin/brain-clac.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test
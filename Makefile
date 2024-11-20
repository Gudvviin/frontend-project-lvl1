install:
	npm ci
	
brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-clac:
	node bin/brain-clac.js
brain-gcd:
    node bin/brain-gcd.js

brain-progression:
    node /bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test
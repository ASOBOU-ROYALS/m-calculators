.PHONY: run minimize publish
run: publish
	cd docs && python3 -m http.server

node_modules: package.json
	npm install

minimize: node_modules
	./node_modules/.bin/uglifyjs src/js/washing_ui.js --compress > docs/js/washing_ui.min.js
	./node_modules/.bin/uglifyjs src/js/washing.mjs --compress > docs/js/washing.min.mjs

publish: minimize
	cp src/*.html docs/
	cp src/css/*.css docs/css/

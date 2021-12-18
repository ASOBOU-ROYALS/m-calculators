.PHONY: run minimize publish
run: publish
	cd docs && python3 -m http.server

minimize:
	@echo "Go to https://minify-js.com/"


publish:
	cp src/*.html docs/
	cp src/css/*.css docs/css/
	cp src/js/*.min.mjs docs/js/
	cp src/js/*.min.js docs/js/

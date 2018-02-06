NPM_ROOT = node_modules
NPM_BIN = $(NPM_ROOT)/.bin
CLIENT_ENTRY = ClientApplication.js
CLIENT_SOURCE = client/$(CLIENT_ENTRY)
DIST_CLIENT = dist/$(CLIENT_ENTRY)
BROWSERIFY_PARAMS = $(CLIENT_SOURCE) -t babelify --outfile $(DIST_CLIENT) --debug --verbose
TOOLS = tools

all: $(NPM_ROOT) $(DIST_CLIENT)

server: $(NPM_ROOT) $(DIST_CLIENT)
	@node server/index.js

$(NPM_ROOT):
	@npm install

static: $(NPM_ROOT)
	@mkdir -p dist
	@$(NPM_BIN)/browserify $(BROWSERIFY_PARAMS)

$(DIST_CLIENT): $(NPM_ROOT)
	@mkdir -p dist
	@$(NPM_BIN)/browserify $(BROWSERIFY_PARAMS)

watchify: $(NPM_ROOT)
	@mkdir -p dist
	@$(NPM_BIN)/watchify $(BROWSERIFY_PARAMS)

lint: $(NPM_ROOT)
	@$(NPM_BIN)/eslint .

test:
	@$(NPM_BIN)/jest --config=$(TOOLS)/jest-config.json

tdd:
	@node $(TOOLS)/tdd-watcher.js

clean:
	@rm -rf node_modules
	@rm -rf dist

.PHONY: all static server lint test tdd clean

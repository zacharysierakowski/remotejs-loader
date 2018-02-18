.PHONY: all build dependencies webpack

all: build

build: dependencies webpack

dependencies:
	rm -rf node_modules
	yarn

webpack:
	yarn build
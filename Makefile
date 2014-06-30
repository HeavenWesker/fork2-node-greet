compile:
	coffee --compile --output lib src
package: test
	npm pack
test: compile
	npm test
foo: bar
	echo foo
bar:
	echo bar
.PHONY:compile

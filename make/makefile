#######################################################################
##                     Copyright (C) 2018 wystan
##
##       filename: makefile
##    description: 
##        created: 2018-09-12 23:03:15
##         author: wystan
## 
#######################################################################

######################################
# utils
######################################
define gen-all-targets
$(foreach b,$2,\
	$(shell echo $(1).$(b)))
endef
define gen-all-stages
$(foreach s,$1,\
	$(shell echo $(s).$(2)))
endef

modules      := signal stream
stages       := build package lint deploy test release
all_builds   := $(call gen-all-targets,build,$(modules))
all_packages := $(call gen-all-targets,package,$(modules))
all_lint     := $(call gen-all-targets,lint,$(modules))
all_deploy   := $(call gen-all-targets,deploy,$(modules))
all_test     := $(call gen-all-targets,test,$(modules))
all_release  := $(call gen-all-targets,release,$(modules))
all_stages   := $(call gen-all-stages,$(stages),all)

.PHONY: all pipeline help 

all: build.all

pipeline: $(all_stages)

build.all:$(all_builds)
package.all:$(all_packages)
lint.all:$(all_lint)
deploy.all:$(all_deploy)
test.all:$(all_test)
release.all:$(all_release)

build.signal:
	@echo $@
build.stream:
	@echo $@

package.signal:
	@echo $@
package.stream:
	@echo $@

lint.signal:
	@echo $@
lint.stream:
	@echo $@

deploy.signal:
	@echo $@
deploy.stream:
	@echo $@

test.signal:
	@echo $@
test.stream:
	@echo $@

release.signal:
	@echo $@
release.stream:
	@echo $@

print.%:
	@echo "$($*)"

help:
	@echo "help"

#######################################################################

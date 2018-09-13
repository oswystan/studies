#######################################################################
##                     Copyright (C) 2018 wystan
##
##       filename: makefile
##    description: best practices of make stages
##                 	  - lint
##                 	  - build
##                 	  - pack
##                 	  - deploy
##                 	  - test
##                  you can use these stages to form a release pipeline
##        created: 2018-09-12 23:03:15
##         author: wystan
##
#######################################################################

major := 0
minor := 1
patch := 0
version := v$(major).$(minor).$(patch)

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
define print-all-vars
$(foreach v, $(filter $(1)%,$(.VARIABLES)), $(info $(v) = $($(v))))
endef

modules      := signal stream
stages       := lint build pack deploy test
all_builds   := $(call gen-all-targets,build,$(modules))
all_packs    := $(call gen-all-targets,pack,$(modules))
all_lint     := $(call gen-all-targets,lint,$(modules))
all_deploy   := $(call gen-all-targets,deploy,$(modules))
all_test     := $(call gen-all-targets,test,$(modules))
all_stages   := $(call gen-all-stages,$(stages),all)

.PHONY: all pipeline help

all: build.all

pipeline: $(all_stages)

build.all:$(all_builds)
pack.all:$(all_packs)
lint.all:$(all_lint)
deploy.all:$(all_deploy)
test.all:$(all_test)

build.signal:
	@echo $@
build.stream:
	@echo $@

pack.signal: pack.signal.bz2
pack.stream: pack.stream.rpm

pack.signal.bz2:
	@echo $@
pack.stream.rpm:
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

print.%:
	$(call print-all-vars,$*)
	@true

help:
	@echo "\n\
	  make help                               - show this \n\
	  make pipeline                           - form a pipeline consist of build,pack,lint,deploy,test \n\
	  make print.xx                           - show variables xx values \n\
	  make build.[all|xx]                     - compile all modules or xx module only \n\
	  make pack.[all|xx][.bz2|.rpm|.deb|.xx]  - pack all modules or xx module only \n\
	  make lint.[all|xx]                      - lint all modules or xx module only \n\
	  make deploy.[all|xx]                    - deploy all modules or xx module only \n\
	  make test.[all|xx]                      - test all modules or xx module only \n\
	"
#######################################################################

default: debug

BUILDDIR := build/

OBJECT_FILES := \
	$(BUILDDIR)startup.o \
	$(BUILDDIR)controllers/home.o

MODULE_NAME := starter_pwa

$(BUILDDIR):
	mkdir -p $(BUILDDIR)controllers/

PUBLISHED_ASSETS := public views settings.json
publish: publish-with-rsync

LOCALDIR ?= $(HOME)/.local/
include $(LOCALDIR)/share/web/module.mk

# Also bundle the SPA
debug: spa_bundle
release: spa_bundle


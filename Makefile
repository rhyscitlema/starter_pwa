default: debug

BUILDDIR := build/

OBJECT_FILES := \
	$(BUILDDIR)startup.o \
	$(BUILDDIR)controllers/home.o

SITE_NAME := starter_pwa

$(BUILDDIR):
	mkdir -p $(BUILDDIR)controllers/

PUBLISHED_ASSETS := public views .htaccess settings.json
publish: publish-with-rsync

include ../libweb/module.mk

# Also compile the SPA bundle
debug: spa_bundle
release: spa_bundle


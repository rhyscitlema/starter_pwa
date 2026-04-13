default: debug

BUILDDIR := build/

OBJECT_FILES := \
	$(BUILDDIR)startup.o \
	$(BUILDDIR)controllers/home.o

SITE_NAME := starter_pwa

$(BUILDDIR):
	mkdir -p $(BUILDDIR)controllers/

include ../libweb/module.mk

$(PUB_FILE): $(VALID)
	tar -czhf $(PUB_FILE) $(SO_FILE) --exclude=.git public views .htaccess settings.json
	scp $(PUB_FILE) vps:

# Also compile the SPA bundle
debug: spa_bundle
release: spa_bundle


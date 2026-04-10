importScripts("/spart/sw/caching.js");

const appAssets = [
	"/app",
	"/favicon.ico",
	"/icons/logo-192x192.png",
	"/icons/logo-512x512.png",
	"/lib/bootstrap/bootstrap.min.css",
	"/lib/bootstrap/bootstrap.bundle.min.js",
	"/lib/bootstrap/bootstrap-icons.min.css",
	"/lib/bootstrap/fonts/bootstrap-icons.woff",
	"/lib/bootstrap/fonts/bootstrap-icons.woff2",
	"/spart/css/spart.css",
	"/spart/js/core.js",
	"/spart/js/fetch.js",
	"/spart/js/pages.js",
	"/spart/js/i18n.js",
	"/spart/js/component.js",
	"/spart/js/navigator.js",
	"/css/app.css",
	"/js/page/home.js",
	"/js/util/store.js",
	"/js/SVGs.js",
	"/i18n/fr.json",
	"/i18n/en.json"
];

setupCaching(null, appAssets, null);

/* Import all your CSS here. Note that the order matters. */
import "spart/css/spart.css";
import "spart/css/component.css";
import "./css/main.css";

import { initializeApp } from "./page/home.js";

initializeApp({ isProgressiveWebApp: true }).then(() => {
	document.getElementById("app-loading-indicator").hidden = true;

	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register("/sw.js")
			.then(() => console.debug("Ready!"))
			.catch(err => console.error("SW registration failed:", err));
	}
});

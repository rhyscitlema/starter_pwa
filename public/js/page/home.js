import openPage from "spart/pages";
import { setup, toast } from "spart/core";
import { setupPageHeaderAndContent } from "spart/component";
import { currentLanguage, changeLanguage } from "spart/i18n";

function openHomePage() {
	const page = openPage("home", { level: 1 });

	if (page.childElementCount)
		return; // if already set up, do not set up again

	const menuOptions = [{
		text: "Hello Cameroon!",
		events: { click: () => toast("Hello Cameroon!") }
	}];

	const titleElem = { tag: "span", html: document.title };

	const content = [{
		tag: "select",
		props: { value: currentLanguage ?? "" },
		events: { "change": (e) => changeLanguage(e.target.value) },
		content: [
			{ value: "en", html: "English" },
			{ value: "fr", html: "Français" }
		]
	}, {
		tag: "button",
		class: "btn btn-primary",
		text: "Hello World!",
		events: { click: () => toast("Hello World!") }
	}];

	setupPageHeaderAndContent(page, false, titleElem, undefined, menuOptions, content);
}

// Initialize the chat application
export async function initializeApp(config) {
	await setup(config);
	openHomePage();
}

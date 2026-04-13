import openPage from "spart/js/pages.js";
import { setup, toast, updateElement } from "spart/js/core.js";
import { getPageHeader } from "spart/js/component.js";
import { currentLanguage, changeLanguage } from "spart/js/i18n.js";

function openHomePage() {
	const page = openPage("home", { level: 1 });

	if (page.childElementCount)
		return; // if already set up, do not set up again

	const menuOptions = [{
		text: "Hello Cameroon!",
		events: { click: () => toast("Hello Cameroon!") }
	}];

	const titleElem = { tag: "span", html: document.title };
	const headerDiv = getPageHeader(false, titleElem, undefined, menuOptions);

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

	const contentDiv = { tag: "div", class: "page-content", content };
	updateElement(page, { content: [headerDiv, contentDiv] });
}

// Initialize the chat application
export async function initializeApp(config) {
	await setup(config);
	openHomePage();
}

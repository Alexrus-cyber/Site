let page;

window.onload = e => {
	page = window.location.hash;

	LoadPage(page);

	document.querySelectorAll(".topnav, .bottomnav").forEach(menu => {
			menu.addEventListener("click", e => {
			let target = e.target.closest("a");
			if(!target)return;

			if(target.classList.contains("menu-change-button")){
				document.querySelectorAll(".topnav, .bottomnav").forEach(menu => {
					menu.classList.toggle("show");
				})
				return;
			}

			page = target.getAttribute("href");
			if(page == null)return;
			LoadPage(page)
		})
	})


}

const LoadPage = () => {
	if(page == "")page = "#home";
	document.querySelector("#root").innerHTML = "";
	document.querySelector("#root").append(document.querySelector(page).content.cloneNode(true));
	document.querySelectorAll(".topnav a.selected, .bottomnav a.selected").forEach(item => {
		item.classList.remove("selected");
	});
	document.querySelectorAll(`[href='${page}']`).forEach(item => {
		item.classList.add("selected");
	});
}
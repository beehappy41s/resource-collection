const links = document.querySelectorAll("#menuToggle  a");
const checkbox = document.querySelector("#menuToggle input");

for (const link of links) {
	link.onclick = handleClick;
}

function handleClick() {
	checkbox.checked = false;
}

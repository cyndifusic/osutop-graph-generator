var jsons = [];

async function getData() {
	var resp = await fetch("https://osu.ppy.sh/p/api/get_user?k=insertkeyherelol&u=mrekk");
	jsons.push(await resp.json());
}

getData();
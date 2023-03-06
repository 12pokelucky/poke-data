const fs = require("fs");

const list = fs.readdirSync("../../img_96");
const cache = {};

list.forEach((name) => {
	if (name.includes("_rf")) {
		const [number, rf] = name.split("_");
		const _rf = rf.replace(".png", "");
		let id = 2;
		if (cache[number] && !name.includes("_f")) {
			id = cache[number] + 1;
			cache[number] = id;
		} else {
			cache[number] = 2;
		}

		const newName = name.replace(_rf, id);
		console.log(newName);
		fs.renameSync(`../../img_96/${name}`, `../../img_96/${newName}`);
	}
});

const role = 'host';
const person = 'Tom Holland';

const team = {
	[role]: person
}

function addProp(obj, k, v) {
	return {
		...obj,
		[k]: v
	}
}

const res = addProp(team, 'happy', ':)');
console.log(res)


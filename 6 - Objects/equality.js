let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

//They 'look' the same, but refer to different arrays
nums === mystery; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true

const user = {
	username: 'CherryGarcia8',
	email: 'garcia@gmail.com',
	notifications: ['message', 'alert']
};

// Não funciona [] === [] false
if (user.notifications === []) {
	console.log('NO NEW NOTIFICATIONS!');
}
// Funciona
if (!user.notifications.length) {
	console.log('NO NEW NOTIFICATIONS!');
}

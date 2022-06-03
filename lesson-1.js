
var name = 'John';
let admin = name;
console.log(admin);
console.log('\n');
let login;
let password;

console.log('Begin');
console.log('Who is there?');
if (login == 'Admin') {
	console.log('Password?');
	if (password == 'TheMaster') {
		console.log('Welcome');
	} else if (password == 'Other') {
		console.log('Wrong password');
	} else {
		console.log('Canceled');
	}
} else if (login == 'Other') {
	console.log('I dont know you');
} else {
	console.log('Canceled');
}
console.log('\n');

console.log('Begin');
console.log('Who is there?');
switch (login) {
	case 'Admin': {
		console.log('Password?');
		switch (password) {
			case 'TheMaster': {
				console.log('Welcome');
				break;
			}
			case 'Other': {
				console.log('Wrong password');
				break;
			}
			default: {
				console.log('Canceled');
				break;
			}
		}
	}
	case 'Other': {
		console.log('I dont know you');
		break;
	}
	default: {
		console.log('Canceled');
		break;
	}
}



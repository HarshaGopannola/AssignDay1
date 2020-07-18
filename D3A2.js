console.log('This is Second Answer');

user =  prompt('Write your platform and Its version');

platform = user.slice(0,8);
version = user.slice(8);

console.log('The OS name is' +platform + 'and Version is' +version);
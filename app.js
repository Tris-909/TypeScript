console.log('Run.....!');
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
})(Role || (Role = {}));
var person = {
    name: 'Tri',
    age: 21,
    hobbies: ['Coding'],
    role: Role.ADMIN
};
if (person.role = Role.ADMIN) {
    console.log('yea....');
}

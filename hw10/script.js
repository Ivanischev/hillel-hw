function structureUserInfo(name) {
    return function(role) {
        return {
            role: `${role}`,
            name: `${name}`,
        }
    }
}

let userInfo = structureUserInfo("Ivan")("Admin");

console.log(userInfo);

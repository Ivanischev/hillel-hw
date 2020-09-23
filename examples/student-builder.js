//--------ООП-----------------
// Basic User
function User(config) {
    this.name = config.name;
    this.age = config.age;
    this._password = config.password;

    // инкапсуляции - password закрыт
    let password = config.password;
    this.setPassword = function(newPassword) {
        password = newPassword;
    }
    this.getPassword = function(newPassword) {
        throw('access to password is locked');
    }
    // может быть закрытый метод
    // function private() {

    // }
}

// Admin
function Admin(config) {
    User.call(this, config);
    this.role = config.role;
}

function Manager(config) {
    User.call(this, config);
    this.role = config.role || 'manager';
    this.edit = config.edit;
}

User.createNewUser = function () {
    return new User({
        name: '',
        age: ''
    });
};

User.prototype = Object.assign(User.prototype, {
    work() {
        console.log('working');
    },
    cabinet: true,
    // ...
})

// наследование для Admin
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype = Object.assign(Admin.prototype, {
    checkUserInfo() {
        console.log('info checked');
    },
    // override
    work() {
        console.log('admin is working');
    },
});

// наследование для Manager
Manager.prototype = Object.create(User.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype = Object.assign(Manager.prototype, {
    editInfo() {
        console.log('edit checked');
    }
});

let user = new User({
    name: 'John',
    age: 40,
    password: 'pass'
});

let admin = new Admin({
    role: 'admin',
    name: 'Bob',
    age: 20
});

let m = new Manager({
    role: 'admin',
    name: 'David',
    age: 25,
    edit: true
});

admin.work();
user.work();
m.work();

user.setPassword('test');
// user.getPassword();

let emptyUser = User.createNewUser();
console.log(user, admin);

//-----------Builder-----------------

function Burger(size) {
    this.size = size;
}

Burger.prototype = Object.assign(Burger.prototype, {
    addPapperoni() {
        this.papperoni = true;
        return this;
    },
    addLettuce() {
        this.lettuce = true;
        return this;
    },
    addCheeze() {
        this.cheeze = true;
        return this;
    },
    addTomato() {
        this.tomato = true;
        return this;
    },
    build() {
        return new Burger(5)
    }
});

const b = new Burger(5);
b.addPapperoni().addCheeze().addLettuce();
console.log(b);
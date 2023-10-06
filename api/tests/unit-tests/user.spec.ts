import User from '../src/domain/entities/User';

test('should create a new user', () => {

    const user = new User("", 'test@gmail.com', 'test', 'test123');

    const newUser = User.createUser('test@gmail.com', 'test', 'test123');

    expect(newUser.getEmail).toStrictEqual(user.getEmail);
    expect(newUser.getName).toStrictEqual(user.getName);
});


test('should throw an error if email is invalid', () => {

    const createUserWithInvalidEmail = () => {
        User.createUser('teste@gmail.com', 'John Doe', 'password');
    };

    expect(createUserWithInvalidEmail).toThrow('Invalid email');

});

test('should throw an error if name is invalid', () => {

    const createUserWithoutName = () => {
        User.createUser('test@gmail.com', '', 'password');
    };

    expect(createUserWithoutName).toThrow('Você deve inserir um nome!');

    const createUserWithInvalidName = () => {
        User.createUser('test@gmail.com', 'an', 'password');
    };

    expect(createUserWithInvalidName).toThrow('O nome deve possuir no mínimo 3 caracteres!');

});


test('should update a user email', () => {

    const oldEmail = 'test@gmail.com';
    const newEmail = 'newemail@gmail.com';

    const user = User.createUser(oldEmail, 'test', 'test123');

    expect(user.getEmail).toStrictEqual(oldEmail);

    user.updateEmail(newEmail);

    expect(user.getEmail).toStrictEqual(newEmail);
});
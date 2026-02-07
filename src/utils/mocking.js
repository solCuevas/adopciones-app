import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salts);
};

export const generateMockPets = (quantity) => {
    const pets = [];

    for (let i = 0; i < quantity; i++) {
        pets.push({
            name: `Pet${i + 1}`,
            specie: i % 2 === 0 ? "dog" : "cat",
            birthDate: "2020-01-01",
            adopted: false,
            owner: null,
            image: ""
        });
    }

    return pets;
};

export const generateMockUsers = (quantity) => {
    const users = [];

    for (let i = 0; i < quantity; i++) {
        users.push({
            first_name: `User${i + 1}`,
            last_name: `Test${i + 1}`,
            email: `user${i + 1}@test.com`,
            password: "coder123",
            role: i % 2 === 0 ? "user" : "admin",
            pets: []
        });
    }

    return users;
};
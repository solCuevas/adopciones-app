import { Router } from 'express';
import { generateMockPets, generateMockUsers } from '../utils/mocking.js';
import { usersService, petsService } from '../services/index.js';

const router = Router();


router.get('/mockingpets', (req, res) => {
    const pets = generateMockPets(50);
    res.send({ status: "success", payload: pets });
});


router.get('/mockingusers', (req, res) => {
    const users = generateMockUsers(50);
    res.send({ status: "success", payload: users });
});


router.post('/generateData', async (req, res) => {
    const { users, pets } = req.body;

    if (!users || !pets) {
        return res.status(400).send({
            status: "error",
            error: "Se requieren parámetros users y pets"
        });
    }

    const mockUsers = generateMockUsers(users);
    const mockPets = generateMockPets(pets);

    await usersService.createMany(mockUsers);
    await petsService.createMany(mockPets);

    res.send({
        status: "success",
        message: `Se insertaron ${users} usuarios y ${pets} mascotas`
    });
});

export default router;
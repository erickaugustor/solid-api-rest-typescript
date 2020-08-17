import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { getUserController } from "./useCases/GetUser";

const router = Router();

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

router.get('/users/:email', (request, response) => {
  return getUserController.handle(request, response);
});

export { router }
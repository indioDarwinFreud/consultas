import { UserController } from "../controllers/UserController";


export class UserFunction{
    
    createUserController = new UserController();
    searchUserController = new UserController();
    updateUserController = new UserController();
    deleteUserController = new UserController();
    listUsersController = new UserController();
    getUserDataController = new UserController();
}


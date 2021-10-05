import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";


interface IUser {
  id?: string
  username: string;
  email: string;
  telefono: string;
  ciudad: string;
  estado: string;
}
class UserService{
  async create({ username, email, telefono, ciudad, estado }: IUser) {
    if (!username || !email || !telefono || !ciudad || !estado) {
      throw new Error("Por favor rellene todos los campos");
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const usernameAlreadyExists = await usersRepository.findOne({ username });

    if (usernameAlreadyExists) {
      throw new Error("Username ya esta registrado");
    }

    const emailAlreadyExists = await usersRepository.findOne({ email });

    if (emailAlreadyExists) {
      throw new Error("El Email ya esta registrado");
    }

    const user = usersRepository.create({ username, email, telefono, ciudad, estado });

    await usersRepository.save(user);

    return user;

  }
  async delete(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("id = :id", { id })
      .execute();

    return user;

  }
  async getData(id: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne(id);

    return user;
  }
  async list() {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    return users;
  }
  async search(search: string) {
    if (!search) {
      throw new Error("Por favor complete el campo de búsqueda");
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository
      .createQueryBuilder()
      .where("username like :search", { search: `%${search}%` })
      .orWhere("email like :search", { search: `%${search}%` })
      .orWhere("telefono like :search", { search: `%${search}%` })
      .orWhere("ciudad like :search", { search: `%${search}%` })
      .orWhere("estado like :search", { search: `%${search}%` })
      .getMany();

    return user;

  }

  async update({ id, username, email, telefono, ciudad, estado }: IUser) {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository
      .createQueryBuilder()
      .update(User)
      .set({ username, email, telefono, ciudad, estado })
      .where("id = :id", { id })
      .execute();

    return user;

  }

}


export { UserService };

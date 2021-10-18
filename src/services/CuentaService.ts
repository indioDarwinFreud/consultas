import { getCustomRepository } from "typeorm";
import { CuentasRepository } from "../repositories/CuentasRepository";
import { Cuenta } from "../entities/Cuenta";


interface ICuenta {
  id?: string
  username: string;
  email?: string;
  contraseña: number;

}
class CuentaService{
  async create({ username, email, contraseña}: ICuenta) {
    if (!username || !email || !contraseña) {
      throw new Error("Por favor rellene todos los campos");
    }

    const cuentasRepository = getCustomRepository(CuentasRepository);

    const usernameAlreadyExists = await cuentasRepository.findOne({ username });

    if (usernameAlreadyExists) {
      throw new Error("Username ya esta registrado");
    }

    const emailAlreadyExists = await cuentasRepository.findOne({ email });

    if (emailAlreadyExists) {
      throw new Error("El Email ya esta registrado");
    }

    const user = cuentasRepository.create({ username, email, contraseña});

    await cuentasRepository.save(user);

    return user;

  }
  async delete(id: string) {
    const cuentaRepository = getCustomRepository(CuentasRepository);

    const user = await cuentaRepository
      .createQueryBuilder()
      .delete()
      .from(Cuenta)
      .where("id = :id", { id })
      .execute();

    return user;

  }
  async getData(id: string) {
    const cuentasRepository = getCustomRepository(CuentasRepository);

    const user = await cuentasRepository.findOne(id);

    return user;
  }


  async update({ id,contraseña}: ICuenta) {
    const cuentasRepository = getCustomRepository(CuentasRepository);

    const user = await cuentasRepository
      .createQueryBuilder()
      .update(Cuenta)
      .set({ contraseña})
      .where("id = :id", { id })
      .execute();

    return user;

  }

  async autentication({ username, contraseña}: ICuenta) {
    if (!username || !contraseña) {
      throw new Error("Por favor rellene todos los campos");
    }

    const cuentasRepository = getCustomRepository(CuentasRepository);

    const cuentaAlreadyExists = await cuentasRepository.findOne({ username, contraseña });

    if (cuentaAlreadyExists) {
      return true
    }
    else{
      throw new Error("Usuario o Contraseña incorrecto");
    }  
    

  }

}


export { CuentaService };

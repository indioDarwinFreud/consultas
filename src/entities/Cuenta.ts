import { Column, Entity, PrimaryColumn  } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("cuentas")
class Cuenta {

  @PrimaryColumn()
  id?: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  contraseña: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Cuenta };
import { Column, Entity, PrimaryColumn, ManyToOne, ManyToMany, OneToMany} from "typeorm";
import { v4 as uuid } from "uuid";
import { Producto } from "./Producto";

@Entity("categorias")
class Categoria {

  @PrimaryColumn()
  id?: string;

  @Column()
  nombre: string;

  @ManyToOne( () => Producto, producto => producto.categorias)
  
  productos: Producto;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Categoria };
import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Categoria } from "./Categoria";

@Entity("productos")
class Producto {

  @PrimaryColumn()
  id?: string;

  @Column()
  nombre: string;

  @Column()
  precio: string;

  @ManyToOne(() => Categoria,(categoria) => categoria.productos)
  
  @JoinColumn({name:'idCategoria'})
  categorias: Categoria;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Producto };
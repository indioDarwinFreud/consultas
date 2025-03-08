import { getCustomRepository } from "typeorm";
import { Producto } from "../entities/Producto";
import { CategoriasRepository } from "../repositories/CategoriaRepository";
import { ProductosRepository } from "../repositories/ProductosRepository";



interface IProducto {
  id?: string
  nombre: string;
  precio: number;
  categorias: string;
  cantidad: number;
  tipo:string;
}


class ProductoServices {
  static create: any;
  async create({ nombre, precio, categorias, cantidad }: IProducto) {
    if (!nombre || !precio || !categorias || !cantidad) {
      throw new Error("Por favor rellene todos los campos");
    }


    const productosRepository = getCustomRepository(ProductosRepository);
    const categoriasRepository = getCustomRepository(CategoriasRepository);

    const idproductoAlreadyExists = await productosRepository.findOne({
      where: {
        nombre
      }
    });

    if (idproductoAlreadyExists) {
      const productoActualizado = Number(idproductoAlreadyExists.cantidad) + Number(cantidad);
      const productoPrecio = Number(idproductoAlreadyExists.precio) + Number(precio);

      await productosRepository.update(idproductoAlreadyExists.id, {
        cantidad: productoActualizado,
        precio: productoPrecio,
      })

      throw new Error (`El producto ${idproductoAlreadyExists.nombre} ya existe. Se añadieron ${cantidad} unidades al stock`)
      //throw new Error("producto ya esta registrado");
    } 



    const categoria = await categoriasRepository.findOne({ nombre: categorias })

    console.log(categoria)

    const producto = new Producto();
    producto.nombre = nombre
    producto.precio = precio
    producto.tipo = categoria.nombre
    producto.cantidad = cantidad
    
    producto.categorias = categoria
    await productosRepository.save(producto);

    return producto


  }

  async delete(id: string) {
    const productosRepository = getCustomRepository(ProductosRepository);

    const producto = await productosRepository
      .createQueryBuilder()
      .delete()
      .from(Producto)
      .where("id = :id", { id })
      .execute();

    return producto;


  }

  async getData(id: string) {
    const productosRepository = getCustomRepository(ProductosRepository);

    const producto = await productosRepository.findOne(id);

    return producto;
  }

  async list() {
    const productoRepository = getCustomRepository(ProductosRepository);

    const productos = await productoRepository.find()

    return productos;
  }


  async search(search: string) {
    if (!search) {
      throw new Error("Por favor complete el campo de búsqueda");
    }

    const productosRepository = getCustomRepository(ProductosRepository);

    const producto = await productosRepository
      .createQueryBuilder()
      .where("nombre like :search", { search: `%${search}%` })
      .orWhere("precio like :search", { search: `%${search}%` })
      .orWhere("tipo like :search", { search: `%${search}%` })
      .orWhere("cantidad like :search", { search: `%${search}%` })
      .getMany();

    return producto;

  }

  async update({ id, nombre, precio, cantidad, categorias }: IProducto) {
    const productosRepository = getCustomRepository(ProductosRepository);
    const categoriasRepository = getCustomRepository(CategoriasRepository);

    const categoria = await categoriasRepository.findOne({ nombre: categorias })

    const producto = await productosRepository
      .createQueryBuilder()
      .update(Producto)
      .set({ nombre, precio, tipo: categorias, cantidad, categorias: categoria })
      .where("id = :id", { id })
      .execute();

    return producto;

  }
}




export { ProductoServices };

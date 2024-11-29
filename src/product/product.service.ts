import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private ProductRepository: Repository<Product>,
  ) {}
  async createProduct(
    Type: string,
    ProductName: string,
    Price: number,
  ): Promise<Product> {
    const newProduct = this.ProductRepository.create({
      Type,
      ProductName,
      Price,
    });
    return this.ProductRepository.save(newProduct);
  }
  async getAllProduct(): Promise<Product[]> {
    return this.ProductRepository.find();
  }
  async getProductById(id : number): Promise<Product> {
    return this.ProductRepository.findOne({
      where: { id },
    });
  }
}

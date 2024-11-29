import { Controller, Get, Post, Body } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './Product.service';
@Controller('product')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}

  @Post()
  async createProduct(
    @Body('Type') Type: string,
    @Body('ProductName') ProductName: string,
    @Body('Price') Price: number,
  ): Promise<Product> {
    return this.ProductService.createProduct(Type, ProductName, Price);
  }

  @Get()
  async getAllProduct(): Promise<Product[]> {
    return this.ProductService.getAllProduct();
  }

  @Get(':id')
  async getProductById(@Body('id') id: number):Promise<Product>{
       return this.ProductService.getProductById(id);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';
import { Product } from './product/product.entity';
import { ProductController } from './product/Product.controller';
import { ProductService } from './product/Product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: 'Admin',
      database: 'dummmy_db',
      entities: [User,Product],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User,Product]),
  ],
  controllers: [UserController,ProductController],  
  providers: [UserService,ProductService],
})
export class AppModule {}

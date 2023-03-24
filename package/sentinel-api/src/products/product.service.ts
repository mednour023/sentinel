import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(title: string, desc: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description: desc,
      price,
    });

    const result = await newProduct.save();
    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map((prod) => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
    }));
  }

  async getSingleProduct(productId: string) {
    const product = await this.findProduct(productId);
    return product ;
  }

  updateProduct(productId: string, title: string, desc: string, price: number) {
    // const [product, index] = this.findProduct(productId);
    // const updatedProduct = { ...product };
    // if (title) {
    //   updatedProduct.title = title;
    // }
    // if (desc) {
    //   updatedProduct.description = desc;
    // }
    // if (price) {
    //   updatedProduct.price = price;
    // }
    // this.products[index] = updatedProduct;
  }

  deleteProduct(prodId: string) {
    // const [product, index] = this.findProduct(prodId);
    // this.products.splice(index, 1);
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Product not found.');
    }
    if (!product) {
      throw new NotFoundException('Product not found.');
    }
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
    };
  }
}

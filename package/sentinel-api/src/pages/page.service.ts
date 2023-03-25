import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Page } from './page.model';

@Injectable()
export class PagesService {
  constructor(@InjectModel('Page') private readonly pagesModel: Model<Page>) {}

  async insertPage(url: string, register_count: number) {
    const newPage = new this.pagesModel({
      url,
      register_count,
    });

    const result = await newPage.save();
    return result.id;
  }

  async getPages() {
    const pages = await this.pagesModel.find().exec();
    return pages.map((page) => ({
      id: page.id,
      url: page.url,
      register_count: page.register_count,
    }));
  }

  async getSinglePage(pageId: string) {
    const page = await this.findPage(pageId);
    return page;
  }

  async getSinglePageUrl(url: string) {
    const page = await this.findPageByUrl(url);
    return page;
  }

  private async findPage(id: string): Promise<Page> {
    let page;
    try {
      page = await this.pagesModel.findById(id);
    } catch (error) {
      throw new NotFoundException('page not found.');
    }
    if (!page) {
      throw new NotFoundException('page not found.');
    }
    return {
      id: page.id,
      url: page.url,
      register_count: page.register_count,
    };
  }

  private async findPageByUrl(url: string): Promise<Page> {
    let page;
    try {
      page = await this.pagesModel.findOne({url});
    } catch (error) {
      throw new NotFoundException('catch page not found.');
    }
    if (!page) {
      throw new NotFoundException('page not found.');
    }
    return {
      id: page.id,
      url: page.url,
      register_count: page.register_count,
    };
  }
}

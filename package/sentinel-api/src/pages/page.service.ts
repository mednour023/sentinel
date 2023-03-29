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
    return { id: page.id, url: page.url, register_count: page.register_count };
  }

  async updatePage(pageId: string, url: string, register_count: number) {
    const updatedPage = await this.findPage(pageId);
    if (url) {
      updatedPage.url = url;
    }
    if (register_count) {
      updatedPage.register_count = register_count;
    }
    updatedPage.save();
  }

  async deletePage(pageId: string) {
    const result = await this.pagesModel.deleteOne({ _id: pageId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('page not found.');
    }
  }

  async getSinglePageUrl(url: string) {
    const page = await this.findPageByUrl(url);
    return page;
  }

  private async findPage(id: string): Promise<Page> {
    let page;
    try {
      page = await this.pagesModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('page not found.');
    }
    if (!page) {
      throw new NotFoundException('page not found.');
    }
    return page;
  }

  private async findPageByUrl(url: string): Promise<Page> {
    let page;
    try {
      page = await this.pagesModel.findOne({ url }).exec();
    } catch (error) {
      throw new NotFoundException('catch page not found.');
    }
    if (!page) {
      throw new NotFoundException('page not found.');
    }
    return page;
  }
}

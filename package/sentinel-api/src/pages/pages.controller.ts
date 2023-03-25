import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PagesService } from './page.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  async addPages(
    @Body('url') pageUrl: string,
    @Body('register_count') pageRegister_count: number,
  ) {
    const generatedId = await this.pagesService.insertPage(
      pageUrl,
      pageRegister_count,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllPages() {
    const pages = await this.pagesService.getPages();
    return pages;
  }

  // @Get(':id')
  // getPage(@Param('id') pageId: string) {
  //   return this.pagesService.getSinglePage(pageId);
  // }

  @Get(':url')
  getPageUrl(@Param('url') pageUrl: string) {
    return this.pagesService.getSinglePageUrl(pageUrl);
  }
}

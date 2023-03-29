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

  // @Post('getUrl')
  // getPageUrl( @Body('url') url: string,) {
  //   return this.pagesService.getSinglePageUrl(url);
  // }

  @Get('getUrl/:url')
  getPageUrl( @Param('url') url: string,) {
    return this.pagesService.getSinglePageUrl(url);
  }

  @Get(':id')
  getPage(@Param('id') pageId: string) {
    return this.pagesService.getSinglePage(pageId);
  }

  @Patch(':id')
  async updatePage(
    @Param('id') pageId: string,
    @Body('url') pageUrl: string,
    @Body('register_count') pageCount: number,
  ) {
    await this.pagesService.updatePage(pageId, pageUrl, pageCount);
    return null;
  }

  @Delete(':id')
  async removePage(@Param('id') pageId: string) {
    await this.pagesService.deletePage(pageId);
  }

}

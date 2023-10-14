import { Controller, Get, Post, Param, Redirect, Body } from '@nestjs/common';

import { LinksService } from './links.service';
import { Link } from './link.interface';
import { LinkDto } from './link.dto';

@Controller()
export class LinksController {
    constructor(private readonly linksService: LinksService) {}

    @Get(':short')
    @Redirect('/', 302)
    async get_url(@Param() params: any) {
        // console.log(params.short);

        let link = await this.linksService.get_url(params.short);

        return { url: link.url };
    }

    @Post()
    async create(@Body() linkDto: LinkDto) {
        return this.linksService.create(linkDto)
    }
}

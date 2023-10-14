import { Injectable, Inject, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { shortid } from 'shortid'

import { jwtConstants } from '../constants';

import { Link } from './link.interface';
import { LinkDto } from './link.dto';

@Injectable()
export class LinksService {
    constructor(
        @Inject('LINK_MODEL') private readonly linkModel: Model<Link>,
        private jwtService: JwtService
    ) {}

    async get_url(short : string): Promise<Link> {
        let link = await this.linkModel.findOne({short : short}).exec();

        console.log(link)

        return link
    }

    async create(linkDto: LinkDto): Promise<Link> {
        //Check token
        if(linkDto.token == undefined){
            throw new BadRequestException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                linkDto.token,
                {
                    secret: jwtConstants.secret
                }
            );
        } catch {
            throw new UnauthorizedException();
        }

        let short = Math.random().toString(36).slice(-6);
        // console.log(short)

        let data = {
            url : linkDto.url,
            short : short
        }

        const createdLink = new this.linkModel(data);
        let result = await createdLink.save();

        return result
    }
}

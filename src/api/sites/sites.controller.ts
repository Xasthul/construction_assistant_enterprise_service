import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';

@Controller('sites')
export class SitesController {
    constructor(private sitesService: SitesService) { }

    @Post()
    create(@Body() createSiteDto: CreateSiteDto) {
        try {
            return this.sitesService.create(createSiteDto);
        } catch (error) {
            throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}

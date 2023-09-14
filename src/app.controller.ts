import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('/newVisitor')
    async getNewVisitor(): Promise<string> {
        return await this.appService.newVisitor();
    }
}

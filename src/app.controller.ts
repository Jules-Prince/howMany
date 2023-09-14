import {Controller, Get} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('/newVisitor')
    async getNewVisitor(): Promise<string> {
        const visitorData: string = await this.appService.newVisitor();
        return visitorData;
    }
}

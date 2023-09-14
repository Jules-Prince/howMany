import {Injectable} from '@nestjs/common';
import {countNumberOfVisitors, addNewVisitor} from "./visitorsMongo";

@Injectable()
export class AppService {

    async newVisitor() {
        addNewVisitor();

        const nbVisitor = await countNumberOfVisitors();
        return "Hello world your are visitor n°" + nbVisitor;
    }
}

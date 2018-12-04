import {Controller, Get, Post} from '@nestjs/common';

@Controller('contact')
export class ContactController {

    @Post()
    submitContactRequest(): void {
        //
    }

}

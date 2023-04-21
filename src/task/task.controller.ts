import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
  @Post()
  method(@Body('description') description: string) {
    return description;
  }

  // @Get('done')
  // method(@Req() req: Request) {
  //   return `method ${req.method}`;
  // }

  // @Post('task')
  // method(@Req() req: Request) {
  //   return `method ${req.method}`;
  // }

  //   @Patch()
  //   method(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }

  //   @Delete()
  //   method(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }

  //   @Param()
  //   method(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }
}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemServices: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Item {
    return this.itemServices.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `name:${createItemDto.name}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `update ${id} name:${updateItemDto.name}`;
  }
}

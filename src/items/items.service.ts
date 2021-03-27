import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    { id: '456789', name: 'item 1', qty: 100, description: 'this is item one' },

    { id: '356789', name: 'item 2', qty: 100, description: 'this is item two' },
  ];
  findAll(): Item[] {
    return this.items;
  }
}

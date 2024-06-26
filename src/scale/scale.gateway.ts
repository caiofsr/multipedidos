import { Server } from 'socket.io';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { SerialHandlerService } from 'src/serial/serial-handler.service';
import { PrismaService } from 'src/prisma.service';
import { Logger } from '@nestjs/common';
import { StoreWeightDto } from './dto/store.dto';

@WebSocketGateway()
export class ScaleGateway {
  constructor(
    private prismaService: PrismaService,
    private serialService: SerialHandlerService,
    private logger: Logger,
  ) {}

  @WebSocketServer()
  server: Server;

  sendWeight() {
    this.serialService.serialport.on('data', (data: Buffer) => {
      this.server.emit('scale', data.toString());
    });
  }

  @SubscribeMessage('store-weight')
  async handleStoreWeight(
    @MessageBody() { weight, supplierId }: StoreWeightDto,
  ) {
    const measurement = await this.prismaService.measurement.create({
      data: { weight, supplierId },
    });

    this.logger.log(
      `Saved weight: ${measurement.weight}Kg for supplier id: ${supplierId}`,
      'PrismaService',
    );
  }
}

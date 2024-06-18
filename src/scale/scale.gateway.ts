import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ScaleGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('scale')
  handleScale() {}
}

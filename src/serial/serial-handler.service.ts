import { Injectable, Logger } from '@nestjs/common';
import { SerialPort } from 'serialport';

@Injectable()
export class SerialHandlerService {
  public serialport: SerialPort;
  private logger: Logger;

  constructor() {
    this.logger = new Logger();
    this.serialport = new SerialPort({
      path: 'COM3',
      baudRate: 9600,
    });

    this.serialport.on('open', () => {
      this.logger.log('Serial port connected', 'SerialModule');
    });
  }
}

import { Injectable } from '@nestjs/common';
import { SerialPort } from 'serialport';

@Injectable()
export class SerialHandlerService {
  public serialport: SerialPort;

  constructor() {
    this.serialport = new SerialPort({
      path: 'COM3',
      baudRate: 9600,
    });

    this.serialport.on('open', () => {
      console.log('Serial port opened');
    });
  }
}

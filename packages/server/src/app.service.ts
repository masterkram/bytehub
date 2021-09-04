import { HttpCode, HttpException, Injectable } from '@nestjs/common';
let fs = require('fs');
let path = require('path');
let MarkdownIt = require('markdown-it');

@Injectable()
export class AppService {
  private md = new MarkdownIt();

  getHello(): string {

    try {
      const data = fs.readFileSync(path.join(__dirname, '../../docs/Study-Notes/Module-4/Database/Class-Diagrams.md'), 'utf-8');
      let result = this.md.render(data);
      return result;
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }
}

import { HttpException } from './http.exception';

export class BadRequestException extends HttpException {
  constructor(message: string = 'Bad Request') {
    super(message, 400);
  }
}
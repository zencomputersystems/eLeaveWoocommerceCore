import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const dotenv = require('dotenv');
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('eLeave Subscription')
    .setDescription('eLeave Subscription WooCommerce')
    .setVersion('1.0')
    .addTag('subscription')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  let port = process.env.PORT || 3000;
  console.log(`Server is listening on port ${port}`);
  await app.listen(port);
}
bootstrap();

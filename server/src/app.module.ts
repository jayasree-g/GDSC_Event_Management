const { Module } = require('@nestjs/common');
const { AppService } = require('./app.service');
const { AppController } = require('./app.controller');
require('dotenv').config();
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/users.model';
import { UsersModule } from './users/users.module';
import { Events } from './events/Events.model';
import { EventsModule } from './events/Events.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Users, Events],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    EventsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

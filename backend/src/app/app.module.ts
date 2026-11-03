import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module.js';
import { TasksModule } from '../tasks/tasks.module.js';
import { PrismaModule } from '../database/prisma.module.js';
import { AuthModule } from '../auth/auth.module.js';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from '../auth/config/jwt.config.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [jwtConfig],
    }),
    PrismaModule,
    UsersModule,
    TasksModule,
    AuthModule,
  ]
})
export class AppModule { }

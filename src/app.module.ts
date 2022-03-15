import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'test',
        
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
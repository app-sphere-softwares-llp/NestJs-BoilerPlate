import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DbCollection } from '@nest-js-boiler-plate/models';
import { userSchema } from './schemas/users.schema';
import { resetPasswordSchema } from './schemas/reset-password.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{
      name: DbCollection.users,
      schema: userSchema,
      collection: DbCollection.users
    }, {
      name: DbCollection.resetPassword,
      schema: resetPasswordSchema,
      collection: DbCollection.resetPassword
    }])
  ],
  exports: [
    MongooseModule
  ]
})
export class DbModule {

}

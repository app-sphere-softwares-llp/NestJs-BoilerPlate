import { User } from '@nest-js-boiler-plate/models';

export class BaseDbModel {
  _id?: string;
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
  createdById?: string;
  createdBy?: User;
  updatedById?: string;
  updatedBy?: User;
}

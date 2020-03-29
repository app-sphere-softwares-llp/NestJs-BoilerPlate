import { User } from '@nest-js-boiler-plate/models';

export class AttachmentModel {
  id?: string;
  name: string;
  mimeType?: string;
  url: string;
  createdById: string;
  createdBy?: User;
}

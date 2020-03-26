import { EmailSubjectEnum } from '@nest-js-boiler-plate/models';

export class SendEmailModel {
  to: string[];
  subject: EmailSubjectEnum;
  message: string;
}

export class BuildEmailConfigurationModel {
  recipients: string[];
  templateDetails: any[];

  constructor(public subject: EmailSubjectEnum) {
    this.recipients = [];
    this.templateDetails = [];
  }
}

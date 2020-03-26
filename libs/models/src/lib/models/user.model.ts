import { MemberTypes, OneTimeMessagesDismissed } from '../general';
import { UserLoginProviderEnum, UserStatus } from '../enums';

export class UserLoginWithPasswordRequest {
  emailId: string;
  password: string;
}

export class UserLoginSignUpSuccessResponse {
  access_token: string;
  user: User;
}

export interface UserRecentLoginInfo {
  lastLoggedInTime: string;
}

export class UserTimeZoneInfo {
  timezoneNext: string;
  dateNext: Date;
  offsetNext: number;
  timezoneCurrent: string;
  offsetCurrent: number;
}

export class User {
  id?: string;
  _id?: string;
  emailId?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  profilePic?: string;
  profileLink?: string;
  lastLoginProvider?: UserLoginProviderEnum;
  recentLoginInfo?: UserRecentLoginInfo;
  confirmed?: boolean;
  memberType?: MemberTypes;
  oneTimeMessagesDismissed?: OneTimeMessagesDismissed[];
  locale?: string;
  timezoneInfo?: UserTimeZoneInfo;
  status?: UserStatus;
  mobileNumber?: string;
  username?: string;
  isEmailSent?: boolean;
  isDeleted?: boolean;
  invitationId?: string;
  isSelected?:boolean;
}

export class SearchUserModel {
  organizationId: string;
  query: string;
}

export class Mention {
  id: string;
  value: string;
  link: string;
}

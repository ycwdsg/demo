interface userInfo {
  // 头像
  avatar: string;
  // 个性化
  personalize: boolean;
}

interface user {
  username: string;
  // 昵称
  nickname?: string;
  age?: number;
  sex?: string;
  // 职业
  occupation: string;
  // 权限
  jurisdiction: string;
  // 用户信息
  userInfo: userInfo;
  password?: readonly string;
}

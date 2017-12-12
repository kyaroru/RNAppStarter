import { fullUrlFrom } from './helper';

export const getWhitelistURL = () => {
  const whitelistUrl = [

  ];
  return whitelistUrl.map(url => fullUrlFrom(url));
};

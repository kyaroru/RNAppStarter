const NAME = 'COMMON';

export const FINISH_REHYDRATE = `${NAME}/FINISH_REHYDRATE`;
export const REDIRECT_APP = `${NAME}/REDIRECT_APP`;

export const finishRehydrate = () => ({
  type: FINISH_REHYDRATE,
});

export const redirectApp = () => ({
  type: REDIRECT_APP,
});

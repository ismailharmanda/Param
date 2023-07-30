import {AnyAction} from 'redux';

export interface IGenericAction {
  <T extends {type?: any; payload?: any}>({type, payload}: T): AnyAction;
}

export const GenericActionCreator: IGenericAction = ({
  type,
  payload,
}): AnyAction => ({
  type,
  payload,
});

export const emailValidator = (email: string): string => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) {
    return 'Email cannot be empty.';
  }
  if (!re.test(email)) {
    return 'Ooops! We need a valid email address.';
  }

  return '';
};

export const passwordValidator = (password: string): string => {
  if (!password || password.length <= 0) {
    return 'Password cannot be empty.';
  } else if (password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }

  return '';
};

export const formatter = (currency: Intl.NumberFormatOptions['currency']) =>
  new Intl.NumberFormat('default', {
    style: 'currency',
    currency: currency,
  });

export const toFixedNumber = (
  num: number,
  digits: number,
  base?: number,
): number => {
  const pow = Math.pow(base ?? 10, digits);
  return Math.round(num * pow) / pow;
};

export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Date(date).toLocaleString('tr-TR', options);
};

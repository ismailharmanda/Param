import {SCREENS} from 'config/screens';

export interface RootStackParamList {
  HomeStack: undefined;
  ProfileStack: undefined;
  [SCREENS.LOGIN]: undefined;
  [SCREENS.HOME]: undefined;
  [SCREENS.PROFILE]: undefined;
}

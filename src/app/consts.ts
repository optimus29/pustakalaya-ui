// no trailing '/'
export const API_BASE_HREF = 'http://localhost:8080/pustakalaya';

/**
 * Time delay in milliseconds before the loading screeen is shown.
 */
export const TIME_DELAY_DISPLAY_LOAD_SCREEN = 500;

export enum MsgKey {
  ERROR_OCCURRED = 'common.errorOccurred',
  PAGE_NOT_FOUND = 'common.pageNotFound',
  VALIDATION_FAILED = 'common.validationFailed',
  LOADING = 'common.loading',
  SUBMITTING = 'common.submitting',
  EMAIL_DOES_NOT_EXIST = 'common.emailDoesNotExist',
  FORM_LOAD_ERROR = 'common.formLoadError',
  INVALID_REGISTRATION_ID = 'user.register.vld.registrationIdInvld',
  NOT_AVAILABLE = 'common.notAvailable',

  USER_CHANGE_PASSWORD_SUCCESS = 'user.changePassword.successMsg'
}

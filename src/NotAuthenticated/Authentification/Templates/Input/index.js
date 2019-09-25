import Email from './email'
import Password from './password'
import Name from './name'
import FailWrapper from './withFails'
import onInputChange from './onInputChange'
import FailsHolder from './FailsHolder'
export const EmailInput = Email
export const PasswordInput = Password
export const NameInput = Name
export const withFails = FailWrapper

export const FallibleEmailInput = FailWrapper(Email)
export const FalliblePasswordInput = FailWrapper(Password)
export const FallibleNameInput = FailWrapper(Name)
export {onInputChange, FailsHolder}

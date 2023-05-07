import { contactsRoutesNames } from '@/views/contacts/contacts.routes'
import { authRoutesNames } from '@/views/auth/auth.routes'
import { registrationRoutesNames } from '@/views/registration/registration.routes'

export const routeNames = {
  rootPage: 'rootPage',
  ...contactsRoutesNames,
  ...authRoutesNames,
  ...registrationRoutesNames
}

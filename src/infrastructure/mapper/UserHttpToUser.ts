import { Mapper } from '@/common/Mapper.ts'
import { UserHttp } from '@/infrastructure/model/response/UserHttp.ts'
import { User } from '@/domain/model/User.ts'

export class UserHttpToUser extends Mapper<UserHttp, User> {
  map(userHttp: UserHttp): User {
    const { id, username, roles } = userHttp
    return {
      id,
      username,
      roles
    }
  }
}

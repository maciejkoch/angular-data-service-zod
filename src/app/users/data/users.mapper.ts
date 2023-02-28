import { join } from 'lodash';
import { User } from '../users.model';
import { UsersDto } from './users.dto';

export function fromDTO(dto: UsersDto): User[] {
  return dto.users.map((user) => ({
    id: user.id,
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
    gender: user.gender,
    company: {
      name: user.company.name,
      address: join(
        [
          user.company.address.address,
          user.company.address.city,
          user.company.address.state,
        ],
        ', '
      ),
    },
    address: join(
      [user.address.address, user.address.city, user.address.state],
      ', '
    ),
  }));
}

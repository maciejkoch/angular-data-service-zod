import { join } from 'lodash';
import { User } from '../users.model';
import { UsersDto } from './users.dto';

export function fromDTO(dto: UsersDto): User[] {
  return dto.users.map((user) => {
    const companyAddress = user.company.address;
    const userAddress = user.address;
    const fullName = `${user.firstName} ${user.lastName}`;
    return {
      id: user.id,
      fullName,
      age: user.age,
      gender: user.gender,
      company: {
        name: user.company.name,
        address: join(
          [companyAddress.address, companyAddress.city, companyAddress.state],
          ', '
        ),
      },
      address: join(
        [userAddress.address, userAddress.city, userAddress.state],
        ', '
      ),
    };
  });
}

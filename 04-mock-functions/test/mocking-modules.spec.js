import axios from 'axios';
import Users from '../src/users';

jest.mock('axios');

describe('Mocking Modules', () => {
  test('should fetch users', async () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);
    // 아래 코드와 동일하게 동작
    // axios.get.mockImplementation(() => Promise.resolve(resp))

    const result = await Users.all();
    expect(result).toEqual(users);
  });
});
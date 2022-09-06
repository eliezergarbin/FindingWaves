import { User } from '@src/models/user';

describe('Users functional tests', () => {
  describe('when creating a new user', () => {
    beforeEach(async () => {
      await User.deleteMany({});
    });
    it('should sucessfully create a new user', async () => {
      const newUser = {
        name: 'John Doe',
        email: 'john@mail.com',
        password: 'password',
      };

      const response = await global.testRequest.post('/users').send(newUser);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newUser));
    });
  });
});

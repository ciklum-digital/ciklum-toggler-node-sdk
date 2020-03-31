import { config } from './public-api';

describe('Public Api', () => {
  it('config should be defined', () => {
    expect(config).toBeDefined();
  });
});

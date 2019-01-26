import { ReaderModule } from './reader.module';

describe('ReaderModule', () => {
  let readerModule: ReaderModule;

  beforeEach(() => {
    readerModule = new ReaderModule();
  });

  it('should create an instance', () => {
    expect(readerModule).toBeTruthy();
  });
});

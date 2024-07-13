import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { postResolverResolver } from './post-resolver.resolver';

describe('postResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => postResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

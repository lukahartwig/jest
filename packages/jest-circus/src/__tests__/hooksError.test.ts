/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import circus from '../';
import {HookType} from '../types';

describe.each([
  'beforeEach',
  'beforeAll',
  'afterEach',
  'afterAll',
  'justBeforeEach',
  'justAfterEach',
])('%s hooks error throwing', (fn: HookType) => {
  test.each([
    ['String'],
    [1],
    [[]],
    [{}],
    [Symbol('hello')],
    [true],
    [null],
    [undefined],
  ])(
    `${fn} throws an error when %p is provided as a first argument to it`,
    el => {
      expect(() => {
        circus[fn](el);
      }).toThrowError(
        'Invalid first argument. It must be a callback function.',
      );
    },
  );
});

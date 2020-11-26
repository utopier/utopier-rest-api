# Testing

- Reference
  - **jest**
    - https://jestjs.io/docs/en/getting-started
  - **react-testing-library**
    - https://testing-library.com/docs/react-testing-library/intro/
  - **cypress**
    - https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell

---

##

**jest**

1. Getting Started
   - Install
   - Configuration(Babel, Typescript)
2. Matchers
   - Common
   - Truthiness
   - Numbers
   - Strings
   - Arrays and iterables
   - Exceptions
   - And More
3. Asynchronous Code
   - Callback
   - Promises
   - Async/Await
4. Setup and Teardown
5. Mock Functions

**react-testing-library**

1. Introduction
2. Setup
3. Queries
4. Firing Events
5. Async Utilities
6. Helpers
7. API

- render
- render Options
- render Result
- cleanup
- act

**cypress**

1. Getting Started
   - Install
   - First Test
   - Testing App
2. Core Concepts
3. Dashboard
4. Guides
5. Component Testing

---

**jest**

## 1. Getting Started

1. **Install**

- npm i -D jest
- package.json
  ```json
  {
    "scripts": {
      "test": "jest"
    }
  }
  ```
- npm run test

2. **Configuration(Typescript, Babel)**

- npm i -D @types/jest
- npm i -D babel-jest @babel/core @babel/preset-env
- babel.config.js
  ```javascript
  module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-typescript',
    ],
  };
  // Babel의 Typescript 지원은 트랜스파일만 하므로 jest는 테스트가 실행될때 Type Check를 하지 않음.
  // Type Check까지 하려는 경우 ts-jest나 tsc 사용
  ```

## 2. Matchers

1. **Common Matchers**

- expect, toBe, toEqual

```javascript
test('3+3 = 6', () => {
  expect(3 + 3).toBe(6);
});
test('Object Assignment', () => {
  const data = { first: 1 };
  data['second'] = 2;
  expect(data).toEqual({ first: 1, secode: 2 });
});
```

2. **Truthiness**

- toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy

```javascript
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
```

3. **Numbers**

- toBe, toEqual
- toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual
- toBeCloseTo

```javascript
test('3 + 3', () => {
  const value = 3 + 3;
  expect(value).toBeGreaterThan(5);
  expect(value).toBeGreaterThanOrEqual(5.5);
  expect(value).toBeLessThan(7);
  expect(value).toBeLessThanOrEqual(6.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(6);
  expect(value).toEqual(6);
});
test('adding floating point numbers', () => {
  const value = 0.3 + 0.4;
  //expect(value).toBe(0.7);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.7); // This works.
});
```

4. **Strings**

- toMatch

```javascript
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

5. **Arrays and iterables**

- toContain

```javascript
const techList = ['react', 'jest', 'nextjs', 'emotion'];

test('the tech list has jest on it', () => {
  expect(techList).toContain('jest');
  expect(new Set(techList)).toContain('jest');
});
```

6. **Exceptions**

- toThrow

```javascript
function customErrorFunc() {
  throw new Error('Custom Error');
}

test('Custom Error', () => {
  expect(() => customErrorFunc()).toThrow();
  expect(() => customErrorFunc()).toThrow(Error);
  expect(() => customErrorFunc()).toThrow('Custom Error');
  expect(() => customErrorFunc()).toThrow(/Custom/);
});
```

7. **And More**

- https://jestjs.io/docs/en/expect

## 3. Asynchronous Code

1. **Callback**
   ```javascript
   test('data is jest', (done) => {
     function callback(data) {
       try {
         expect(data).toBe('jest');
         done();
       } catch (error) {
         done(error);
       }
     }
     fetchData(callback);
   });
   ```
2. **Promises**

   ```javascript
   test('data is jest', () => {
     return fetchData().then((data) => {
       expect(data).toBe('jest');
     });
   });

   test('fetch fail', () => {
     expect.assertions(1);
     return fetchData().catch((e) => expect(e).toMatch('error'));
   });

   // .resolves / .rejects
   test('data is jest', () => {
     return expect(fetchData()).resolves.toBe('jest');
   });
   test('fetch fail', () => {
     return expect(fetchData()).rejects.toMatch('error');
   });
   ```

3. **Async/Await**

   ```javascript
   test('data is jest', async () => {
     const data = await fetchData();
     expect(data).toBe('jest');
   });
   test('fetch fail', async () => {
     try {
       await fetchData();
     } catch (error) {
       expect(error).toMatch('error');
     }
   });

   test('data is jest', async () => {
     await expect(fetchData()).resolves.toBe('jest');
   });
   test('fetch fail', async () => {
     await expect(fetchData()).rejects.toThrow('error');
   });
   ```

## 4. Setup and Teardown

1. 전체 테스트에 반복 설정

- beforeEach, afterEach

  ```javascript
  beforeEach(() => {
    initializeTechDatabase();
    // 비동기코드 일 경우
    // return initializeCityDatabase();
  });
  afterEach(() => {
    clearTechDatabase();
  });

  test('tech database has react', () => {
    expect(isCity('react')).toBeTruthy();
  });

  test('tech database has jest', () => {
    expect(isCity('jest')).toBeTruthy();
  });
  ```

2. 일회성 설정

   - beforeAll, afterAll

     ```javascript
     beforeAll(() => {
       return initializeTechDatabase();
     });

     afterAll(() => {
       return clearTechDatabase();
     });

     test('tech database has react', () => {
       expect(isCity('react')).toBeTruthy();
     });

     test('tech database has jest', () => {
       expect(isCity('jest')).toBeTruthy();
     });
     ```

3. 범위 지정

   ```javascript
   beforeAll(() => console.log('1 - beforeAll'));
   afterAll(() => console.log('1 - afterAll'));
   beforeEach(() => console.log('1 - beforeEach'));
   afterEach(() => console.log('1 - afterEach'));
   test('', () => console.log('1 - test'));
   describe('Scoped / Nested block', () => {
     beforeAll(() => console.log('2 - beforeAll'));
     afterAll(() => console.log('2 - afterAll'));
     beforeEach(() => console.log('2 - beforeEach'));
     afterEach(() => console.log('2 - afterEach'));
     test('', () => console.log('2 - test'));
   });

   // 1 - beforeAll
   // 1 - beforeEach
   // 1 - test
   // 1 - afterEach
   // 2 - beforeAll
   // 1 - beforeEach
   // 2 - beforeEach
   // 2 - test
   // 2 - afterEach
   // 1 - afterEach
   // 2 - afterAll
   // 1 - afterAll
   ```

4. describe, test 블록 실행 순서

   ```javascript
   describe('outer', () => {
     console.log('describe outer-a');

     describe('describe inner 1', () => {
       console.log('describe inner 1');
       test('test 1', () => {
         console.log('test for describe inner 1');
         expect(true).toEqual(true);
       });
     });

     console.log('describe outer-b');

     test('test 1', () => {
       console.log('test for describe outer');
       expect(true).toEqual(true);
     });

     describe('describe inner 2', () => {
       console.log('describe inner 2');
       test('test for describe inner 2', () => {
         console.log('test for describe inner 2');
         expect(false).toEqual(false);
       });
     });

     console.log('describe outer-c');
   });

   // describe outer-a
   // describe inner 1
   // describe outer-b
   // describe inner 2
   // describe outer-c
   // test for describe inner 1
   // test for describe outer
   // test for describe inner 2
   ```

5. test.only

```javascript
test.only('2+2=2', () => {
  expect(2 + 2).toBe(2);
});
```

## 5. Mock Functions

1. Mock Function

   ```javascript
   const plusTen = mock.fn((n) => n + 10);
   forEach([0, 1, 2], plusTen);

   expect(plusTen.mock.calls.lenght).toBe(3);
   expect(plusTen.mock.calls[0][0]).toBe(0);
   expect(plusTen.mock.calls[1][0]).toBe(1);
   expect(plusTen.mock.results[0].value).toBe(11);
   ```

2. .mock property

   ```javascript
   // The function was called exactly once
   expect(someMockFunction.mock.calls.length).toBe(1);

   // The first arg of the first call to the function was 'first arg'
   expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

   // The second arg of the first call to the function was 'second arg'
   expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

   // The return value of the first call to the function was 'return value'
   expect(someMockFunction.mock.results[0].value).toBe('return value');

   // This function was instantiated exactly twice
   expect(someMockFunction.mock.instances.length).toBe(2);

   // The object returned by the first instantiation of this function
   // had a `name` property whose value was set to 'test'
   expect(someMockFunction.mock.instances[0].name).toEqual('test');
   ```

3. Mock Return Values

   ```javascript
   const filterTestFn = jest.fn();

   // Make the mock return `true` for the first call,
   // and `false` for the second call
   filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

   const result = [11, 12].filter((num) => filterTestFn(num));

   console.log(result);
   // > [11]
   console.log(filterTestFn.mock.calls);
   // > [ [11], [12] ]
   ```

4. Mocking Modules

   ```javascript
   // users.test.js
   import axios from 'axios';
   import Users from './users';

   jest.mock('axios');

   test('should fetch users', () => {
     const users = [{ name: 'Bob' }];
     const resp = { data: users };
     axios.get.mockResolvedValue(resp);

     // or you could use the following depending on your use case:
     // axios.get.mockImplementation(() => Promise.resolve(resp))

     return Users.all().then((data) => expect(data).toEqual(users));
   });
   ```

5. Mock Implementations

   ```javascript

   ```

6. Mock Names
   ```javascript
   const myMockFn = jest
     .fn()
     .mockReturnValue('default')
     .mockImplementation((scalar) => 10 + scalar)
     .mockName('add10');
   ```
7. Custom Matchers

   ```javascript
   // The mock function was called at least once
   expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

   // The mock function was called at least once with the specified args
   expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

   // The last call to the mock function was called with the specified args
   expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
     arg1,
     arg2,
   ]);

   // The first arg of the last call to the mock function was `42`
   // (note that there is no sugar helper for this specific of an assertion)
   expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);

   // A snapshot will check that a mock was invoked the same number of times,
   // in the same order, with the same arguments. It will also assert on the name.
   expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
   expect(mockFunc.getMockName()).toBe('a mock name');
   ```

---

**react-testing-library**

## 1. Introduction

- npm i -D @testing-library/react

## 2. Setup

## 3. Queries

1. **Variants**
   - getBy
   - getAllBy
   - queryBy
   - queryAllBy
   - findBy
   - findAllBy
2. **Options**
   - screen
   - screen.debug
3. **Queries**
   - ByLabelText
   - ByPlaceholderText
   - ByText
   - ByAltText
   - ByTitle
   - ByDisplayValue
   - ByRole
   - ByTestId
4. **TextMatch**
   - Precision
   - Normalization
   - TextMatch Examples

## 4. Firing Events

- fireEvent
- fireEvent[eventName]
- createEvent[eventName]
- Jest Function Mocks

## 5. Async Utilities

- waitFor
- waitForElementToBeRemoved

## 6. Helpers

1. Custom Queries
   - buildQueries
   - getNodeText
   - within, getQueriesForElement
   - getRoles
   - isInaccessible
2. Debugging
   - prettyDOM
   - logRoles

## 7. API

1. **render**
2. **render Options**
   - container
   - baseElement
   - hydrate
   - wrapper
   - queries
3. **render Result**
   - ...queries
   - container
   - baseElement
   - debug
   - rerender
   - unmount
   - asFragment
4. **cleanup**
5. **act**

---

**cypress**

---

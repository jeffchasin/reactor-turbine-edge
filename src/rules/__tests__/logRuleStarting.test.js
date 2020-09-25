/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const logRuleStarting = require('../logRuleStarting');
const createNewLogger = require('../../__mocks__/createNewLogger');

describe('logRuleStarting', () => {
  test('logs the call to and returns the contextData', () => {
    const logger = createNewLogger();

    const contextData = {
      c: 1,
      rule: { name: 'rule name' }
    };

    const result = logRuleStarting(logger)(contextData);
    expect(logger.getJsonLogs()).toStrictEqual([
      ['Rule "rule name" is being executed.']
    ]);
    expect(result).toBe(contextData);
  });
});

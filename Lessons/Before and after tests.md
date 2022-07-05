### beforeEach and afterEach tests

With beforeEach(), which takes a callback as an argument, we can are making sure a certain functionality is being loaded before our tests are being executed. Namely, everything in the beforeEach() block, runs before every test in the file.  

As an opposite of that afterEach() runs after every test is executed. A use case scenario, for example, would be to load up some data needed for the test with beforeEach(), and do a clean up with afterEach(). 

### beforeAll and afterAll tests

beforeAll() runs once, and before all the other tests. afterAll() runs once and after all the tests. 

Example of all 4 in the file, run it and the console log displays correctly when which one fires. 

### These work only for the file in which they are in. 
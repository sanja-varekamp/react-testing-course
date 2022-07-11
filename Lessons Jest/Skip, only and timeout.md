### Only

It's a keyword that enables us to selectively test. By adding it on to test, we are telling Jest to only run that particular test (test.only()). The use case here, is to cherry-pick a test out of a large file of tests, for example. 

### Skip 
It enables ups to cherry-pick and skip a test. Syntax wise, it's also chained on the test (test.skip()) It's an opposite of only in functionality. They are both useful for when we don't want to test the whole suite. 

### Timeout
The default time given to a test to execute is 5000ms, or 5 seconds in total. Test, as we mentioned, takes a name as a first argument, a callback as a second, and it can take a timeout in ms as a third argument. Timeout is a way to influence the time given for that particular test to execute. You can shorten it or lengthen it, it's up to us. Usually it's used when a time heavy operations are being executed and tested, and more than 5 seconds is needed. 

We can also set a global timeout for all the tests in our test kit, or for a single file by writing:
jest.setTimeout(120000) -> desired time in miliseconds. Declaring it on top, makes it apply to every single test. Chences are, not every test will require as much time, so there are more elegant solutions to this, like maybe only increasing the time to the most time demanding test. 
### Arguments

The first argument of test() is a string, which is the name of the test. The best name for a test is to describe what the test is supposed to do. 

The second argument is the callback function and in it we write the actual testing code, or assertions. 

### expect()
The expect function is used every time you want to test a value. You will rarely call expect by itself. Instead, you will use expect along with a "matcher" function to assert something about a value.


### toBe() 
It's a matcher function which can be combined with expect(), so it can evaluate a test.

### it()

### describe()
It takes 2 arguments just like test: a name and a callback. The name is a description of what the tests are doing, and inside the callback, we place all the tests. When we run the tests, the results are grouped per the describe block and name. It's basically a holding block for test grouping. 

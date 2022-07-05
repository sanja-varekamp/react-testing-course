### Testing values

Values in jest can be imported from anywhere from within the app, and have them tested.
However, you can also declare a value within the test itself, in the test block and use it for testing. 

### Testing a function

You can import any function from the app and test it, by giving it the necessary parameters.

The thing to be aware of while testing functions is to not create a false positive assertion; never test for a set in stone return value; test if the functionality is right if the function is performing one. Example in file. 
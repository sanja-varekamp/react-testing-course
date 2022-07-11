### Definition
Jest is a JavaScript testing framework, or a JAvaScript test runner, designed to ensure correctness of any JavaScript codebase. 

### Naming convention for files and directories

1. Files
Jest has a pattern through which it recognizes which files are for testing. It needs to contain either the word test, or spec, before the file extension like so: filename.test.js or filename.spec.js This makes it recognizable to Jest. It will run all the files that adhere to this naming scheme.  

2. Directories
Any file, regardless of its name, placed in a directory named __tests__, will be recognized as a test and run by Jest. Important to mention, this directory doesn't need to be in the root directory; It can be placed anywhere in whatever directory it is needed, and Jest will recognize it. 

### Initializing
Testing is initiated with npm test. 

### First test 
by using the test() method, we compile our test. The test() function takes 2 arguments: 1 - name of the test, and 2 - a callback function which is the actual test. 
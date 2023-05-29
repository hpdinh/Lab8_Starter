# Lab 8 - Starter
1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

I would fit my automated tests within a Github action that runs whenever code is pushed. Using github actions would allow me to automatically run my tests everytime I change my code, which would be more efficient than running them locally.

2. Would you use an end to end test to check if a function is returning the correct output (yes/no)

No, as unit testing would be easier to see output for functions. 


3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would probably not test the message feature of a messaging app using a unit test. This is because this is the main feature of this application and probably requires multiple functions for it to run, thus, it would be easier to use E2E to test the feature.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

I would use a unit test to test the max message length feature. This feature is most likely only one function, and thus an individual component, which would be something we would test with a unit test.
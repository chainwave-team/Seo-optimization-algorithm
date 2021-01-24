# Data Structures: Learn how a Stack 

You are probably familiar with stack of books on your table. You have likely used the undo feature of a text editor. You are also probably used to hitting the back button on your phone to go back to the previous view in your app.

You know what they all have in common? They all store the data in a way so that you can traverse backwards.

The topmost book in the stack was the one that was put there last. If you remove that book from your stack's top, you would expose the book that was put there before the last book and so on.

If you think about it, in all the above examples, you are getting Last-In-First-Out type of service. We will try to mimic this with our code.

## Data Structures: Create a Stack
In the last section, we talked about what a stack is and how we can use an array to represent a stack. In this section, we will be creating our own stack class. Although you can use arrays to create stacks, sometimes it is best to limit the amount of control we have with our stacks. Apart from the push and pop method, stacks have other useful methods. Let's add a peek, isEmpty, and clear method to our stack class.

Write a push method that pushes an element to the top of the stack, a pop method that removes and returns the element on the top of the stack, a peek method that looks at the top element in the stack, an isEmpty method that checks if the stack is empty, and a clear method that removes all elements from the stack. Normally stacks don't have this, but we've added a print helper method that console logs the collection.

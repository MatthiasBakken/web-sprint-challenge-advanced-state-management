# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
   It allows your components to quickly gain access to application state, without having to prop drill or go through the extensive setup of Redux.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions contact the reducers with a type and optionally some data. Then the reducers can manipulated that data as needed and drop it into state, which essentially is the store. The store holds all the data that is used by our application, and it is standard to only have one store or one single source of truth.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
   redux-thunk is middleware that allows our action creators to add a bit of logic into our actions as well as return functions instead of only actions. So now we can start a fetch, hit an api, and handle the response/error all within the same action creator.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
   I would have to say redux is still my favorite. Context is very useful for rapid prototyping, but I still believe redux is the way to go for app state management. Context becomes way to complicated, the larger your app. But with redux, you have your single source of truth and you can have multiple reducers to break your app processes into manageable chunks.

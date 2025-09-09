# React_

### Components are one of the core concepts of React. They are the foundation upon which we build user interfaces (UI), which makes them the perfect place to start our React journey!

React components are regular JavaScript functions except:

1. Their names always begin with a capital letter.
2. They return JSX markup.

## How to build a component:
Step 1: Export the component  : The export default prefix is a standard JavaScript syntax (not specific to React). It lets we mark the main function in a file so that we can later import it from other files. </br>
Step 2: Define the function  : With function FunctionName() { } we define a JavaScript function with the name Profile.  </br>
Step 3: Add markup 
```React
        return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
```
<b> NOTE : </b> Without parentheses, any code on the lines after return will be ignored!



<b> NOTE : </b> Components can render other components, but we must never nest their definitions:
<b>NOTE : </B> React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!


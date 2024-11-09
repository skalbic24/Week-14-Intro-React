/*
Task 1: Make some test data
First, decide what you want your CRUD app to be. 
    --Things To DO APP that lets add/remove/update tasks in a list
Task 2: Make a very simple mock-up
What will the UI of your app look like? Will there be a sidebar? 
A top bar? Will the data be shown in a table, a list, rows of cards, 
etc?
Task 3: Break it into components
Take a look at your mockup and decide how you want to break the UI 
up into React components.
You have to use at least three components, so you can practice using 
components and props.
Task 3: Write the components
Create the file for each component and write the component function so 
it returns the JSX for that part of the app. Make sure you’re displaying 
lists of data according to best practices - using the map array method 
and the key prop.
Task 4: Use props to pass data down and customize components
If you haven’t put in any props yet, then each of your items are 
probably showing the same data. You’ll need to use props to have 
each component show the correct data.
Task 5: Test
Make sure your app is working correctly by making changes to your test
 data. Add items, remove items, change properties on items, and make 
 sure that the app is displaying exactly what the test data says 
 it should.
 At this point, your project must meets these requirements:

It has at least 3 React components

A component is a function that returns JSX and components are used like 
they’re an HTML element

main.tsx does not count as a component, it doesn’t have a function 
that returns JSX

It’s displaying the test data

You can put your array of data in whatever file you want, or even in 
its own file

It’s using at least 1 prop on your own components

A prop is set like it’s an HTML attribute, and received as a 
destructured parameter property

key does not count for this, you need to come up with your own prop 
and practice setting it and receiving it

No red errors/warnings in the console in the browser

No type errors in VS Code
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

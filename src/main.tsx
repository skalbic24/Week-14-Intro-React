/*
1. Move your test data into state
2.Implement the create ability
3.Implement the delete ability 
4.Implement the udpate ability
5.Test
  At this point, your project must meets these new requirements:

A user can create new items (the new items will all have the same data)

A user can delete items

A user can update at least one property on the items

As well as the requirements from last week:

It has at least 3 React components

It’s displaying the test data

It’s using at least 1 prop

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

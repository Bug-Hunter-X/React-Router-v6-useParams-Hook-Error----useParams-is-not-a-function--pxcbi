# React Router v6 useParams Hook Error

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6.  The error, 'useParams is not a function', occurs when attempting to access route parameters outside of a route component.

## Problem

The `useParams` hook requires the router context to function correctly. If used in a component not nested within a `<Route>` component, it will throw an error because the context is unavailable.

## Solution

Ensure that the component using `useParams` is a direct or indirect child of a `<Route>` component.  This grants the component access to the necessary router context.
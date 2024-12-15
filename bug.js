In React Router Dom v6, a common issue arises when using the `useParams` hook inside a component that's not directly nested within a route defined using the `<Route>` component.  This results in an error because `useParams` relies on the router's context to obtain the parameters, and this context isn't available outside of route components.  For example:

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams(); // This will cause an error
  // ...
}
```

This will throw an error similar to: `useParams is not a function`. The component needs to be a child of `<Route>` to access params.
# Button Component

The `Button` component is a versatile, styled button component for React.

## Usage

To use this button component, import the `Button` component from the `components` folder.

```jsx
import { Button } from "./components";
```

### Button

The `Button` component accepts two props:

- `variant` (optional): Determines the style of the button. It can be one of three values: "contained", "outlined", or "link". If no `variant` prop is provided, the button defaults to the "contained" style.
- `delete` (optional): If true, changes the color of the button to a shade of red.

Example:

```jsx
<>
  <Button>Default Button (Contained by default)</Button>

  <Button variant="contained">Contained Button</Button>

  <Button variant="outlined">Outlined Button</Button>

  <Button variant="link">Link Button</Button>

  <Button variant="contained" delete>
    Delete Button
  </Button>
</>
```

In this example, we render five buttons: a contained button, an outlined button, a link button, a delete button with the "contained" variant, and a default button with the "contained" variant by default because we haven't specified the `variant` prop.

## Full Example

```jsx
import React from "react";
import { Button } from "./components";

function MyComponent() {
  return (
    <>
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="link">Link Button</Button>
      <Button variant="contained" delete>
        Delete Button
      </Button>
      <Button>Default Button (Contained by default)</Button>
    </>
  );
}

export default MyComponent;
```

In this example, `MyComponent` renders five buttons: a contained button, an outlined button, a link button, a delete button with the "contained" variant, and a default button with the "contained" variant by default because we haven't specified the `variant` prop.

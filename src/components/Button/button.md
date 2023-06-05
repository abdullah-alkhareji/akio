# Button Component

The `Button` component is a versatile, styled button component for React.

## Usage

To use this button component, import the `Button` component from the `components` folder.

```jsx
import { Button } from "./components";
```

## Button

The `Button` component accepts four props:

•`variant` (optional): Determines the style of the button. It can be one of three values: “contained”, “outlined”, or “link”. If no `variant` prop is provided, the button defaults to the “contained” style.

•`delete` (optional): If true, changes the color of the button to a shade of red.

•`fullWidth` (optional): If true, the button will take up the full width of its parent container.

•`size` (optional): Determines the size of the button. It can be one of three values: “sm”, “md”, or “lg”. If no `size` prop is provided, the button defaults to the “md” size.

Example:

```jsx
<Button variant="contained">
    Contained Button
</Button>

<Button variant="outlined">
    Outlined Button
</Button>

<Button variant="link">
    Link Button
</Button>

<Button variant="contained" delete>
    Delete Button
</Button>

<Button fullWidth>
    Full Width Button
</Button>

<Button size="sm">
    Small Button
</Button>

<Button size="md">
    Medium Button
</Button>

<Button size="lg">
    Large Button
</Button>

<Button>
    Default Button (Contained and Medium Size by default)
</Button>
```

In this example, we render several buttons with different styles: a contained button, an outlined button, a link button, a delete button with the “contained” variant, a full-width button, small, medium and large size buttons, and a default button with the “contained” variant and “medium” size by default because we haven’t specified the variant and size props.

Full Example

```jsx
import React from "react";
import { Button } from "./components";

function MyComponent() {
  return (
    <div>
      <Button variant="contained">Contained Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="link">Link Button</Button>
      <Button variant="contained" delete>
        Delete Button
      </Button>
      <Button fullWidth>Full Width Button</Button>
      <Button size="sm">Small Button</Button>
      <Button size="md">Medium Button</Button>
      <Button size="lg">Large Button</Button>
      <Button>Default Button (Contained and Medium Size by default)</Button>
    </div>
  );
}

export default MyComponent;
```

In this example, MyComponent renders several buttons with different styles: a contained button, an outlined button, a link button, a delete button with the “contained” variant, a full-width button, small, medium and large size buttons, and a default button with the “contained” variant and “medium” size by default because we haven’t specified the variant and size props.

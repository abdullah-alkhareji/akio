The `Grid` component set consists of three components: `Grid`, `Row`, and `Col`.

## Usage

To use these components, import them from the `components` folder.

```jsx
import { Grid, Row, Col } from './components';
```

### Grid

The `Grid` component is a container for `Row` components. It automatically applies the necessary margins.

Example:

```jsx
<Grid>
  // Row components go here
</Grid>
```

### Row

The `Row` component is a container for `Col` components. It automatically applies the necessary flex styles.

Example:

```jsx
<Row>
  // Col components go here
</Row>
```

### Col

The `Col` component represents a column. It accepts a `size` prop that specifies the number of columns it should span, from 1 to 12.

Example:

```jsx
<Col size={6}>
  // Your content here
</Col>
```

## Full Example

```jsx
import React from 'react';
import { Grid, Row, Col } from './components';

function MyComponent() {
  return (
    <Grid>
      <Row>
        <Col size={6}>
          // Your content here
        </Col>
        <Col size={6}>
          // Your content here
        </Col>
      </Row>
    </Grid>
  );
}

export default MyComponent;
```

In this example, `MyComponent` renders a grid with a single row. The row contains two columns, each spanning half of the grid (6 out of 12 columns).
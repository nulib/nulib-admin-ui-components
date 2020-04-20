A primary button indicates high priority action. Only one primary button should exist on a screen.

```js static
import { Button } from "nulib-admin-ui-components";
```

```jsx padded
<PrimaryButton>Do something</PrimaryButton>
<PrimaryButton disabled>Disabled until form validated</PrimaryButton>
<PrimaryButton onClick={() => alert("Clicked")}>Click Me</PrimaryButton>
```

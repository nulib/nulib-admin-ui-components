A tag or badge to display information. React component `props`, or element `attributes` will be passed through to the Button component.

When writing tests in your apps, you can pass through a testing handle attribute like `data-testid="buttom-form-submit"` to the component.

```js static
import { Tag } from "@nulib/admin-react-components";
```

```jsx padded
<Tag data-testid="tag-published">Standard tag</Tag>
<Tag isDanger>Private</Tag>
<Tag isWarning>Unpublished</Tag>
<Tag isInfo>General info</Tag>
<Tag isPrimary>Primary</Tag>
```

A notification React component. Any additional `props` will be passed through to the component.

When writing tests in your apps, you can pass through a testing handle attribute like `data-testid="my-notification"` to the component.

```js static
import { Notification } from "@nulib/admin-react-components";
```

```jsx padded
<Notification data-testid="tag-published">Default notification</Notification>
<Notification isDanger>Warning: You're about to delete 324 Works from the Collection</Notification>
<Notification isWarning>WorkType video not yet supported</Notification>
<Notification isInfo isCentered>I'm a centered info notification</Notification>
<Notification isPrimary>I'm a primary color notifcation used for something purple</Notification>
<Notification isSuccess>Successful import of 1348 items via the batch edit job.</Notification>
```

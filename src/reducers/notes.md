The reducers take care of creating a new state when an action is dispatched. In particular:

1. when a message is added by us, we add it to the (local) list of messages
2. when we receive a message from the server, we add it to our list of messages
3. when we add a user (ourselves), we put it in the users list
4. when we get an updated users list from the server, we refresh
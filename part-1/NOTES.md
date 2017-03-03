React in 30 mins

### Hackalong

FIRST EVERYONE NEEDS TO GIT PULL AND RUN NPM INSTALL AGAIN

1. Render a component [functional]

Everyone should have *something* rendering on the screen greeting someone

2. Render another component [component composition]

Everyone should break their app into two components - `Greeting` and `NameMapper`

3. Understand props [map props]

Share the name as a variable from our App component

4. State via classes [unidirectional vs traditional]

Add an input to our App which stores the given name

### Exericse

1. now `import {sendMessage, subscribe} from './magic'`. everyone should allow the user to send
a message when a button is clicked and re render the app as messages are received and display them

2. Display the messages in your app

3. Allow the user to type a message and send it!

4. Make sure you're showing all the data! You can show `name`, `message` and `image`!

5. Why not use your old `NameMapper` component to show names on messages? :eyes:

How to import?

```
import {sendMessage, subscribe} from './magic';
```

How do I use `subscribe`?

```
// replace your old render with this
subscribe(function(messages) {

  ReactDOM.render(
    <App messages={messages} />,
    document.getElementById('root')
  );

});
```

What does `sendMessage` take?

```
type sendMessage = (name: string, message: string) => void;
```

What does `messages` look like?

```
type messages = [
  name: string,      // author name
  message: string,   // message contents
  image: string      // url of generated image
]
```

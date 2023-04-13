# google_sign_in_with_react
A basic React Component to Integrate Google Sign_in in ReactJs

## Install

```bash
npm install --save google_sign_in_with_react
```

## Prerequisites
This package needs Google's scripts to be in your index.html. So, include the following script in your index.html file.
```html
<script type="text/javascript" src="https://accounts.google.com/gsi/client"></script>
```



## Usage

```jsx
import React, { Component } from 'react'

import MyGoogle from 'google_sign_in_with_react'
import 'google_sign_in_with_react/dist/index.css'

class Example extends Component {
  render() {
    return <MyGoogle ClientId="<your client id>" localStorage/>
  }
}
```

## Props to be passed

1. ClientId(Mandatory): Pass your Google ClientId as a prop

EX:

```jsx
<MyGoogle ClientId="<your client id>" localStorage/>
```

2. localStorage(Optional): Saves the user details to the Browsers Local Storage

EX:

```jsx
<MyGoogle ClientId="<your client id>" localStorage/>
```

3. handleResponse(Optional): A callback function is to passed in handleResponse prop

EX:

```jsx
let handleCallback=(response)=>{
  console.log(response);
}
<MyGoogle ClientId="<your client id>" handleResponse={handleCallback}/>
```

4. redirect(optional): Pass a path in redirect prop if you want to naviagte to another route(uses React useNavigate).

EX:

```jsx
<MyGoogle ClientId="<your client id>" redirect="/profile"/>
```

5. briefConsoleLog(optional): Pass this prop if you want to see user details in ConsoleLog.

EX:

```jsx
<MyGoogle ClientId="<your client id>" briefConsoleLog/>
```

## License

MIT © [VinodKumarBethi](https://github.com/VinodKumarBethi)

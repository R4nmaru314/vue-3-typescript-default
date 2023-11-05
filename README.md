# vue-3-typescript-default

## Project Explanation
This is the default vue-3-typescript setup that i use for my projects.


### Features

- Router
- vuex-class-module (@Module, @Mutation, @Action)
- vue-facing-decorator (@Component, @Watch, @Prop etc... )
- axios and vue-axios to call backend services
- service worker
- env.files
- vue.config.js with proxy development setup

### vuex-class-module Usage
for everyStore attribute create Mutation, Action and Getter methods (eg. example-store)

import store module
```
import {exampleStoreModule} from "@/store/example/example-store";
```
use store module
```
 exampleStoreModule.actionSetHelloWorld(this.text);
 exampleStoreModule.getHelloWorld
```

### vue-facing-decorator Usage 
Declare used Components in Components Annotation
```
@Component({
  components: {HelloWorldComponent}
})
```

watch values with Watch Anntotation
```
@Watch('date')
```

use prop values with Props Annotation
```
@Prop() msg!: string;
```

for computed values use get keyword
```
get text() {
    exampleStoreModule.actionSetHelloWorld(this.textInput);
    return exampleStoreModule.getHelloWorld
}
```

### vue.config.js Usage 
change vue.config.js file to call local backend services for local development
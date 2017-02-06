# vanilla-typescript
Provides some structure to vanilla typescript applications.

# Is this a framework?
Nope, this is just to provide some little level of common sense to the wild west of vanillajs.

# Community support
Come and join us in the Vanilla-javascript&typescript [discord server](https://discord.gg/9T8t7Q6)

#usage

`npm install --save-dev vanilla-typescript`

this will allow you to do this when creating a component:

```js

import {IComponent} from 'vanilla-typescript'

export default class SmartTerminal implements IComponent{

constructor(contentFunction:()=>void,onDestroyFunction:()=>void){

}

  show():void{

  },

  destroy():void {
    //todo
  }

}

```


# Poppet.js

#### A platform agnostic popup plugin

### Usage:

```
Poppet.alert()
Poppet.input()
Poppet.list()
Poppet.toast()
```

#### Alert:

```
Poppet.alert( MainText :string )
    .then
    .catch
```

#### Input:

```
Poppet.input( MainText :string, InputPlaceholder :string )
    .then
    .catch
```

#### List:

```
const listItemsList =[
    new Poppet.ListItem( itemLabel :string, itemValue :any)
    ...
]

Poppet.list( [ ListItems :ListItem ], { 
    mainText :string
    multiSelect :boolean
 } )
    .then
    .catch
```

#### Toast:

```
Poppet.toast( MainText :string, {
    duration :number,
    style :enum['default', 'good', 'bad', Hexcode]
} )
    .then
    .catch
```
# Curso FullstackJS
## branas.io
```
yarn init -y

yarn add typescript ts-node

npx tsc --init
```

rodar:
```
 npx ts-node src/main.js
```


Não precisa identificar nesses casos
```
const email: string = "hi@hey.com"
const grande: number = 10

```

Opcional:
```
atributoOpcional?: <tipo>
```


Type:
```
type Name = string;
type Age = number;
type Person = {name: Name, age: Age}
```


Tuplas:
```
let point_2D: [number, number] = [10, 10]
let point_3D: [number, number, number] = [10, 10, 10]
```

#### Modificadores de visibilidade

- public (padrão)
- private (ou #)
- protected


Demo of @ionic/vue bug

## To reproduce

1. git clone ...
2. `npm i`
3. `npx vue-tsc --noEmit`

## Expected

no errors

## Actual

```
src/views/AboutPage.vue:4:25 - error TS2322: Type 'string' is not assignable to type 'Symbol'.

4             <ion-button router-link="/">
                          ~~~~~~~~~~~

  node_modules/@stencil/vue-output-target/dist/types.d.ts:84:5
    84     routerLink?: Symbol;
           ~~~~~~~~~~
    The expected type comes from property 'routerLink' which is declared here on type '{ buttonType?: string | undefined; color?: Color | undefined; disabled?: boolean | undefined; download?: string | undefined; expand?: "full" | "block" | undefined; fill?: "default" | "clear" | "outline" | "solid" | undefined; ... 14 more ...; routerLink?: Symbol | undefined; } & VNodeProps & AllowedComponentProps & ...'

src/views/HomePage.vue:4:25 - error TS2322: Type 'string' is not assignable to type 'Symbol'.

4             <ion-button router-link="/about">
                          ~~~~~~~~~~~

  node_modules/@stencil/vue-output-target/dist/types.d.ts:84:5
    84     routerLink?: Symbol;
           ~~~~~~~~~~
    The expected type comes from property 'routerLink' which is declared here on type '{ buttonType?: string | undefined; color?: Color | undefined; disabled?: boolean | undefined; download?: string | undefined; expand?: "full" | "block" | undefined; fill?: "default" | "clear" | "outline" | "solid" | undefined; ... 14 more ...; routerLink?: Symbol | undefined; } & VNodeProps & AllowedComponentProps & ...'


Found 2 errors in 2 files.

Errors  Files
     1  src/views/AboutPage.vue:4
     1  src/views/HomePage.vue:4
```
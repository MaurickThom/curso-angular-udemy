# **Ciclo de vida de un componente en Angular**

- ngOnchanges           : Cuando la data de las propiedades relacionadas cambian
- ngOnInit              : Cuando el componente está inicializado o despues del primer ngOnChanges .Se ejecuta luego del constructor,cuando el componente ya esté cargado .
- ngDoCheck             : Se dispara durante cada revisión del ciclo de detección de cambios
  - ngAfterContentInit    : Despues de insertar algún tipo de contenido (`<app-pagina></app-pagina>`)
  - ngAfterContentChecked : Después de la revisón del contenido insertado
  - ngAfterViewInit       : Después de la inicialización del componente/hijos
  - ngAfterViewChecked    : Después de cada revisión de los componentes/hijos
- ngOnDestroy           : Justo **`antes`** que se destruya el componente o directiva

> *Auth0: Podremos autenticar con servicios como Facebook,Twitter y Google*
> *Guard*
> *ng g i models/IUser interface* -> iuser.interface.ts objetivo IUser.interface.ts

## *Tipos de Validaciones*

Las validaciones se usan mucho en los formularios , y para aquellos existen tres tipos.

- Form con NgModel : `([ngModel])="user.name"`
- Forms con Templates : La lógica está dentro del template, se hace mas complejo y menos escalable
  - `<form #f="ngForm"> </form>`
- Forms con FormBuilder : Deja la lógica en archivo correspondiente de ts del componente y es escalable

```typescript
    // FormBuilder
    this._formGroup = this._builder.group({
      name:['',Validators.required],
      user:['',Validators.required],
      email:['',
        Validators.compose(
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
          ]
        )
      ],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
```

### **Validaciones sincronas y asincronas**

- Sincronas : Cuando el value del input no se necesita validar al momento de digitar
- Asincronas : Cuando el value del input se necesita validar al momento de digitar

```typescript
    {
        email:['',[validaciones sincronas],[validaciones asincronas]]
    }
    // Un ejemplo para la validacion asincrona puede ser si el email 
    // existe o no existe en la base de datos
```

## **Referencias**

- [Ciclo de vida I](https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688)
- [Ciclo de vida II](https://www.youtube.com/watch?v=I2niAQioGvI)
- [Ciclo de vida III](https://angular.io/guide/lifecycle-hooks)
- [Auth0](https://www.infobae.com/economia/finanzas-y-negocios/2019/05/25/el-guardian-de-los-passwords-la-historia-de-auth0-la-startup-que-ya-vale-usd-1-100-millones-y-es-el-quinto-unicornio-argentino/)
- [Guard](https://codingpotions.com/angular-seguridad)
- [Validaciones asincronas](https://manticore-labs.com/2019/02/24/validaciones-asincronas-customizadas-en-angular/)
- [Rest API Auth Firebase](https://firebase.google.com/docs/reference/rest/auth)
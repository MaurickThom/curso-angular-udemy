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

## **JSONP**

Es una tecnica de comunicación que nos permite evitar una restricción
que surge al hacer una petición a un servicio en otro dominio.

JSON con padding y JSON a secas son los mismo y lo único que los
diferencia son la envoltura de la data. JSON lo envuelve como todos
sabemos en objeto de javascript (serializa la informacion en un
formato clave valor) , mientras que JSONP lo envuelve en una función,
normalmente llamada `callback`. JSONP esta ligado a javascript del
lado del cliente.

Por un lado tenemos a un servicio REST publico o privado de un tercero 
y por otro tendremos nuestro cliente web que hará una petición no 
mediate ajax sino mediante un script como parámetro se le enviara un
callback y el servicio retornara un script con la invocación de la 
información

## **Diferencia de funcionalidades entre JSON y JSONP**

Su metodología está creada para suplir la limitación de AJAX entre dominios, en la que solo se pueden realizar, por razones de seguridad,  peticiones entre
las páginas de un mismo dominio y puerto. Aunque esto se consigue activando la configuración Cross-origin resource sharing (CORS), también puede solucionarse,
independientemente de la configuración del servidor, a través del uso de JSONP.

Pero en un dominio donde no este habilitado o configurado CORS esto puede ser un dolor de cabeza al usar el API de un tercero para esto existe JSONP
La solución es solicitando un script de javascript.

Por ejemplo, desde mi página parzibyte.me no puedo hacer peticiones AJAX a googleapis.com pero sí puedo solicitar un script de JavaScript para una librería:

````html
<script src="http://example.com/otro/dominio"></script>
<script type="text/javascript" src="http://servidor.ejemplo.com/datos.json?callback=parseJSON"></script>
````

Entonces, con este principio, se puede saltar la restricción de que no se pueden hacer peticiones a otros dominios, pues aunque las peticiones AJAX están denegadas a otros dominios, la carga de scripts no.

````html
  <script>
    function loadScript (id, src, callback) {
        // Crear elemento
        var script = document.createElement("script");
        // Atributos del script
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", src + "?callback=" + callback);
        script.setAttribute("id", id);
        // Insertar script en la cabecera
        document.getElementsByTagName("head")[0].appendChild(script);

    }
  </script>
````

### **Ejemplo Practivo**

API a consumir mediate JSONP sera JSONPlaceholder `https://jsonplaceholder.typicode.com/users`

````html
  <script>
    function loadScript (data) {
       console.log(data);
    }
  </script>
  <script type="text/javascript" src="https://jsonplaceholder.typicode.com/users?callback=loadScript"></script>
````

## **Referencias**

- [Ciclo de vida I](https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688)
- [Ciclo de vida II](https://www.youtube.com/watch?v=I2niAQioGvI)
- [Ciclo de vida III](https://angular.io/guide/lifecycle-hooks)
- [Auth0](https://www.infobae.com/economia/finanzas-y-negocios/2019/05/25/el-guardian-de-los-passwords-la-historia-de-auth0-la-startup-que-ya-vale-usd-1-100-millones-y-es-el-quinto-unicornio-argentino/)
- [Guard](https://codingpotions.com/angular-seguridad)
- [Validaciones asincronas](https://manticore-labs.com/2019/02/24/validaciones-asincronas-customizadas-en-angular/)
- [Rest API Auth Firebase](https://firebase.google.com/docs/reference/rest/auth)
- [JSONP](https://parzibyte.me/blog/2019/07/17/jsonp-definicion-diferencia-ejemplos-usos/)
- [cross-domain](http://www.cantabriatic.com/cross-domain-y-peticiones-ajax-limitacion-o-seguridad/)

> Esta documentación poco formal se hice escuchando esta super rola [*Nameless World*](https://www.youtube.com/watch?v=_PbbeqYRHV4)
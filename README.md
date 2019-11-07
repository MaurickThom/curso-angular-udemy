# **Ciclo de vida de un componente en Angular**

- ngOnInit              : Cuando el componente está inicializado o despues del primer ngOnChanges .Se ejecuta luego del constructor,cuando el componente ya esté cargado .
- ngOnchanges           : Cuando la data de las propiedades relacioandas cambian
- ngDoCheck             : Se dispara durante cada revisión del ciclo de detección de cambios
- ngAfterContentInit    : Despues de insertar algún tipo de contenido (`<app-pagina></app-pagina>`)
- ngAfterContentChecked : Después de la revisón del contenido insertado
- ngAfterViewInit       : Después de la inicialización del componente/hijos
- ngAfterViewChecket    : Después de cada revisión de los componentes/hijos
- ngOnDestroy           : Justo **`antes`** que se destruya el componente o directiva

## **Referencias**

- [Ciclo de vida](https://medium.com/angular-chile/angular-componentes-y-sus-ciclos-de-vida-aa639e13a688)

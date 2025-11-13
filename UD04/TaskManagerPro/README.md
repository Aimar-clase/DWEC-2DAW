
# Task Manager Pro

Este es un proyecto sobre la practica Taks manager pro en la que he creado un gestor de tareas que gestiona cada tarea y se añade al localstorage y al listado de tareas.

Tambien gestiono los errores del formulario, los checkbox de las tareas y los botones para borrar cada tarea individualmente.

## Arbol de archivos
```
.
├── js
│   ├── localstorage
│   │   └── storage.js
│   ├── models
│   │   └── task.js
│   ├── patterns
│   │   ├── filtro.js
│   │   └── task-manager.js
│   ├── ui
│   │   └── dom-facade.js
│   ├── validation
│   │   └── task-validation.js
│   └── main.js
├── index.html
├── LICENSE
├── README.md
└── style.css
```

## Logica de archivos
El principal objetivo de esta tarea ha sido gestionar cada logica por separado y agregar distintos patrones de diseño.

### storage.js
En este archivo he gestionado la logica del local y session storage con una clase llamada **StorageManager** que tiene diferentes metodos para añadir, eliminar, actualizar diferentes tareas / errores.

### task.js
Es la clase de las tareas que tiene los atributos que tendra cada tarea.

### filtro.js
Es la clase encargada de hacer los filtros de las tareas usando un patron de diseño Strategy

### task-manager.js
Es la clase encargada de gestionar toda la logica de todas las clases en una sola y para asegurarme que no se instancia varias veces he utilizado el patron de diseño Singleton

### dom-facade.js
Esta es una clase para gestionar todo lo que tiene que ver con el DOM para ello he utilizado el patron de diseño Facade para utilizar de forma sencilla la logica del DOM

### task-validation.js
Es mi archivo donde hago las validaciones de los valores que manda el usuario por el formulario.

### main.js

Es el archivo principal donde gestiono los botones, eventos ect... y es lo que se comunica con el task manager para hacer distintas tareas segun el evento.





## Patrones de diseño implementados
### Patron de diseño Creacional
Para el patron de diseño creacional he seleccionado el **Singleton** sobre la clase TaskManager para que solo pueda existir una sola instancia de la case manager.

### Patron de diseño Estructural
Para este tipo de patron he seleccionado el **Facade** sobre la clase DOMFacade para simplificar las operaciones del DOM.

### Patron de diselo Comportamental
Para este patron he seleccionado el **Strategy** para la clase Filtro para poder intercambiar estrategias de filtrado para las tareas.

## Instrucciones para Ejecutar el Proyecto

### **Requisitos previos**
- Navegador web moderno (Chrome, Firefox, Edge o Safari)
- Visual Studio Code (opcional, para usar Live Server)

---

### **Opción 1: Abrir directamente en el navegador**

1. Descarga o clona el repositorio en tu equipo
2. Navega hasta la carpeta del proyecto
3. Localiza el archivo `index.html`
4. Abre el archivo con tu navegador:
   - **Doble clic** sobre `index.html`, o
   - **Clic derecho** → "Abrir con" → Selecciona tu navegador, o
   - **Arrastra** el archivo hacia la ventana del navegador

> ⚠️ **Nota:** Algunos navegadores pueden tener restricciones con módulos ES6 al abrir archivos directamente (`file://`). Si experimentas problemas o errores CORS, usa la Opción 2.

---

### **Opción 2: Usar Live Server (Recomendado)**

#### **Con Visual Studio Code:**

1. **Instala la extensión Live Server:**
   - Abre Visual Studio Code
   - Ve a la pestaña de extensiones (Ctrl+Shift+X / Cmd+Shift+X)
   - Busca "Live Server" de Ritwick Dey
   - Haz clic en "Instalar"

2. **Ejecuta el proyecto:**
   - Abre la carpeta del proyecto en VS Code
   - Clic derecho sobre `index.html`
   - Selecciona **"Open with Live Server"**
   - El proyecto se abrirá automáticamente en tu navegador predeterminado (normalmente en `http://127.0.0.1:5500`)

3. **Recarga automática:**
   - Live Server recargará automáticamente la página cada vez que guardes cambios en los archivos

![BrightCoders Logo](../img/logo.png)

# 🥷 Reto de Programación

- **Organización.** [Equipo (3-4 integrantes)](https://github.com/BrightCoders-Institute/handbook/wiki/Actividades#actividades-en-equipo-sincr%C3%B3nicas)
- **Modo.** [Síncrono](https://github.com/BrightCoders-Institute/handbook/wiki/Actividades#actividades-en-equipo-sincr%C3%B3nicas)
- **Estrategia.** [Mob programming](https://github.com/BrightCoders-Institute/handbook/wiki/Mob-Programming)
- **Duración.** 20 días (4 sprints de 5 días)
- **Dedicación.** 2.5 horas diarias (50 horas en total)

# App reservación de vuelos

- [🎯 Objetivo](#-objetivo)
- [:runner: Desarrollo ágil](#runner-desarrollo-ágil)
- [📋 Instrucciones](#-instrucciones)
- [📥 Entregables](#-entregables)
- [🛠 Tecnologías](#-tecnologías)
- [:computer: Requerimientos funcionales](#computer-requerimientos-funcionales)
  - [Diseño](#diseño)
- [🚨 Requerimientos no-funcionales](#-requerimientos-no-funcionales)
- [:bulb: Flujo de trabajo sugerido](#bulb-flujo-de-trabajo-sugerido)
- [✅ Indicadores de cumplimiento](#-indicadores-de-cumplimiento)
- [📚 Recursos](#-recursos)
  
# 🎯 Objetivo

Esta actividad tiene compo objetivos:

1. Aprender los fundamentos de React Native: La aplicación te permitirá familiarizarte con los conceptos básicos de React Native, como los componentes, el enrutamiento, el manejo de estados y la estructura de la aplicación. Podrás aprender cómo crear una interfaz de usuario nativa para dispositivos móviles utilizando JavaScript.

2. Practicar el desarrollo de aplicaciones móviles multiplataforma: React Native te permite crear aplicaciones para iOS y Android utilizando una base de código compartida. Al desarrollar esta aplicación, podrás aprender cómo aprovechar las ventajas de la multiplataforma y cómo adaptar la interfaz de usuario y las funcionalidades para funcionar en diferentes sistemas operativos.

3. Trabajar con Firebase: El uso de Firebase para el registro de usuarios, autenticación y almacenamiento de datos te brindará la oportunidad de aprender cómo integrar servicios de backend en una aplicación React Native. Podrás aprender a interactuar con una base de datos en tiempo real y autenticar usuarios utilizando Firebase.

4. Implementar características de autenticación y registro de usuarios: Al desarrollar las funcionalidades de registro e inicio de sesión, podrás aprender cómo implementar sistemas de autenticación utilizando diferentes métodos, como correo y clave o inicio de sesión con Google. Podrás adquirir experiencia en el manejo de datos de usuario, validación de formularios y almacenamiento seguro de información de inicio de sesión.

5. Practicar el manejo de estados en React Native: Al permitir a los usuarios ver y agregar reservaciones, tendrás la oportunidad de practicar el manejo de estados en React Native. Podrás aprender a administrar los datos de reserva, actualizar la interfaz de usuario en función de los cambios de estado y enviar y recibir datos desde Firebase.

6. Mejorar las habilidades de diseño de interfaces de usuario: Al apegarte a un diseño proporcionado para los formularios y las pantallas de listado, podrás practicar tus habilidades de diseño de interfaces de usuario en React Native. Podrás aprender a utilizar bibliotecas de componentes visuales, aplicar estilos personalizados y crear una experiencia de usuario atractiva y coherente.

7. Practicar el desarrollo guiado por pruebas (TDD): Al desarrollar esta aplicación, podrás practicar el desarrollo guiado por pruebas (TDD) utilizando Jest. Podrás aprender a escribir pruebas unitarias y de integración para las funcionalidades de la aplicación y a utilizar herramientas como Codacy, CodeClimate y CodeCov para evaluar la calidad del código.

# :runner: Desarrollo ágil

En este proyecto vamos a utilizar un flujo de trabajo ágil basado en Scrum. Para ello vamos a utilizar la herramienta GitHub Projects. El flujo de desarrollo ágil que vamos a seguir es el que [se detalla aquí](agile.md).

Temas relevantes:

- [Guía para el desarrollo ágil](agile.md)
- [Guía para la creación del Project Planner](project-planner.md)
- [Ceremonia de planeación del sprint](#02-ceremonia-de-planeación-del-sprint)
- [Guía para la definición de los objetivos del sprint](milestones.md)
- [Guía para la creación de las tareas ó issues](#issues.md)
- [Flujo de trabajo ágil](#03-flujo-de-trabajo)
- [Demo o presentación de avances](#04-demo-o-presentación-de-avances)

# 📋 Instrucciones

- El equipo deberá trabajar de manera colaborativa aplicando la dinámica de mob programming para desarrollar la aplicación móvil.
- Durante el proceso de desarrollo en Github, se debe garantizar la participación de todos los miembros del equipo.
- En cada commit realizado en el repositorio de Github, es necesario registrar a todos los participantes activos como co-autores (co-author commits) para documentar su contribución.
- Al realizar los commits, es importante aplicar los conceptos relacionados con los commits significativos, asegurándose de que cada commit represente un cambio lógico y coherente en el código.
- Para fomentar la colaboración y distribuir las responsabilidades, se recomienda rotar la persona encargada de hacer los commits, de manera que no siempre sea la misma persona la que realice los commits. Esto ayudará a garantizar la participación equitativa de todos los miembros del equipo y promoverá un mayor nivel de conocimiento compartido en el proyecto.

# 📥 Entregables

1. Código fuente en el repositorio:
   - Subir el código fuente completo de la aplicación en el repositorio designado.
   - Organizar el código de manera estructurada y legible, siguiendo las mejores prácticas de desarrollo.
   - Asegurar que el código esté actualizado y refleje la versión final de la aplicación.

2. Archivo README.md actualizado:
   - Actualizar el archivo README.md con información relevante sobre el proyecto.
   - Incluir instrucciones claras y detalladas sobre cómo configurar y ejecutar la aplicación.
   - Proporcionar una descripción concisa de la funcionalidad y características clave de la aplicación.
   - Documentar los requisitos de instalación y las dependencias necesarias.
   - Proporcionar ejemplos de uso y capturas de pantalla si es posible.
   - Incluir información sobre cómo contribuir al proyecto y cómo ponerse en contacto con el equipo de desarrollo.

3. Pruebas unitarias:
   - Desarrollar y agregar pruebas unitarias para todas las funcionalidades y componentes principales de la aplicación.
   - Asegurar que las pruebas cubran los casos de uso más importantes y los posibles escenarios de error.
   - Ejecutar las pruebas para verificar que todas las funcionalidades estén implementadas correctamente y sin errores.
   - Incluir los resultados de las pruebas en la documentación y el informe final.

4. Puntuación de los analizadores de código estático:
   - Configurar y ejecutar herramientas de análisis de código estático como Codacy, CodeClimate o similares.
   - Asegurarse de obtener una puntuación de A (o equivalente) en la evaluación realizada por estas herramientas.
   - Resolver los problemas y sugerencias identificados por los analizadores de código estático para mejorar la calidad del código.
   - Incluir los badges o insignias correspondientes en el archivo README.md, mostrando la puntuación y el estado actual del análisis de código estático.

5. Versión final en la rama principal:
   - Asegurarse de que la versión final y estable del código esté fusionada y disponible en la rama principal del repositorio.
   - Realizar una revisión final para verificar que todos los cambios y actualizaciones estén reflejados correctamente en la rama principal.
   - Actualizar el archivo README.md para indicar claramente que la versión en la rama principal es la versión final y estable del código.

# 🛠 Tecnologías

- JavaScript o TypeScript
- React Native
- Firebase
- ESLint (para mantener un estilo de código estandarizado)
- Jest (para realizar pruebas unitarias)
- Codacy, CodeClimate, CodeCov (herramientas de análisis de código estático)

# :computer: Requerimientos funcionales

La empresa ABC Corp requiere una App para que sus clientes puedan registrar las reservaciones de sus vuelos. 
  
La aplicación deberá incluir:

1. Registro de usuarios:
   - El sistema debe permitir que los nuevos usuarios se registren proporcionando su nombre, correo electrónico y contraseña, o utilizando su cuenta de Google.
   - Los datos de registro de los usuarios deben ser almacenados en Firebase.
   - El formulario de registro debe incluir validaciones para garantizar la integridad de los datos ingresados.
   - El diseño del formulario de registro debe seguir las pautas y especificaciones proporcionadas.

2. Inicio de sesión de usuarios registrados:
   - Los usuarios registrados deben poder iniciar sesión utilizando su correo electrónico y contraseña, o mediante su cuenta de Google, dependiendo del método de registro que hayan utilizado.
   - El sistema debe verificar y acceder a los datos almacenados en Firebase para autenticar el inicio de sesión.
   - El formulario de inicio de sesión debe contar con validaciones para asegurar la correcta autenticación de los usuarios.
   - El diseño del formulario de inicio de sesión debe seguir las pautas y especificaciones proporcionadas.

3. Visualización de reservaciones de vuelos:
   - Los usuarios deben poder ver un listado que muestre la información de sus reservaciones de vuelos.
   - La información de las reservaciones debe ser recuperada desde Firebase.
   - El diseño del listado de reservaciones debe seguir las pautas y especificaciones proporcionadas.

4. Agregar nuevas reservaciones de vuelos:
   - Los usuarios deben poder agregar nuevas reservaciones proporcionando los detalles del vuelo, incluyendo origen, destino, fecha y número de pasajeros.
   - La información de las nuevas reservaciones debe ser guardada en Firebase.
   - El diseño para el proceso de creación de nuevas reservaciones debe seguir las pautas y especificaciones proporcionadas.

Nota: Los requerimientos mencionados son de naturaleza genérica, ya que el proyecto se trata de un MVP (Producto Mínimo Viable). Se espera que la funcionalidad cumpla con los requisitos mínimos necesarios para cumplir su función principal, sin requerir una complejidad excesiva en su implementación.

## Diseño

En la carpeta [design](/design) de este repositorio se encuentra el diseño solicitado en formato PNG e [InVision](https://www.invisionapp.com/) para que puedas visualizarlo y descargarlo.

# 🚨 Requerimientos no-funcionales

Requerimientos adicionales:

- **Base de datos**:
  - Los datos de las reservaciones de vuelos se guardarán en Firebase o una plataforma similar.
  - Se debe implementar la integración con Firebase para almacenar y recuperar la información de las reservaciones.

- **Calidad**:
  - El código de la aplicación debe seguir un estilo de código estandarizado, que será revisado y asegurado utilizando Eslint u otras herramientas similares.
  - Se deben incluir pruebas unitarias exhaustivas para garantizar la calidad del código y minimizar errores.
  - Se debe alcanzar una puntuación **A** en herramientas de análisis de código estático como CodeClimate o equivalentes. Esto implica mantener un código limpio, legible y bien estructurado.

- **Ejecución**:
  - La aplicación debe ser compatible con los sistemas operativos Android e iOS para brindar una experiencia de usuario amplia.
  - Se deben realizar pruebas exhaustivas en ambos sistemas para garantizar un funcionamiento correcto y sin problemas.

- **Diseño**:
  - El diseño de la aplicación, incluyendo los formularios, listados y otros elementos visuales, debe seguir las pautas y especificaciones proporcionadas, asegurando una apariencia profesional y coherente en toda la aplicación.

- **Código fuente**:
  - El código debe seguir una estructura orientada a objetos, siguiendo las mejores prácticas de programación.
  - Los métodos y funciones deben ser de tamaño pequeño y seguir principios de responsabilidad única.
  - Se deben aplicar los principios SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) para garantizar un código modular, flexible y fácil de mantener.

- **Manejo del estado**:
  - Utilizar Hooks, Redux, Context API u otra biblioteca similar para gestionar el estado de la aplicación, permitiendo un flujo de datos coherente y predecible entre los diferentes componentes.

# :bulb: Flujo de trabajo sugerido

A continuación se presenta un flujo de trabajo sugerido para el desarrollo de la aplicación. Si el equipo decide seguir otro enfoque, es válido siempre y cuando se logre el mismo resultado:

1. **Configuración del entorno de desarrollo:**
   - Instalar Node.js y npm (Node Package Manager) si no están instalados.
   - Instalar React Native CLI globalmente en tu sistema.
   - Configurar el entorno de desarrollo para iOS y/o Android, según los sistemas operativos que deseas soportar.
   - Crear un nuevo proyecto de React Native utilizando el CLI de React Native.

2. **Análisis y planificación:**
   - Revisar los requerimientos funcionales y realizar un análisis detallado.
   - Identificar los componentes principales de la aplicación, como el formulario de registro, formulario de inicio de sesión, listado de reservaciones y formulario de creación de reservaciones.
   - Diseñar la estructura de navegación de la aplicación, determinando las pantallas y las rutas necesarias para la interacción del usuario.

3. **Diseño de la interfaz de usuario:**
   - Utilizar herramientas de diseño, como Sketch o Figma, para crear los diseños de las pantallas y formularios según las especificaciones proporcionadas.
   - Descomponer los diseños en componentes de React Native y establecer una estructura de carpetas adecuada para los archivos de código fuente.

4. **Implementación de componentes y lógica de la aplicación:**
   - Crear los componentes necesarios para cada pantalla y formulario, utilizando los elementos de interfaz de usuario proporcionados por React Native o bibliotecas adicionales.
   - Implementar la lógica de la aplicación, como el manejo de eventos, validaciones de formulario y llamadas a la API de Firebase.
   - Utilizar los Hooks de React, como useState y useEffect, para administrar el estado de la aplicación y realizar efectos secundarios cuando sea necesario.

5. **Integración con Firebase:**
   - Configurar la integración con Firebase en la aplicación, incluyendo la autenticación de usuarios y la interacción con la base de datos en tiempo real.
   - Utilizar la API de Firebase para realizar operaciones de registro, inicio de sesión y almacenamiento/recuperación de datos de reservaciones.

6. **Pruebas y depuración:**
   - Realizar pruebas exhaustivas en la aplicación para asegurar que cumpla con los requerimientos funcionales.
   - Utilizar herramientas de depuración, como el depurador de React Native o herramientas de inspección de Firebase, para identificar y corregir posibles errores o problemas en el código.

7. **Optimización y rendimiento:**
   - Realizar mejoras de rendimiento, como la optimización de imágenes, el uso de la memoria y la carga diferida de datos.
   - Implementar técnicas de almacenamiento en caché para mejorar la velocidad de la aplicación y reducir las llamadas a la API de Firebase.

# ✅ Indicadores de cumplimiento

1. **Dominio de React Native:**
   - ¿Los participantes han adquirido conocimientos prácticos en el desarrollo de aplicaciones móviles utilizando React Native?
   - ¿Son capaces de crear componentes reutilizables y utilizar el modelo de programación por componentes de React Native?
   - ¿Han demostrado comprensión de los conceptos fundamentales de React Native, como el enrutamiento de navegación y el manejo de estado?

2. **Desarrollo de interfaces interactivas y atractivas:**
   - ¿Los participantes son capaces de diseñar y construir pantallas interactivas y atractivas para aplicaciones móviles?
   - ¿Han utilizado correctamente los componentes de React Native para crear interfaces intuitivas y visualmente atractivas?
   - ¿Han aplicado principios de diseño de UI/UX para mejorar la experiencia del usuario?

3. **Trabajo en equipo y colaboración mediante Mob Programming:**
   - ¿El equipo ha trabajado de manera colaborativa aplicando la dinámica de Mob Programming?
   - ¿Todos los miembros del equipo han participado activamente en la programación conjunta y se han turnado en la tarea de realizar commits en el repositorio de código?
   - ¿La colaboración y el trabajo en equipo han sido efectivos para desarrollar la aplicación móvil?

4. **Aplicación de buenas prácticas de desarrollo de software:**
   - ¿Se han aplicado buenas prácticas de desarrollo de software, como el uso de herramientas de análisis de código estático (Codacy, CodeClimate, CodeCov)?
   - ¿El código fuente cumple con los estándares de calidad y está organizado de manera estructurada y legible?
   - ¿Se han seguido los principios SOLID en el diseño y la implementación del código fuente?

5. **Desarrollo de pruebas unitarias:**
   - ¿Se han desarrollado pruebas unitarias exhaustivas que cubren todas las funcionalidades y componentes principales de la aplicación?
   - ¿Las pruebas unitarias son efectivas para garantizar la funcionalidad y la robustez de la aplicación móvil desarrollada?
   - ¿Se han utilizado herramientas y frameworks de pruebas adecuados para React Native, como Jest?

6. **Uso correcto de herramientas de control de versiones (Git y GitHub):**
   - ¿Se ha utilizado correctamente Git y GitHub para el control de versiones y la colaboración en el proyecto?
   - ¿Se han realizado commits con co-autores para reconocer la contribución de múltiples personas en el desarrollo del proyecto?
   - ¿El repositorio en GitHub refleja el progreso y las contribuciones de todos los miembros del equipo?

7. **Cumplimiento de los requerimientos funcionales y no funcionales:**
   - ¿La aplicación móvil cumple con todos los requerimientos obligatorios establecidos, como la visualización de recetas, la pantalla principal y la pantalla de detalle?
   - ¿Se han considerado e implementado correctamente los elementos opcionales, como la búsqueda, los comentarios, la opción de guardar recetas, etc.?
   - ¿Se ha cumplido con los requerimientos no funcionales, como la lectura de datos desde un archivo JSON, la calidad del código y la ejecución en sistemas operativos Android y/o iOS?

# 📚 Recursos

- [Trabajo por componentes](https://brightcoders-2.gitbook.io/brightcoders-handbook/recursos/react-native/fundamentos#trabajo-por-componentes)
- [CLI, React Navigation, Hooks y Debugging](https://brightcoders-2.gitbook.io/brightcoders-handbook/recursos/react-native/fundamentos#otros-temas)
- [Herramientas para evaluar la calidad del código](https://brightcoders-2.gitbook.io/brightcoders-handbook/recursos/react-native/herramientas#calidad-del-codigo)
- [Código limpio: principios](https://brightcoders-2.gitbook.io/brightcoders-handbook/codigo-limpio/principios)

export default {
  cart: [],
  asks: [
    {
      title: "¿Qué es y para qué utilizar el code review?",
      value: `
        La revisión del código ayuda a los desarrolladores a aprender la base de código, así como a utilizar nuevas tecnologías y técnicas que aumentan sus habilidades. Las revisiones del código deben integrarse con el proceso actual del equipo. Por ejemplo, si un equipo sigue flujos de trabajo de ramas de tareas, inicia una revisión del código después de que todo el código se haya escrito y las pruebas automatizadas se hayan ejecutado y superado, pero antes de que se fusione el código en el repositorio remoto (Después de los pull requests). Así se asegura que el revisor del código dedique su tiempo a comprobar aspectos no detectados automáticamente y evita que malas decisiones de programación contaminen la línea de desarrollo principal.
        Las principales ventajas serian que los desarrolladores podemos beneficiarnos de las revisiones del código independientemente de la metodología de desarrollo. Los equipos ágiles, sin embargo, pueden obtener muchas ventajas debido a que el trabajo se encuentra descentralizado por todo el equipo. Nadie es la única persona que conoce una parte específica de la base de código.      
      `
    },
    {
      title: "¿Cuáles son los niveles de acceso y cómo funcionan? (Modificadores)",
      value: "Los modificadores son principios de cada lenguaje orientados a objetos, estos permiten limitar o permitir accesos al código mediante palabras reservadas del propio lenguaje (por general estándares) como private, protected, public y otros dependiendo del lenguaje. Un ejemplo de lenguaje que usen estos modificadores serian PHP y Java"
    },
    {
      title: "¿Qué patrones de arquitectura conoces y cómo funcionan?",
      value: "MVC: Creo que es el más popular en estos últimos años por el crecimiento de muchos frameworks que adoptaron esta arquitectura, es basado por sus siglas de Model – View- Controller, que sería la forma de dirigir una interfaz de usuario ya que ese sería el flujo para controlar interfaces de usuario, ya que cada uno de los módulos mencionados se encargara de hacer funciones específicas que irán dentro del flujo para que la interfaz pueda separar la lógica del backend de su visualización que dependerá del manejo del controlador y los datos que se necesiten para visualizar"
    },
    {
      title: "¿Qué patrones de diseño conoces y cómo funcionan? (Creacionales, Estructurales, Comportamiento",
      value: `
      Creacionales | Singleton: Este patrón se usa en métodos aplicación que no depende de múltiples instancias funcionar, un ejemplo claro sería un uso único de solo una API, una instancia para AWS o lo más simple seria para cuando solo se tiene una base de datos. Un ejemplo de este uso seria la exportación de un módulo en Node
      Estructurales | Decorators: De la mejor perspectiva seria una alternativa al uso de las sub-clases ya que a través de este patrón puedes agregar o eliminar funcionalidades a un objeto o clase en el randtime, un ejemplo seria mantener una Class “House” y desde otra poder instanciar a esta misma para variar algo de la misma, por ejemplo añadirle un Garage que no estaba en la clase original para así a través de esta misma no tener que generar sub-clases
      Comportamentales | Mediators: Estas son funciones que se encargaran de manejar eventos para subscribe y dispatch de los mismos, este mismo se encargara de comunicar a todos los componentes de la aplicación suscritos, un ejemplo claro de este uso seria el uso de Context o Redux en React ya que usan este mismo patrón ya que los reducers se encargan de recibir los subscribes y emitir los dispatch a los componentes suscritos al mismo
      Comportamentales | Flux: Este es el patrón que une el MVC, Mediators y Singletons. Este patrón fue realizado por Facebook y por el mismo está basada su librería React ya que a través de estos se pueden usar Singletons en Componentes en caso de usar HOC, MVC pero con jerarquía hacia las vistas y los dispatch que vienen de los eventos suscritos por state o context dentro del core de React basados en Mediators      
      `
    },
    {
      title: "¿Que es SOLID?",
      value: `
        SOLID es un conjunto de principios con propósito de escribir mejor código donde con sus siglas se puede entender que Single Responsability Principle seria la separación de componentes o clases y que estos mantengan una lógica única para estos donde concretamente simplifique el código y existan múltiples funciones donde no se puedan memorizar con facilidad.
        Con el principio Open/Closed Principle se busca es mantener abierta las modificaciones del código pero cerrado teniendo en cuenta que no se tenga que reconstruir la lógica del componente o clase según los nuevos requerimientos, el mejor método para llevar este principio y su práctica seria con polimorfismo, separando lógicas de nuevos requerimientos y su integración solo sería heredar de esta nueva clase y asi extender los antiguos y nuevos componentes
        Cabe destacar que con el principio Liskov Substitution Principle busca es aislar los problemas de herencia de una clase Padre a su hijo, teniendo en cuenta que puede llegar el ejemplo donde uno de estos tenga excepciones de funcionalidades que no se usen extendiendo de estos de manera separada
        El principo de Interface Segretation con este principio se marca como objetivo no forzar clases con interfaces que no se utilizan, extensiones de otros componentes por herencia desde el principio de Liskov, busca cuidar no llenar de código que no se utilizará en esta clase para evitar hacerla más grande y si llegara a darse el caso optar por segregar estas interfaces en otras más pequeñas que llamen a la clase padre y así dar pie a un mejor rendimiento
        Para cerrar con el ultimo principio de Dependency Inversion donde su objetivo principal es que sus modulos mas grandes no dependan de los de menor nivel sino controlados por interfaces bajo abstracción, un buen ejemplo seria obviar de cual tecnología para base de datos se utilice ya que el código no depende de esto sino de su abstracción que construye dentro de la misma clase y asi mantener libertad en el código

      `
    },
    {
      title: "¿Que es una clase?",
      value: "Es una iniciativa directa por POO ya que es base para la creación de objetos y sus tipos, para así abstraer los datos y hacer operaciones de los mismos dentro de esta clase, en javascript las clases son tratadas directas como un objeto prototipal a través del prefijo 'this'"
    },
    {
      title: "¿Qué es y para que se utiliza la herencia?",
      value: "Se le da este término en POO a las clases u objetos que heredan valores desde otra, para reusar estos mismos sin tener que reescribir los mismos en una clase tras otra, sean variables o funciones teniendo en cuenta que su orientación sea hacia la misma rama de datos, un ejemplo de esto sería una Empresa que debe cumplir con parámetros específicos para crearse y seguido a esto sería heredar estos mismos en una Empresa de tecnología."
    },
    {
      title: "¿Qué es y para que se utilizan las interfaces?",
      value: "Por definición se sabe que son una forma de especificar qué debe hacer una clase sin especificar el cómo. Por ejemplo, en Javascript se usa Interface o Type para identificar los parámetros a recibir de una clase para así entender que esta misma funciona de esa forma específica y como usarla, también se usa para typing  responses o returns de una función o API y así generar un control bajo los mismos alrededor de la aplicación ",
    },
    {
      title: "¿Que es Polimorfismo?",
      value: "Este es un principio ligado directamente a la herencia, es cuando se usan valores heredados de una clase a otra y por razones propias de las clases hijas se necesita cambiar o sobreescribir un método sin perder la herencia al método original de la clase heredada, permitiendo asi completar un ciclo de cambio a traves de la herencia de una clase a otra."
    },
    {
      title: "¿Qué es y cómo funciona una API web?",
      value: "Un API es un conjunto de funciones que ofrece cierta tecnología o biblioteca donde a través de sus servicios se obtienen datos y asi ser usadas como capa de abstracción en una aplicación"
    },
    {
      title: "¿Qué herramientas se pueden utilizar para probar Web APIs?",
      value: "De las más populares y que yo en lo personal he usado son: Postman o Talend API"
    },
    {
      title: "¿Qué herramienta has utilizado para el manejo de errores?",
      value: "Una forma de mejorar nuestras capacidades de registro es mediante el uso de una biblioteca de registro del lado del cliente, como nivel de registro. Loglevel reemplaza el archivo console.log típico con funciones para el registro y filtrado basados en niveles, que brindan mucho más control sobre sus registros."
    },
    {
      title: "Test Driven Development (TDD)",
      value: "Es una metodología de trabajo donde las pruebas guian el desarrollo y asi el código objetivo queda limpio, teniendo en cuenta que las pruebas pasen por su ciclo"
    }
  ],
  products: [
    {
      'id': '1',
      'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Camiseta-negra.jpg/220px-Camiseta-negra.jpg',
      'title': 'Camiseta',
      'price': 25,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      'id': '3',
      'image': 'https://files.cdn.printful.com/o/upload/variant-image-jpg/21/2134a3fa668449b50adffcc6313aafb9_l?v=85b4957c9576c8624b9f77fade519e1d',
      'title': 'Mug',
      'price': 10,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      'id': '4',
      'image': 'http://tuecology.com/wp-content/uploads/2017/06/13604_1-morral-shangai.png',
      'title': 'Morral',
      'price': 14,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      'id': '5',
      'image': 'https://aws.glamour.mx/prod/designs/v1/assets/620x620/243827.jpg',
      'title': 'Pantalon negro',
      'price': 20,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      'id': '6',
      'image': 'https://promart.vteximg.com.br/arquivos/ids/401958-1000-1000/111352.jpg?v=637177283896770000',
      'title': 'Escritorio',
      'price': 200,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      'id': '7',
      'image': 'https://http2.mlstatic.com/D_NQ_NP_960735-MLV43465057369_092020-O.jpg',
      'title': 'Sueter',
      'price': 35,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ],
};

// React
// 
// instala un modulo que permite instalar la app de react y su entorno
// npm i -g create-reac-app
// 
//1- Instalar react 
// npx create-react-app nombre-app

//2- Abrir la carpeta de la app en visual

//3- Estructura de archivos
// package.json --> Aquí se encuentran las dependencias/librerias que se instalan
// Node_module --> estos modulos sirven para utilizar y llamar dentro de la app, css, dom, errores, eventos, todas las herramientas de node para poder utilizar/importar.
// Public --> muestra la info a la que va a tener acceso el usuario final.
//          index.html --> Obtiene los componentes renderizados de la carpeta Src --> Index.js y es el encargado de plasmar en el navegador la app. Esto es posible ya que contiene un div con el id root.
//                         En el <head>, En la etiqueta <title></title> cambias el nombre de la pestaña.
//          favicon.ico --> imagen de la pestaña.
//          logo.png --> logos de uso en la app.
//          
// Src --> es la carpeta que contiene todos nuestros datos y donde le voy a dar forma a la app con los archivos App.js App.css(estilos del componente raiz App.js)
//         App.js --> Es donde esta nuestra app, donde escribo mi html y funciones js/ts.
//         Index.js --> Es donde debo registrar mi app/template/componentes creados en App.js/archivos similares y renderiza la app/componenete por contener una var que que se comunica con el index.html al asignarle ReactDOM.createRoot(document.getElementByID('root')).
//                      Se registra al componente entre los tags <React.StrictMode>, como si fuera un tag <NombreArchivo.js />
//Todos los archivos deben tener sus imports correspondientes.
// 
//4- Para ejecutar la app --> debo levantar el servidor 
// npm start

// Para finalizar la ejecucion --> cortar el servidor
// ctrl+c

//5- Instalar extension en chrome --> react developers tools 
// para adaptar f12 a react
// 
//6- App.js Creando componentes.Hay 4 secciones:
// A --> la parte de arriba que contiene los imports.
// B --> le sigue la function cuyo nombre es el nombre del componente ( para ser descriptivo). Allí dentro se colocara toda la lógica del componente (JS)
// c --> el return de la function componente(). Aquí se utilizará un tipeo similar a HTML pero con las modificaciones adecuadas para que react pueda leerlo y construir un html, también se utiliza js {} para poder completar los componentes con datos dinamicos.
// D --> el export, siempre al final del archivo. Permite que otros archivos como el index.js pueda acceder al componente.
// 
// 7 - Trabajo con JSX: 
// 
// Es el uso de JS para asignar valores dinamicos a una estructura similar a html, que sería xml, mediante el uso de {}.
// Tambien variables de js que contienen tags de html. Para luego podes devolverlo en el return (parte C), mediante el uso de la var entre {}.
// ej: const elemento = <h1> !Hola, Mundo¡ </h1>

// COMENTAR LINEAS:
// Para comentar linead {/* */}
// 
// 8 - CREACION DE COMPONENTES:
// Los componentes siempre van con Mayuscula tanto para crealos en la funcion del render, en el export de salida, en el import del App.js y en la instanciacion del componente. Ademas de en su nombre de archivo, debe ser === al de la f()componente.
// Pueden haber componentes dentro de componentes, componentes dentro del componente principal App.js y componentes mas grandes que formen templates que van a tener el mismo protagonismo que el componente principal App.js
// 
// Los elementos son la unidad masbasica de los componentes. Son los tags html con letras minusculas.
// Los componentes definidos por el usuario creados, son tags con la primer letra en mayuscula.
// A ambos se le pueden agregar atributos para brindarles caracteristicas.  Los atributos van con camelCase. Atributo que cambian:
// class="" de html en jsx es className="".
// for="" html --> htmlFor ="" jsx.
// Tambien para style de css.
// background-image de css --> backgroundImage / backgroundColor / fontFamily en jsx.
// ejemplo:
// const estiloDiv = {color:'yellow', backgroundColor:'black'};
// Esto para asignar en forma dinamica o estilos en linea --> style = {estiloDiv}. si utilizo el estilo directo en linea style = {{color: 'yellow'}} la primer llave indica que se inserta JS y la segunda para indicar que se cree el objeto JS.
//  Sino en archivo aparte.
// 
// Lista de atributos del DOM reconocidos por react --> https://es.reactjs.org/docs/dom-elements.html
// 

// Cuando se crea un componente que será utilizado como elemento de otro componente y este será utilizado en un tercer componente mayor, a la hora de realizar los imports y exports de las funciones componentes es muy importante:
// se puede poner al inicio de la f()componente un export, para indicar que a toda la f()componente se exportará para hacer uso de la misma en una f()componente mayor.
// La f()componente mayor deberá importar haciendo uso de {} y solo indicando de donde proviene ese archiv con './nombreArchivo'.
// Ejemplos: exportacion nombrada
// Componente más chico --> export function ComponenteMasChico(){}
// Componente Padre --> import {ComponenteMasChico} from './ComponenteMasChico'
// otra manera: exportacion por defecto
// componente mas chico, al final de todo el codigo ---> export default ComponenteMasChico;
// Componente Padre ---> import ComponenteMasChico from './ComponenteMasChico'; (va sin {})
// 
// Uso de JS en elementos y componentes:
// dentro del tag, ya sea en un atributo o en el espacio destinado para devolver contenido se colocan {} y dentro de las mismas el nombre de la funcion JS, una prop.metodoJS() o directamente una operacion JS (como maps,filter, find o f()).
// 

// ESTADO DEL COMPONENTE --> Es la info de un componente y sus valores actuales. Son propiedades sque el asigno a mi componente al igual que sus valores. se representan cmo un diccionario.
// En un momento especifico durante la ejecucion de la app. El estado puede ir cambiando segun las funciones asignadas al componente.
// 
// 9 - ESTRUCTURA DE UN COMPONENTE:
// los elementos pueden ser anidados en jsx con identacion para formar estructuras mas complejos, elem > elem, elem > compo, compo > compo.
// Renderizar componentes:
// a traves del root, mediante el atributo id='root', en un div en el archivo index.js -->
// 
// Otra manera -->
// 
// import ReactDOM from 'react-dom';
// 
// const elemeno = <h1> !Hola, Mundo¡ </h1>;
// ReactDOM.render(
//      elemento,
//      document.getElementById('root') 
// );
// 
// en la creación de un componente que este en blanco si poemos rfc y luego aceptamos la primera opcion que nos da, nos inicia basicamente el compo.

// 10 - TRABAJO CON FUNCIONES PARA LA CREACION DE COMPONENTES:
// Los hooks, son quienes permiten acceder y trabajar con los estados del componente funcional.
// 
// Realizar los imports correspondientes:
// import logo from './logo.svg';
// import './App.css';
// import componente
// import Welcome from './components/welcome';
// 
// PARTE LOGICA:
// 
// Los componentes f() aceptan props que son los atributos y metodos que tienen, que desciben lo que deben aparecer. Este props puede ser otro componente, objeto, elemento html.
// para acceder al mismo accedo mediante {props.name}, para podes acceder al json que devuelve el back-end. 
// Funciones Puras --> no modifican el props. Todas deben ser puras.
// Funciones IMpuras --> se accede a una propiedad del atributo prop.
// 
// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//           <Welcome />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
// 
// Creacion de componente en archivo externo:
// Dentro de la carpeta src, creamos una subcarpeta llamada componentes, allí creo el archivo js que va a contener nuestros componennte. 
// 
// Primero importar: 
// import React from 'react;
// 
// En este nuevo archivo voy a crear una f() con su determinado nombre y su return. 
// 
// function Welcome(){

//      return (
//               <p>{gente}, como andas?</p>
//      )
// }

// A la App.js, que es la app central le voy a importar este nuevo archivo.js de la carpeta components.
// import nombreFuncion from ./components/nombreArchivo
// 
// En la parte C (de return/renderizado) utilizamos la funcion importada con formato componente --> <nombreFuncion /> o <nombreFuncion> </nombreFuncion>, esto instancia la funcion que contiene el componente en nuestro componente central App.js
// El componente debe estar englobado en un div (pero esto ocaciona que a la hora de maquetar o estilar provoque errores por superpocision de muchos divs) por lo que se recomienda utiliza Fragments ---> <> <Componente/> </> o <Fragment> <Componente /> </Fragment>
// Para utilizar esta segunda manera de englobar, se debe importar un destructuring Fragment --> import React {Fragment} from 'react; ---> por lo general va el Fragment en el mismo import que los Hooks.
// 
//  function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//           <Welcome />
//         </div>
//       </header>
//     </div>
//   );
// }
// 
// Los eventos en los tags html-jsx, se colocan como en html, con el nombre del evento y asignandole entre {la f() que ejecuta el evento} por ej ---> onClick={clickSuma};
// 
// Y luego puedo modificar las expresiones {var} y funcion y return en el componente particular/hijo que esta dentro de la carpeta components. Pudiendo quedar de la siguiente manera:
// DEPENDENCIAS ---> IMPORTS
// import React from 'react';
// 
// LOGICA
// function formatName(prop){
//      return user.firstName + ' ' + user.lastName;
// }
// 
// const user = {
//      firstName: 'Matias',
//      lastName: 'Perez'
// };
// 
// const element = (
//  <h1> Hello, {formatName(user)} </h1>
// );
// 
// RENDER
// function Saludo(){
//      return (
//          <p>Hola, desde Welcome {element}</p>
//      )
// }
// 
// EXPORT/SALIDA
// export default Saludo;
// 
// Tambien puedo utilizar el componente hijo a la par de la central, instanciando el componente en el archivo index.js (controlador centrar de componentes), se usa para comonentes que son templates.

// 10 - HOOKS --> permite cambiar el DOM de manera dinamica, ya que modifican el estado de un componente de funcion.
// Van colocados en la parte de la logica B y debe importarse el useState A. En la parte de la logica va a obtener un elemento html (C) para poder modificar la funcion este elemento de la parte C debe tener la funcion y un event listener.
// import {useState} from 'react'. Se utilizan con los componentes de funciones, no con las clases.
// 
// ej: CONTADOR: Use State
// se crea la var que almacena el valor y el metodo/función que modifica ese valor. Se le asigna el valor retornado por el useState.
// Luego creo una función que va a ser quien ejecute las modificaciones de los valores iniciales para obtener nuevos.
// Para asignar esta funcion, si se le asigna a un tag jsx se lo paso a un atributo EventListener. Si es un componenteHijo/elemento se lo paso a la props que utilice en la f()componenteHijo por ej: 
// 
// Componente padre:

// function App(){
//   const[contador,setContador] = useState(0) --> el param es el estado inicial con el que comienza. 
//          [contador -->  var(adopta el valor inicial que se le pasa al useState, luego va a adoptar los valores que sean modificados por el setPersonalizado(setContador) que va a modificar el useState() y este le va a asignar el nuevo valor a la var),
//          , setContador] --> metodo, utiiza el nombre de la var para identificar el set personalizado. Modifica el useState() asignandole nuevos valores que luego se los asignara a la var.

//   const aumentar = () => {
//      setContador(contador + 1);
// 
//  }
//  const decrementar = () => {
//      setContador(contador - 1);
// 
//  }
//  return( 
//      <button onClick={aumentar} type=""> Aumentar </button>        """Pasa la función del useState como atributo de EventListener onClick, ya que es un tags jsx"""
//      <button onClick={decrementar} type=""> Decrementar </button>
//      <Contador numClicks='5' />       """Como es un componenteHijo/elemento requiere de la props numClicks (definida en su f()componente para poder brindarle la funcionalidad del useState.""" 
//        )
// }
// 
// Elemento/componenteHijo:
// 
// export function Contador({ numClicks }) {
//   return (
//     <div className='contador'>
//         { numClicks }
//     </div>
//   )
// }

// 
//  ej: Use efect --> contiene como valor un estado y produce un efecto capturando informacion externa y se la brindo al componente, se utiliza para el consumo de apis.
// import React, {useEffect} from 'react; --> Primero se realiza el import correspondiente. se crea dentro de la función principal.
// 
// Luego se crea la funcion useEffect(){} que consuma la api:
// 
// useEffect(() => {
//      let nombreVar;
//      nombreVar = window.navigator /---> Para que cuando la pantalla se cargue consuma la api./ .geolocation /-->tipo de api a consumir/ .watchPosition(position => {
//          setCoordenadas /---> nombre del set que modifica y consume la api de coordenadas en este caso, es el creado en la var de la funcion principal./ ({
//              longitud: position.coords.longitude, /--> propiedad creada para setearle la info traida de la api./
//              latitud: position.coords.latitude /---> propiedad creada para setearle la info traida de la api./
//              });
//          });
// 
//      return () => {
//          navigaor.geolocation.clearWatch(nombreVar); /--> indica que apague el consumo de la api./
//      };
// });
// 
// useRef ---> Permite establecer referencias de los tags html-jsx, con una var const que se le asigna el metodo useRef() se debe importar {useRef} en el mismo import de los hooks o del {Fragment} --> import React {useRef} from 'react'; 
// Se le coloca un atributo --> ref = {nombreFuncionRef} --> en el tag html-jsx (parte C) y luego en la parte B, de logica se crea una var const con el mismo nombre asignado a la ref. --> const nombreFuncionRef = useRef();
// Y luego a la referencia (var const que se le asigno useRef()), se la puede utilizar en cualquier función que ejerza un efecto sobre ese tags html-jsx
// 
// METODOS PROPIOS DE LOS HOOKS (averiguar):
// .current -->
// .value -->
// localStorage -->

// 11 - RECIBIR PROPS DE UN COMPONENTE:
// Necesitamos props para poder crear componentes reutilizables sin elementos fijos. Los props se definen en los argumentos de la f()componente.
// ejemplo:
// export function Componente(props){
// 
// }
// 
// Luego hay que analizar que contenido debe personalizarse (nombres, fotos, valores, textos, etc)
// export function Componente(props){
//      return(
//              <p className='nombre-testimonio'>
//                  {props.nombre} en {props.pais}
//              </p>
//      ) 
// };
// 
// En el componente raiz App.js, vamos a agregar al tag jsx componente <Componente />, como atributos los props declarados en el componente/elemnto hijo con su valor:
//export function Componente(props){
//      return(  
//              <Componente 
//                  nombre='Matias'
//                  pais='Perez'
//              />
//      )
// Para imagenes se hace asi:
// <img className='imagen-testimonio' src={require(`../carpeta-contenedora/nombre-imagen-${props.imagen}.formato`)} alt='Foto de Emma' />
// Se utiliza backsticks para poder utilizar ${} y allí brindarle un valor dinamico. props.imagen refiere a la parte del archivo imagen que cambia para identificar cada imagen particular.
// 
// Tambien se puede importar la img directamente al componente:
// Para ello debo tener la img correspondiente dentro de la carpeta src en una subcarpeta imagenes.
// Luego realizo el import ---> import nombreImagen from '../imagenes/nombreimg.formato'
//  se cologa el tag jsx <img> y en el atributo src se le asignan llaves {}, 
//  <img className='' src={nombreImagen} alt=''/>

// PROPS.CHILDREN -->  Todo lo que este dentro de la f()componente de Boton, será considerada un elemento hijo y podemos usarlo en nuestro componente.
//
// Componentehijo/elemento
//  export function Boton(props) {
//     return (
//       <div>
//           {props.children}
//       </div>
//     )
//   }

// ComponentePadre/raiz --> se utiliza el tag del ComponenteHijo/elemento con tag de apertura y cierre y dentro se coloca el valor deseado, que se le asignara a la props.children
// function App() {
//     return (
  
//       <div className="App">
//         <div className="fcc-logo-contenedor">
//           <img src={ freeCodeCampLogo } className="fcc-logo" alt='Logo De FreeCodeCamp' />
        
//         </div>
//         <div className='contenedor-calculadora'>
//           <div className='fila'>
//             <Boton>1</Boton>
  
//           </div>
//           <div className='fila'>
            
//           </div>
//      )
// }

// 12 - SINTAXIS DE DESESTRUCTURACION:
// la funcion recibe un objeto (en vez de props), que va como argumento de la funcion y entre {}, el objeto debe ser directamente la prop a la que se desea acceder. Por ejemplo un texto. (reemplazo en la funcion obj por texto.)
// export function Boton({obj}) {
//      return (
//          <button>
//              {obj}
//          </button>
//      )
// }
// 
// 13 - CLASES BASADAS EN CONDICION:
// Esta metodologia permite definir la clase de un tags jsx segun la funcianalidad del mismo, es decir que bajo un condicional define su class, segun un parametro pasado en la f()componente. Por ejemplo:
// export function Boton({obj, esBotonClick}) {
//      return (
//          <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} >
//              {obj}
//          </button>
//      )
// }
// 
// Lo que se le asigna al className= debe estar entre llaves{}, porque de esa manera indicamos que es codigo JS y que va  realizar una f(). Lo pasado en este caso es un condicional de operador ternario, donde pregnta si es boton click
// toma la clase 'boton-clic', sino 'boton-reiniciar'.

// Otro ejemplo:
// export function Boton(props) {
//     return (
//       <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
//           {props.children}
//       </div>
//     )
//   }

// Luego afuera hay que definir la f() esOperador() en la parte logica B.
// valor es el atributo/parametro
// 
// const esOperador = valor => {
//      return isNaN(valor) && (valor != '.') && (valor != '=')
// }
// 

// el div contendra un className fijo que es boton-contenedor y se le agregará uno mas segun el valor que adopte props.children, mediante la funcion esOperador, si esta funcion es true, se le sumara la className operador, de lo contrario no se suma ninguna clase mas.
// como estamos utilizando una f() dentro del tag jsx, es necesario abrir {} y dentro utilizar backsticks ``, para luego con asignación de JS utilizar ${} para allí desarrollar el codigo JS correspondiente.

// 14 - EVENT LISTENER O EVENT HANDLER:
// Son funciones que se ejecutan cuando ocurre un evento especifico. Gralmente ejecutan la funcion de los hooks.
// Tambien se le puede asignar un evento a nuestro tags jsx, pasandole un argumento a la f()componente:
// export function Boton({texto, esBotonDeClic, manejarClic}) {
//   return (
//      <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' } onClick={manejarClic}>
//          {texto}
//      </button>
//   )
// }
// Como este es un elemento/componente hijo, luego cuando se lo importe y agregue al componente padre, allí dentro de su f()componente en la parte B de logica, creo las funciones flechas necesarias para asignarselas a la propiedad (en este caso manejarclick) del componente hijo:
// function App() {
//      const manejarClick = () => {
//      console.log('click');
//      }
//      return (
//          <Boton 
//              texto='Click'
//              esBotonDeClick={true}
//              manejarClick={manejarClick}
//          />
//      )
// }
// 
// usando useState en la funcion manejar click creada anteriormente:
// 

// function App() {
//      
//      const [numClicks, setNumClicks] = useState(0);
//      
//      const manejarClick = () => {
//      setNumClicks(numClicks + 1);  
//      }
//      
//      return (
//          <Contador 
//              numClicks={ numClicks } 
//          />
//          <Boton 
//              texto='Click'
//              esBotonDeClick={true}
//              manejarClick={ manejarClick }
//          />
//      )
// }
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//
// 
// 
// 
// 
// 
// 
// 
// 
//
// 
// 
// 
// 
// 
// 
// 
// 
//

// 15 - CONSUMOS DE APIS Y TRABAJO CON CLASES PARA LA CREACION DEL COMPONENTE:
// Los componentes de clases trabajan con sus propios estados.
// import React, {Component} from 'react' --> importar los componentes de react

//PARTE LOGICA:

// Vamos a cambiar la funcion principal (parte B y C) por una class, para poder acceder a sus metodos y props, ademas ya la función no nos va a retornar un dibujado de pagina,
// sino que la class va a retornar un renderizado. La class va a heredar (extends) de Component, sus props y metodos. 
// Dentro del render (), se ejecuta la parte C. 
// Antes del render, la parte B, se encuentra la lógica, habiendo un 
// El metodo contructor recibe props, que va a tener una propiedad llamada state(estado, que va a cambiar segun la info que le pasemos a la props). Y dentro de state van a recibir los posts.
// Otro metodo a utilizar es el  componentDidMount(){}, que indica que cuando se inicialice el componente se ejecutará todo lo que esté entre llaves. En este caso el llamado a la api.
// en una var const se va a almacenar el url de la api. Luego utilizamos el metodo fetch para poder acceder a la api (como con java script). Seguido se utiliza un .then para acceder al objeto
//  y mediante la funcion (res => res.json()), traducir toda la data de la api a formato json y asi poder acceder a la misma. 
// Luego con otro .then accedemos al json con otra funcion flecha (json => this.state(post:json)), de esta manera se accede al json que contiene la data de la API, con this.state estoy
// accediendo a las props y metodos del metodo constructor de la clase principal y como argumentos le asigno a la propiedad posts el json con la data de la api.
//this. --> es para acceder al componente de class.
// React.Component --> para poder utilizar todas las funcionesbasicas de un componente de react. Si se importa {components} no hacer falta ponerle el React.
// 
// class App extends React.Component {
//      constructor(props) {
//          super(props);
//          this.state = {
//              posts:[]
//          }
//      }
// 
//      componentDidMount(){  """Requiere si o si de este clase para poder consumir apis, las funciones no. Esta clase consume la api al actualizar/cargar la pagina."""
//          const urlAPI = 'https'
//          fetch(urlAPI)
//          .then(response => response.json)
//          .then(json => this.setState(posts:json))
//      }
//      cmponentWillUnmount(){      """Esta clase corta el pedido de la api, al cambiar de pestaña o salir de la pagina."""
// 
//      }
// 
//      render(){
//          return{ 
//              <p>Hola</p>
//          }
//      }
// }

//PARTE VISUAL (HTML - CSS - BOOTSTRAP)
// 
// Puedo instalar bootstrap con el cdn o mediante comandos en consola. En el primer caso, se copiaran los links correspondientes en el archivo index.html en el head.
// Verificar de utilizar bootstrap para react.
// 
// Para devolver la data que nos trae la api, dentro de la parte B (render()), vamos a crear una var const, a la cual le paso un objeto, en este caso posts. const {posts} = this.state; 
// Luego en el return allí devolvere el html. Primero crear un <div> que contendrá todo el componente. con una función .map vamos a recorrer el posts que contiene la data json ---> 
// {posts.map((elem) => ())}; elem ---> representa cada elemento que posea el objeto posts y por cada elemento se ejecutara lo que se encuantra dentro de los parentesis a los que apunta la flecha.
// En este caso, allí dentro de los parentesis, se colocara un <div> que dentro de su tag contendra el atributo  key =  que se le asigna {post.id}, este traerá el id del elemento correspondiente desde la api.
// Todos los datos que yo deseo traer/consumir de la api van a ir colocados entre llaves {} primero el nombre del objeto que contiene la data json . punto el campo(segun bbdd) o propiedad que tiene la api.
// 
// 
// 
// 

// class App extends Component {
//      constructor(props) {
//          super(props);
//          this.state = {
//              posts:[]
//          }
//      }
// 
//      componentDidMount(){
//          const urlAPI = 'https'
//          fetch(urlAPI)
//          .then(response => response.json)
//          .then(json => this.setState(posts:json))
//      }
// 
//      render(){
//          const {posts} = this.state; 
//          return{ 
//              <div className="container">
//                  <div className="container-title">
//                      <h1 className = "display-4">Listado de posts de la api</h1>
//                  </div>
//                  {posteos.map((elem) => (
//                      <div className="card" key = {post.id}>
//                          <div className="card-header" key = {post.title}>
//                          
//                          </div>
//                          <div className="card-body" key = {post.url}>
//                          
//                          </div>
//                      </div>  
//                  ))}
//              </div>
//          }
//      }
// }
// 
// 
//
//  export default App
// 
// 16 - Añadir estilos a los componentes:
// Se debe crear una carpeta styleshit dentro de la carpeta src, allí se contendran los archivos css, 1 por cada componente/elemento, que tendrán el mismo nombre que su componente/elmento.
// Luego se aplica css comun. En el archivoComponente.jsx debe importarse su css --> import '../nombre-carpeta/nombreComponente.css' --> los dos puntos indica que debe salir de su ubicación para ir a src y de allí entrar a la carpeta contenedora de archivos css.
// App.css --> son los estilos aplicados para el componente raiz. App.js debe tener este import --> import './App.css';
// 

// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
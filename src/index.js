
function viewFromDataObject(dataObject) {

// aqui estamos defininendo todos los mensajes de error que podríamos tener. 
if  (typeof dataObject !== "object") throw "invalid input";
if (!dataObject.hasOwnProperty('username')) throw "you must input username";
if (!dataObject.hasOwnProperty('message')) throw "you must input message";
if (!dataObject.hasOwnProperty('dateTime')) throw "no date inserted";

// aqui defininmos los valores y de donde se recogen
let username = dataObject.username;
let message = dataObject.message;
 let dateTime = dataObject.dateTime;

 // aqui estamos creando los elementos html del post o mensaje. 
  let postItem = document.createElement("div");
  postItem.classList.add("post");

  let postUsername = document.createElement("div");
  postUsername.classList.add("username");
  postUsername.innerHTML = username;

  postItem.append(postUsername);

  let postDate = document.createElement("div");
  postDate.classList.add("date-time");
  postDate.innerHTML = dateTime;

  postItem.append(postDate);

  let postContent = document.createElement("p");
  postContent.innerHTML = message;

  postItem.append(postContent);

  // aqui llamamos a la función para que nos devuelva todo lo que hemos creado
  return postItem;
  
}
// exportamos esta función hacia el indextest (fas publica/disponible aquesta funció perque es pugui importar des d'altres bandes)
module.exports = viewFromDataObject;



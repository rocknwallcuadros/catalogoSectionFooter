

//Getting JSON 
const URLJSON = "/catalogoSectionFooter/datos.json"
$.getJSON(URLJSON,(data, status) => {
    console.log(status);
  
      //Llamada de functions!
           mostrarProductos(data);
  });


  function mostrarProductos(listados) {
    
    $("#catalogoContainer").empty();
    // CARGA DE DATOS CATALOGO//
    for (const producto of listados) {
      $('#catalogoContainer').append(`
                                       
                                            <div class="card col-lg-4 col-sm-6 mb-3" style=" border: 20px;">

                                                <img src="./assets/img.png" class="img-fluid" class="card-img-top" alt="...">

                                                <div class="card-body text-center">
                                                    <h5 class="card-title">${producto.name}</h5>
                                                    <p class="card-text">$${producto.valor}</p>
                                                    <div class="buttonCompra mx-auto">
                                                    <a href="#" class="btn mx-auto  btn-buy ">Agregar al Carrito</a>
                                                     </div>
                                                    
                                                </div>
                                                </div>`)
  }

  }

  //Save searchBar 
const searchCont = ` 
                    <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>

                    </form>`;
//Render the search bar on desktop
  const searchBar = ()=> { $('.searching').append(`${searchCont}`)};
         
//move the search bar to the SM div
                const searchContSm = (bar)=> {
                    $('.searchContainerSm').append(`${bar}`)
                };

            //Calls
                searchBar();
                searchContSm(searchCont);
                







                
  const categoriesDropdown = ()=> {
                $('.categoriesContainerDesk').append(`<div id="dropdownCategories" class="dropdown">
                <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
                </a>
            
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" href="#">Abstracto</a>
                <a class="dropdown-item" href="#">Animales</a>
                <a class="dropdown-item" href="#">Arquitectura</a>
                <a class="dropdown-item" href="#">Autos y Motos</a>
                <a class="dropdown-item" href="#">Boho</a>
                <a class="dropdown-item" href="#">Botanica</a>
                <a class="dropdown-item" href="#">Cocina</a>
                <a class="dropdown-item" href="#">Figuras Geometricas</a>
                <a class="dropdown-item" href="#">Frases</a>
                <a class="dropdown-item" href="#">Futbol</a>
                <a class="dropdown-item" href="#">Infantil</a>
                <a class="dropdown-item" href="#">Instrumentos</a>
                <a class="dropdown-item" href="#">Lavadero</a>
                <a class="dropdown-item" href="#">Moda</a>
                <a class="dropdown-item" href="#">Mundo</a>
                <a class="dropdown-item" href="#">Musica</a>
                <a class="dropdown-item" href="#">Naturaleza</a>
                <a class="dropdown-item" href="#">Peliculas y series</a>
                <a class="dropdown-item" href="#"> Pequeñas imágenes</a>
                <a class="dropdown-item" href="#">Playa</a>
                <a class="dropdown-item" href="#">Retratos</a>
                <a class="dropdown-item" href="#">Tramas</a>
                <a class="dropdown-item" href="#">Vintage</a>
                </div>
            </div>
            `)};

            categoriesDropdown();
           



  
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <link href="CSS/MiCSS.css" rel="stylesheet" type="text/css"/>
        <script src="JS/Logica.js" type="text/javascript"></script>
    </head>
    <body>
        <div id="container">
            <header>
                <div id="logo">
                    <img src="img/logo.png" width="100px" height="100px;"
                </div>
            </header>
            <section id="menu">
                <h3>Mi Menu</h3>
                <ul>
                    <li><button onclick="todos()">Todos</button></li>
                    <li><button onclick="filtroG('F')">Femenino</button></li>
                    <li><button onclick="filtroG('M')">Masculino</button></li>
                    <li><button onclick="filtroMa()">Mayores a 18</button></li>
                    <li><button onclick="filtroM2()">Menores a 18</button></li>
                </ul>
            </section>
            <section id="contenido">
                <h3>Sistema de informacion de registro de Personas</h3>
                <form id="registro" name="registro">
                    <fieldset>
                        <legend>Formulario de Captura</legend>
                        <div>
                            <label for="CC">Ingrese la CC</label>
                            <input type="number" id="CC" name="CC" value="" required/>
                        </div>
                        <div>
                            <label for="nombre">Ingrese su Nombre</label>
                            <input type="text" id="nombre" name="nombre" value="" required/>
                        </div>
                        <div>
                            <label for="edad">Ingrese la edad</label>
                            <input type="number" id="edad" name="edad" value="" required/>
                        </div>
                        <div>
                            <label for="CC">Ingrese la genero</label>
                            <select id="genero" name="genero" required>
                                <option value="" selected>Seleccione</option>
                                <option value="F">Femenino</option>
                                <option value="M">Masculino</option>
                                <option value="L">LGTBI</option>
                            </select>
                        </div>
                        <div>
                            <button type="button" onclick="agregar()"> Almacenar</button>
                            <button type="reset">Cancelar</button>
                        </div>
                    </fieldset>
                </form>

                <div id="Listado"></div>
            </section>
            <footer>
                <div id="pie">
                    <div>Contactos</div>
                    <div>Redes</div>
                    <div>Telefonos</div>
                    <div>CopyRigth2017</div>
                </div>
            </footer>
        </div>
    </body>
</html>

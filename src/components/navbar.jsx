import React from "react";

const Navbar = props => {
    return (

        <div>

            <nav class="navbar navbar-expand-lg navbar-light d-flex jc-sb px-0 py-2 header-menu__navbar">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-0 ml-4 mr-auto">
                    <li class="nav-item ">
                            <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                Nuestro proyecto
                            </a>
                            <ul class="dropdown-menu">
                                <li class="has-submenu">
                                    <a class="dropdown-item" href="#">
                                        Cursos BCH
                                    </a>
                                </li>
                                <li class="has-submenu">
                                    <a class="dropdown-item" href="#">
                                        Comunidades
                                    </a>
                                </li>
                                <li class="has-submenu">
                                    <a class="dropdown-item" href="#">
                                        Bono Escolaridad Trabajador
		                                                <i class="bch-pyo-icon-arrow-right mr-n2" ></i>
                                    </a>
                                    <div class="navsubmenu dropdown-menu align-self-stretch">
                                        <div class="row no-gutters flex-fill">
                                            <div class="col-6 navsubmenu__categoria">
                                                <ul class="list-unstyled"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
                                Mi Desarrollo
                                            </a>
                            <ul class="dropdown-menu">
                                <li class="has-submenu">
                                    <a class="dropdown-item" href="#">
                                        Mi Desempeño
                                                    </a>
                                    <div class="navsubmenu dropdown-menu align-self-stretch">
                                        <div class="row no-gutters flex-fill">
                                            <div class="col-6 navsubmenu__categoria">
                                                <h6 class="title">Evaluación y Retro Ágil</h6>
                                                <ul class="list-unstyled">
                                                    <li class="pl-0">
                                                        <a href="../../evaluacion/retroAgil/evaluacion">Evaluación Ágil</a>
                                                    </li>
                                                    <li class="pl-0">
                                                        <a href="../../evaluacion/retroAgil/solicitudRetro">Retro Ágil</a>
                                                    </li>
                                                    <li class="pl-0">
                                                        <a href="../../evaluacion/reports/">Reportes Evaluaciones y Retro Ágil</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </li><li class="has-submenu">
                                    <a class="dropdown-item" target="_blank" href="https://www.gcloud.cl/bch_mc/front/?sw=personas_2020">
                                        Agradecimientos
                                                    </a>
                                    <div class="navsubmenu dropdown-menu align-self-stretch">
                                        <div class="row no-gutters flex-fill">
                                            <div class="col-6 navsubmenu__categoria">
                                                <ul class="list-unstyled"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                      
                        </li>
                    </ul>
                </div>
            </nav>



            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary header-menu__navbar">
                <img src="https://getbootstrap.com/docs/4.5/components/navbar/#" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
                <a class="navbar-brand" href="#">Salvemos el 2020</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarNuestroProyecto" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nuestro proyecto</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Misión</a>
                                <a class="dropdown-item" href="#">Visión</a>
                                <a class="dropdown-item" href="#">Nuestra historia</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tutores
                        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Requisitos</a>
                                <a class="dropdown-item" href="#">Preguntas Frecuentes</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownColegios" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Colegios</a>
                            <ul class="dropdown-menu">
                                <li class="has-submenu">
                                    <a class="dropdown-item" href="#">
                                        Mi Desempeño
                                                    </a>
                                    <div class="navsubmenu dropdown-menu align-self-stretch">
                                        <div class="row no-gutters flex-fill">
                                            <div class="col-6 navsubmenu__categoria">
                                                <h6 class="title">Evaluación y Retro Ágil</h6>
                                                <ul class="list-unstyled">
                                                    <li class="pl-0">
                                                        <a href="../../evaluacion/retroAgil/evaluacion">Evaluación Ágil</a>
                                                    </li>
                                                    <li class="pl-0">
                                                        <a href="../../evaluacion/retroAgil/solicitudRetro">Retro Ágil</a>
                                                    </li>
                                                    <li class="pl-0">
                                                        <a href="../../evaluacion/reports/">Reportes Evaluaciones y Retro Ágil</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </li><li class="has-submenu">
                                    <a class="dropdown-item" target="_blank" href="https://www.gcloud.cl/bch_mc/front/?sw=personas_2020">
                                        Agradecimientos
                                                    </a>
                                    <div class="navsubmenu dropdown-menu align-self-stretch">
                                        <div class="row no-gutters flex-fill">
                                            <div class="col-6 navsubmenu__categoria">
                                                <ul class="list-unstyled"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                      
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contacto</a>
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>

        </div>

    )
}

export default Navbar;
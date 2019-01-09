import React, { Component } from 'react';
import PropTypes from "prop-types";

class CardGenerator extends Component {
    render() {
        return (

            <div class="page">
                <div class="box-logo-builder">
                    <header class="page__header">
                        <div class="builder-logo">
                            <img class="img-logo-builder" src="../images/awesome-card-logo.svg"
                                alt="Awesome Cards Logo" />
                        </div>
                    </header>
                </div>
                <section class="build-container">
                    <div class="build-card">
                        <div class="reset-box"> <a href="#" class="reset-link">
                            <div class="reset-btn"><i class="far fa-trash-alt"></i> reset</div>
                        </a>

                        </div>
                        <div class="box-card">
                            <div class="card-header">
                                <h1 class="name-person">Nombre Apellido</h1>

                                <h3 class="work-space">Front-end developer</h3>

                            </div>
                            <div class="card-img" id="random"></div>
                            <div class="icons-box">
                                <ul class="list-icon-card">
                                    <li class="icons-contein icon-movil"> <a href="" class="icons-card"><i class="fas fa-mobile-alt"></i></a>

                                    </li>
                                    <li class="icons-contein icon-mail"> <a href="#" class="icons-card"><i class="far fa-envelope"></i></a>

                                    </li>
                                    <li class="icons-contein icon-linkedin"> <a href="#" class="icons-card" target="_blank"><i class="fab fa-linkedin-in"></i></a>

                                    </li>
                                    <li class="icons-contein icon-github"> <a href="#" class="icons-card" target="_blank"><i class="fab fa-github-alt"></i></a>

                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer">
                                <div class="skills">
                                    <ul class="skills__list"></ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="selectors-container">

                        <div class="box-selector edit-design flex-container">
                            <div class="title-box"> <i class="far fa-object-ungroup icons-edit"></i>
                                <span class="title-edit"> Diseña </span>

                                <button
                                    class="btn-angle btn-fold"> <i class="fas fa-angle-up"></i>

                                </button>
                                <button class="btn-angle btn-unfold"> <i class="fas fa-angle-down"></i>

                                </button>
                            </div>

                            <div class="container-hide hide-box bring-box">
                                <div class="selectors-design">
                                    <h2 class="text-color">Colores</h2>

                                    <ul class="colors-list">
                                        <li class="list-pallete">
                                            <label for="pallete-blue" class="label-color">
                                                <input id="pallete-blue" type="radio" value="1" name="pallete-colors"
                                                    class="selection-input" />
                                            </label>
                                            <div class="pallet-box">
                                                <div class="blue-dark-color"></div>
                                                <div class="blue-midtone-color"></div>
                                                <div class="blue-ligth-color"></div>
                                            </div>
                                        </li>
                                        <li class="list-pallete">
                                            <label for="pallete-red" class="label-color">
                                                <input id="pallete-red" type="radio" value="2" name="pallete-colors" class="selection-input"
                                                />
                                            </label>
                                            <div class="pallet-box">
                                                <div class="red-dark-color"></div>
                                                <div class="red-midtone-color"></div>
                                                <div class="red-ligth-color"></div>
                                            </div>
                                        </li>
                                        <li class="list-pallete">
                                            <label for="pallete-grey" class="label-color">
                                                <input id="pallete-grey" type="radio" value="3" name="pallete-colors"
                                                    class="selection-input" />
                                            </label>
                                            <div class="pallet-box">
                                                <div class="grey-dark-color"></div>
                                                <div class="grey-ligth-color"></div>
                                                <div class="grey-midtone-color"></div>
                                            </div>
                                        </li>
                                        <li class="list-pallete">
                                            <label for="pallete-gum" class="label-color">
                                                <input id="pallete-gum" type="radio" value="4" name="pallete-colors" class="selection-input"
                                                /> <i class="far fa-gem"></i>

                                            </label>
                                            <div class="pallet-box">
                                                <div class="blue-gum-color"></div>
                                                <div class="pink-midtone-color"></div>
                                                <div class="pink-light-color"></div>
                                            </div>
                                        </li>
                                        <li class="list-pallete">
                                            <label for="pallete-purple" class="label-color">
                                                <input id="pallete-purple" type="radio" value="5" name="pallete-colors"
                                                    class="selection-input" /> <i class="far fa-gem"></i>

                                            </label>
                                            <div class="pallet-box">
                                                <div class="purple-midtone-color"></div>
                                                <div class="purple-dark-color"></div>
                                                <div class="purple-light-color"></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="selectors-font">
                                    <h2 class="text-color">Fuentes</h2>

                                    <ul class="fonts-list">
                                        <li class="list-font">
                                            <label for="font-ubuntu" class="label-font">
                                                <input id="font-ubuntu" type="radio" value="1" name="select-font" class="selection-input"
                                                />
                                            </label>
                                            <div class="font-box">
                                                <div class="select-ubuntu">Ubuntu</div>
                                            </div>
                                        </li>
                                        <li class="list-font">
                                            <label for="font-comic" class="label-font">
                                                <input id="font-comic" type="radio" value="2" name="select-font" class="selection-input"
                                                />
                                            </label>
                                            <div class="font-box">
                                                <div class="select-comic">Comic Sans</div>
                                            </div>
                                        </li>
                                        <li class="list-font">
                                            <label for="font-montse" class="label-font">
                                                <input id="font-montse" type="radio" value="3" name="select-font" class="selection-input"
                                                />
                                            </label>
                                            <div class="font-box">
                                                <div class="select-montse">Montserrat</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="box-selector edit-fill flex-container">
                            <div class="title-box"> <i class="far fa-keyboard icons-edit"></i>
                                <span class="title-edit"> Rellena </span>

                                <button
                                    class="btn-angle btn-fold"> <i class="fas fa-angle-up"></i>

                                </button>
                                <button class="btn-angle btn-unfold"> <i class="fas fa-angle-down"></i>

                                </button>
                            </div>
                            <form class="fill hide-box bring-box">
                                <div class="contact">
                                    <label for="firstName">Nombre completo</label>
                                    <input placeholder="Ej: Sally Jill" id="firstName"
                                        type="text" name="name" required />
                                </div>
                                <div class="contact">
                                    <label for="job">Puesto</label>
                                    <input placeholder="Ej: Front-end unicorn" id="job" type="text"
                                        name="job" required />
                                </div>
                                <div class="contact">
                                    <label for="image">Imagen de perfil</label>
                                    <div class="add_image">
                                        <button class="button_ad_image" type="submit" value="submit">Añadir imagen</button>
                                        <input type="file" name="addImage" id="img-selector"
                                            class="btn__hidden" />
                                        <div class="preview-box">
                                            <img class="preview-img" src="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="contact">
                                    <label for="email">Email</label>
                                    <input placeholder="Ej: sally-hill@gmail.com" id="email"
                                        type="email" name="email" required />
                                </div>
                                <div class="contact">
                                    <label for="phone">Teléfono</label>
                                    <input placeholder="Ej: 555-55-55-55" id="phone" type="tel"
                                        name="phone" required />
                                </div>
                                <div class="contact">
                                    <label for="linkedin">Linkedin</label>
                                    <input placeholder="Ej: sally.hill" id="linkedin" type="text"
                                        name="linkedin" required />
                                </div>
                                <div class="contact">
                                    <label for="github">Github</label>
                                    <input placeholder="Ej: sally-hill" id="github" type="text"
                                        name="github" required />
                                </div>
                                <p class="contact checkbox_contact">Habilidades (máximo 3)</p>
                                <div class="container-checks check_styles"></div>
                            </form>
                        </div>
                        <div class="box-selector edit-share">
                            <div class="title-box"> <i class="fas fa-share-alt icons-edit"></i>
                                <span class="title-edit"> Comparte </span>

                                <button
                                    class="btn-angle btn-fold"> <i class="fas fa-angle-up"></i>

                                </button>
                                <button class="btn-angle btn-unfold"> <i class="fas fa-angle-down"></i>

                                </button>
                            </div>

                            <div class="card-share flex-container">
                                <div class="box-btn-share">
                                    <button class="btn-share" type="submit"> <i class="far fa-id-card"></i>
                                        <span class="title-edit"> Crear tarjeta </span>

                                    </button>
                                </div>
                            </div>

                        </div>

                        <div class="edit-share card-created hide-box bring-box">
                            <div class="card-msg">
                                <p class="msg-text">La tarjeta ha sido creada:</p>

                                <p class="share-link" href="#"><span class="link"></span>

                                </p>
                                <button class="btn-twitter"> <i class="fab fa-twitter"></i>
                                    <a class="twitter-link" target="_blank"
                                        href="">Compartir en twitter</a>

                                </button>
                            </div>
                        </div>
                    </div>

                </section>
                <footer class="page__footer">
                    <div class="container-footer">
                        <div class="container-footer-logo">
                            <p class="copyright">Awesome profile-cards @2018</p>
                            <img class="img-footer-logo" src="assets/images/logosmall.png"
                                alt="Logo Las Pegatinas" />
                        </div>
                        <img class="img-footer" src="assets/images/logo-adalab.png" alt="Logo Adalab" />
                    </div>
                </footer>
            </div>

        );
    }
}



export default CardGenerator;
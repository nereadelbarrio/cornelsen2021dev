/* Fonts */

/*font-family: 'Source Serif Pro', serif;*/
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400&display=swap');


:root {
	--colorppal: #DE2922;
	--colortrans: #de292214;
}

b,
strong {
	font-weight: bold;
}

/*TOC*/
#indice .units ul li.active:not(.disabled),
#indice .units ul li:focus:not(.disabled) {
	background-color: #333 !important;
}

body:not(.isTablet) #indice .units ul li.active:not(.disabled) a .title {
	font-size: 14px;
	font-weight: bold;
}

body:not(.isTablet) #indice .units ul li:hover:not(.disabled),
#indice .units ul li:hover:not(.disabled) {
	background: #b7b7b7;

}

body:not(.isTablet) #indice .units ul li:not(.disabled) a .title:hover {
	color: #fff;
}

#list-units .unittag_textbook_cornelsen2021dev {
	background: #31a2c7 !important;
}

#list-units .unittag_textbook_cornelsen2021dev:hover {
	background: #3333337d !important;
}

.units ul#list-units .unittag_textbook_cornelsen2021dev a .title {
	color: #ffffff;
}


/*General */
#book-index #indice .units ul li a .title {
	margin: 0;
	font-size: 14px;
	font-weight: 400;
}
#swipeview-slider > div {
	background-color: #eee;
}
#actividad .class_slide {
    padding: 40px 40px 0px;
}

/*Input Blanco*/
.input_blanco .slide_main .html-book input {
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	border: 1px solid #ccc;
	background: #fff;
}
#actividad .carousel-inner .item-container {
    background-image: none;
    max-width: 1200px;
    -webkit-box-shadow:  #00000029 6px 3px 8px;
    -moz-box-shadow:  #00000029 6px 3px 8px;
    box-shadow: #00000029 6px 3px 8px;
    margin: 20px auto 30px;
    padding: 0px;
    padding-bottom: 90px;
    position: relative;
}
/*logo*/

.content_type_curso_cornelsen2021dev   .libro-left ul li .title:before {
	content: "";
	background-size: contain;
	top: 3px;
	background-image: url(imagenes_difusion/thespanishhub_logo.png) !important;
	position: fixed;
	width: 80px;
	height: 40px;
	background-repeat: no-repeat;
	left: 50%;
	margin-left: -40px;
	opacity: 1;
}

.content_type_curso_cornelsen2021dev.content_type_clase_cornelsen2021dev   .libro-left ul li .title:before { 
	opacity: 0;
}
.navbar-content .logo-publisher {
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
	width: 100px;
	height: 44px;
	background: url(imagenes_difusion/thespanishhub_logo.png) 0 0 no-repeat;
	-webkit-background-size: contain;
	   -moz-background-size: contain;
		 -o-background-size: contain;
			background-size: contain;
	background-position: center center;

}

/*video*/
.vjs-poster {
	background-color: #fff;
}

body {
	font-size: 2.0rem;
	font-weight: normal;
	text-align: left;
	font-family: 'Source Sans Pro', sans-serif;
}
.texto_curso p {
	line-height: 3.0rem !important;
	margin: 1.5rem 0;
}
#actividad .texto_curso {
    font-size: 2.0rem;
}

.slide-wrapper {
	text-align: left;
}

/*tamaño enunciado listas*/

#actividad .pregunta .texto_curso {
	font-size: 1.8rem;
}

#actividad textarea {
    font-size: 18px;
}

/*ENLACE WEB*/

#actividad a,
body:not(.edit) #actividad a:not(.cke_button):not(.zoom_flag_img) {
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	background-color: transparent;
	padding: 0px 5px;
	color: #333;
	font-weight: 600;
	text-decoration: none;
}
/*INDICE LATERAL*/

#indice .units ul li:not(.add) a .title {
	font-size: 14px;
	font-weight: 400;
	margin-left: 10px;
}


body:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover,
#book-index #indice .units ul li.active a {
	background: #b7b7b7;
}


#book-index .col-main {
	background: #31A2C7;
}


#indice .unit-content .header .title {
	color: #fff;
	background: transparent;
	float: left;
	font-size: 28px;
	font-weight: 700;
	line-height: 34px;
	padding: 5px 20px;
	height: 88px;
	margin: 5px 140px 20px 8px;
	overflow: hidden;
	z-index: 1;
	display: block;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	-o-text-overflow: ellipsis;
	text-overflow: ellipsis;
}


#book-index #indice .unit-content .actividades .item .title {
	font-size: 14px;
}

#indice .unit-content .actividades .item .nota {
	background-color: #428bca;
}


#indice .units ul li.active:not(.disabled),
#indice .units ul li:focus:not(.disabled) {
	background: #31A2C7;
}


body:not(.isTablet) #indice .units ul li:not(.disabled) a:hover .title,
body:not(.isTablet) #indice .units ul li.active:not(.disabled) a .title {
	font-size: 14px;
	font-weight: 400;
}


#book-index #indice .unit-content a:hover,
#indice .units ul li a:hover,
#indice .actividades a:hover,
#book-index #indice .unit-content a:active,
#indice .units ul li a:active,
#indice .actividades a:active,
#book-index #indice .unit-content a:focus,
#indice .units ul li a:focus,
#indice .actividades a:focus {
	color: #31A2C7;
}

#book-index #indice .unit-content .actividades .item {
	background: #87bacc;
}

body:not(.isTablet) #book-index #indice .unit-content .actividades .item:hover,
#book-index #indice .unit-content .actividades .item.active,
#book-index #indice .unit-content .actividades .item.current {
	background: #31a2c75c;
}


body:not(.isTablet) #book-index #indice .unit-content .actividades .item:active,
#book-index #indice .unit-content .actividades .item.active,
#book-index #indice .unit-content .actividades .item.current {
	background: #ccc;
}

.cornelsen2021dev-navbar h3 {
	width: 75%;
	margin: auto;
	margin-bottom: 15px;
	font-size: 2.0rem;
	font-weight: bold;
}

#actividad .content .header .title h3 {
    margin-top: 0;
    background: none;
    color: var(--colorppal);
    padding: 0;
    font-size: 3.0rem;
	border-bottom: 2px solid;
	font-weight: bold;
}
#actividad .content .header .title h3::before{
	content: '';
	display: none;
}

.slide_main input:focus,
.slide_main .form-control:focus {
	border-color: #aaa;
}

.slide_main .html-book input {
    background: #fff;
}

.cornelsen2021dev-navbar {
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	height: 50px;
	background: var(--colorppal);
    border-bottom: 0;
    border-top: 4px solid #555;
	
}

.logo-publisher {
	display: none;
	background: none;
}

body.is_app .cornelsen2021dev-navbar {
	-webkit-transition: top 0.5s linear;
	-o-transition: top 0.5s linear;
	-moz-transition: top 0.5s linear;
	transition: top 0.5s linear;
}

body.is_app .cornelsen2021dev-navbar.ocultar {
	top: -136px;
}

.cornelsen2021dev-navbar .navbar-content {
	width: 100%;
	height: 100%;
	padding: 0 20px;
	text-align: center;
}

.cornelsen2021dev-navbar .copyright {
	color: #fff;
	line-height: 5.0rem;
}

.slider-navigator:hover,
.slider-navigator.disabled {
	opacity: .5;
	filter: alpha(opacity=50);
}

#actividad .workspace.chooseblanks .inline-answer a {
	margin: -7px 2px 2px 2px;
}

.bck-i-fullscreen figcaption {
	margin-top: -20px;
	border-bottom: 0;
	-webkit-border-radius: 0px;
	-moz-border-radius: 0px;
	border-radius: 0px;
	background: transparent;
}

/*Icono audio*/
#actividad .player.audio {
	background-image: url(imagenes_difusion/img_audio.png);
	color: #fff;
}


#actividad .content img.player,
#actividad .player.audio,
#actividad .player.video,
#help-panel-content .player,
#remote-alert-modal-rich .player {
	height: 25px !important;
	width: 27px;
	display: inline-block;
	background-repeat: no-repeat;
	border-radius: 100%;
	margin: 0 5px;
	vertical-align: sub;
}

.bck-sub-label,
.bck-file-label {
	background: transparent;
	-webkit-border-radius: 5px 5px;
	-moz-border-radius: 5px 5px;
	border-radius: 5px 5px;
	max-width: 200px;
	margin: 0px;
	padding: 0px;
	display: inline-block;
	text-align: center;
	overflow-wrap: break-word;
}

.bck-file-attach:before {
	content: " ";
	background-image: url(imagenes_difusion/icono_transcripciones.png);
	background-repeat: no-repeat;
	padding: 10px;
	background-size: contain;
	margin-top: 4px;
	position: absolute;
}

.bck-file-attach img {
	display: none;
}

.bck-file-attach span {
	display: inline-block;
	max-width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	padding-left: 20px;
}

/* TÍTULOS */
.bck-title {
	border-bottom: 0;
    font-weight: inherit;
    font-size: inherit;
    color: #000;
}
/*-- Título 1 --*/
.bck-title-1:before {
	display: none;
}
.bck-title-1 {
    color: #000;
    font-size: 2.8rem;
    font-weight: bold;
    line-height: 3.0rem;
    margin: 0;
}
.bck-title-2 {
    color: #000;
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 3.0rem;
    margin: 0;
}
.bck-title-3 {
    color: #000;
    font-size: 2.0rem;
    font-weight: bold;
    line-height: 3.0rem;
    margin: 0;
}
.bck-title-4 {
    font-size: 1.6rem;
    margin: 0;
    line-height: 2.0rem;
    color: #999999;
}
.bck-title-5 {
	font-family: 'Source Serif Pro', serif ;
    font-size: 1.8rem;
    margin: 0;
    line-height: 2.8rem;
}


/*Énfasis */
.bck-enfasis {
    color: var(--colorppal);
    font-weight: inherit;
}

/* ---- CAJAS ---*/
.bck-box {
    position: relative;
    max-width: 100%;
    text-align: left;
	background: inherit;
	padding: 20px;
	margin: 15px;
}
.bck-box.center {
    text-align: inherit;
}
.texto_curso .bck-box p {
    margin: 0;
}
.bck-box .bck-content {
    padding: inherit;
}
/*Caja 1 */
.bck-box.bck-box-1:before {
	display: none;
}
.bck-box.bck-box-1:after {
	display: none;
}
.bck-box.bck-box-1 {
    margin-top: 15px;
    background: #F8F8F8;
    border: 2px solid #999999;
}
.bck-box-1 > .bck-title {
    border-bottom: 0px solid #eee;
    color: #000000;
    font-size: 2.1rem;
    font-weight: bold;
}
.bck-box.bck-box-1 > .bck-content {
    padding: 0;
}

/* CAJA 2 */
.bck-box.bck-box-2 .bck-title:before {
	display: none;
}
.bck-box.bck-box-2 {
    background: var(--colortrans);
    border: 2px solid var(--colorppal);
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    text-align: inherit;
    padding: 0;
}

/*CAJA 3 */
.bck-box.bck-box-3 {
    background-color: #E5E5E5;
    width: calc(100% + 80px);
    margin-left: -40px;
    max-width: none;
    padding: 15px 60px;
}
.bck-box-3 > .bck-title {
    text-align: center;
    font-weight: bold;
}

/*Desplegable*/
.bck-dropdown {
	-moz-box-shadow: 0 3px 7px 0px rgb(0 0 0 / 20%);
    -webkit-box-shadow: 0 3px 7px 0px rgb(0 0 0 / 20%);
	box-shadow: 0 3px 7px 0px rgb(0 0 0 / 20%);
	margin: 15px 0;
}
.bck-dropdown-button {
    padding: 10px;
    border: 0;
    position: relative;
    cursor: pointer;
}
.bck-dropdown .bck-dropdown-icon > .fa,
 .bck-dropdown-2 .bck-dropdown-icon > .fa {
	 display: none;
}
.bck-dropdown .bck-dropdown-icon,
 .bck-dropdown-2 .bck-dropdown-icon {
    color: #1A73E9;
}
.bck-dropdown .bck-dropdown-icon > .fa,
 .bck-dropdown-2 .bck-dropdown-icon > .fa {
    border: 0;
    position: absolute;
    right: 11px;
    padding: 0;
    top: 0;
    left: 0;
}
.fa-chevron-down:before {
    content: "\f078";
    position: absolute;
    color: #1A73E9;
    right: 24px;
    top: 21px;
}
.fa-chevron-up:before {
    content: "\f077";
    position: absolute;
    color: #1A73E9;
    right: 24px;
    top: 21px;
}
.bck-dropdown .bck-dropdown-titulo,
 .bck-dropdown-2 .bck-dropdown-titulo {
    color: #000;
    font-size: 2.0rem;
    font-weight: bold;
    display: inline-block;
    margin-top: -28px;
    margin-left: -46px;
}
.bck-dropdown-content {
    padding: 0 10px 20px 20px;
    background-color: #E5E5E5;
}

/*DESPLEGABLE*/
/*Flipbox*/
body:not(.edit) .bck-flipbox {
		margin: 15px 0;
		font-size: 18px;
}

body:not(.edit) .bck-flipbox-face.front {
	border: 0;
    background: white;
    -moz-box-shadow: 0px 5px 9px rgb(26 115 233 / 40%);
    -webkit-box-shadow: 0px 5px 9px rgb(26 115 233 / 40%);
    box-shadow: 0px 5px 9px rgb(26 115 233 / 40%);
    color: #000;
}
body:not(.edit) .bck-flipbox-face.back {
	color: #595959;
    border: 2px solid #1A73E9;
    background: #FFF;
    -moz-box-shadow: 0 0 6px 0px #1a73e94d;
    -webkit-box-shadow: 0 0 6px 0px #1a73e94d;
    box-shadow: 0 0 6px 0px #1a73e94d;
}
body:not(.edit) .front .bck-flipbox-title, body:not(.edit) .front .bck-flipbox-section {
    color: #000;
}
body:not(.edit) .back .bck-flipbox-title,
 body:not(.edit) .back .bck-flipbox-section {
    color: #000;
}
/*----*/

/*LISTAS DESORDENADAS*/
.texto_curso ul li {
	padding-left: 20px;
}

.texto_curso ul li:before,
.workspace ul li ul li:before,
.cke_contents ul li:before,
.preview ul li:before,
.classify-item ul li:before,
#actividad .workspace.multiple-choice .js-item ul li:before,
#actividad .workspace.matching .box ul li:before,
#actividad .workspace.ordenar .js-rank-item ul li:before {
	height: 6px;
	width: 6px;
	background-color: #333;
	color: #333;
	border-radius: 50%;
}

/*lista desordenada por defecto, sin seleccionar estilo para la ul*/
#actividad .content .texto_curso ul li:before,
#actividad .content .workspace ul li ul li:before {
	height: 9px;
	width: 9px;
	background-color: #fff;
	color: #fff;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
}

#actividad .content .texto_curso ul li::before,
#actividad .content .workspace ul li ul li::before,
#actividad .content .texto_curso .bck-ul li::before,
#actividad .content .workspace ul li .bck-ul li::before,
#actividad .popover-background.shown .popover-content>ul>li::before {
	content: "";
	height: 6px;
	width: 6px;
	background-color: #333;
	color: #333;
	border-radius: 50%;
	position: absolute;
	margin-top: .6em;
	margin-left: -10px;
}

#actividad .content .cke_contents .bck-ol li:before,
#actividad .content .texto_curso .bck-ol li:before,
#actividad .popover-content .bck-ol li:before,
#actividad .content .workspace ul li .bck-ol li:before {
	content: counter(bck-li-counter);
	position: relative;
	text-align: left;
	font-size: 1.9rem;
	font-family: 'Source Sans Pro', sans-serif;
	margin-left: -10px;
}

/*LISTA ORDENADA 1*/
#actividad .content .cke_contents .bck-ol-1,
#actividad .content .texto_curso .bck-ol-1,
#actividad .content .workspace ul li .bck-ol-1 {
	list-style-type: none;
	counter-reset: bck-li-counter;
}

#actividad .content .cke_contents .bck-ol-1 li,
#actividad .content .cke_contents .bck-ol-1 li,
#actividad .content .texto_curso .bck-ol-1 li,
#actividad .popover-content .bck-ol-1 li,
#actividad .content .workspace ul li .bck-ol-1 li {
	counter-increment: bck-li-counter;
	padding-left: 0px;
	position: relative;
	z-index: 0;
	font-weight: 700;
}

#actividad .content .cke_contents .bck-ol-1 li:before,
#actividad .content .texto_curso .bck-ol-1 li:before,
#actividad .popover-content .bck-ol-1 li:before,
#actividad .content .workspace ul li .bck-ol-1 li:before {
	margin-left: -13px;
}

#actividad .content .cke_contents .bck-ol-1 li:before,
#actividad .content .texto_curso .bck-ol-1 li:before,
#actividad .popover-content .bck-ol-1 li:before,
#actividad .content .workspace ul li .bck-ol-1 li:before {
	content: counter(bck-li-counter) ".";
	font-family: 'Source Sans Pro', sans-serif;
	font-weight: bold;
	position: absolute;
	text-align: right;
	color: #333;
	font-size: 1.8rem;
	width: 29px;
	margin-top: 0px;
	left: -20px;
	top: 0px;
}


/*CAJA POP-UP*/
.info-popover .popover-title:before,
.popover-template .popover-title:before {
	color: #728fa6;
}

.info-popover .popover-title,
.popover-template .popover-title {
	background: #728fa6;
}

.info-template .info-title {
	color: #333;
}

.info-template .info-title.shown {
	margin: 0 3px 12px 0;
}

.info-template .info-title.shown:before {
	display: none;
}

/*icono info*/
.fa-info:before {
	content: "+";
	font-weight: bold;
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 2.2rem;
	line-height: 20px;
	color: #333;
}

#actividad .info-button {
	display: block;
	width: 24px;
	height: 24px;
	margin: 0px;
	-webkit-box-shadow: 0 0 2px #555;
	-moz-box-shadow: 0 0 2px #555;
	box-shadow: 0 0 2px #555;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	background: #fff;
	color: #1a171b;
	font-family: 'FontAwesome';
	font-size: 18px;
	line-height: 24px;
	text-align: center;
}

/*Pop-up flotante*/
.info-template {
	position: fixed;
	top: 100px;
	right: 0;
	-webkit-transform: translateX(105%);
	-moz-transform: translateX(105%);
	-ms-transform: translateX(105%);
	-o-transform: translateX(105%);
	transform: translateX(105%);
	z-index: 1000;
	width: 135px;
	height: auto;
	-webkit-box-shadow: 0 0 2px #555;
	-moz-box-shadow: 0 0 2px #555;
	box-shadow: 0 0 2px #555;
	-webkit-border-radius: 5px 0 0 5px;
	-moz-border-radius: 5px 0 0 5px;
	border-radius: 5px 0 0 5px;
	background: #fff;
	padding: 15px 5px 0;
	-webkit-transition: all ease-in-out .5s;
	-o-transition: all ease-in-out .5s;
	-moz-transition: all ease-in-out .5s;
	transition: all ease-in-out .5s;
}
/*Dropdown 1*/
.bck-dropdown.bck-dropdown-1 {
	background-color: #9D9D9C;
}

.bck-dropdown-1 .bck-dropdown-icon {
	background-color: #9D9D9C;
}


/*AJUSTES ACTIVIDADES*/
/*Verdadero y falso*/
#actividad .workspace.true-false .tf-option {
	display: inline-block;
	margin-left: 50px;
}

/*Fill in the blanks*/
.fillblanks-draggable-wrapper {
	text-align: left;
	margin-bottom: 20px;
	margin-left: 47px;
}

/*clasificar*/
#actividad .workspace.clasificar .clasificar_lista>ul {
	display: inline-block;
	min-height: 70px;
	text-align: left;
	margin-left: 47px;
}

#actividad .workspace.clasificar .clasificar_lista .classify-item {
	background: #fff;
	padding-left: 10px;
	padding-right: 10px;
}

/*tipo test*/

#actividad .workspace.test .checkbox-option label.filter-label,
#actividad .workspace.test .radio-option label.filter-label,
#actividad .workspace.true-false .checkbox-option label.filter-label,
#actividad .workspace.true-false .radio-option label.filter-label {
	font-size: 1.8rem;
	font-weight: 300;
	margin-left: 20px;
}

/*parejas cartas*/

#actividad .workspace.memory .flip-container p {
	font-size: 1.5rem;
}

/*botonera general*/
#actividad .class_slide .review {
	margin-top: 40px;
	text-align: left;
	margin-left: 40px;
}

.btn-danger,
.btn-danger[disabled] {
	color: #fff;
	border-color: transparent;
	border-radius: 0px;
}

/* modo correcion/revision */
.info-alumno .nombre-alumno {
	max-width: 189px;
}

/**Iconos**/
.item-container .icon:before {
	vertical-align: top;
}

.item-container .icon-critical:before {
	background-image: url(imagenes_difusion/critical_thinking_dark.png);
}


/**TABLA**/
table,
.bck-table {
	border: 1px solid #ccc;
}

table td,
.bck-table td {
	border-color: #ccc;
}

td,
th {
	padding-left: 10px;
}

/*Boton toc - boton reininciar ejercicio*/
.btn-primary {
	background-color: #428bcac9;
}

.btn-primary,
.btn-primary.disabled,
.btn-primary.disabled:focus {
	background-color: #31A2C7;
	border-radius: 0;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary.active,
.open .dropdown-toggle.btn-primary {
	background-color: #ac0910;
}







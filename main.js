//? ---------------------------------------
// ! ------------ ARRAYS ------------
//? ---------------------------------------

const bestSellers = [
  {
    titulo: 'ALAS DE ÓNIX (EMPÍREO 3)',
    source: './assets/section best sellers/alas_de_onix.webp',
    descripcion: 'libro alas de onix',
    autor: 'Rebecca Yarros',
    precio: 22.7 + ' euro'
  },
  {
    titulo: 'EL CLAN (INSPECTORA ELENA BLANCO 5)',
    source: './assets/section best sellers/el_clan.webp',
    descripcion: 'libro el clan',
    autor: 'Carmen Mola',
    precio: 20.8 + 'euro'
  },
  {
    titulo: 'EL NIÑO QUE PERDIÓ LA GUERRA',
    source: './assets/section best sellers/el_niño_que_perdio_la_guerra.webp',
    descripcion: 'libro el niño que perdio la guerra',
    autor: 'Julia Navarro',
    precio: 15.8 + '&uro'
  },
  {
    titulo: 'LA ASISTENTA',
    source: './assets/section best sellers/la_asistenta.webp',
    descripcion: 'libro LA ASISTENTA',
    autor: 'Freida McFadden',
    precio: 10.8 + 'euro'
  },
  {
    titulo: 'LA ISLA DE LA MUJER DORMIDA',
    source: './assets/section best sellers/la_isla_de_la_mujer_dormida.webp',
    descripcion: 'libro LA ISLA DE LA MUJER DORMIDA',
    autor: 'Arturo Pérez-Reverte',
    precio: 10.8 + 'euro'
  },
  {
    titulo: 'LAS QUE NO DUERMEN NASH',
    source: './assets/section best sellers/las_que_no_duermen.webp',
    descripcion: 'libro LAS QUE NO DUERMEN NASH',
    autor: 'Dolores Redondo',
    precio: 10.8 + 'euro'
  },
  {
    titulo: 'QUICKSILVER - SAGA ALQUIMIA & FAE VOL. 1',
    source: './assets/section best sellers/quicksilver_saga.webp',
    descripcion: 'libro QUICKSILVER - SAGA ALQUIMIA & FAE VOL. 1',
    autor: 'Callie Hart',
    precio: 26.8 + 'euro'
  },
  {
    titulo: 'VICTORIA (PREMIO PLANETA 2024)',
    source: './assets/section best sellers/victoria.webp',
    descripcion: 'libro VICTORIA (PREMIO PLANETA 2024)',
    autor: 'Paloma Sánchez-Garnica',
    precio: 21.8 + 'euro'
  }
];

const categorias = [
  'Contemporanea',
  'Infantil',
  'Juvenil',
  'Autoayuda',
  'Ciencia'
];

const navBarSecondary = [
  'Imprescindibles',
  'Ficción',
  'No Ficción',
  'Infantil',
  'Juvenil',
  'Comics y Manga',
  'English Books',
  'Papelería',
  'Ebooks'
];

const recomendaciones = [
  {
    titulo: 'Una familia. Un terrible secreto',
    source: './assets/section recomendations/9788491297086.webp',
    descripcion: 'portada libro el faro de la sirena'
  },
  {
    titulo: 'El arte de lo oculto',
    source: './assets/section recomendations/arte_ocultowebp.webp',
    descripcion: 'portada libro arte de lo oculto'
  },
  {
    titulo: 'Amarilla',
    source: './assets/section recomendations/amarillawebp.webp',
    descripcion: 'portada libro amarilla'
  },
  {
    titulo: '',
    source: '',
    descripcion: ''
  },
  {
    titulo: 'Cocina japonesa',
    source: './assets/section recomendations/cocina_japonesa.webp',
    descripcion: 'portada libro cocina japonesa'
  },
  {
    titulo: 'Fiesta a medianoche',
    source: './assets/section recomendations/fiesta_a_medianoche.webp',
    descripcion: 'portada libro fiesta a medianoche'
  },
  {
    titulo: 'The odoros',
    source: './assets/section recomendations/the_odoros.webp',
    descripcion: 'portada libro the odoros'
  },
  {
    titulo: 'Arte',
    source: './assets/section recomendations/arte.webp',
    descripcion: 'portada libro arte'
  }
];

const footerSocial = [
  {
    href: '#',
    target: '_blank',
    img: {
      src: './assets/logos/social/facebook.svg',
      alt: 'facebook'
    }
  },
  {
    href: '#',
    target: '_blank',
    img: {
      src: './assets/logos/social/instagram.svg',
      alt: 'instagram'
    }
  },
  {
    href: '#',
    target: '_blank',
    img: {
      src: './assets/logos/social/twitter.svg',
      alt: 'twitter'
    }
  },
  {
    href: '#',
    target: '_blank',
    img: {
      src: './assets/logos/social/youtube.svg',
      alt: 'youtube'
    }
  }
];

const footerCasaLibro = [
  {
    href: '#',
    text: 'Quienes somos'
  },
  {
    href: '#',
    text: 'Trabaja con nosotros'
  },
  {
    href: '#',
    text: 'Nuestras librerías'
  },
  {
    href: '#',
    text: 'Casa del Libro México'
  }
];

const footerInfoLegal = [
  {
    href: '#',
    text: 'Condiciones de uso'
  },
  {
    href: '#',
    text: 'Condiciones de contratación'
  },
  {
    href: '#',
    text: 'Condiciones para vender'
  }
];

//? ---------------------------------------
// ! ------------ FUNCIONES ------------
//? ---------------------------------------

const crearGaleria = (array) => {
  const ul = document.createElement('ul');
  array.forEach((element) => {
    const li = document.createElement('li');
    const article = document.createElement('article');
    article.innerHTML = `
      <img src="${element.source}" alt="${element.descripcion}" />
      <div class="info-libro">
        <h2 class="titulo-libro">${element.titulo}</h2>
        <p class="autor">${element.autor}</p>
      </div>
      <p class="precio">${element.precio}</p>
      <div class='acciones'>
        <button class="ver-ficha">ver ficha</button>
        <button class="añadir">añadir</button>
      </div>
    `;
    li.appendChild(article);
    ul.appendChild(li);
  });

  return ul;
};

const crearSection = (array, tituloSection) => {
  const ul = document.createElement('ul');
  const h2 = document.createElement('h2');
  h2.textContent = tituloSection;
  array.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="${element.href}">${element.text}</a>
    `;
    ul.appendChild(li);
  });

  return [h2, ul];
  // ? Devolver un contenedor con ambos elementos
  // const container = document.createElement('div');
  // container.append(h2, ul);
  // return container;
};

const crearLista = (array) => {
  const ul = document.createElement('ul');
  array.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
  });
  return ul;
};

//? ---------------------------------------
// ! ------------ best sellers ------------
//? ---------------------------------------

const bestSellersSection = document.querySelector('.best-sellers'); //recuperamos la section con clase best-sellers

const h2BestSeller = document.createElement('h2');
h2BestSeller.textContent = 'Mas vendidos';

//? ejecutamos funcion crear galeria para crear galeria de imagenes con los libros y sus datos. El valor ul devuelto por la funcion es guardado en galeriaBestSellers para luego ser añadido en la section
const galeriaBestSellers = crearGaleria(bestSellers);
bestSellersSection.appendChild(galeriaBestSellers);

bestSellersSection.insertAdjacentElement('afterbegin', h2BestSeller);

//? ---------------------------------------
// ! ------------ footer ------------
//? ---------------------------------------

//traemos el elemento footer donde agregaremos los distintos elementos que creemos:
const footer = document.querySelector('footer');

//seccion para redes sociales
const socialSection = document.createElement('section');
socialSection.className = 'social-media';
const ul = document.createElement('ul'); //creamos elemento ul para guardar los li generados en el bucle for each

//añadimos elementos dinamicamente:
footerSocial.forEach((social) => {
  const li = document.createElement('li');
  li.innerHTML = `
    <a href="${social.href}" target="${social.target}"></a>
    <img src="${social.img.src}" alt="${social.img.alt}">
  `;
  ul.appendChild(li);
});
socialSection.appendChild(ul);
//footer.appendChild(socialSection);

//seccion para info de la casa del libro
const casaLibroSection = document.createElement('section');
casaLibroSection.className = 'footer-nav';
//ejecutamos la funcion crear lista:
const casaLibroLista = crearSection(footerCasaLibro, 'Casa del libro'); //devuelve un nodeList con un ul y un h2
casaLibroSection.append(casaLibroLista[0], casaLibroLista[1]);
// casaLibroSection.appendChild(casaLibroLista);

//seccion para info legal
const infoLegalSection = document.createElement('section');
infoLegalSection.className = 'footer-nav';
const infoLegalLista = crearSection(footerInfoLegal, 'Informacion Legal');
infoLegalSection.append(infoLegalLista[0], infoLegalLista[1]);

const footerNavContainer = document.createElement('div');
footerNavContainer.className = 'footer-nav-container';

// footer.append(socialSection, casaLibroSection, infoLegalSection);
footerNavContainer.append(casaLibroSection, infoLegalSection);
footer.append(socialSection, footerNavContainer);

//? ---------------------------------------
// ! -------- navbar secondary ---------
//? ---------------------------------------

const navBarCategories = document.querySelector('.nav-bar-secondary');
const navBarCategoriesLista = crearLista(navBarSecondary);
navBarCategories.appendChild(navBarCategoriesLista);

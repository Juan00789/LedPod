export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  imageHint: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  images: { url: string; hint: string }[];
  specifications: { name: string; value: string }[];
  price: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  projectImage: string;
  projectImageHint: string;
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'led-lights',
    name: 'Luces LED',
    description: 'Modernas y eficientes para cualquier espacio.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'LED lights'
  },
  {
    slug: 'interior-decorations',
    name: 'Decoraciones Interiores',
    description: 'Transforma tu hogar con estilo.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'interior decor'
  },
  {
    slug: 'lamps',
    name: 'Lámparas',
    description: 'Todos los estilos para iluminar tu vida.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'modern lamps'
  },
  {
    slug: 'spc-floors',
    name: 'Pisos SPC',
    description: 'Resistentes, elegantes y duraderos.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'SPC flooring'
  },
  {
    slug: 'decorative-grooves',
    name: 'Acanalados Decorativos',
    description: 'Detalles funcionales que marcan la diferencia.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'decorative grooves'
  },
  {
    slug: 'pvc-marble',
    name: 'PVC Mármol',
    description: 'Alto impacto visual para tus paredes.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'marble wall'
  },
  {
    slug: 'wpc-exteriors',
    name: 'WPC para Exteriores',
    description: 'Durabilidad y estilo para tus espacios al aire libre.',
    image: 'https://placehold.co/400x250.png',
    imageHint: 'WPC decking'
  },
];

export const products: Product[] = [
  {
    slug: 'modern-led-strip',
    category: 'led-lights',
    name: 'Tira LED Moderna RGB',
    description: 'Iluminación ambiental versátil con control remoto y app.',
    longDescription: 'Nuestra tira LED moderna RGB es la solución perfecta para añadir un toque de color y ambiente a cualquier habitación. Con millones de colores, sincronización con música y fácil instalación, puedes transformar tu espacio en segundos. Ideal para salas de estar, dormitorios y áreas de entretenimiento.',
    price: '$49.99',
    images: [
      { url: 'https://placehold.co/600x400.png', hint: 'LED strip ambient' },
      { url: 'https://placehold.co/600x400.png', hint: 'LED strip detail' },
      { url: 'https://placehold.co/600x400.png', hint: 'LED strip room' },
    ],
    specifications: [
      { name: 'Longitud', value: '5 metros' },
      { name: 'Colores', value: 'RGB (16 millones)' },
      { name: 'Control', value: 'Control remoto y App móvil' },
      { name: 'Voltaje', value: '12V' },
    ],
  },
  {
    slug: 'nordic-pendant-lamp',
    category: 'lamps',
    name: 'Lámpara Colgante Nórdica',
    description: 'Diseño minimalista que aporta calidez y elegancia.',
    longDescription: 'Esta lámpara colgante de estilo nórdico combina madera natural y metal en un diseño limpio y minimalista. Es perfecta para colgar sobre mesas de comedor, islas de cocina o en cualquier rincón que necesite un punto de luz focal elegante y acogedor.',
    price: '$129.99',
    images: [
        { url: 'https://placehold.co/600x400.png', hint: 'pendant lamp kitchen' },
        { url: 'https://placehold.co/600x400.png', hint: 'pendant lamp detail' },
    ],
    specifications: [
      { name: 'Material', value: 'Madera y Aluminio' },
      { name: 'Color', value: 'Negro Mate' },
      { name: 'Socket', value: 'E27' },
      { name: 'Dimensiones', value: '30cm x 25cm' },
    ],
  },
  {
    slug: 'oak-spc-floor',
    category: 'spc-floors',
    name: 'Piso SPC de Roble Natural',
    description: 'La belleza de la madera con la resistencia del SPC.',
    longDescription: 'Disfruta de la estética cálida y atemporal del roble sin preocuparte por el mantenimiento. Nuestro piso SPC es 100% resistente al agua, a los arañazos y muy fácil de limpiar. Su sistema de clic facilita una instalación rápida y sencilla.',
    price: '$5.99 / sq ft',
    images: [
        { url: 'https://placehold.co/600x400.png', hint: 'SPC flooring room' },
        { url: 'https://placehold.co/600x400.png', hint: 'SPC flooring texture' },
    ],
    specifications: [
      { name: 'Grosor', value: '5mm' },
      { name: 'Capa de Desgaste', value: '0.5mm' },
      { name: 'Textura', value: 'Sincronizada con el diseño' },
      { name: 'Instalación', value: 'Sistema de Clic' },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'La asesoría fue increíble. Transformaron mi sala de estar en un espacio de revista. ¡Las luces LED hicieron toda la diferencia!',
    author: 'Ana Pérez',
    projectImage: 'https://placehold.co/400x250.png',
    projectImageHint: 'modern living room'
  },
  {
    quote: 'Calidad y estilo. El piso SPC no solo es hermoso, sino que ha resistido perfectamente a mis hijos y mascotas. ¡Totalmente recomendado!',
    author: 'Carlos Gómez',
    projectImage: 'https://placehold.co/400x250.png',
    projectImageHint: 'family home interior'
  },
  {
    quote: 'Encontré la lámpara perfecta que buscaba hace meses. El equipo de LedPop me ayudó a elegir la ideal para mi comedor.',
    author: 'Sofía Rodríguez',
    projectImage: 'https://placehold.co/400x250.png',
    projectImageHint: 'elegant dining room'
  },
   {
    quote: 'El WPC para mi terraza fue la mejor inversión. Se ve increíble y el mantenimiento es mínimo. ¡Gracias, LedPop!',
    author: 'Javier Castillo',
    projectImage: 'https://placehold.co/400x250.png',
    projectImageHint: 'modern patio'
  },
];

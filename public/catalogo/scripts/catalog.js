fetch('/catalogo/data/motos.json')
  .then(res => res.json())
  .then(data => {
    renderCatalog(data);
  });

function renderCatalog(items){

  const catalogGrid = document.getElementById('catalog-grid');

  catalogGrid.innerHTML = '';

  items.forEach((moto,index)=>{

    const card = document.createElement('div');

    card.className =
      'catalog-card glass rounded-[34px] overflow-hidden';

    card.innerHTML = `

      <div class="h-[280px] overflow-hidden relative">

        <img
          src="${moto.imagen}"
          alt="${moto.nombre}"
          loading="lazy"
          class="w-full h-full object-cover hover:scale-110 transition duration-700"
        >

        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      </div>

      <div class="p-8">

        <div class="flex items-center justify-between mb-5 gap-4">

          <h3 class="text-3xl font-black">
            ${moto.nombre}
          </h3>

          <span class="text-blue-400 text-sm font-semibold">
            ${moto.categoria}
          </span>

        </div>

        <p class="subtle leading-relaxed mb-8">
          ${moto.descripcion}
        </p>

      </div>

    `;

    catalogGrid.appendChild(card);

  });

}

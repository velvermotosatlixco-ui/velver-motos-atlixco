const container = document.getElementById("motos-container");
const buscador = document.getElementById("buscador");

function mostrarMotos(lista) {
  container.innerHTML = "";

  lista.forEach(moto => {
    const card = document.createElement("div");
    card.className = "moto-card";

    card.innerHTML = `
      <img src="${moto.imagen}" alt="${moto.modelo}" class="moto-img">

      <div class="p-5">
        <h2 class="text-2xl font-bold mb-2">${moto.marca} ${moto.modelo}</h2>

        <p class="text-blue-400 text-lg mb-2">$${moto.precio.toLocaleString()}</p>

        <p class="text-sm text-gray-300 mb-2">
          ${moto.categoria} | ${moto.cilindrada}cc
        </p>

        <p class="text-sm text-gray-400 mb-4">
          ${moto.descripcion}
        </p>

        <a 
          href="https://wa.me/522441252948?text=Hola,%20quiero%20información%20sobre%20la%20${encodeURIComponent(moto.modelo)}"
          target="_blank"
          class="block text-center bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl transition"
        >
          Solicitar Información
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

function filtrarMotos() {
  const texto = buscador.value.toLowerCase();

  const filtradas = motos.filter(moto =>
    moto.modelo.toLowerCase().includes(texto) ||
    moto.marca.toLowerCase().includes(texto) ||
    moto.categoria.toLowerCase().includes(texto)
  );

  mostrarMotos(filtradas);
}

buscador.addEventListener("input", filtrarMotos);

// Mostrar todas al inicio
mostrarMotos(motos);

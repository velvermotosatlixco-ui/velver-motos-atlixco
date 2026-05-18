// Datos de prueba integrados para verificar el renderizado inmediato
const motos = [
    {
        nombre: "CRX 200",
        categoria: "Sport",
        descripcion: "Diseñada para adrenalina urbana premium.",
        imagen: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800"
    },
    {
        nombre: "FIGHTER 200",
        categoria: "Touring",
        descripcion: "Experiencia Touring elite con presencia imponente.",
        imagen: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800"
    }
];

// Ejecución directa (sin DOMContentLoaded) porque type="module" ya es asíncrono
const catalogGrid = document.getElementById('catalog-grid');

if (catalogGrid) {
    catalogGrid.innerHTML = "";
    
    motos.forEach((moto) => {
        const card = document.createElement('div');
        card.className = "exp-card opacity-0 translate-y-10"; // Clases iniciales para GSAP
        card.innerHTML = `
            <div class="h-[280px] overflow-hidden rounded-[24px] mb-6 bg-gray-900">
                <img src="${moto.imagen}" alt="${moto.nombre}" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out">
            </div>
            <h3 class="text-2xl font-bold mb-2 text-white tracking-tight">${moto.nombre}</h3>
            <span class="text-[#3BA0FF] font-semibold text-xs uppercase tracking-[0.2em]">${moto.categoria}</span>
            <p class="text-gray-400 mt-4 mb-8 text-sm leading-relaxed">${moto.descripcion}</p>
            <button class="btn-primary w-full text-center" onclick="window.open('https://wa.me/522441252948')">
                Solicitar Información
            </button>
        `;
        catalogGrid.appendChild(card);
    });

    // Animación cinematográfica de entrada (Stagger effect)
    gsap.to(".exp-card", { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out" 
    });
} else {
    console.error("BLACK CODE SYSTEM: Contenedor de catálogo no encontrado.");
}

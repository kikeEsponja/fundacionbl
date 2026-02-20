function setupNavbarLinks() {
    const currentPath = window.location.pathname;

    document.querySelectorAll('button[data-url]').forEach((btn) => {
        const destino = btn.getAttribute('data-url');
        if (!destino) return;

        btn.addEventListener('click', () => {
            window.location.href = destino;
        });

        const destinoPath = new URL(destino, window.location.origin).pathname;
        const isActive = destinoPath === currentPath;
        btn.classList.toggle('nav-link-active', isActive);
    });
}

setupNavbarLinks();

document.querySelectorAll('.navbar-toggle').forEach((toggle) => {
    const navbar = toggle.closest('.navbar');
    if (!navbar) return;
    const links = navbar.querySelector('.navbar-links');
    if (!links) return;

    toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('is-open');
        toggle.classList.toggle('is-open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
});

const fotosGrid = document.getElementById('fotos-grid');
const videosGrid = document.getElementById('videos-grid');

if (fotosGrid && videosGrid) {
    const fotos = [
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.29.jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.29 (1).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.29 (2).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.29 (3).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.30.jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.30 (1).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.30 (2).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.31.jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.31 (1).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.31 (2).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.32.jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.32 (1).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.32 (2).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.32 (3).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.32 (4).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.33.jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.33 (1).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.33 (2).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.34.jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.34 (1).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.34 (4).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.35.jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.35 (1).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.35 (2).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.36.jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.36 (1).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' },
        { src: '../imagenes/galeria/WhatsApp Image 2026-02-18 at 20.43.35 (3).jpeg', alt: 'Registro fotográfico de las actividades de la fundación' }
    ];

    const videos = [
        { src: '../videos/galeria/WhatsApp Video 2026-02-18 at 20.43.28.mp4' },
        { src: '../videos/galeria/WhatsApp Video 2026-02-18 at 20.43.30.mp4' },
        { src: '../videos/galeria/WhatsApp Video 2026-02-18 at 20.43.31.mp4' },
        { src: '../videos/galeria/WhatsApp Video 2026-02-18 at 20.43.33.mp4' },
        { src: '../videos/galeria/WhatsApp Video 2026-02-18 at 20.43.36.mp4' }
    ];

    const lightboxEl = document.getElementById('lightbox');
    const lightboxBody = document.getElementById('lightbox-body');
    const lightboxClose = document.getElementById('lightbox-close');

    function openLightbox(kind, src, alt) {
        lightboxBody.innerHTML = '';
        if (kind === 'image') {
            const img = document.createElement('img');
            img.src = src;
            img.alt = alt || '';
            lightboxBody.appendChild(img);
        } else if (kind === 'video') {
            const video = document.createElement('video');
            video.src = src;
            video.setAttribute('controls', '');
            video.setAttribute('playsinline', '');
            video.setAttribute('muted', '');
            lightboxBody.appendChild(video);
        }
        lightboxEl.classList.add('is-open');
        lightboxEl.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
        lightboxEl.classList.remove('is-open');
        lightboxEl.setAttribute('aria-hidden', 'true');
        lightboxBody.innerHTML = '';
    }

    function setupLightboxEvents() {
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxEl.addEventListener('click', (e) => {
            if (e.target === lightboxEl || e.target.classList.contains('lightbox-backdrop')) {
                closeLightbox();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxEl.classList.contains('is-open')) {
                closeLightbox();
            }
        });
    }

    function renderFotos(items) {
        items.forEach(item => {
            const wrapper = document.createElement('div');
            wrapper.className = 'galeria-item';
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt || 'Foto';
            img.loading = 'lazy';
            wrapper.appendChild(img);
            fotosGrid.appendChild(wrapper);
            img.addEventListener('click', () => openLightbox('image', item.src, item.alt));
        });
    }

    function renderVideos(items) {
        items.forEach(item => {
            const wrapper = document.createElement('div');
            wrapper.className = 'galeria-item';
            const video = document.createElement('video');
            video.src = item.src;
            video.preload = 'metadata';
            video.setAttribute('muted', '');
            video.setAttribute('playsinline', '');
            wrapper.appendChild(video);
            videosGrid.appendChild(wrapper);
            wrapper.addEventListener('click', () => openLightbox('video', item.src));
        });
    }

    if (fotosGrid) renderFotos(fotos);
    if (videosGrid) renderVideos(videos);
    setupLightboxEvents();

    const fotosSection = document.getElementById('galeria-fotos');
    const videosSection = document.getElementById('galeria-videos');
    const tabs = document.querySelectorAll('.galeria-tab');

    if (fotosSection && videosSection && tabs.length) {
        function setTab(target) {
            const showFotos = target === 'fotos';
            fotosSection.classList.toggle('galeria-seccion-oculta', !showFotos);
            videosSection.classList.toggle('galeria-seccion-oculta', showFotos);

            tabs.forEach(tab => {
                const t = tab.getAttribute('data-target');
                tab.classList.toggle('galeria-tab-activa', t === target);
            });
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                if (!target) return;
                setTab(target);
            });
        });

        setTab('fotos');
    }
}

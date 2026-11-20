const products = [
  {
    id: 'sora-lounge', category: 'seating', name: { id: 'Kursi Sora', en: 'Sora Lounge Chair' },
    description: { id: 'Tempat singgah yang nyaman, dianyam dari rotan alami.', en: 'A welcoming place to pause, woven from natural rattan.' },
    price: 2850000, stock: 8, weight: 8, badge: { id: 'Favorit', en: 'Bestseller' }, variants: ['Natural', 'Honey', 'Walnut'],
    image: 'https://images.pexels.com/photos/5825409/pexels-photo-5825409.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Kursi rotan anyaman dengan bantalan di sudut ruangan', en: 'Woven rattan armchair with a cushion in a cozy room' }
  },
  {
    id: 'nara-pendant', category: 'lighting', name: { id: 'Lampu Nara', en: 'Nara Pendant' },
    description: { id: 'Cahaya lembut dengan siluet anyaman yang hangat.', en: 'Soft light, shaped by a warm woven silhouette.' },
    price: 1250000, stock: 0, weight: 3, badge: { id: 'Segera hadir', en: 'Coming soon' }, variants: ['Natural', 'Dark'],
    image: 'https://images.pexels.com/photos/17299918/pexels-photo-17299918.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Lampu gantung kap anyaman rotan', en: 'Handwoven rattan pendant lampshades' }
  },
  {
    id: 'tala-basket', category: 'living', name: { id: 'Keranjang Tala', en: 'Tala Basket' },
    description: { id: 'Teman kecil untuk menyimpan benda kesayangan.', en: 'A little home for the things you love.' },
    price: 485000, stock: 16, weight: 2, badge: { id: 'Siap dikirim', en: 'Ready to ship' }, variants: ['Natural', 'Honey', 'Bleached'],
    image: 'https://images.pexels.com/photos/9695849/pexels-photo-9695849.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Kumpulan keranjang rotan berbagai bentuk', en: 'A collection of woven rattan baskets' }
  },
  {
    id: 'luma-side-table', category: 'living', name: { id: 'Meja Luma', en: 'Luma Side Table' },
    description: { id: 'Bentuk sederhana, untuk sudut ruang yang berarti.', en: 'A simple shape for a corner that matters.' },
    price: 1675000, stock: 5, weight: 6, badge: { id: 'Edisi bengkel', en: 'Workshop edition' }, variants: ['Natural', 'Walnut'],
    image: 'https://images.pexels.com/photos/5958743/pexels-photo-5958743.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Meja dan kursi rotan dengan anyaman rapat', en: 'Rattan table and chairs with detailed woven texture' }
  },
  {
    id: 'ranu-sofa', category: 'seating', name: { id: 'Sofa Ranu', en: 'Ranu Rattan Sofa' },
    description: { id: 'Sofa teras dengan rangka dan anyaman rotan yang ringan.', en: 'An airy patio sofa with a woven rattan frame.' },
    price: 6450000, stock: 3, weight: 18, badge: { id: 'Pilihan ruang', en: 'Room favourite' }, variants: ['Natural', 'Honey'],
    image: 'https://images.pexels.com/photos/26793170/pexels-photo-26793170.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Sofa rotan dan kursi rotan di teras rumah', en: 'Rattan sofa and chairs on a home terrace' }
  },
  {
    id: 'bale-chair', category: 'seating', name: { id: 'Kursi Bale', en: 'Bale Wicker Chair' },
    description: { id: 'Kursi santai rotan untuk menikmati sore di teras.', en: 'A laid-back wicker chair for slow afternoons outdoors.' },
    price: 2150000, stock: 7, weight: 7, badge: { id: 'Anyaman tangan', en: 'Handwoven' }, variants: ['Natural', 'Walnut'],
    image: 'https://images.pexels.com/photos/33869744/pexels-photo-33869744.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Kursi santai rotan anyaman di taman', en: 'Woven wicker lounge chairs in a garden' }
  },
  {
    id: 'awan-lamp', category: 'lighting', name: { id: 'Kap Lampu Awan', en: 'Awan Wicker Lampshade' },
    description: { id: 'Kap lampu anyaman yang membiaskan cahaya lembut.', en: 'A woven lampshade that casts a softer light.' },
    price: 975000, stock: 11, weight: 2, badge: { id: 'Cahaya hangat', en: 'Warm glow' }, variants: ['Natural', 'Dark'],
    image: 'https://images.pexels.com/photos/17589007/pexels-photo-17589007.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Kap lampu gantung dari anyaman rotan', en: 'Pendant lampshade made from woven wicker' }
  },
  {
    id: 'loka-basket', category: 'living', name: { id: 'Set Keranjang Loka', en: 'Loka Basket Set' },
    description: { id: 'Keranjang rotan serbaguna, dibuat dan dianyam tangan.', en: 'Versatile wicker baskets, shaped and woven by hand.' },
    price: 725000, stock: 14, weight: 3, badge: { id: 'Set isi 2', en: 'Set of 2' }, variants: ['Natural', 'Honey'],
    image: 'https://images.pexels.com/photos/9695853/pexels-photo-9695853.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Keranjang rotan dengan pola anyaman yang rapat', en: 'Wicker basket with a close-up woven pattern' }
  },
  {
    id: 'aruna-dining', category: 'living', name: { id: 'Kursi Makan Aruna', en: 'Aruna Dining Chair' },
    description: { id: 'Kursi makan dengan sandaran rotan untuk meja keluarga.', en: 'A woven-back dining chair for gathering around the table.' },
    price: 1890000, stock: 6, weight: 6, badge: { id: 'Ruang makan', en: 'Gather around' }, variants: ['Natural', 'Walnut'],
    image: 'https://images.pexels.com/photos/25328879/pexels-photo-25328879.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Deretan kursi rotan anyaman di ruang makan', en: 'Woven rattan chairs arranged around a dining space' }
  },
  {
    id: 'sela-chair', category: 'seating', name: { id: 'Kursi Sela', en: 'Sela Woven Chair' },
    description: { id: 'Pasangan kursi rotan untuk membaca atau berbincang.', en: 'A woven rattan chair for reading or conversation.' },
    price: 2350000, stock: 4, weight: 7, badge: { id: 'Favorit baru', en: 'New favourite' }, variants: ['Natural', 'Honey', 'Dark'],
    image: 'https://images.pexels.com/photos/7832180/pexels-photo-7832180.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Kursi rotan anyaman dengan tanaman hias', en: 'Woven rattan chairs beside leafy plants' }
  },
  {
    id: 'lini-lamp', category: 'lighting', name: { id: 'Lampu Lini', en: 'Lini Woven Lamp' },
    description: { id: 'Lampu rotan dekoratif dengan pola anyaman terbuka.', en: 'A decorative rattan lamp with an airy woven pattern.' },
    price: 1450000, stock: 5, weight: 3, badge: { id: 'Dianyam terbuka', en: 'Open weave' }, variants: ['Natural', 'Dark'],
    image: 'https://images.pexels.com/photos/14809351/pexels-photo-14809351.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Lampu meja berbentuk anyaman rotan menyala', en: 'Glowing table lamp with a woven rattan shade' }
  },
  {
    id: 'saji-basket', category: 'living', name: { id: 'Keranjang Saji', en: 'Saji Serving Basket' },
    description: { id: 'Keranjang anyaman rotan untuk membawa sajian ke meja.', en: 'A handwoven wicker basket for serving at the table.' },
    price: 395000, stock: 19, weight: 1, badge: { id: 'Serbaguna', en: 'Everyday piece' }, variants: ['Natural', 'Honey'],
    image: 'https://images.pexels.com/photos/17836852/pexels-photo-17836852.jpeg?auto=compress&cs=tinysrgb&w=750', alt: { id: 'Tumpukan keranjang rotan yang dianyam tangan', en: 'A stack of handwoven wicker baskets' }
  }
];

const destinations = [
  { id: 'indonesia', name: { id: 'Indonesia', en: 'Indonesia' }, base: 45000, perKg: 9000, minDays: 2, maxDays: 5, currency: 'IDR' },
  { id: 'singapore', name: { id: 'Singapura', en: 'Singapore' }, base: 250000, perKg: 45000, minDays: 5, maxDays: 8, currency: 'IDR' },
  { id: 'japan', name: { id: 'Jepang', en: 'Japan' }, base: 380000, perKg: 65000, minDays: 8, maxDays: 14, currency: 'IDR' },
  { id: 'netherlands', name: { id: 'Belanda', en: 'Netherlands' }, base: 475000, perKg: 78000, minDays: 12, maxDays: 20, currency: 'IDR' },
  { id: 'united-states', name: { id: 'Amerika Serikat', en: 'United States' }, base: 525000, perKg: 85000, minDays: 14, maxDays: 28, currency: 'IDR' }
];

const translations = {
  id: {
    announcement: 'Dianyam dengan sabar di Cirebon, dikirim ke seluruh dunia.', announcementTag: 'Pesanan grosir disambut',
    navCollection: 'Koleksi', navStory: 'Cerita kami', navShipping: 'Pengiriman', navQuote: 'Minta penawaran',
    heroEyebrow: 'ROTAN PILIHAN · CIREBON, INDONESIA', heroTitle: 'Ruang untuk<br><em>bernapas lega.</em>',
    heroDescription: 'Kehangatan alam, dianyam tangan para perajin Cirebon untuk rumah yang terasa lebih seperti rumah.',
    exploreCollection: 'Jelajahi koleksi', heroNote: 'Dibuat dengan tangan, sejak 1998', statYears: 'tahun merajut cerita',
    statCountries: 'negara tujuan ekspor', statHandmade: 'buatan tangan', heroImageCaption: 'Koleksi Sora — sudut santai, ritme pelan.',
    floatingNote: 'Serat alami.<br>Sentuhan personal.', scrollHint: 'GULIR UNTUK MENJELAJAH',
    collectionEyebrow: 'PILIHAN DARI BENGKEL KAMI', collectionTitle: 'Benda baik,<br><em>untuk waktu yang lama.</em>',
    collectionDescription: 'Setiap helai punya karakter sendiri. Temukan bentuk yang cocok untuk ruang dan ritme Anda.',
    filterAll: 'Semua', filterSeating: 'Kursi', filterLighting: 'Lampu', filterLiving: 'Rumah', collectionOrder: 'EDISI 01 — NATURAL LIVING',
    productCount: '{count} OBJEK TERPILIH', productSearchLabel: 'Cari produk', productSearchPlaceholder: 'Cari nama atau jenis produk...', searchResults: '{count} produk ditemukan', noProducts: 'Produk tidak ditemukan.',
    cartLabel: 'Keranjang', cartEyebrow: 'PESANAN ANDA', cartTitle: 'Keranjang belanja', cartSubtotal: 'Subtotal',
    cartOpen: 'Buka keranjang ({count})', cartCloseLabel: 'Tutup keranjang',
    cartShippingNote: 'Estimasi ongkir akan dikonfirmasi berdasarkan tujuan pengiriman.',
    cartCheckout: 'Tanyakan pesanan melalui WhatsApp', cartEmpty: 'Keranjang Anda masih kosong.',
    cartRemove: 'Hapus produk', cartVariant: 'Varian', cartQty: 'Jumlah', addToCart: 'Tambah ke keranjang',
    cartAdded: '{product} ditambahkan ke keranjang.', cartLimit: 'Jumlah sudah mencapai batas stok.',
    cartItemCount: '{count} produk di keranjang', cartItemLine: '{quantity} × {product} ({variant}) — {price}',
    cartMessage: 'Halo Raya Rattan, saya ingin menanyakan pesanan berikut:\n{items}\nSubtotal: {subtotal}. Ongkir belum termasuk.',
    mapSearchLabel: 'Cari daerah atau negara', mapSearchPlaceholder: 'Cari daerah atau negara...',
    mapSearchButton: 'Cari', mapSearchPrompt: 'Cari lokasi untuk melihatnya pada peta.',
    mapSearchLoading: 'Sedang mencari lokasi...', mapSearchNoResults: 'Lokasi tidak ditemukan. Coba nama daerah atau negara lain.',
    mapSearchError: 'Lokasi tidak dapat dicari. Periksa koneksi internet.',
    mapUnavailable: 'Peta tidak dapat dimuat. Periksa koneksi internet.',
    mapFallbackNotice: 'Sumber peta utama diblokir; sedang menggunakan sumber alternatif.',
    mapLocalNotice: 'Sumber peta daring tidak tersedia; menampilkan peta dunia lokal.',
    mapLocationFound: 'Lokasi ditemukan: {location}', mapOrigin: 'Penanda perkiraan: wilayah Kalijaga, Harjamukti, Kota Cirebon',
    mapMarkerPopup: 'Penanda perkiraan wilayah Kalijaga, Harjamukti, Kota Cirebon',
    mapAriaLabel: 'Peta interaktif untuk mencari lokasi',
    inStock: 'Tersedia', outOfStock: 'Habis', variants: 'varian', orderProduct: 'Pilih produk', stockInquiry: 'Tanyakan ketersediaan',
    categorySeating: 'Tempat duduk', categoryLighting: 'Pencahayaan', categoryLiving: 'Untuk rumah',
    storyEyebrow: 'DARI TANGAN KE TANGAN', storyTitle: 'Kami percaya<br>pada <em>hal-hal alami.</em>',
    storyParagraph: 'Di sudut Cirebon, rotan bukan sekadar bahan. Ia adalah cerita tentang tangan-tangan terampil, tentang belajar sabar, dan benda yang dibuat untuk menemani hidup—bukan sekadar mengisinya.',
    storyLink: 'Kenali cara kami bekerja', craftCaption: 'Dipanen bijak. Dianyam cermat. Dikirim dengan bangga.',
    quoteEyebrow: 'PENAWARAN, TANPA TEBAK-TEBAKAN', quoteTitle: 'Ruang Anda,<br><em>hitungannya jelas.</em>',
    quoteDescription: 'Pilih produk, tentukan jumlah, lalu lihat harga, ongkir, dan perkiraan waktu tiba secara langsung.',
    quoteAssurance: 'Harga produk dan estimasi diperbarui otomatis.', calculatorTitle: 'Kalkulator pesanan',
    calculatorSubtitle: 'Estimasi instan untuk rencana Anda', live: 'LANGSUNG', productLabel: 'PILIH PRODUK',
    variantLabel: 'VARIAN', quantityLabel: 'JUMLAH', destinationLabel: 'KIRIM KE', unitPrice: 'Harga satuan',
    shippingCost: 'Estimasi ongkir', deliveryEstimate: 'Perkiraan tiba', totalPrice: 'Total estimasi',
    quoteDisclaimer: '* Estimasi ongkir untuk perencanaan awal. Harga final dikonfirmasi tim kami berdasarkan ukuran dan alamat lengkap.',
    contactForOrder: 'Tanyakan pesanan ini', selectProduct: 'Pilih produk', selectVariant: 'Pilih varian',
    shippingEyebrow: 'DARI CIREBON, MENUJU ANDA', shippingTitle: 'Jauh bukan berarti<br><em>tak terjangkau.</em>',
    shippingDescription: 'Kami mengirim karya tangan kami dengan aman ke berbagai penjuru. Pilih tujuan di kalkulator untuk melihat estimasi.',
    shippingCountries: 'negara tujuan', careful: 'Cermat', shippingPacking: 'dikemas untuk perjalanan',
    shippingDays: 'hari kerja, tergantung tujuan', faqEyebrow: 'YANG SERING DITANYAKAN',
    faqTitle: 'Biar kami<br><em>jelaskan dulu.</em>', faqDescription: 'Ada yang belum terjawab? Tim kami dengan senang hati membantu.',
    faqCta: 'Hitung estimasi pesanan', closingEyebrow: 'YANG BERTAHAN LAMA PUNYA CERITA',
    closingTitle: 'Ajak rotan pulang.', closingCta: 'Temukan milik Anda', footerTagline: 'Benda baik, dibuat dengan niat baik.<br>Cirebon, Indonesia.',
    footerExplore: 'JELAJAHI', footerHelp: 'BANTUAN', footerContact: 'Hubungi tim kami', footerRights: 'DIBUAT DENGAN HATI.',
    footerOrigin: 'KERAJINAN ROTAN DARI CIREBON, INDONESIA', perItem: 'buah',
    faq: [
      ['Bagaimana cara mengetahui produk yang siap dipesan?', 'Status ketersediaan ditampilkan pada setiap kartu produk. Produk berstatus “Tersedia” bisa langsung dipilih di kalkulator pesanan; produk yang habis tetap ditampilkan agar Anda dapat menanyakan jadwal produksi berikutnya.'],
      ['Apa saja varian produk yang tersedia?', 'Setiap produk memiliki pilihan warna/finishing yang berbeda. Pilihan varian yang tersedia dapat dilihat dan dipilih pada kalkulator pesanan. Warna rotan alami dapat sedikit berbeda karena karakter seratnya.'],
      ['Bagaimana total harga pesanan dihitung?', 'Total estimasi dihitung otomatis dari harga satuan produk dikali jumlah, ditambah estimasi ongkir sesuai negara tujuan dan berat produk. Harga akhir dikonfirmasi setelah tim kami memeriksa detail pesanan.'],
      ['Bagaimana biaya pengiriman ditentukan?', 'Estimasi ongkir memakai tarif dasar dan biaya per kilogram untuk negara tujuan. Tarif ini adalah perkiraan awal; ukuran paket, alamat, dan metode pengiriman dapat mengubah harga final.'],
      ['Berapa lama pesanan saya akan sampai?', 'Perkiraan lama pengiriman ditampilkan di kalkulator dan dihitung berdasarkan tujuan. Rentang tersebut dalam hari kerja dan belum termasuk waktu produksi untuk produk yang sedang habis.'],
      ['Apakah bisa memesan dalam jumlah grosir atau ke negara lain?', 'Tentu. Untuk pesanan grosir atau tujuan yang belum tercantum, hubungi tim kami agar kami dapat menyiapkan penawaran pengiriman yang sesuai.']
    ]
  },
  en: {
    announcement: 'Patiently woven in Cirebon, sent around the world.', announcementTag: 'Wholesale enquiries welcome',
    navCollection: 'Collection', navStory: 'Our story', navShipping: 'Shipping', navQuote: 'Get an estimate',
    heroEyebrow: 'THOUGHTFUL RATTAN · CIREBON, INDONESIA', heroTitle: 'A little more<br><em>room to breathe.</em>',
    heroDescription: 'A little warmth from nature, handwoven by Cirebon artisans for a home that feels more like home.',
    exploreCollection: 'Explore collection', heroNote: 'Handmade with care, since 1998', statYears: 'years weaving stories',
    statCountries: 'export destinations', statHandmade: 'handmade', heroImageCaption: 'The Sora collection — a quieter corner, a slower pace.',
    floatingNote: 'Natural fibres.<br>A personal touch.', scrollHint: 'SCROLL TO EXPLORE',
    collectionEyebrow: 'A FEW FAVOURITES FROM OUR WORKSHOP', collectionTitle: 'Good things,<br><em>made to stay.</em>',
    collectionDescription: 'Every strand has its own character. Find a shape that feels right for your space and your pace.',
    filterAll: 'All pieces', filterSeating: 'Seating', filterLighting: 'Lighting', filterLiving: 'Living', collectionOrder: 'EDITION 01 — NATURAL LIVING',
    productCount: '{count} THOUGHTFUL PIECES', productSearchLabel: 'Search products', productSearchPlaceholder: 'Search products by name or type...', searchResults: '{count} products found', noProducts: 'No products found.',
    cartLabel: 'Cart', cartEyebrow: 'YOUR ORDER', cartTitle: 'Shopping cart', cartSubtotal: 'Subtotal',
    cartOpen: 'Open cart ({count})', cartCloseLabel: 'Close cart',
    cartShippingNote: 'Shipping will be estimated based on the destination.',
    cartCheckout: 'Ask about this order on WhatsApp', cartEmpty: 'Your cart is empty.',
    cartRemove: 'Remove product', cartVariant: 'Finish', cartQty: 'Quantity', addToCart: 'Add to cart',
    cartAdded: '{product} added to your cart.', cartLimit: 'The available stock limit has been reached.',
    cartItemCount: '{count} items in cart', cartItemLine: '{quantity} × {product} ({variant}) — {price}',
    cartMessage: 'Hello Raya Rattan, I would like to ask about this order:\n{items}\nSubtotal: {subtotal}. Shipping is not included.',
    mapSearchLabel: 'Search a region or country', mapSearchPlaceholder: 'Search a region or country...',
    mapSearchButton: 'Search', mapSearchPrompt: 'Search for a place to view it on the map.',
    mapSearchLoading: 'Searching for location...', mapSearchNoResults: 'No location found. Try another region or country.',
    mapSearchError: 'Could not search for that location. Check your internet connection.',
    mapUnavailable: 'The map could not load. Check your internet connection.',
    mapFallbackNotice: 'The primary map source was blocked; using an alternative source.',
    mapLocalNotice: 'Online map sources are unavailable; showing the local world map.',
    mapLocationFound: 'Location found: {location}', mapOrigin: 'Approximate pin: Kalijaga, Harjamukti, Cirebon',
    mapMarkerPopup: 'Approximate pin for Kalijaga, Harjamukti, Cirebon',
    mapAriaLabel: 'Interactive map for finding locations',
    inStock: 'In stock', outOfStock: 'Sold out', variants: 'finishes', orderProduct: 'Choose this piece', stockInquiry: 'Ask about availability',
    categorySeating: 'Seating', categoryLighting: 'Lighting', categoryLiving: 'For the home',
    storyEyebrow: 'MADE HAND TO HAND', storyTitle: 'We believe<br>in <em>natural things.</em>',
    storyParagraph: 'In a corner of Cirebon, rattan is more than a material. It is a story of skilled hands, of learning to be patient, and of objects made to be part of life—not simply fill a room.',
    storyLink: 'A little about how we work', craftCaption: 'Responsibly gathered. Carefully woven. Proudly sent.',
    quoteEyebrow: 'A CLEARER WAY TO PLAN', quoteTitle: 'Your space,<br><em>with the sums made clear.</em>',
    quoteDescription: 'Choose a piece and quantity to see product pricing, estimated shipping, and delivery time at a glance.',
    quoteAssurance: 'Product prices and estimates update automatically.', calculatorTitle: 'Order calculator',
    calculatorSubtitle: 'An instant estimate for your plans', live: 'LIVE', productLabel: 'CHOOSE A PIECE',
    variantLabel: 'FINISH', quantityLabel: 'QUANTITY', destinationLabel: 'SHIP TO', unitPrice: 'Unit price',
    shippingCost: 'Estimated shipping', deliveryEstimate: 'Estimated arrival', totalPrice: 'Estimated total',
    quoteDisclaimer: '* Shipping is an initial estimate. Our team will confirm the final price based on parcel dimensions and your full address.',
    contactForOrder: 'Ask about this order', selectProduct: 'Choose a product', selectVariant: 'Choose a finish',
    shippingEyebrow: 'FROM CIREBON, WITH CARE', shippingTitle: 'A little distance<br><em>is no obstacle.</em>',
    shippingDescription: 'We carefully send our handmade pieces around the world. Choose a destination in the calculator for an estimate.',
    shippingCountries: 'destinations', careful: 'Thoughtful', shippingPacking: 'packed for the journey',
    shippingDays: 'business days, by destination', faqEyebrow: 'A FEW THINGS YOU MAY WONDER',
    faqTitle: 'Let us<br><em>clear things up.</em>', faqDescription: 'Still have a question? We would be happy to help.',
    faqCta: 'Calculate an order estimate', closingEyebrow: 'THINGS THAT LAST HAVE STORIES',
    closingTitle: 'Bring a little rattan home.', closingCta: 'Find your piece', footerTagline: 'Good things, made with good intentions.<br>Cirebon, Indonesia.',
    footerExplore: 'EXPLORE', footerHelp: 'HERE TO HELP', footerContact: 'Contact our team', footerRights: 'MADE WITH CARE.',
    footerOrigin: 'RATTAN CRAFT FROM CIREBON, INDONESIA', perItem: 'pcs',
    faq: [
      ['How can I tell if a piece is available?', 'Availability is shown on every product card. Pieces marked “In stock” can be selected in the order calculator; sold-out pieces remain visible so you can ask about the next production run.'],
      ['What product finishes are available?', 'Each piece has its own colour and finish options. See and choose available finishes in the order calculator. Natural rattan tones may vary slightly with the character of each fibre.'],
      ['How is the order total calculated?', 'The estimate automatically adds the unit price multiplied by your quantity to estimated shipping based on destination and product weight. Our team confirms the final price after reviewing your order details.'],
      ['How is shipping calculated?', 'The estimate uses a base rate and per-kilogram rate for the selected destination. It is an initial guide; parcel dimensions, address, and shipping method may affect the final price.'],
      ['How long will delivery take?', 'Estimated delivery time is shown in the calculator based on destination. These are business-day estimates and do not include production time for currently sold-out pieces.'],
      ['Can I order wholesale or ship somewhere else?', 'Of course. For wholesale orders or destinations not listed, contact our team and we will prepare a shipping estimate for you.']
    ]
  }
};

translations.ja = {
  ...translations.en,
  announcement: 'チルボンで丁寧に編み上げ、世界へ届けます。',
  announcementTag: '卸売のご相談を歓迎します',
  navCollection: 'コレクション', navStory: '私たちの物語', navShipping: '配送', navQuote: '見積もり',
  heroEyebrow: '厳選ラタン · チルボン、インドネシア',
  heroTitle: 'もっとゆったり、<br><em>深く呼吸できる空間。</em>',
  heroDescription: 'チルボンの職人が、自然の温もりを手編みで形にしました。いつもより居心地のよい住まいへ。',
  exploreCollection: 'コレクションを見る', heroNote: '1998年以来、手仕事で丁寧に',
  statYears: '年にわたる物語づくり', statCountries: '輸出先', statHandmade: 'すべて手作り',
  floatingNote: '天然素材。<br>人の温もり。',
  filterAll: 'すべて', filterSeating: '椅子', filterLighting: '照明', filterLiving: 'リビング',
  productCount: '厳選商品 {count}点', productSearchLabel: '商品を検索', productSearchPlaceholder: '商品名や種類で検索...', searchResults: '{count}件の商品が見つかりました', noProducts: '商品が見つかりません。',
  cartLabel: 'カート', cartEyebrow: 'ご注文', cartTitle: 'ショッピングカート', cartSubtotal: '小計',
  cartOpen: 'カートを開く（{count}）', cartCloseLabel: 'カートを閉じる',
  cartShippingNote: '送料は配送先に基づいてご案内します。',
  cartCheckout: 'WhatsAppで注文について問い合わせる', cartEmpty: 'カートは空です。',
  cartRemove: '商品を削除', cartVariant: '仕上げ', cartQty: '数量', addToCart: 'カートに追加',
  cartAdded: '{product}をカートに追加しました。', cartLimit: '在庫上限に達しました。',
  cartItemCount: 'カート内の商品: {count}点', cartItemLine: '{quantity} × {product}（{variant}） — {price}',
  cartMessage: 'こんにちは。以下の注文について問い合わせます:\n{items}\n小計: {subtotal}。送料は含まれていません。',
  mapSearchLabel: '地域または国を検索', mapSearchPlaceholder: '地域または国を検索...',
  mapSearchButton: '検索', mapSearchPrompt: '場所を検索して地図に表示します。',
  mapSearchLoading: '場所を検索しています...', mapSearchNoResults: '場所が見つかりません。別の地域や国をお試しください。',
  mapSearchError: '場所を検索できませんでした。インターネット接続をご確認ください。',
  mapUnavailable: '地図を読み込めません。インターネット接続をご確認ください。',
  mapFallbackNotice: '地図の主な情報源がブロックされたため、代替情報源を使用しています。',
  mapLocalNotice: 'オンライン地図を利用できないため、ローカルの世界地図を表示しています。',
  mapLocationFound: '場所が見つかりました: {location}', mapOrigin: 'おおよその位置: インドネシア、チルボン市ハルジャムクティ地区カリジャガ',
  mapMarkerPopup: 'カリジャガ、ハルジャムクティ地区の概略位置',
  mapAriaLabel: '場所を検索できるインタラクティブマップ',
  inStock: '在庫あり', outOfStock: '売り切れ', variants: 'バリエーション',
  orderProduct: 'この商品を選ぶ', stockInquiry: '在庫を問い合わせる',
  categorySeating: '椅子', categoryLighting: '照明', categoryLiving: 'リビング',
  storyEyebrow: '手から手へ', storyTitle: '私たちは<br><em>自然のものを信じています。</em>',
  storyParagraph: 'チルボンの一角で、ラタンは単なる素材ではありません。熟練した手、忍耐、そして生活に寄り添うために作られる物語です。',
  storyLink: '製作について', craftCaption: '責任ある調達。丁寧な編み。誇りを込めて配送。',
  quoteEyebrow: 'わかりやすい見積もり', quoteTitle: 'あなたの空間を、<br><em>明確なお値段で。</em>',
  quoteDescription: '商品と数量を選ぶと、価格・送料・到着予定をすぐに確認できます。',
  calculatorTitle: 'ご注文計算', calculatorSubtitle: '計画のための即時見積もり',
  productLabel: '商品を選択', variantLabel: '仕上げ', quantityLabel: '数量', destinationLabel: '配送先',
  unitPrice: '単価', shippingCost: '送料の目安', deliveryEstimate: '到着予定', totalPrice: '合計の目安',
  contactForOrder: 'この注文を問い合わせる', selectProduct: '商品を選ぶ', selectVariant: '仕上げを選ぶ',
  shippingEyebrow: 'チルボンから届けます', shippingTitle: '遠くても、<br><em>届きます。</em>',
  shippingCountries: '配送先', careful: '丁寧に', shippingPacking: '旅行に備えて梱包',
  shippingDays: '営業日（配送先による）',
  faqEyebrow: 'よくあるご質問', faqTitle: '詳しく<br><em>ご説明します。</em>',
  faqCta: '注文を見積もる', closingTitle: 'ラタンをおうちへ。', closingCta: 'お気に入りを見つける',
  footerExplore: '探す', footerHelp: 'サポート', footerContact: 'チームに問い合わせ',
  footerRights: '心を込めて作られました。', perItem: '個',
  faq: [
    ['商品の在庫はどこで確認できますか？', '各商品カードに在庫状況を表示しています。「在庫あり」は注文計算で選択できます。売り切れの商品は次回生産時期をお問い合わせいただけます。'],
    ['利用できる仕上げは何がありますか？', '商品ごとに複数の色や仕上げがあります。注文計算で選択できます。天然ラタンの色は繊維の個性により多少異なる場合があります。'],
    ['注文合計はどのように計算されますか？', '単価 × 数量に配送先と商品重量に応じた送料を加えて自動計算します。最終価格は詳細確認後にご案内します。'],
    ['送料はどのように決まりますか？', '配送先ごとの基本料金と重量料金で概算します。荷物の寸法、住所、配送方法により最終料金は変わる場合があります。'],
    ['どのくらいで届きますか？', '到着予定は配送先に応じて計算されます。営業日ベースで、売り切れ商品は製作期間が別途必要です。'],
    ['卸売や他の国への発送はできますか？', '可能です。卸売やリスト外の配送先については、チームへお問い合わせください。']
  ]
};

translations.nl = {
  ...translations.en,
  announcement: 'Geduldig geweven in Cirebon, verzonden naar de hele wereld.',
  announcementTag: 'Groothandelaanvragen zijn welkom',
  navCollection: 'Collectie', navStory: 'Ons verhaal', navShipping: 'Verzending', navQuote: 'Prijsopgave',
  heroEyebrow: 'UITGEZOCHT ROTAN · CIREBON, INDONESIË',
  heroTitle: 'Meer ruimte om<br><em>vrij te ademhalen.</em>',
  heroDescription: 'Natuurlijke warmte, met de hand geweven door vakmensen in Cirebon voor een thuis dat meer thuis voelt.',
  exploreCollection: 'Collectie bekijken', heroNote: 'Met de hand gemaakt sinds 1998',
  statYears: 'jaar aan verhalen geweven', statCountries: 'exportbestemmingen', statHandmade: 'handgemaakt',
  floatingNote: 'Natuurlijke vezels.<br>Een persoonlijke touch.',
  filterAll: 'Alles', filterSeating: 'Zitmeubels', filterLighting: 'Verlichting', filterLiving: 'Wonen',
  productCount: '{count} zorgvuldig gekozen stukken', productSearchLabel: 'Producten zoeken', productSearchPlaceholder: 'Zoek op productnaam of soort...', searchResults: '{count} producten gevonden', noProducts: 'Geen producten gevonden.',
  cartLabel: 'Winkelwagen', cartEyebrow: 'UW BESTELLING', cartTitle: 'Winkelwagen', cartSubtotal: 'Subtotaal',
  cartOpen: 'Winkelwagen openen ({count})', cartCloseLabel: 'Winkelwagen sluiten',
  cartShippingNote: 'De verzendkosten worden bepaald op basis van de bestemming.',
  cartCheckout: 'Vraag naar deze bestelling via WhatsApp', cartEmpty: 'Uw winkelwagen is leeg.',
  cartRemove: 'Product verwijderen', cartVariant: 'Afwerking', cartQty: 'Aantal', addToCart: 'In winkelwagen',
  cartAdded: '{product} is toegevoegd aan uw winkelwagen.', cartLimit: 'De beschikbare voorraadlimiet is bereikt.',
  cartItemCount: '{count} artikelen in de winkelwagen', cartItemLine: '{quantity} × {product} ({variant}) — {price}',
  cartMessage: 'Hallo Raya Rattan, ik wil graag informeren naar deze bestelling:\n{items}\nSubtotaal: {subtotal}. Verzendkosten niet inbegrepen.',
  mapSearchLabel: 'Zoek een regio of land', mapSearchPlaceholder: 'Zoek een regio of land...',
  mapSearchButton: 'Zoeken', mapSearchPrompt: 'Zoek een locatie om deze op de kaart te bekijken.',
  mapSearchLoading: 'Locatie zoeken...', mapSearchNoResults: 'Geen locatie gevonden. Probeer een andere regio of land.',
  mapSearchError: 'Locatie zoeken is niet gelukt. Controleer uw internetverbinding.',
  mapUnavailable: 'De kaart kan niet worden geladen. Controleer uw internetverbinding.',
  mapFallbackNotice: 'De primaire kaartbron is geblokkeerd; er wordt een alternatieve bron gebruikt.',
  mapLocalNotice: 'Online kaartbronnen zijn niet beschikbaar; de lokale wereldkaart wordt getoond.',
  mapLocationFound: 'Locatie gevonden: {location}', mapOrigin: 'Geschatte locatie: Kalijaga, Harjamukti, Cirebon',
  mapMarkerPopup: 'Geschatte locatie van Kalijaga, Harjamukti, Cirebon',
  mapAriaLabel: 'Interactieve kaart om locaties te zoeken',
  inStock: 'Op voorraad', outOfStock: 'Uitverkocht', variants: 'uitvoeringen',
  orderProduct: 'Dit stuk kiezen', stockInquiry: 'Vraag naar beschikbaarheid',
  categorySeating: 'Zitmeubels', categoryLighting: 'Verlichting', categoryLiving: 'Voor het huis',
  storyEyebrow: 'HAND IN HAND GEMAAKT', storyTitle: 'Wij geloven<br>in <em>natuurlijke dingen.</em>',
  storyParagraph: 'In Cirebon is rotan meer dan een materiaal. Het vertelt over bekwame handen, geduld en objecten die deel worden van het leven.',
  storyLink: 'Hoe wij werken', craftCaption: 'Verantwoord geoogst. Zorgvuldig geweven. Trots verzonden.',
  quoteEyebrow: 'DUIDELIJKE PRIJSONDERBOUWING', quoteTitle: 'Uw ruimte,<br><em>helder berekend.</em>',
  quoteDescription: 'Kies een product en hoeveelheid om prijs, verzendkosten en levering direct te zien.',
  calculatorTitle: 'Bestellingscalculator', calculatorSubtitle: 'Een directe schatting voor uw plannen',
  productLabel: 'KIES EEN STUK', variantLabel: 'AFWERKING', quantityLabel: 'HOEVEELHEID', destinationLabel: 'VERZEND NAAR',
  unitPrice: 'Stukprijs', shippingCost: 'Geschatte verzendkosten', deliveryEstimate: 'Geschatte levering', totalPrice: 'Geschat totaal',
  contactForOrder: 'Vraag naar deze bestelling', selectProduct: 'Kies een product', selectVariant: 'Kies een afwerking',
  shippingEyebrow: 'UIT CIREBON, MET ZORG', shippingTitle: 'Een klein beetje afstand<br><em>is geen obstakel.</em>',
  shippingCountries: 'bestemmingen', careful: 'Zorgvuldig', shippingPacking: 'verpakt voor de reis',
  shippingDays: 'werkdagen, afhankelijk van bestemming',
  faqEyebrow: 'VEELGESTELDE VRAGEN', faqTitle: 'Laat ons<br><em>alles uitleggen.</em>',
  faqCta: 'Bestelling berekenen', closingTitle: 'Breng rotan naar huis.', closingCta: 'Vind uw stuk',
  footerExplore: 'ONTDEK', footerHelp: 'HULP', footerContact: 'Neem contact op', footerRights: 'MET ZORG GEMAAKT.',
  perItem: 'stuks',
  faq: [
    ['Hoe weet ik of een stuk beschikbaar is?', 'Beschikbaarheid staat op elke kaart. Beschikbare stukken kunt u in de calculator kiezen; uitverkochte stukken kunt u navragen voor de volgende productie.'],
    ['Welke afwerkingen zijn beschikbaar?', 'Ieder stuk heeft verschillende kleuren en afwerkingen. Kies deze in de calculator. De natuurlijke kleur kan iets verschillen door de vezel.'],
    ['Hoe wordt het totaal berekend?', 'De stukprijs maal aantal plus geschatte verzendkosten op basis van bestemming en gewicht. Onze definitieve prijs volgt na controle.'],
    ['Hoe worden de verzendkosten bepaald?', 'Het schatting gebruikt een basisprijs en een prijs per kilogram voor de bestemming. Afmetingen, adres en vervoerswijze kunnen invloed hebben.'],
    ['Hoe lang duurt de levering?', 'De geschatte levertijd staat in de calculator per bestemming. Het zijn werkdagen en productie van uitverkochte stukken is niet inbegrepen.'],
    ['Kan ik groothandel bestellen of elders laten bezorgen?', 'Natuurlijk. Voor groothandel of een niet-vermelde bestemming neemt u contact op voor een passende offerte.']
  ]
};

translations.ms = {
  ...translations.en,
  announcement: 'Dianyam dengan sabar di Cirebon, dihantar ke seluruh dunia.',
  announcementTag: 'Pertanyaan borong dialu-alukan',
  navCollection: 'Koleksi', navStory: 'Cerita kami', navShipping: 'Penghantaran', navQuote: 'Minta anggaran',
  heroEyebrow: 'ROTAN PILIHAN · CIREBON, INDONESIA',
  heroTitle: 'Lebih banyak ruang<br><em>untuk bernafas.</em>',
  heroDescription: 'Kehangatan alam, dianyam tangan oleh tukang Cirebon untuk rumah yang terasa lebih seperti rumah.',
  exploreCollection: 'Teroka koleksi', heroNote: 'Dibuat tangan sejak 1998',
  statYears: 'tahun menyulam cerita', statCountries: 'destinasi eksport', statHandmade: 'buatan tangan',
  floatingNote: 'Serat semula jadi.<br>Sentuhan peribadi.',
  filterAll: 'Semua', filterSeating: 'Tempat duduk', filterLighting: 'Lampu', filterLiving: 'Rumah',
  productCount: '{count} produk pilihan', productSearchLabel: 'Cari produk', productSearchPlaceholder: 'Cari produk mengikut nama atau jenis...', searchResults: '{count} produk ditemui', noProducts: 'Tiada produk ditemui.',
  cartLabel: 'Troli', cartEyebrow: 'PESANAN ANDA', cartTitle: 'Troli beli-belah', cartSubtotal: 'Jumlah kecil',
  cartOpen: 'Buka troli ({count})', cartCloseLabel: 'Tutup troli',
  cartShippingNote: 'Anggaran penghantaran akan ditentukan berdasarkan destinasi.',
  cartCheckout: 'Tanya pesanan ini melalui WhatsApp', cartEmpty: 'Troli anda masih kosong.',
  cartRemove: 'Buang produk', cartVariant: 'Kemasan', cartQty: 'Kuantiti', addToCart: 'Tambah ke troli',
  cartAdded: '{product} ditambahkan ke troli.', cartLimit: 'Had stok yang tersedia telah dicapai.',
  cartItemCount: '{count} produk dalam troli', cartItemLine: '{quantity} × {product} ({variant}) — {price}',
  cartMessage: 'Halo Raya Rattan, saya ingin bertanya tentang pesanan ini:\n{items}\nJumlah kecil: {subtotal}. Kos penghantaran tidak termasuk.',
  mapSearchLabel: 'Cari kawasan atau negara', mapSearchPlaceholder: 'Cari kawasan atau negara...',
  mapSearchButton: 'Cari', mapSearchPrompt: 'Cari lokasi untuk melihatnya pada peta.',
  mapSearchLoading: 'Sedang mencari lokasi...', mapSearchNoResults: 'Lokasi tidak ditemui. Cuba kawasan atau negara lain.',
  mapSearchError: 'Lokasi tidak dapat dicari. Semak sambungan internet anda.',
  mapUnavailable: 'Peta tidak dapat dimuatkan. Semak sambungan internet anda.',
  mapFallbackNotice: 'Sumber peta utama disekat; sumber alternatif sedang digunakan.',
  mapLocalNotice: 'Sumber peta dalam talian tidak tersedia; peta dunia setempat dipaparkan.',
  mapLocationFound: 'Lokasi ditemui: {location}', mapOrigin: 'Lokasi anggaran: Kalijaga, Harjamukti, Cirebon',
  mapMarkerPopup: 'Penanda anggaran untuk Kalijaga, Harjamukti, Cirebon',
  mapAriaLabel: 'Peta interaktif untuk mencari lokasi',
  inStock: 'Ada stok', outOfStock: 'Habis', variants: 'pilihan',
  orderProduct: 'Pilih produk ini', stockInquiry: 'Tanya ketersediaan',
  categorySeating: 'Tempat duduk', categoryLighting: 'Pencahayaan', categoryLiving: 'Untuk rumah',
  storyEyebrow: 'DARI TANGAN KE TANGAN', storyTitle: 'Kami percaya<br>pada <em>keindahan semula jadi.</em>',
  storyParagraph: 'Di Cirebon, rotan bukan sekadar bahan. Ia adalah kisah tentang tangan mahir, kesabaran, dan benda yang menemani kehidupan.',
  storyLink: 'Ketahui cara kami bekerja', craftCaption: 'Diperoleh secara bertanggungjawab. Dianyam dengan teliti. Dihantar dengan bangga.',
  quoteEyebrow: 'ANGGARAN YANG JELAS', quoteTitle: 'Ruang anda,<br><em>dengan kiraan yang jelas.</em>',
  quoteDescription: 'Pilih produk dan kuantiti untuk melihat harga, kos penghantaran dan anggaran masa tiba.',
  calculatorTitle: 'Kalkulator pesanan', calculatorSubtitle: 'Anggaran segera untuk rancangan anda',
  productLabel: 'PILIH PRODUK', variantLabel: 'VARIAN', quantityLabel: 'KUANTITI', destinationLabel: 'HANTAR KE',
  unitPrice: 'Harga seunit', shippingCost: 'Anggaran penghantaran', deliveryEstimate: 'Anggaran tiba', totalPrice: 'Anggaran jumlah',
  contactForOrder: 'Tanya tentang pesanan ini', selectProduct: 'Pilih produk', selectVariant: 'Pilih varian',
  shippingEyebrow: 'DARI CIREBON, DENGAN JAGAAN', shippingTitle: 'Jarak sedikit tidak<br><em>menjadi halangan.</em>',
  shippingCountries: 'destinasi', careful: 'Berhati-hati', shippingPacking: 'dibungkus untuk perjalanan',
  shippingDays: 'hari bekerja, bergantung destinasi',
  faqEyebrow: 'SOALAN LAZIM', faqTitle: 'Mari kami<br><em>terangkan.</em>',
  faqCta: 'Kira anggaran pesanan', closingTitle: 'Bawa rotan pulang.', closingCta: 'Cari produk anda',
  footerExplore: 'TEROKA', footerHelp: 'BANTUAN', footerContact: 'Hubungi pasukan kami', footerRights: 'DIBUAT DENGAN TELITI.',
  perItem: 'unit',
  faq: [
    ['Bagaimana mengetahui produk yang tersedia?', 'Status ketersediaan dipaparkan pada setiap kad produk. Produk tersedia boleh dipilih dalam kalkulator pesanan.'],
    ['Apakah pilihan varian yang ada?', 'Setiap produk mempunyai pilihan warna dan kemasan. Pilih dalam kalkulator pesanan. Warna rotan semula jadi mungkin sedikit berbeza.'],
    ['Bagaimana jumlah pesanan dikira?', 'Jumlah dikira daripada harga seunit didarab kuantiti ditambah anggaran penghantaran berdasarkan destinasi dan berat.'],
    ['Bagaimana kos penghantaran ditentukan?', 'Anggaran menggunakan kadar asas dan kadar per kilogram bagi destinasi yang dipilih. Dimensi, alamat dan cara penghantaran boleh mengubah harga akhir.'],
    ['Berapa lama pesanan akan sampai?', 'Anggaran masa dihitung berdasarkan destinasi dalam hari bekerja. Masa produksi untuk produk habis tidak termasuk.'],
    ['Boleh pesanan borong atau ke negara lain?', 'Sudah tentu. Untuk pesanan borong atau destinasi lain, hubungi pasukan kami untuk anggaran yang sesuai.']
  ]
};

const productGrid = document.getElementById('productGrid');
const productSelect = document.getElementById('productSelect');
const variantSelect = document.getElementById('variantSelect');
const destinationSelect = document.getElementById('destinationSelect');
const quantityInput = document.getElementById('quantityInput');
const savedLanguage = localStorage.getItem('raya-language');
let currentLanguage = ['id', 'en', 'ja', 'nl', 'ms'].includes(savedLanguage) ? savedLanguage : 'id';
let currentFilter = 'all';
let currentSearch = '';
let cart = loadCart();

function money(amount, currency = 'IDR') {
  const locales = { id: 'id-ID', en: 'en-US', ja: 'ja-JP', nl: 'nl-NL', ms: 'ms-MY' };
  return new Intl.NumberFormat(locales[currentLanguage] || 'en-US', {
    style: 'currency', currency, maximumFractionDigits: 0
  }).format(amount);
}

function localizedValue(values) {
  return values[currentLanguage] || values.en || values.id || '';
}

function loadCart() {
  try {
    const savedCart = localStorage.getItem('raya-cart');
    if (!savedCart) return [];
    const parsedCart = JSON.parse(savedCart);
    if (!Array.isArray(parsedCart)) throw new TypeError('Saved cart must be an array.');
    return parsedCart.reduce((items, item) => {
      if (!item || typeof item !== 'object') return items;
      const product = products.find(candidate => candidate.id === item.productId);
      if (!product || product.stock < 1 || !product.variants.includes(item.variant)) return items;
      const quantity = Number.parseInt(item.quantity, 10);
      if (!Number.isInteger(quantity) || quantity < 1) return items;
      const reserved = items.filter(savedItem => savedItem.productId === product.id)
        .reduce((total, savedItem) => total + savedItem.quantity, 0);
      const available = product.stock - reserved;
      if (available < 1) return items;
      items.push({ productId: product.id, variant: item.variant, quantity: Math.min(quantity, available) });
      return items;
    }, []);
  } catch (error) {
    console.error('Unable to load the saved cart.', error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem('raya-cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Unable to save the cart.', error);
  }
}

function cartQuantity(productId) {
  return cart.filter(item => item.productId === productId)
    .reduce((total, item) => total + item.quantity, 0);
}

function renderProducts() {
  const t = translations[currentLanguage];
  const searchTerm = currentSearch.trim().toLocaleLowerCase(currentLanguage);
  const visibleProducts = products.filter(product => {
    const matchesFilter = currentFilter === 'all' || product.category === currentFilter;
    const categoryKey = `category${product.category[0].toUpperCase()}${product.category.slice(1)}`;
    const searchableText = [
      product.id, localizedValue(product.name), product.name.id, product.name.en,
      localizedValue(product.description), product.description.id, product.description.en,
      t[categoryKey]
    ].join(' ').toLocaleLowerCase(currentLanguage);
    return matchesFilter && (!searchTerm || searchableText.includes(searchTerm));
  });
  document.getElementById('productCount').textContent = searchTerm
    ? t.searchResults.replace('{count}', String(visibleProducts.length))
    : t.productCount.replace('{count}', String(visibleProducts.length).padStart(2, '0'));
  if (!visibleProducts.length) {
    productGrid.innerHTML = `<div class="col-12"><p class="empty-products">${t.noProducts}</p></div>`;
    return;
  }
  productGrid.innerHTML = visibleProducts.map(product => `
    <div class="col-6 col-lg-3">
      <article class="product-card">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${localizedValue(product.alt)}" loading="lazy">
          <span class="product-badge">${localizedValue(product.badge)}</span>
          <span class="stock-badge"><i class="stock-dot ${product.stock === 0 ? 'out' : ''}"></i>${product.stock > 0 ? t.inStock : t.outOfStock}</span>
        </div>
        <div class="product-meta">
          <div><span class="product-category">${t[`category${product.category[0].toUpperCase()}${product.category.slice(1)}`]}</span><h3 class="product-name">${localizedValue(product.name)}</h3><p class="product-description">${localizedValue(product.description)}</p></div>
          <span class="product-price">${money(product.price)}</span>
        </div>
        <div class="product-footer">
          <span class="product-variants">${product.variants.length} ${t.variants}</span>
          <a href="${product.stock > 0 ? '#quote' : '#faq'}" class="product-order-link" ${product.stock > 0 ? `data-product-id="${product.id}"` : ''}>${product.stock > 0 ? t.orderProduct : t.stockInquiry}<i class="bi bi-arrow-up-right" aria-hidden="true"></i></a>
        </div>
        <button class="product-add-button" type="button" data-cart-product="${product.id}" ${product.stock > 0 ? '' : 'disabled'}>
          <i class="bi bi-bag-plus" aria-hidden="true"></i><span>${product.stock > 0 ? t.addToCart : t.outOfStock}</span>
        </button>
      </article>
    </div>`).join('');
}

function renderSelects() {
  const t = translations[currentLanguage];
  const previouslySelected = productSelect.value;
  productSelect.innerHTML = `<option value="" disabled>${t.selectProduct}</option>` + products.map(product =>
    `<option value="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>${localizedValue(product.name)}${product.stock === 0 ? ` — ${t.outOfStock}` : ''}</option>`
  ).join('');
  const selectedProduct = products.find(product => product.id === previouslySelected && product.stock > 0) || products.find(product => product.stock > 0);
  productSelect.value = selectedProduct ? selectedProduct.id : '';
  destinationSelect.innerHTML = destinations.map(destination => `<option value="${destination.id}">${localizedValue(destination.name)}</option>`).join('');
  renderVariants();
}

function renderVariants() {
  const product = products.find(item => item.id === productSelect.value);
  if (!product) {
    variantSelect.innerHTML = '';
    return;
  }
  const t = translations[currentLanguage];
  const previousVariant = variantSelect.value;
  variantSelect.innerHTML = product.variants.map(variant =>
    `<option value="${variant}">${variant}</option>`
  ).join('');
  variantSelect.value = product.variants.includes(previousVariant) ? previousVariant : product.variants[0];
  updateEstimate();
}

function updateEstimate() {
  const product = products.find(item => item.id === productSelect.value);
  const destination = destinations.find(item => item.id === destinationSelect.value);
  const quantity = Math.min(99, Math.max(1, Number.parseInt(quantityInput.value, 10) || 1));
  quantityInput.value = String(quantity);
  if (!product || !destination) return;

  const shipping = Math.round(destination.base + destination.perKg * product.weight * quantity);
  const productTotal = product.price * quantity;
  document.getElementById('unitPrice').textContent = `${money(product.price)} × ${quantity}`;
  document.getElementById('shippingCost').textContent = money(shipping);
  const dayLabels = { id: 'hari kerja', en: 'business days', ja: '営業日', nl: 'werkdagen', ms: 'hari bekerja' };
  document.getElementById('deliveryEstimate').textContent = `${destination.minDays}–${destination.maxDays} ${dayLabels[currentLanguage]}`;
  document.getElementById('totalPrice').textContent = money(productTotal + shipping);
  const orderMessages = {
    id: `Halo Raya Rattan, saya tertarik memesan ${product.name.id} (${variantSelect.value}), ${quantity} buah ke ${destination.name.id}. Estimasi total ${money(productTotal + shipping)}.`,
    en: `Hello Raya Rattan, I'm interested in ${quantity} ${product.name.en} (${variantSelect.value}) shipped to ${destination.name.en}. Estimated total: ${money(productTotal + shipping)}.`,
    ja: `こんにちは Raya Rattanです。${product.name.en}（${variantSelect.value}）を${quantity}個、${destination.name.en}へ注文したいです。概算合計は${money(productTotal + shipping)}です。`,
    nl: `Hallo Raya Rattan, ik wil graag ${quantity} ${product.name.en} (${variantSelect.value}) bestellen naar ${destination.name.en}. Geschat totaal: ${money(productTotal + shipping)}.`,
    ms: `Halo Raya Rattan, saya ingin memesan ${quantity} ${product.name.en} (${variantSelect.value}) untuk dihantar ke ${destination.name.en}. Anggaran jumlah: ${money(productTotal + shipping)}.`
  };
  const message = orderMessages[currentLanguage];
  document.getElementById('whatsappLink').href = `https://wa.me/?text=${encodeURIComponent(message)}`;
}

function renderFaq() {
  document.getElementById('faqAccordion').innerHTML = translations[currentLanguage].faq.map(([question, answer], index) => `
    <div class="accordion-item">
      <h3 class="accordion-header" id="faqHeading${index}">
        <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#faqAnswer${index}" aria-expanded="${index === 0}" aria-controls="faqAnswer${index}">${question}</button>
      </h3>
      <div id="faqAnswer${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="faqHeading${index}" data-bs-parent="#faqAccordion">
        <div class="accordion-body">${answer}</div>
      </div>
    </div>`).join('');
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product || product.stock < 1) return;
  const variant = product.variants[0];
  const existingItem = cart.find(item => item.productId === product.id && item.variant === variant);
  if (cartQuantity(product.id) >= product.stock) {
    document.getElementById('cartFeedback').textContent = translations[currentLanguage].cartLimit;
    return;
  }
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ productId: product.id, variant, quantity: 1 });
  }
  saveCart();
  renderCart();
  document.getElementById('cartFeedback').textContent = translations[currentLanguage].cartAdded
    .replace('{product}', localizedValue(product.name));
}

function renderCart() {
  const t = translations[currentLanguage];
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => {
    const product = products.find(candidate => candidate.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
  const cartCount = document.getElementById('cartCount');
  cartCount.textContent = String(itemCount);
  cartCount.setAttribute('aria-label', t.cartItemCount.replace('{count}', String(itemCount)));
  document.getElementById('cartToggle').setAttribute('aria-label', t.cartOpen.replace('{count}', String(itemCount)));
  document.getElementById('cartStatus').textContent = '';
  document.getElementById('cartItems').innerHTML = cart.length
    ? cart.map((item, index) => {
      const product = products.find(candidate => candidate.id === item.productId);
      if (!product) return '';
      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${localizedValue(product.alt)}" loading="lazy">
          <div class="cart-item-details">
            <div class="cart-item-heading"><div><h3>${localizedValue(product.name)}</h3><span>${money(product.price * item.quantity)}</span></div>
              <button type="button" class="cart-remove" data-cart-action="remove" data-cart-index="${index}" aria-label="${t.cartRemove}"><i class="bi bi-trash3" aria-hidden="true"></i></button>
            </div>
            <label class="cart-variant"><span>${t.cartVariant}</span><select data-cart-variant data-cart-index="${index}">${product.variants.map(variant =>
              `<option value="${variant}" ${variant === item.variant ? 'selected' : ''}>${variant}</option>`
            ).join('')}</select></label>
            <div class="cart-quantity">
              <span>${t.cartQty}</span>
              <div><button type="button" data-cart-action="decrease" data-cart-index="${index}" aria-label="${t.cartQty} −">−</button>
                <span>${item.quantity}</span>
                <button type="button" data-cart-action="increase" data-cart-index="${index}" aria-label="${t.cartQty} +">+</button></div>
            </div>
          </div>
        </article>`;
    }).join('')
    : `<p class="cart-empty">${t.cartEmpty}</p>`;
  document.getElementById('cartSubtotal').textContent = money(subtotal);
  const checkout = document.getElementById('cartCheckout');
  checkout.classList.toggle('disabled', itemCount === 0);
  checkout.setAttribute('aria-disabled', String(itemCount === 0));
  checkout.href = itemCount
    ? `https://wa.me/?text=${encodeURIComponent(t.cartMessage
      .replace('{items}', cart.map(item => {
        const product = products.find(candidate => candidate.id === item.productId);
        return t.cartItemLine
          .replace('{quantity}', String(item.quantity))
          .replace('{product}', localizedValue(product.name))
          .replace('{variant}', item.variant)
          .replace('{price}', money(product.price * item.quantity));
      }).join('\n'))
      .replace('{subtotal}', money(subtotal)))}`
    : '#';
}

function initializeMap() {
  const mapElement = document.getElementById('shippingMap');
  if (!window.L) {
    document.getElementById('mapStatus').textContent = translations[currentLanguage].mapUnavailable;
    return;
  }
  const origin = [-6.7572782, 108.5475032];
  shippingMap = L.map(mapElement, { minZoom: 0, zoomSnap: 0.25, worldCopyJump: true });
  const tileSources = [
    {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Sources: <a href="https://www.esri.com/">Esri</a>, HERE, Garmin, USGS, Intermap, INCREMENT P, NRCan, Esri Japan, METI, Esri China (Hong Kong), Esri Korea, Esri (Thailand), NGCC, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>, and the GIS User Community'
    },
    {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      subdomains: 'abc',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  ];
  let activeTileLayer;
  let localMapLayer;
  function showLocalMap() {
    if (localMapLayer) return;
    if (activeTileLayer) shippingMap.removeLayer(activeTileLayer);
    localMapLayer = L.imageOverlay('world-map.svg', [[-85.05112878, -180], [85.05112878, 180]], {
      alt: translations[currentLanguage].mapAriaLabel,
      attribution: '<a href="https://www.naturalearthdata.com/">Natural Earth</a>'
    });
    localMapLayer.on('load', () => {
      localMapAvailable = true;
      document.getElementById('mapStatus').textContent = translations[currentLanguage].mapLocalNotice;
    });
    localMapLayer.on('error', event => {
      localMapAvailable = false;
      console.error('Unable to load the local world map.', event.error);
      document.getElementById('mapStatus').textContent = translations[currentLanguage].mapUnavailable;
    });
    localMapLayer.addTo(shippingMap);
  }
  function addTileSource(sourceIndex) {
    const source = tileSources[sourceIndex];
    const layer = L.tileLayer(source.url, {
      maxZoom: 19,
      subdomains: source.subdomains || 'abc',
      attribution: source.attribution
    });
    activeTileLayer = layer;
    let failedOver = false;
    let loadedTiles = 0;
    layer.on('tileload', () => { loadedTiles += 1; });
    layer.on('tileerror', () => {
      if (sourceIndex < tileSources.length - 1 && !failedOver) {
        failedOver = true;
        shippingMap.removeLayer(layer);
        document.getElementById('mapStatus').textContent = translations[currentLanguage].mapFallbackNotice;
        addTileSource(sourceIndex + 1);
      } else if (loadedTiles === 0) {
        showLocalMap();
      }
    });
    layer.on('load', () => {
      if (sourceIndex === tileSources.length - 1 && loadedTiles === 0) showLocalMap();
    });
    layer.addTo(shippingMap);
  }
  addTileSource(0);
  const markerLabel = translations[currentLanguage].mapMarkerPopup;
  originMarker = L.marker(origin, { title: markerLabel })
    .addTo(shippingMap)
    .bindPopup(markerLabel);
  shippingMap.fitWorld({ padding: [8, 8] });
}

let shippingMap;
let originMarker;
let searchedLocationMarker;
let activeMapRequest;
let lastMapRequestAt = 0;
let localMapAvailable = false;

async function searchMapLocation(query) {
  const t = translations[currentLanguage];
  const status = document.getElementById('mapStatus');
  if (!shippingMap) {
    status.textContent = t.mapUnavailable;
    return;
  }
  if (activeMapRequest) activeMapRequest.abort();
  const request = new AbortController();
  activeMapRequest = request;
  status.textContent = t.mapSearchLoading;
  const searchButton = document.querySelector('.map-search-button');
  searchButton.disabled = true;
  try {
    const wait = Math.max(0, 1000 - (Date.now() - lastMapRequestAt));
    if (wait) await new Promise(resolve => setTimeout(resolve, wait));
    if (request.signal.aborted) return;
    lastMapRequestAt = Date.now();
    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&q=${encodeURIComponent(query)}`;
    const response = await fetch(url, {
      headers: { 'Accept-Language': currentLanguage },
      signal: request.signal
    });
    if (!response.ok) throw new Error(`Location search failed with status ${response.status}.`);
    const results = await response.json();
    if (!results.length) {
      status.textContent = t.mapSearchNoResults;
      return;
    }
    const result = results[0];
    const coordinates = [Number(result.lat), Number(result.lon)];
    if (!coordinates.every(Number.isFinite) || Math.abs(coordinates[0]) > 90 || Math.abs(coordinates[1]) > 180) {
      throw new TypeError('Location search returned invalid coordinates.');
    }
    if (typeof result.display_name !== 'string' || !result.display_name) {
      throw new TypeError('Location search returned no display name.');
    }
    if (searchedLocationMarker) searchedLocationMarker.remove();
    searchedLocationMarker = L.marker(coordinates).addTo(shippingMap);
    const popup = document.createElement('span');
    popup.textContent = result.display_name;
    searchedLocationMarker.bindPopup(popup);
    const bounds = Array.isArray(result.boundingbox) ? result.boundingbox.map(Number) : [];
    const addressType = result.addresstype || result.type;
    const maxZoom = addressType === 'country' ? 5
      : ['state', 'region', 'province'].includes(addressType) ? 7
        : ['city', 'town', 'village'].includes(addressType) ? 11 : 10;
    const validBounds = bounds.length === 4 && bounds.every(Number.isFinite)
      && bounds[0] >= -90 && bounds[1] <= 90 && bounds[0] < bounds[1]
      && bounds[2] >= -180 && bounds[3] <= 180 && bounds[2] < bounds[3];
    const boundsCenter = validBounds
      ? [(bounds[0] + bounds[1]) / 2, (bounds[2] + bounds[3]) / 2]
      : undefined;
    const hasDisjointCountryBounds = addressType === 'country' && boundsCenter
      && (Math.abs(bounds[1] - bounds[0]) > 35 || Math.abs(bounds[3] - bounds[2]) > 40)
      && (Math.abs(coordinates[0] - boundsCenter[0]) > Math.abs(bounds[1] - bounds[0]) * 0.3
        || Math.abs(coordinates[1] - boundsCenter[1]) > Math.abs(bounds[3] - bounds[2]) * 0.3);
    const shouldFitBounds = validBounds && !hasDisjointCountryBounds
      && (addressType === 'country' || ['city', 'town', 'village', 'state', 'region'].includes(addressType));
    if (shouldFitBounds) {
      shippingMap.fitBounds([[bounds[0], bounds[2]], [bounds[1], bounds[3]]], { padding: [20, 20], maxZoom });
    } else {
      shippingMap.setView(coordinates, addressType === 'country' ? 4 : maxZoom);
    }
    status.textContent = t.mapLocationFound.replace('{location}', result.display_name);
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error('Unable to search the map location.', error);
      status.textContent = t.mapSearchError;
    }
  } finally {
    if (activeMapRequest === request) {
      activeMapRequest = undefined;
      searchButton.disabled = false;
    }
  }
}

function applyLanguage() {
  const t = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.getElementById('languageToggle').value = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (t[key]) element.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = t[element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    element.setAttribute('aria-label', t[element.dataset.i18nAriaLabel]);
  });
  document.getElementById('languageToggle').setAttribute('aria-label', 'Change language');
  document.getElementById('cartToggle').setAttribute('aria-label', t.cartOpen.replace('{count}', document.getElementById('cartCount').textContent));
  document.getElementById('mapStatus').textContent = localMapAvailable ? t.mapLocalNotice : t.mapSearchPrompt;
  document.getElementById('cartFeedback').textContent = '';
  if (originMarker) {
    const markerLabel = t.mapMarkerPopup;
    originMarker.setPopupContent(markerLabel);
    originMarker.options.title = markerLabel;
    if (originMarker.getElement()) originMarker.getElement().title = markerLabel;
  }
  renderProducts();
  renderSelects();
  renderFaq();
  renderCart();
}

document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach(filter => filter.classList.toggle('active', filter === button));
    renderProducts();
  });
});

document.getElementById('productSearch').addEventListener('input', event => {
  currentSearch = event.target.value;
  renderProducts();
});

productGrid.addEventListener('click', event => {
  const addButton = event.target.closest('[data-cart-product]');
  if (addButton) {
    addToCart(addButton.dataset.cartProduct);
    return;
  }
  const link = event.target.closest('[data-product-id]');
  if (!link) return;
  productSelect.value = link.dataset.productId;
  renderVariants();
});
document.getElementById('cartToggle').addEventListener('click', () => {
  document.getElementById('cartDialog').showModal();
});
document.getElementById('cartClose').addEventListener('click', () => {
  document.getElementById('cartDialog').close();
});
document.getElementById('cartDialog').addEventListener('click', event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
document.getElementById('cartItems').addEventListener('click', event => {
  const button = event.target.closest('[data-cart-action]');
  if (!button) return;
  const index = Number.parseInt(button.dataset.cartIndex, 10);
  const item = cart[index];
  if (!item) return;
  const product = products.find(candidate => candidate.id === item.productId);
  if (button.dataset.cartAction === 'remove') {
    cart.splice(index, 1);
  } else if (button.dataset.cartAction === 'increase') {
    if (cartQuantity(product.id) >= product.stock) {
      document.getElementById('cartStatus').textContent = translations[currentLanguage].cartLimit;
      return;
    }
    item.quantity += 1;
  } else if (button.dataset.cartAction === 'decrease') {
    if (item.quantity <= 1) cart.splice(index, 1);
    else item.quantity -= 1;
  }
  saveCart();
  renderCart();
});
document.getElementById('cartItems').addEventListener('change', event => {
  if (!event.target.matches('[data-cart-variant]')) return;
  const index = Number.parseInt(event.target.dataset.cartIndex, 10);
  const item = cart[index];
  if (!item) return;
  const duplicate = cart.find((candidate, candidateIndex) =>
    candidateIndex !== index && candidate.productId === item.productId && candidate.variant === event.target.value
  );
  if (duplicate) {
    const product = products.find(candidate => candidate.id === item.productId);
    duplicate.quantity = Math.min(product.stock, duplicate.quantity + item.quantity);
    cart.splice(index, 1);
  } else {
    item.variant = event.target.value;
  }
  saveCart();
  renderCart();
});
document.getElementById('mapSearchForm').addEventListener('submit', event => {
  event.preventDefault();
  const query = document.getElementById('mapSearchInput').value.trim();
  if (query) searchMapLocation(query);
});
productSelect.addEventListener('change', renderVariants);
variantSelect.addEventListener('change', updateEstimate);
destinationSelect.addEventListener('change', updateEstimate);
quantityInput.addEventListener('input', updateEstimate);
document.getElementById('quantityMinus').addEventListener('click', () => {
  quantityInput.value = String(Math.max(1, (Number.parseInt(quantityInput.value, 10) || 1) - 1));
  updateEstimate();
});
document.getElementById('quantityPlus').addEventListener('click', () => {
  quantityInput.value = String(Math.min(99, (Number.parseInt(quantityInput.value, 10) || 1) + 1));
  updateEstimate();
});
document.getElementById('languageToggle').addEventListener('change', event => {
  currentLanguage = event.target.value;
  localStorage.setItem('raya-language', currentLanguage);
  applyLanguage();
});
document.getElementById('themeToggle').addEventListener('click', () => {
  const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  document.body.dataset.theme = nextTheme;
  localStorage.setItem('raya-theme', nextTheme);
  updateThemeButton(nextTheme);
});

function updateThemeButton(theme) {
  document.getElementById('themeIcon').className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
  document.getElementById('themeToggle').setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#202820' : '#f5f1e8';
}

const savedTheme = localStorage.getItem('raya-theme');
if (savedTheme === 'dark') document.body.dataset.theme = 'dark';
updateThemeButton(savedTheme === 'dark' ? 'dark' : 'light');
document.getElementById('currentYear').textContent = new Date().getFullYear();
applyLanguage();
initializeMap();

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perpustakaan Digital SMA Widya Manggala</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
        }
        
        .book-card {
            transition: all 0.3s ease;
            background: linear-gradient(145deg, #ffffff, #f0f0f0);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .book-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        
        .book-cover {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            position: relative;
            overflow: hidden;
        }
        
        .book-cover::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%);
        }
        
        .header-gradient {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        }
        
        .search-box {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
        }
        
        .category-chip {
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            transition: all 0.3s ease;
        }
        
        .category-chip:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(238, 90, 36, 0.3);
        }
        
        .floating-action {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            box-shadow: 0 8px 25px rgba(238, 90, 36, 0.3);
        }
        
        .slide {
            transition: opacity 1s ease-in-out;
        }
        
        @media (max-width: 768px) {
            .book-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
            }
        }
        
        @media (max-width: 480px) {
            .book-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
            }
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Header -->
    <header class="header-gradient text-white shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <img src="https://freeimage.host/i/FLljfTP" alt="Logo SMA Widya Manggala" 
                         class="w-12 h-12 rounded-lg bg-white bg-opacity-20 p-1 object-contain"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <div class="bg-white bg-opacity-20 p-2 rounded-lg hidden">
                        <i class="fas fa-book-open text-2xl"></i>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold">Perpustakaan Digital</h1>
                        <p class="text-sm opacity-90">SMA Widya Manggala</p>
                    </div>
                </div>
                <button class="md:hidden text-white">
                    <i class="fas fa-bars text-xl"></i>
                </button>
            </div>
            
            <!-- Search Bar -->
            <div class="mt-4">
                <div class="search-box rounded-full p-3 flex items-center">
                    <i class="fas fa-search text-gray-500 mr-3"></i>
                    <input type="text" placeholder="Cari buku, penulis, atau kategori..." 
                           class="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500">
                    <button class="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors">
                        Cari
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Slideshow -->
    <section class="relative h-64 md:h-80 overflow-hidden">
        <div id="slideshow" class="relative w-full h-full">
            <!-- Slide 1 -->
            <div class="slide absolute inset-0 opacity-100 transition-opacity duration-1000" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><rect fill=%22%23667eea%22 width=%221200%22 height=%22600%22/><circle fill=%22%23764ba2%22 cx=%22200%22 cy=%22150%22 r=%2280%22 opacity=%220.3%22/><circle fill=%22%23f093fb%22 cx=%22800%22 cy=%22400%22 r=%22120%22 opacity=%220.2%22/><rect fill=%22%23ffffff%22 x=%22100%22 y=%22200%22 width=%22200%22 height=%22250%22 rx=%2210%22 opacity=%220.1%22/><rect fill=%22%23ffffff%22 x=%22350%22 y=%22180%22 width=%22180%22 height=%22220%22 rx=%2210%22 opacity=%220.1%22/><rect fill=%22%23ffffff%22 x=%22580%22 y=%22190%22 width=%22190%22 height=%22240%22 rx=%2210%22 opacity=%220.1%22/></svg>'); background-size: cover; background-position: center;">
                <div class="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                        <h2 class="text-3xl md:text-5xl font-bold mb-4">📚 Selamat Datang</h2>
                        <p class="text-lg md:text-xl opacity-90">Jelajahi ribuan buku digital terbaik</p>
                    </div>
                </div>
            </div>
            
            <!-- Slide 2 -->
            <div class="slide absolute inset-0 opacity-0 transition-opacity duration-1000" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><rect fill=%22%234facfe%22 width=%221200%22 height=%22600%22/><circle fill=%22%2300f2fe%22 cx=%22300%22 cy=%22200%22 r=%22100%22 opacity=%220.3%22/><circle fill=%22%23fa709a%22 cx=%22900%22 cy=%22350%22 r=%22150%22 opacity=%220.2%22/><path fill=%22%23ffffff%22 d=%22M400,150 L500,150 L500,400 L400,400 Z%22 opacity=%220.1%22/><path fill=%22%23ffffff%22 d=%22M550,130 L650,130 L650,380 L550,380 Z%22 opacity=%220.1%22/><path fill=%22%23ffffff%22 d=%22M700,140 L800,140 L800,390 L700,390 Z%22 opacity=%220.1%22/></svg>'); background-size: cover; background-position: center;">
                <div class="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                        <h2 class="text-3xl md:text-5xl font-bold mb-4">🎓 Belajar Kapan Saja</h2>
                        <p class="text-lg md:text-xl opacity-90">Akses materi pembelajaran 24/7</p>
                    </div>
                </div>
            </div>
            
            <!-- Slide 3 -->
            <div class="slide absolute inset-0 opacity-0 transition-opacity duration-1000" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22><rect fill=%22%23a8edea%22 width=%221200%22 height=%22600%22/><circle fill=%22%23fed6e3%22 cx=%22250%22 cy=%22180%22 r=%2290%22 opacity=%220.3%22/><circle fill=%22%23ffecd2%22 cx=%22950%22 cy=%22420%22 r=%22130%22 opacity=%220.2%22/><rect fill=%22%23ffffff%22 x=%22150%22 y=%22220%22 width=%22160%22 height=%22200%22 rx=%228%22 opacity=%220.15%22/><rect fill=%22%23ffffff%22 x=%22350%22 y=%22200%22 width=%22170%22 height=%22210%22 rx=%228%22 opacity=%220.15%22/><rect fill=%22%23ffffff%22 x=%22560%22 y=%22210%22 width=%22165%22 height=%22205%22 rx=%228%22 opacity=%220.15%22/></svg>'); background-size: cover; background-position: center;">
                <div class="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                        <h2 class="text-3xl md:text-5xl font-bold mb-4">🌟 Koleksi Terlengkap</h2>
                        <p class="text-lg md:text-xl opacity-90">Dari sains hingga sastra, semua ada di sini</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Slide Indicators -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button class="slide-indicator w-3 h-3 rounded-full bg-white opacity-100 transition-opacity" onclick="goToSlide(0)"></button>
            <button class="slide-indicator w-3 h-3 rounded-full bg-white opacity-50 transition-opacity" onclick="goToSlide(1)"></button>
            <button class="slide-indicator w-3 h-3 rounded-full bg-white opacity-50 transition-opacity" onclick="goToSlide(2)"></button>
        </div>
        
        <!-- Navigation Arrows -->
        <button class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all" onclick="previousSlide()">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all" onclick="nextSlide()">
            <i class="fas fa-chevron-right"></i>
        </button>
    </section>

    <!-- Categories -->
    <section class="py-6 bg-white shadow-sm">
        <div class="container mx-auto px-4">
            <div class="flex overflow-x-auto space-x-3 pb-2">
                <button class="category-chip text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    📚 Semua
                </button>
                <button class="category-chip text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    🔬 Sains
                </button>
                <button class="category-chip text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    📖 Sastra
                </button>
                <button class="category-chip text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    🏛️ Sejarah
                </button>
                <button class="category-chip text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    🧮 Matematika
                </button>
                <button class="category-chip text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    🌍 Geografi
                </button>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section class="py-6">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-3 gap-4">
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div class="text-2xl font-bold text-blue-600">1,247</div>
                    <div class="text-sm text-gray-600">Total Buku</div>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div class="text-2xl font-bold text-green-600">856</div>
                    <div class="text-sm text-gray-600">Siswa Aktif</div>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div class="text-2xl font-bold text-purple-600">342</div>
                    <div class="text-sm text-gray-600">Dipinjam</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Book Grid -->
    <main class="container mx-auto px-4 pb-20">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold text-gray-800">Koleksi Terbaru</h2>
            <select class="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>Terbaru</option>
                <option>Populer</option>
                <option>A-Z</option>
            </select>
        </div>

        <div class="book-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <!-- Book Card 1 -->
            <div class="book-card rounded-lg overflow-hidden cursor-pointer" onclick="openBook('Fisika Dasar')">
                <div class="book-cover h-48 flex items-center justify-center text-white relative">
                    <div class="text-center z-10">
                        <div class="text-3xl mb-2">⚛️</div>
                        <div class="font-semibold text-sm px-2">Fisika Dasar</div>
                    </div>
                </div>
                <div class="p-3">
                    <h3 class="font-medium text-sm text-gray-800 mb-1 line-clamp-2">Fisika Dasar untuk SMA</h3>
                    <p class="text-xs text-gray-600 mb-2">Dr. Ahmad Sutrisno</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Sains</span>
                        <div class="flex items-center text-yellow-500 text-xs">
                            <i class="fas fa-star"></i>
                            <span class="ml-1">4.8</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Book Card 2 -->
            <div class="book-card rounded-lg overflow-hidden cursor-pointer" onclick="openBook('Laskar Pelangi')">
                <div class="book-cover h-48 flex items-center justify-center text-white relative" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                    <div class="text-center z-10">
                        <div class="text-3xl mb-2">🌈</div>
                        <div class="font-semibold text-sm px-2">Laskar Pelangi</div>
                    </div>
                </div>
                <div class="p-3">
                    <h3 class="font-medium text-sm text-gray-800 mb-1">Laskar Pelangi</h3>
                    <p class="text-xs text-gray-600 mb-2">Andrea Hirata</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">Sastra</span>
                        <div class="flex items-center text-yellow-500 text-xs">
                            <i class="fas fa-star"></i>
                            <span class="ml-1">4.9</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Book Card 3 -->
            <div class="book-card rounded-lg overflow-hidden cursor-pointer" onclick="openBook('Sejarah Indonesia')">
                <div class="book-cover h-48 flex items-center justify-center text-white relative" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                    <div class="text-center z-10">
                        <div class="text-3xl mb-2">🏛️</div>
                        <div class="font-semibold text-sm px-2">Sejarah Indonesia</div>
                    </div>
                </div>
                <div class="p-3">
                    <h3 class="font-medium text-sm text-gray-800 mb-1">Sejarah Indonesia Modern</h3>
                    <p class="text-xs text-gray-600 mb-2">Prof. Sartono Kartodirdjo</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs bg-cyan-100 text-cyan-800 px-2 py-1 rounded">Sejarah</span>
                        <div class="flex items-center text-yellow-500 text-xs">
                            <i class="fas fa-star"></i>
                            <span class="ml-1">4.7</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Book Card 4 -->
            <div class="book-card rounded-lg overflow-hidden cursor-pointer" onclick="openBook('Matematika Lanjut')">
                <div class="book-cover h-48 flex items-center justify-center text-white relative" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
                    <div class="text-center z-10">
                        <div class="text-3xl mb-2">🧮</div>
                        <div class="font-semibold text-sm px-2">Matematika Lanjut</div>
                    </div>
                </div>
                <div class="p-3">
                    <h3 class="font-medium text-sm text-gray-800 mb-1">Matematika Lanjut SMA</h3>
                    <p class="text-xs text-gray-600 mb-2">Dr. Budi Rahardjo</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">Matematika</span>
                        <div class="flex items-center text-yellow-500 text-xs">
                            <i class="fas fa-star"></i>
                            <span class="ml-1">4.6</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Book Card 5 -->
            <div class="book-card rounded-lg overflow-hidden cursor-pointer" onclick="openBook('Biologi Sel')">
                <div class="book-cover h-48 flex items-center justify-center text-white relative" style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);">
                    <div class="text-center z-10">
                        <div class="text-3xl mb-2">🔬</div>
                        <div class="font-semibold text-sm px-2">Biologi Sel</div>
                    </div>
                </div>
                <div class="p-3">
                    <h3 class="font-medium text-sm text-gray-800 mb-1">Biologi Sel dan Molekuler</h3>
                    <p class="text-xs text-gray-600 mb-2">Dr. Siti Nurhaliza</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Biologi</span>
                        <div class="flex items-center text-yellow-500 text-xs">
                            <i class="fas fa-star"></i>
                            <span class="ml-1">4.8</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Book Card 6 -->
            <div class="book-card rounded-lg overflow-hidden cursor-pointer" onclick="openBook('Geografi Indonesia')">
                <div class="book-cover h-48 flex items-center justify-center text-white relative" style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);">
                    <div class="text-center z-10">
                        <div class="text-3xl mb-2">🌍</div>
                        <div class="font-semibold text-sm px-2">Geografi Indonesia</div>
                    </div>
                </div>
                <div class="p-3">
                    <h3 class="font-medium text-sm text-gray-800 mb-1">Geografi Indonesia</h3>
                    <p class="text-xs text-gray-600 mb-2">Prof. Ida Bagus Made</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Geografi</span>
                        <div class="flex items-center text-yellow-500 text-xs">
                            <i class="fas fa-star"></i>
                            <span class="ml-1">4.5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-8">
            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Muat Lebih Banyak
            </button>
        </div>
    </main>

    <!-- Floating Action Button -->
    <button class="floating-action w-14 h-14 rounded-full text-white shadow-lg hover:shadow-xl transition-all">
        <i class="fas fa-plus text-xl"></i>
    </button>

    <!-- Book Detail Modal -->
    <div id="bookModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center p-4">
        <div class="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                    <h3 id="modalTitle" class="text-xl font-bold text-gray-800"></h3>
                    <button onclick="closeModal()" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                
                <div class="text-center mb-6">
                    <div id="modalCover" class="w-32 h-48 mx-auto rounded-lg flex items-center justify-center text-white text-4xl mb-4">
                        📚
                    </div>
                    <h4 class="font-semibold text-lg mb-2">Judul Buku</h4>
                    <p class="text-gray-600 mb-4">Nama Penulis</p>
                    
                    <div class="flex justify-center space-x-4 mb-6">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-blue-600">4.8</div>
                            <div class="text-sm text-gray-600">Rating</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-green-600">234</div>
                            <div class="text-sm text-gray-600">Pembaca</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-purple-600">12</div>
                            <div class="text-sm text-gray-600">Bab</div>
                        </div>
                    </div>
                </div>
                
                <div class="space-y-4">
                    <button class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        <i class="fas fa-book-open mr-2"></i>
                        Baca Sekarang
                    </button>
                    <button class="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                        <i class="fas fa-bookmark mr-2"></i>
                        Simpan ke Favorit
                    </button>
                    <button class="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                        <i class="fas fa-download mr-2"></i>
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script>
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.slide-indicator');
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
            });
            
            indicators.forEach((indicator, i) => {
                indicator.style.opacity = i === index ? '1' : '0.5';
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        function previousSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        function goToSlide(index) {
            currentSlide = index;
            showSlide(currentSlide);
        }
        
        // Auto-advance slides every 5 seconds
        setInterval(nextSlide, 5000);

        function openBook(title) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('bookModal').classList.remove('hidden');
            document.getElementById('bookModal').classList.add('flex');
        }

        function closeModal() {
            document.getElementById('bookModal').classList.add('hidden');
            document.getElementById('bookModal').classList.remove('flex');
        }

        // Close modal when clicking outside
        document.getElementById('bookModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Search functionality
        document.querySelector('input[type="text"]').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                alert('Fitur pencarian akan segera tersedia!');
            }
        });

        // Category filter
        document.querySelectorAll('.category-chip').forEach(chip => {
            chip.addEventListener('click', function() {
                document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('opacity-75'));
                this.classList.add('opacity-75');
            });
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97c46026c457f916',t:'MTc1NzM5NjY4Ni4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>

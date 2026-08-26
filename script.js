// =========================================================
// 1. THÔNG TIN WEBSITE — CHỈNH Ở ĐÂY
// =========================================================
const siteConfig = {
    siteName: "Minh Trường",
    username: "@minhtruong",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300",
    bio: "Tổng hợp những sản phẩm hữu ích và đáng mua.",
    
    // Mạng xã hội: Điền link của bạn. Nếu không dùng, hãy để rỗng ""
    socials: {
        tiktok: "https://tiktok.com",
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        youtube: ""
    }
};

// =========================================================
// 2. HERO — CHỈNH Ở ĐÂY
// =========================================================
const heroConfig = {
    title: "Những món đồ đáng mua mình đã chọn lọc 🔥",
    description: "Những sản phẩm hữu ích cho học tập, làm việc, giải trí và cuộc sống.",
    buttonText: "🔥 Xem sản phẩm nổi bật"
};

// =========================================================
// 3. SẢN PHẨM — CHỈNH Ở ĐÂY
// =========================================================
// Lưu ý: Đổi link affiliate tại dòng affiliateLink.
const products = [
    {
        id: "sp1",
        featured: true, // true = Sản phẩm nổi bật (Chỉ nên có 1 sản phẩm là true)
        name: "[DỮ LIỆU DEMO] Bàn phím cơ Custom Trục Đỏ",
        description: "Gõ siêu êm, có LED RGB, layout 75% nhỏ gọn.",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
        price: "450.000đ",
        oldPrice: "600.000đ",
        discount: "-25%",
        badge: "DEMO",
        rating: 4.9,
        reviews: 120,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "sp2",
        featured: false,
        name: "[DỮ LIỆU DEMO] Chuột Gaming Không Dây Silent",
        description: "Độ trễ thấp, click không tiếng ồn, pin sạc Type-C.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        price: "150.000đ",
        oldPrice: "250.000đ",
        discount: "-40%",
        badge: "DEMO",
        rating: 4.8,
        reviews: 340,
        category: "gaming",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "sp3",
        featured: false,
        name: "[DỮ LIỆU DEMO] Tai nghe Bluetooth Chống Ồn",
        description: "Pin 24h, đệm tai êm ái, âm bass mạnh mẽ.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        price: "299.000đ",
        oldPrice: "499.000đ",
        discount: "-40%",
        badge: "DEMO",
        rating: 4.7,
        reviews: 215,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "sp4",
        featured: false,
        name: "[DỮ LIỆU DEMO] Giá Đỡ Điện Thoại/Tablet Hợp Kim",
        description: "Gấp gọn dễ dàng, mang đi học đi cafe rất tiện.",
        image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?w=500",
        price: "55.000đ",
        oldPrice: "100.000đ",
        discount: "-45%",
        badge: "DEMO",
        rating: 5.0,
        reviews: 890,
        category: "hoc-tap",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "sp5",
        featured: false,
        name: "[DỮ LIỆU DEMO] Đèn LED Bàn Học Bảo Vệ Mắt",
        description: "Chống cận, 3 chế độ sáng, có hộp cắm bút.",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0188?w=500",
        price: "120.000đ",
        oldPrice: "180.000đ",
        discount: "-33%",
        badge: "DEMO",
        rating: 4.8,
        reviews: 156,
        category: "hoc-tap",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "sp6",
        featured: false,
        name: "[DỮ LIỆU DEMO] Hub USB Type-C 5 in 1",
        description: "Mở rộng cổng kết nối cho Laptop, vỏ nhôm tản nhiệt.",
        image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=500",
        price: "180.000đ",
        oldPrice: "250.000đ",
        discount: "-28%",
        badge: "DEMO",
        rating: 4.6,
        reviews: 88,
        category: "cong-nghe",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "sp7",
        featured: false,
        name: "[DỮ LIỆU DEMO] Túi Đeo Chéo Canvas Nam Nữ",
        description: "Vải dày dặn, form rộng đựng vừa iPad và sổ tay.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
        price: "99.000đ",
        oldPrice: "150.000đ",
        discount: "-34%",
        badge: "DEMO",
        rating: 4.9,
        reviews: 420,
        category: "thoi-trang",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    },
    {
        id: "sp8",
        featured: false,
        name: "[DỮ LIỆU DEMO] Bình Giữ Nhiệt Inox 304 750ml",
        description: "Giữ đá 24h, thiết kế trơn thanh lịch, tặng kèm ống hút.",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        price: "110.000đ",
        oldPrice: "190.000đ",
        discount: "-42%",
        badge: "DEMO",
        rating: 4.8,
        reviews: 512,
        category: "gia-dung",
        affiliateLink: "DÁN_LINK_AFFILIATE_VÀO_ĐÂY"
    }
];

// =========================================================
// 4. DANH MỤC — CHỈNH Ở ĐÂY
// =========================================================
const categories = [
    { id: "all", name: "🔥 Tất cả" },
    { id: "cong-nghe", name: "💻 Công nghệ" },
    { id: "gaming", name: "🎮 Gaming" },
    { id: "gia-dung", name: "🏠 Gia dụng" },
    { id: "thoi-trang", name: "👕 Thời trang" },
    { id: "hoc-tap", name: "📚 Học tập" }
];


// =========================================================
// 5. LOGIC WEBSITE — KHÔNG CẦN SỬA BÊN DƯỚI
// =========================================================

const state = {
    currentCategory: "all",
    currentSearch: ""
};

// Utils: Gán text an toàn, tránh lỗi null
const setElText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text || "";
};

// 1. Khởi tạo Profile và Hero
function initProfileAndHero() {
    // Tiêu đề trang
    document.title = `${siteConfig.siteName} | Top sản phẩm`;
    
    // Gán dữ liệu Profile
    setElText('profile-name', siteConfig.siteName);
    setElText('profile-username', siteConfig.username);
    setElText('profile-bio', siteConfig.bio);
    setElText('footer-name', siteConfig.siteName);
    setElText('current-year', new Date().getFullYear());

    // Xử lý Avatar với ảnh dự phòng an toàn
    const avatarImg = document.getElementById('profile-avatar');
    if (avatarImg) {
        avatarImg.src = siteConfig.avatar;
        avatarImg.onerror = () => {
            avatarImg.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Cpath d='M50 55c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm0 5c15 0 30 7.5 30 22.5V90H20v-7.5C20 67.5 35 60 50 60z' fill='%239ca3af'/%3E%3C/svg%3E";
        };
    }

    // Render Social Icons (Chỉ render khi có link)
    const socialHTML = [];
    if (siteConfig.socials.tiktok) socialHTML.push(`<a href="${siteConfig.socials.tiktok}" target="_blank" rel="noopener" aria-label="TikTok"><i class='bx bxl-tiktok'></i></a>`);
    if (siteConfig.socials.facebook) socialHTML.push(`<a href="${siteConfig.socials.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><i class='bx bxl-facebook-circle'></i></a>`);
    if (siteConfig.socials.instagram) socialHTML.push(`<a href="${siteConfig.socials.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><i class='bx bxl-instagram'></i></a>`);
    if (siteConfig.socials.youtube) socialHTML.push(`<a href="${siteConfig.socials.youtube}" target="_blank" rel="noopener" aria-label="YouTube"><i class='bx bxl-youtube'></i></a>`);
    
    const socialContainer = document.getElementById('social-container');
    if (socialContainer) socialContainer.innerHTML = socialHTML.join('');

    // Gán dữ liệu Hero (Chính là lỗi đã được sửa)
    setElText('hero-title', heroConfig.title);
    setElText('hero-description', heroConfig.description);
    setElText('hero-button', heroConfig.buttonText);
    
    // Nút Hero cuộn xuống dưới
    const heroBtn = document.getElementById('hero-button');
    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            const mainContent = document.getElementById('main-content');
            if(mainContent) mainContent.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// 2. Tạo HTML cho từng Card Sản phẩm
function createCardHTML(p, isFeatured = false) {
    const badgeHTML = p.badge ? `<div class="p-badge">${p.badge}</div>` : '';
    const oldPriceHTML = p.oldPrice ? `<span class="p-old">${p.oldPrice}</span>` : '';
    const discountHTML = p.discount ? `<span class="p-discount">${p.discount}</span>` : '';
    const featureLabel = isFeatured ? `<span class="featured-label"><i class='bx bxs-hot'></i> SẢN PHẨM NỔI BẬT</span>` : '';
    
    // Ảnh dự phòng (Base64) khi ảnh hỏng
    const fallbackImg = `this.onerror=null; this.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%239ca3af'%3ELỗi Ảnh%3C/text%3E%3C/svg%3E"`;

    return `
        <a href="#" class="product-card js-affiliate-link ${isFeatured ? 'featured-card' : ''}" data-id="${p.id}" data-link="${p.affiliateLink}" aria-label="Xem sản phẩm ${p.name}">
            <div class="p-img">
                ${badgeHTML}
                <img src="${p.image}" alt="${p.name}" loading="lazy" onerror='${fallbackImg}'>
            </div>
            <div class="p-info">
                ${featureLabel}
                <h3 class="p-name">${p.name}</h3>
                <p class="p-desc">${p.description}</p>
                <div class="p-rating">
                    <i class='bx bxs-star'></i> ${p.rating} <span>(${p.reviews})</span>
                </div>
                <div class="p-prices">
                    <span class="p-price">${p.price}</span>
                    ${oldPriceHTML}
                    ${discountHTML}
                </div>
                <div class="btn-buy">Xem sản phẩm &rarr;</div>
            </div>
        </a>
    `;
}

// 3. Render Danh mục
function renderCategories() {
    const container = document.getElementById('category-container');
    if (!container) return;
    
    container.innerHTML = categories.map(c => 
        `<li><button class="cat-btn js-cat-btn ${c.id === state.currentCategory ? 'active' : ''}" data-id="${c.id}" aria-label="Lọc danh mục ${c.name}">${c.name}</button></li>`
    ).join('');
}

// 4. Render Sản phẩm (Kết hợp Filter & Search)
function renderProducts() {
    const grid = document.getElementById('product-container');
    const featured = document.getElementById('featured-container');
    const noResult = document.getElementById('no-result');
    
    if (!grid || !featured || !noResult) return;

    const term = state.currentSearch.toLowerCase();
    
    const filtered = products.filter(p => {
        const matchCat = state.currentCategory === 'all' || p.category === state.currentCategory;
        const matchSearch = p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = ''; 
        featured.innerHTML = '';
        noResult.classList.remove('hidden');
        return;
    }
    
    noResult.classList.add('hidden');

    // Lọc riêng sản phẩm nổi bật (chỉ lấy 1 sản phẩm đầu tiên có featured=true)
    const featuredProduct = filtered.find(p => p.featured === true);
    const normalProducts = filtered.filter(p => p !== featuredProduct);

    featured.innerHTML = featuredProduct ? createCardHTML(featuredProduct, true) : '';
    grid.innerHTML = normalProducts.map(p => createCardHTML(p, false)).join('');
}

// 5. Theo dõi Click (Cục bộ LocalStorage)
function trackClick(productId) {
    try {
        let clicks = JSON.parse(localStorage.getItem('local_affiliate_clicks') || '{}');
        clicks[productId] = (clicks[productId] || 0) + 1;
        localStorage.setItem('local_affiliate_clicks', JSON.stringify(clicks));
    } catch(err) { /* Bỏ qua an toàn */ }
}

// =========================================================
// 🚀 TẤT CẢ SỰ KIỆN NẰM TRONG 1 DOMContentLoaded DUY NHẤT
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Khởi chạy giao diện
    initProfileAndHero();
    renderCategories();
    renderProducts();

    // Lắng nghe Thanh tìm kiếm
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.currentSearch = e.target.value;
            renderProducts();
        });
    }

    // Sử dụng Event Delegation cho toàn bộ Body
    document.body.addEventListener('click', (e) => {
        
        // 1. Nếu click vào Danh mục (Category)
        const catBtn = e.target.closest('.js-cat-btn');
        if (catBtn) {
            document.querySelectorAll('.js-cat-btn').forEach(b => b.classList.remove('active'));
            catBtn.classList.add('active');
            state.currentCategory = catBtn.getAttribute('data-id');
            renderProducts();
            return;
        }

        // 2. Nếu click vào Link Sản phẩm (Affiliate)
        const productCard = e.target.closest('.js-affiliate-link');
        if (productCard) {
            e.preventDefault(); 
            const link = productCard.getAttribute('data-link');
            const pId = productCard.getAttribute('data-id');
            
            // Xử lý link chưa nhập
            if (!link || link.trim() === "" || link === "DÁN_LINK_AFFILIATE_VÀO_ĐÂY") {
                alert("Link sản phẩm chưa được cập nhật.");
                return;
            }

            // Ghi nhận Click & Mở Tab mới (An toàn SEO)
            trackClick(pId);
            window.open(link, '_blank', 'noopener,noreferrer,nofollow,sponsored');
        }
    });

    // Xử lý Dark Mode
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeBtn.innerHTML = "<i class='bx bx-sun'></i>";
        }
        
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeBtn.innerHTML = isDark ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
        });
    }
    
    // Xử lý Back to Top
    const bttBtn = document.getElementById('back-to-top');
    if (bttBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                bttBtn.classList.add('show');
            } else {
                bttBtn.classList.remove('show');
            }
        });
        
        bttBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuContainer = document.getElementById('menu-container');
const bookingForm = document.getElementById('bookingForm');

// Handle Navbar Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Handle Mobile Menu Profile
mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = mobileMenuBtn.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.replace('ph-list', 'ph-x');
  } else {
    icon.classList.replace('ph-x', 'ph-list');
  }
});

// Close mobile menu on clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuBtn.querySelector('i').classList.replace('ph-x', 'ph-list');
  });
});

// Menu Data
const menuItems = [
  {
    id: 1,
    name: 'Bún Chả Truyền Thống',
    price: '55.000đ',
    description: 'Bún rối mềm, chả viên và chả miếng nướng than hoa, nước mắm pha ấm nóng cùng rau sống Sài Gòn.',
    image: 'assets/hero.png'
  },
  {
    id: 2,
    name: 'Bún Chả Đặc Biệt',
    price: '75.000đ',
    description: 'Khẩu phần lớn với thịt xém cạnh, thêm chả lá lốt nướng thơm lừng.',
    image: 'assets/nuocmam.png'
  },
  {
    id: 3,
    name: 'Bún Chả Giò',
    price: '65.000đ',
    description: 'Bún chả truyền thống kết hợp cùng 2 cuốn chả giò (nem rán) giòn rụm nhân tôm thịt.',
    image: 'assets/nem.png'
  },
  {
    id: 4,
    name: 'Nem Chua Rán',
    price: '40.000đ',
    description: 'Đặc sản ăn vặt Hà Nội, tẩm bột xù chiên giòn ăn kèm tương ớt xí muội.',
    image: 'https://placehold.co/400x300/e63946/ffffff?text=Nem+Chua+Ran'
  },
  {
    id: 5,
    name: 'Chả Cốm Làng Vòng',
    price: '45.000đ',
    description: 'Chả heo trộn nếp cốm dẻo thơm, chiên vàng đều hai mặt.',
    image: 'https://placehold.co/400x300/fbc02d/121212?text=Cha+Com'
  },
  {
    id: 6,
    name: 'Bánh Cuốn Nóng',
    price: '50.000đ',
    description: 'Tráng mỏng vừa đủ, nhân mộc nhĩ thịt băm hành phi giòn tan bên trên.',
    image: 'https://placehold.co/400x300/f5f5f5/121212?text=Banh+Cuon'
  },
  {
    id: 7,
    name: 'Trứng Ốp La (Thêm)',
    price: '10.000đ',
    description: 'Trứng gà ta chiên lòng đào xém cạnh để ăn kèm bún.',
    image: 'https://placehold.co/400x300/fbc02d/121212?text=Trung+Op+La'
  },
  {
    id: 8,
    name: 'Nước Mắm Pha Bắc',
    price: 'Mời dùng thêm',
    description: 'Chua thanh mặn ngọt vừa vặn, kèm đu đủ xanh và cà rốt muối xổi.',
    image: 'assets/nuocmam.png'
  },
  {
    id: 9,
    name: 'Trà Đá Hà Nội',
    price: '5.000đ',
    description: 'Trà mạn (trà Bắc) pha loãng giữ nguyên hậu vị chát ngọt dịu.',
    image: 'https://placehold.co/400x300/e63946/ffffff?text=Tra+Da'
  },
  {
    id: 10,
    name: 'Chè Thập Cẩm',
    price: '25.000đ',
    description: 'Món tráng miệng mát lạnh xua tan cái nóng Sài Gòn, đậu đỏ tào phớ sương sa.',
    image: 'https://placehold.co/400x300/fbc02d/121212?text=Che+Thap+Cam'
  }
];

// Render Menu
function renderMenu() {
  menuContainer.innerHTML = menuItems.map(item => `
    <div class="menu-card">
      <img src="${item.image}" alt="${item.name}" class="menu-image">
      <div class="menu-info">
        <div class="menu-title-row">
          <h3>${item.name}</h3>
          <span class="menu-price">${item.price}</span>
        </div>
        <p class="menu-desc">${item.description}</p>
        <button class="menu-action" onclick="selectDish('${item.name}')">
          <i class="ph ph-plus-circle"></i> Đặt món này
        </button>
      </div>
    </div>
  `).join('');
}

// Select Dish from Menu
function selectDish(dishName) {
  const dishSelect = document.getElementById('dish');
  // Check if option exists
  let optionExists = false;
  for (let i = 0; i < dishSelect.options.length; i++) {
    if (dishSelect.options[i].value === dishName) {
      dishSelect.selectedIndex = i;
      optionExists = true;
      break;
    }
  }
  // If not exists, add it temporarily just to show intent
  if (!optionExists) {
    const newOption = new Option(dishName, dishName);
    dishSelect.add(newOption);
    dishSelect.value = dishName;
  }
  
  // Smooth scroll to booking section
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
  
  // Quick glow effect to show user where to look
  dishSelect.style.transition = 'box-shadow 0.3s ease';
  dishSelect.style.boxShadow = '0 0 10px #d32f2f';
  setTimeout(() => {
    dishSelect.style.boxShadow = 'none';
  }, 1500);
}

// Handle Form Submission
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const time = document.getElementById('time').value;
  const dish = document.getElementById('dish').value;
  const notes = document.getElementById('notes').value;
  
  const orderDetails = {
    Khách_hàng: name,
    Điện_thoại: phone,
    Giờ_đến: time,
    Món: dish,
    Ghi_chú: notes
  };
  
  console.log('--- ĐƠN HÀNG MỚI ---');
  console.table(orderDetails);
  
  // Alert success
  alert(`Cảm ơn ${name}! Đơn đặt bàn/hàng của bạn đã được gửi thành công.\nChúng tôi sẽ liên hệ ${phone} để xác nhận trong ít phút.`);
  
  // Reset form
  bookingForm.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
});

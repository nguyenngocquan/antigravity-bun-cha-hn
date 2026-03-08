# Bún Chả Hà Nội Chính Gốc - Sài Gòn 🍜🔥

Dự án Landing Page tĩnh cho quán Bún Chả Hà Nội đặt tại TP. Hồ Chí Minh.
Dự án được xây dựng hoàn toàn bằng HTML, CSS (Vanilla), và JavaScript thuần (không phụ thuộc vào framework, thư viện phức tạp hay các công cụ build như Webpack/Vite) nhằm đảm bảo tốc độ tải trang cực nhanh và khả năng tùy biến cao nhất.

## 🌟 Tính Năng Chính
- **Thiết Kế Đậm Chất Riêng**: Màu đỏ than (Charcoal Red) rực rỡ tượng trưng cho ngọn lửa nướng chả, kết hợp cùng sắc xám và đen tạo cảm giác vừa mạnh mẽ, sôi động (chuẩn Sài Gòn), vừa giữ cái hồn mộc mạc của chả nướng thủ đô.
- **Thực Đơn Trực Quan**: Grid layout hiện đại hiển thị chi tiết các món ăn, được tối ưu hình ảnh.
- **Form Đặt Bàn Đơn Giản**: Form thu thập thông tin người dùng với xác nhận tự động qua Javascript.
- **Responsive Hoàn Hảo**: Trải nghiệm mượt mà trên cả Mobile, Tablet và Desktop.

## 🚀 Hướng Dẫn Chạy Dự Án

Bởi vì đây là dự án tĩnh, bạn hoàn toàn có thể chạy mượt mà không cần cài đặt dependencies phức tạp (không cần `npm install`). 

### Cách 1: Mở trực tiếp (Nhanh nhất)
Chỉ cần nhấp đúp (double click) vào tệp `index.html` bên trong thư mục `bun-cha-saigon` để mở trên trình duyệt (Chrome, Safari, Edge, v.v.).

### Cách 2: Sử dụng VS Code Live Server (Khuyên dùng để phát triển)
1. Mở thư mục `bun-cha-saigon` trong Visual Studio Code.
2. Cài đặt tiện ích (Extension) **Live Server** của tác giả Ritwick Dey.
3. Chuột phải vào tệp `index.html` và chọn **"Open with Live Server"**.
4. Website sẽ tự động mở ở địa chỉ cục bộ (vd: `http://127.0.0.1:5500`).

### Cách 3: Sử dụng Python HTTP Server / Node
Nếu bạn đã cài sẵn Python trên máy tính, mở terminal tại thư mục này và chạy:
```bash
python -m http.server 8080
```
Sau đó truy cập `http://localhost:8080` trên trình duyệt.

## 🛠 Cấu Trúc Thư Mục
- `index.html`: Cấu trúc HTML chính, nội dung.
- `styles.css`: Hệ thống Design System và toàn bộ CSS styling, animation.
- `script.js`: Xử lý tương tác người dùng, render Danh sách món ăn và thao tác Form Đặt Bàn.
- `assets/`: Chứa các hình ảnh tĩnh và placeholders của món ăn.

## ✒️ Credit
- **Thiết kế bởi Minh Đỗ**
- Hình ảnh tham khảo: AI Generative & Placeholders


# Dịch Vụ TmC GradCar Rạch Giá - 0775 856 456

Trang landing page giới thiệu dịch vụ **Dịch Vụ TmC Hợp Đồng Xe Du Lịch 4-7-16 Chỗ** — GradCar Rạch Giá ⚡Số Điện Thoại Booking: 0775 856 456

Toàn bộ website là trang tĩnh: **`index.html`** (HTML + CSS + JS, không build tool.CSS và JS nằm trong thư mục riêng essets/js và essets/css .mỗi 1 section đều phải có trích dẫn trong file "index.html và các fie *js *css*" ví dụ : <!-- kích thước và màu sắc của nút gọi lớn giữa trang>. Nhằm mục đích dễ dàng thay đổi và chỉnh sửa ) .
 . Source code sẻ được đặt ở repo GitHub - Deploy trên Cloudflare pages,sub domain là tài sản riêng của tôi domain chính là tmc.io.vn).

## Cấu trúc file `index.html`

 index.html
 ├── &lt;head&gt;                         Khai báo meta, title, font, icon
│   ├── meta charset/viewport/theme-color
 │   |   meta keywords và meta description phải đầy đủ chi tiết và phong phú (Tối ưu SEO và các Google search engine khác ).
 │   ├── favicon.ico                  Icon trang (24x24, 48x48, 192x192)
 │   ├── &lt;title&gt;                    "TmC GradCar Taxi Rạch Giá | - 0775 856 456"
 │   ├── Google Fonts               Be Vietnam Pro (100% chuẩn tiếng Việt)
 │   ├── Font Awesome 6.5.0 (CDN)   Bộ icon (liệt kê 1 danh sách mục lục ) các icon này sẽ được sử dụng ở các phần nội dung mô tả khác nhau.

 │   └── &lt;style&gt;                    CSS của trang (biến màu, header,
 │                                   hero, booking form, services, vehicle, footer...)
 │
 └──
 ------------------------Bảo agent sao luu và viết lại tất cả giai đoạn 1-------------
 --------Giai đoạn 2, bảo agent báo cáo nội dung trong readme ở giai đoạn 1---------

 &lt;body&gt;
  ├── &lt;header class="header"&gt;                Thanh điều hướng cố định (sticky)
  (Hiệu ứng)                                   Các nút khi đưa chuột ngang phải có hiệu ứng thay đổi chuyển động lặp lại (ví dụ: chữ nhỏ lại xíu rồi trở lại kích thước bình thường.)
  │   ├── .logo                                Logo "GradCar"
  │   ├── nav#nav                              Menu: Trang chủ / Giới thiệu / Dịch vụ /
  │   │                                         Bảng giá / Xe của chúng tôi / Tin tức / Liên hệ
  │   ├── .head-btn.call                        Nút gọi nhanh 0775 856 456
     │   ├── .head-btn.zalo                        Nút chat Zalo
  │   └── button#menu (☰)                      Nút mở menu trên mobile
  │
  ├── &lt;section id="home" class="hero"&gt;        Khu vực đầu trang (banner)
  │   ├── .hero-main
  │   │   ├── Tiêu đề "TAXI RẠCH GIÁ"
  │   │   ├── Tagline "PHỤC VỤ TẬN TÂM - ĐI XE BÊN EM BẢO ĐẢM KHÁCH HÀI LÒNG 🌿"
  │   │   ├── .benefits (4 mục)                Khách Hàng Hỏi Giá / Không Đặt Xe Cũng Được / Chỉ Cần Cười Tươi Là Được...
  │   │   │                                     Xe Mới - Máy Lạnh Công Xuất Cao - Không Mùi / Phục vụ 24/7.
  │   │   └── .cars-photo                       Ảnh đội xe (ảnh nhúng base64)
  │   └── #dat-xe .booking                      Form đặt xe
  │       └── form#form
  │           ├── input#name, #phone           Họ tên, số điện thoại
  │           ├── select#vehicle                Loại xe (4 / 7)
  │           ├── input#time                     Thời gian đón <-- Loại Bỏ
  │           ├── input#pickup, #dropoff        Điểm đón, điểm đến
  │           ├── textarea#note                 Ghi chú
  │           └── button "ĐẶT XE NGAY"          Submit → gửi qua Zalo (xem phần Script)
  │
  ├── &lt;section id="dich-vu" class="services"&gt; Danh sách dịch vụ
  │   ├── Đưa đón sân bay
  │   ├── Đi tỉnh 2 chiều
  │   ├── Du lịch tham quan
  │   ├── Hợp đồng Xe, Xế Riêng
  │   ├── Sự kiện – cưới hỏi
      |-- Chạy Tài - Lái Hộ 
  │   └── .green-banner
  │
  ├── &lt;section id="xe" class="vehicle-section"&gt; Danh sách xe
  │   ├
  │   │
  │   └── "Chi Tiết các dòng Xe 4–7 chỗ"
  │       └── Honda BRV  /  Honda City  /  Toyota Vios / Hyundai Accent / Toyota Innova / Kia Carnival / VinFast VF6 / VF7 / VF8 / Limo Green.v.v..
  │       (mỗi xe: ảnh, danh sách đặc điểm (Nội dung Hiện) và Nội dung ẩn sẻ đầy đủ thông tin chi tiết cấu tạo đặc điểm của dòng xe đó. hơn, và chỉ hiện khi kéo chuốt vào hiện )
  │
  ├── &lt;footer id="lien-he" class="footer"&gt;    Thông tin liên hệ
  │   ├── Khu vực hoạt động                     Rạch Giá – An Giang – Cần Thơ – Cà Mau – Bạc Liêu – Cà Mau – Sóc Trăng.v.v..
  │   ├── Tại sao chọn Dịch Vụ TmC?                      Xe Xịn, Xế sang, Dịch Vụ Tốt, Giá Rẻ Mà Còn Minh Bạch. Không Chọn TmC Thì Còn Chọn Ai.
   │   ├── Liên hệ ngay                           0775 856 456
  │   ├── Thanh toán linh hoạt                    Tiền mặt / chuyển khoản / ví điện tử / công nợ
  │   └── Kết nối                                Facebook • Zalo • TikTok • Google Maps
  │
  ├── .float:  Nút nổi (gọi ngay / Zalo / google map /cuộn lên ) luôn hiện ở chân màng hình chính mobile và phải hiện ở chân màng hình di động . tổng là có 4 nút: gọi/zalo/maps/cuộn lên đầu trang . nếu ở màn hình laptop thì không hiện nút nổi này mà chỉ hiện nút cuộn lên đầu trang.
  ├
  │
  └── &lt;script&gt; (2 khối JS cuối trang)
   ├── Toggle menu mobile (mở/đóng nav)
   ├── Xử lý submit form đặt xe bắt buộc phải auto sendto tới mail — bổ sung sau
   │   mở Zalo (zalo.me) kèm nội dung đã điền
   └── Ảnh img nén uri và kiểm tra load chậm hay nhanh nếu có thể tối ưu thêm
	172.66.47.24	
	172.66.44.232	
 ```text

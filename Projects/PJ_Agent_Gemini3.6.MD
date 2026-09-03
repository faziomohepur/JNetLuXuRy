
# Dịch Vụ TmC GradCar Rạch Giá - 0775 856 456

Trang landing page giới thiệu dịch vụ **Dịch Vụ TmC Hợp Đồng Xe Du Lịch 4-7-16 Chỗ** — GradCar Rạch Giá ⚡Số Điện Thoại Booking: 0775 856 456

Toàn bộ website là trang tĩnh: **`index.html`** (HTML + CSS + JS, không build tool.CSS và JS nằm trong thư mục riêng essets/js và essets/css .mỗi 1 section đều phải có trích dẫn trong file "index.html và các fie *js *css*" ví dụ : <!-- kích thước và màu sắc của nút gọi lớn giữa trang>. Nhằm mục đích dễ dàng thay đổi và chỉnh sửa ) .
. Source code sẻ được đặt ở repo GitHub - Deploy trên Cloudflare pages,sub domain là tài sản riêng của tôi domain chính là tmc.io.vn).

## Cấu trúc file `index.html`

```text
index.html
├── <head>                         Khai báo meta, title, font, icon
│   ├── meta charset/viewport/theme-color
│   |   meta keywords và meta description phải đầy đủ chi tiết và phong phú (Tối ưu SEO và các Google search engine khác ).
│   ├── favicon.ico                  Icon trang (24x24, 48x48, 192x192) 
│   ├── <title>                    "TmC GradCar Taxi Rạch Giá | - 0775 856 456"
│   ├── Google Fonts               Be Vietnam Pro (100% chuẩn tiếng Việt)
│   ├── Font Awesome 6.5.0 (CDN)   Bộ icon (liệt kê 1 danh sách mục lục ) các icon này sẽ được sử dụng ở các phần nội dung mô tả khác nhau.

│   └── <style>                    CSS của trang (biến màu, header,
│                                   hero, booking form, services, vehicle, footer...)
│
└── 
------------------------Bảo agent sao luu và viết lại tất cả giai đoạn 1-------------
--------Giai đoạn 2, bảo agent báo cáo nội dung trong readme ở giai đoạn 1---------

<body>
    ├── <header class="header">                Thanh điều hướng cố định (sticky)
    (Hiệu ứng)                                   Các nút khi đưa chuột ngang phải có hiệu ứng thay đổi chuyển động lặp lại (ví dụ: chữ nhỏ lại xíu rồi trở lại kích thước bình thường.)
    │   ├── .logo                                Logo "GradCar"
    │   ├── nav#nav                              Menu: Trang chủ / Giới thiệu / Dịch vụ /
    │   │                                         Bảng giá / Xe của chúng tôi / Tin tức / Liên hệ
    │   ├── .head-btn.call                        Nút gọi nhanh 0775 856 456    
       │   ├── .head-btn.zalo                        Nút chat Zalo
    │   └── button#menu (☰)                      Nút mở menu trên mobile
    │
    ├── <section id="home" class="hero">        Khu vực đầu trang (banner)
    │   ├── .hero-main
    │   │   ├── Tiêu đề "Taxi RẠCH GIÁ ⚡"
    │   │   ├── Tagline "AN TOÀN – ÊM ÁI – THÂN THIỆN MÔI TRƯỜNG 🌿"
    │   │   ├── .benefits (4 mục)                 Xe điện hiện đại / An toàn tuyệt đối /
    │   │   │                                     Thân thiện môi trường / Phục vụ 24/7
    │   │   └── .cars-photo                       Ảnh đội xe (ảnh nhúng base64)
    │   └── #dat-xe .booking                      Form đặt xe
    │       └── form#form
    │           ├── input#name, #phone           Họ tên, số điện thoại
    │           ├── select#vehicle                Loại xe (điện / xăng)
    │           ├── input#time                     Thời gian đón
    │           ├── input#pickup, #dropoff        Điểm đón, điểm đến
    │           ├── textarea#note                 Ghi chú
    │           └── button "ĐẶT XE NGAY"          Submit → gửi qua Zalo (xem phần Script)
    │
    ├── <section id="dich-vu" class="services"> Danh sách dịch vụ
    │   ├── Đưa đón sân bay
    │   ├── Đi tỉnh 2 chiều
    │   ├── Du lịch tham quan
    │   ├── Hợp đồng doanh nghiệp
    │   ├── Sự kiện – cưới hỏi
    │   └── .green-banner                       
    │
    ├── <section id="xe" class="vehicle-section"> Danh sách xe
    │   ├
    │   │   
    │   └── "Chi Tiết các dòng Xe 4–7 chỗ"
    │       └── Toyota Vios / Hyundai Accent / Toyota Innova / Kia Carnival / VinFast VF6 / VF7 / VF8 / Limo Green.v.v..
    │       (mỗi xe: ảnh, danh sách đặc điểm (Nội dung Hiện) và Nội dung ẩn sẻ đầy đủ thông tin chi tiết cấu tạo đặc điểm của dòng xe đó. hơn, và chỉ hiện khi kéo chuốt vào hiện )
    │
    ├── <footer id="lien-he" class="footer">    Thông tin liên hệ
    │   ├── Khu vực hoạt động                     Rạch Giá – An Giang – Cần Thơ – Cà Mau – Bạc Liêu – Cà Mau – Sóc Trăng.v.v.. 
    │   ├── Tại sao chọn Dịch Vụ TmC?                      Xe Xịn, Xế sang, Dịch Vụ Tốt, Giá Rẻ Mà Còn Minh Bạch. Không Chọn TmC Thì Còn Chọn Ai.
        │   ├── Liên hệ ngay                           0775 856 456
    │   ├── Thanh toán linh hoạt                    Tiền mặt / chuyển khoản / ví điện tử / công nợ
    │   └── Kết nối                                Facebook • Zalo • TikTok • Google Maps
    │
    ├── .float:  Nút nổi (gọi ngay / Zalo / google map /cuộn lên ) luôn hiện ở chân màng hình chính mobile và phải hiện ở chân màng hình di động . tổng là có 4 nút: gọi/zalo/maps/cuộn lên đầu trang . nếu ở màn hình laptop thì không hiện nút nổi này mà chỉ hiện nút cuộn lên đầu trang.
    ├
    │
    └── <script> (2 khối JS cuối trang)
        ├── Toggle menu mobile (mở/đóng nav)
        ├── Xử lý submit form đặt xe bắt buộc phải auto sendto tới mail [bổ sung sau] 
        │   mở Zalo (zalo.me) kèm nội dung đã điền
        └── Ảnh img nén uri và kiểm tra load chậm hay nhanh nếu có thể tối ưu thêm 
```

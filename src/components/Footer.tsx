export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="logo">
            Lux<em>Date</em>
          </a>
          <p>Dịch vụ bạn đồng hành cao cấp hàng đầu Việt Nam. Sang trọng, lịch sự và đáng tin cậy.</p>
        </div>
        <div className="footer-col">
          <h5>THÀNH PHỐ</h5>
          <a href="#saigon">Sài Gòn</a>
          <a href="#hanoi">Hà Nội</a>
          <a href="#danang">Đà Nẵng</a>
          <a href="#nhatrang">Nha Trang</a>
        </div>
        <div className="footer-col">
          <h5>LIÊN HỆ</h5>
          <a href="tel:0776943965">0776 943 965</a>
          <a href="tel:0928048447">0928 048 447</a>
          <a href="https://zalo.me/0776943965" target="_blank" rel="noopener noreferrer">
            Zalo
          </a>
          <a href="https://t.me/hoahong8388" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a
            href="https://t.me/pgasaigonhanoinhatrangdanang"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram Group
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">
          © 2025 LuxDate · Premium Companion Services · All rights reserved
        </div>
        <div className="footer-copy">Phục vụ 24/7 · Bảo mật tuyệt đối</div>
      </div>
    </footer>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: '◆',
      title: 'Tuyển chọn nghiêm ngặt',
      description: 'Mỗi người đẹp trải qua quy trình tuyển chọn kỹ lưỡng về ngoại hình, phong cách và kỹ năng giao tiếp.',
    },
    {
      icon: '◇',
      title: 'Bảo mật tuyệt đối',
      description: 'Thông tin của bạn được bảo mật hoàn toàn. Chúng tôi cam kết sự riêng tư và kín đáo.',
    },
    {
      icon: '○',
      title: 'Dịch vụ 24/7',
      description: 'Đội ngũ hỗ trợ luôn sẵn sàng — đặt lịch nhanh chóng, linh hoạt theo lịch trình của bạn.',
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-left">
          <div className="why-eyebrow">Tại sao chọn chúng tôi</div>
          <h2 className="why-title">
            Đẳng cấp <em>cao cấp</em>
            <br />
            tại mọi khoảnh khắc
          </h2>
          <p className="why-description">
            Chúng tôi cam kết mang đến trải nghiệm đáng hành sang trọng, tinh tế nhất. Mỗi người đẹp đều được tuyển chọn kỹ lưỡng — xinh đẹp, thông minh và lịch sự.
          </p>
          <button
            className="why-cta"
            onClick={() => window.open('https://t.me/hoahong8388', '_blank')}
          >
            ĐẶT HẸN NGAY HÔM NAY
          </button>
        </div>

        <div className="why-right">
          {features.map((feature, index) => (
            <div key={index} className="why-feature-card">
              <div className="why-feature-icon">{feature.icon}</div>
              <div className="why-feature-content">
                <h3 className="why-feature-title">{feature.title}</h3>
                <p className="why-feature-desc">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

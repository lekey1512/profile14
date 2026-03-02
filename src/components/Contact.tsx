export default function Contact() {
  const contacts = [
    {
      type: 'zalo',
      label: 'ZALO',
      value: '0776 943 965',
      link: 'https://zalo.me/0776943965',
      icon: 'Z',
      color: '#0068FF',
    },
    {
      type: 'telegram',
      label: 'TELEGRAM',
      value: '@pgasaigon...',
      link: 'https://t.me/pgasaigonhanoinhatrangdanang',
      icon: '✈',
      color: '#26A5E4',
    },
    {
      type: 'telegram',
      label: 'TELEGRAM',
      value: '@hoahong8388',
      link: 'https://t.me/hoahong8388',
      icon: '✈',
      color: '#26A5E4',
    },
    {
      type: 'phone',
      label: 'ĐIỆN THOẠI',
      value: '0928 048 447',
      link: 'tel:0928048447',
      icon: '☎',
      color: '#e8748a',
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-inner">
        <div className="contact-header">
          <div className="contact-tag">Liên hệ với chúng tôi</div>
          <h2 className="contact-title">
            Sẵn sàng cho một
            <br />
            <em>cuộc hẹn đặc biệt?</em>
          </h2>
          <p className="contact-sub">
            Đội ngũ hỗ trợ luôn trực 24/7 — liên hệ ngay qua kênh bạn thích.
          </p>
        </div>

        <div className="contact-cards">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target={contact.type === 'phone' ? '_self' : '_blank'}
              rel={contact.type === 'phone' ? '' : 'noopener noreferrer'}
              className="contact-card"
            >
              <div className="contact-icon" style={{ backgroundColor: contact.color }}>
                {contact.icon}
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">{contact.label}</span>
                <span className="contact-card-value">{contact.value}</span>
              </div>
              <div className="contact-card-arrow">→</div>
            </a>
          ))}
        </div>

        <p className="contact-note">
          Phục vụ 24/7 · Bảo mật tuyệt đối · Phản hồi trong vòng 5 phút
        </p>
      </div>
    </section>
  );
}

export default function Marquee() {
  const marqueeItems = [
    'Hotgirl',
    'Hot TikToker',
    'Hoa Hậu',
    'Diễn Viên',
    'Người Mẫu',
    'Tiếp Viên Hàng Không',
    'Y Tá',
    'Dược Sĩ',
    'Giáo Viên',
    'Gái Ngoại Quốc',
  ];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <span key={index} className="marquee-item">
            <span className="marquee-dot"></span>
            {item}
          </span>
        ))}
        {marqueeItems.map((item, index) => (
          <span key={`duplicate-${index}`} className="marquee-item">
            <span className="marquee-dot"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

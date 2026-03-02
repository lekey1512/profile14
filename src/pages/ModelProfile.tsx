import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/profile.css';

interface ModelData {
  name: string;
  age: number;
  city: string;
  district: string;
  price: number;
  height: number;
  weight: number;
  views: number;
  bio: string;
  tags: string[];
  vip: boolean;
  measurements?: string;
  hours?: string;
  gallery?: string[];
}

const cityModels: Record<string, Record<string, ModelData>> = {
  sg: {
    'Mai Linh': {
      name: 'Mai Linh',
      age: 22,
      city: 'Hồ Chí Minh',
      district: 'Quận 1, TP.HCM',
      price: 16,
      height: 162,
      weight: 50,
      views: 185.4,
      bio: '"Bên ngoài ngọt ngào, nhưng bên trong em là một ẩn số. Em thích cùng anh xem phim và đi dạo trên biển lúc hoàng hôn."',
      tags: ['Nhiệt tình', 'Chiều chuộng', 'Đi ăn tối', 'Du lịch', 'Sự kiện'],
      vip: true,
      measurements: '88 – 62 – 90',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-gawAA6HhO?format=jpg&name=large'
      ]
    },
    'Thùy Tiên': {
      name: 'Thùy Tiên',
      age: 20,
      city: 'Hồ Chí Minh',
      district: 'Quận 3, TP.HCM',
      price: 15,
      height: 165,
      weight: 52,
      views: 172.1,
      bio: '"Đôi khi tôi yên tĩnh, đôi khi lại rất vui vẻ. Tôi thích nghe nhạc và khám phá các quán cà phê mới."',
      tags: ['Tính cảm', 'Lắng nghe', 'Đi ăn tối', 'Sự kiện'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK-MlwaYAAi1lD?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-MlsagAAnabz?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-Mlza8AAwHkD?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-MlpbUAAXWbq?format=jpg&name=medium'
      ]
    },
    'Hà Mỹ': {
      name: 'Hà Mỹ',
      age: 19,
      city: 'Hồ Chí Minh',
      district: 'Quận 10, TP.HCM',
      price: 13.5,
      height: 160,
      weight: 48,
      views: 165.3,
      bio: '"Tôi là một cô gái vui vẻ, luôn mang lại sự hài lòng cho mọi người xung quanh."',
      tags: ['Hài hước', 'Dễ thương', 'Năng động'],
      vip: true,
      measurements: '83 – 58 – 86',
      hours: '6PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK-V3VakAA1w36?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-V3ZaYAAtWPt?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-V3bbMAA76K_?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-V3TbcAAZ0No?format=jpg&name=large'
      ]
    },
    'Khánh Huyền': {
      name: 'Khánh Huyền',
      age: 23,
      city: 'Hồ Chí Minh',
      district: 'Bình Thạnh, TP.HCM',
      price: 13,
      height: 163,
      weight: 51,
      views: 158.9,
      bio: '"Em thích những buổi hẹn lãng mạn và đầy cảm xúc."',
      tags: ['Qua đêm', 'Lãng mạn'],
      vip: false,
      measurements: '84 – 59 – 87',
      hours: '7PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK-cgjacAAaftq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-cgnbsAA-7wl?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-cj4a4AABshX?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-cgeaYAAg-1B?format=jpg&name=large'
      ]
    },
    'Mỹ Linh': {
      name: 'Mỹ Linh',
      age: 21,
      city: 'Hồ Chí Minh',
      district: 'Quận 7, TP.HCM',
      price: 11.5,
      height: 168,
      weight: 54,
      views: 149.8,
      bio: '"Em vui vẻ, năng động và luôn mang đến năng lượng tích cực."',
      tags: ['Vui vẻ', 'Năng động', 'Thân thiện'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK-kxHbAAEsvWD?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-kxKaUAAQK3T?format=jpg&name=medium  ',
        'https://pbs.twimg.com/media/HCK-kxGacAEbhKE?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-kxEbUAEb6mB?format=jpg&name=medium'
      ]
    },
    'Phương Anh': {
      name: 'Phương Anh',
      age: 24,
      city: 'Hồ Chí Minh',
      district: 'Quận 2, TP.HCM',
      price: 8,
      height: 155,
      weight: 46,
      views: 145.2,
      bio: '"Em nhỏ nhắn, dễ thương và rất biết chiều chuộng."',
      tags: ['Chiều chuộng', 'Dễ thương'],
      vip: false,
      measurements: '80 – 56 – 83',
      hours: '8PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK-u7QaAAAnu2v?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-u7Qa8AEE_c6?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK-u7XagAAtFNI?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK-u7WaUAEnB2l?format=jpg&name=large'
      ]
    },
    'Ngọc Trinh': {
      name: 'Ngọc Trinh',
      age: 22,
      city: 'Hồ Chí Minh',
      district: 'Phú Nhuận, TP.HCM',
      price: 12,
      height: 164,
      weight: 50,
      views: 141.1,
      bio: '"Em nhiệt tình, chu đáo và luôn để lại ấn tượng tốt đẹp."',
      tags: ['Nhiệt tình', 'Chu đáo', 'Sự kiện'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK_Ac_boAAcWPI?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK_AdEbEAAXBdG?format=jpg&name=900x900',
        'https://pbs.twimg.com/media/HCK_AdFaQAEaVWy?format=jpg&name=900x900',
        'https://pbs.twimg.com/media/HCYyb1VbgAAxLKU?format=jpg&name=large'
      ]
    },
    'Bảo Châu': {
      name: 'Bảo Châu',
      age: 21,
      city: 'Hồ Chí Minh',
      district: 'Quận 5, TP.HCM',
      price: 14,
      height: 166,
      weight: 53,
      views: 138,
      bio: '"Em sang trọng, lịch sự và biết cách tạo ấn tượng sâu sắc."',
      tags: ['Sang trọng', 'Lịch sự'],
      vip: false,
      measurements: '86 – 61 – 89',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK_oIuagAE2wi6?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_oIzboAEw20G?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_oIsa4AA2FP1?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_oIta8AA1SfQ?format=jpg&name=large'
      ]
    },
    'Lan Anh': {
      name: 'Lan Anh',
      age: 23,
      city: 'Hồ Chí Minh',
      district: 'Gò Vấp, TP.HCM',
      price: 10,
      height: 158,
      weight: 47,
      views: 132,
      bio: '"Em thân thiện, dễ mến và luôn mang lại niềm vui cho mọi người."',
      tags: ['Thân thiện'],
      vip: false,
      measurements: '82 – 57 – 85',
      hours: '6PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCK_4jkbQAA_EI8?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_4jraoAAWthp?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK_4jbb0AAdqAA?format=jpg&name=medium',
        'https://pbs.twimg.com/media/HCK_4jdaMAIvVYE?format=jpg&name=medium'
      ]
    }
  },
  hn: {
    'Hồng Thắm': {
      name: 'Hồng Thắm',
      age: 21,
      city: 'Hà Nội',
      district: 'Hoàn Kiếm, Hà Nội',
      price: 15,
      height: 163,
      weight: 49,
      views: 178.2,
      bio: '"Em là một cô gái dịu dàng, thích lắng nghe và chia sẻ những khoảnh khắc đặc biệt."',
      tags: ['Dịu dàng', 'Lắng nghe', 'Lãng mạn', 'Du lịch'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXQeYlaAAAZlRl?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCLANcNaAAEeOkJ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCLANcPaEAAFUu4?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCLANcQbMAECt8L?format=jpg&name=medium'
      ]
    },
    'Diệu Nhi': {
      name: 'Diệu Nhi',
      age: 23,
      city: 'Hà Nội',
      district: 'Ba Đình, Hà Nội',
      price: 14,
      height: 160,
      weight: 51,
      views: 164.5,
      bio: '"Tôi là người năng động, luôn mang năng lượng tích cực. Hãy để tôi làm cho ngày của bạn trở nên đặc biệt."',
      tags: ['Nhiệt tình', 'Vui vẻ', 'Năng động', 'Sự kiện'],
      vip: true,
      measurements: '84 – 59 – 87',
      hours: '6PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYKfzqawAEXa3Z?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Ngọc Thảo': {
      name: 'Ngọc Thảo',
      age: 19,
      city: 'Hà Nội',
      district: 'Cầu Giấy, Hà Nội',
      price: 12,
      height: 165,
      weight: 47,
      views: 158.1,
      bio: '"Tôi trẻ, xinh đẹp và luôn sẵn sàng chiều chuộng người mình yêu quý."',
      tags: ['Chiều chuộng', 'Dễ thương', 'Trẻ trung'],
      vip: true,
      measurements: '82 – 58 – 85',
      hours: '8PM – 6AM',
      gallery: [
        'https://pbs.twimg.com/media/HCXQ8pKb0AAjRnD?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    }
  },
  dn: {
    'Hoài Thương': {
      name: 'Hoài Thương',
      age: 20,
      city: 'Đà Nẵng',
      district: 'Hải Châu, Đà Nẵng',
      price: 13,
      height: 161,
      weight: 48,
      views: 162.3,
      bio: '"Em là một cô gái vui vẻ, yêu thích các hoạt động ngoài trời và những trải nghiệm mới mẻ."',
      tags: ['Vui vẻ', 'Năng động', 'Du lịch', 'Ngoài trời'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYLoKGaUAAT6A7?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Cẩm Ly': {
      name: 'Cẩm Ly',
      age: 22,
      city: 'Đà Nẵng',
      district: 'Thanh Khê, Đà Nẵng',
      price: 11,
      height: 164,
      weight: 52,
      views: 151.8,
      bio: '"Tôi thích chiều chuộng và tạo ra những khoảnh khắc lãng mạn và ấm áp."',
      tags: ['Chiều chuộng', 'Lãng mạn', 'Tình cảm'],
      vip: true,
      measurements: '86 – 61 – 89',
      hours: '6PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYL8goakAEdzSB?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Thiên Kim': {
      name: 'Thiên Kim',
      age: 25,
      city: 'Đà Nẵng',
      district: 'Sơn Trà, Đà Nẵng',
      price: 15,
      height: 158,
      weight: 50,
      views: 144.2,
      bio: '"Tôi là một cô gái sang trọng và tinh tế, biết cách tạo ấn tượng sâu sắc."',
      tags: ['Sang trọng', 'Tinh tế', 'Lãng mạn'],
      vip: true,
      measurements: '87 – 62 – 90',
      hours: '8PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYMKKcaIAAF6LI?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    }
  },
  nt: {
    'Ngọc Hân': {
      name: 'Ngọc Hân',
      age: 23,
      city: 'Nha Trang',
      district: 'Lộc Thọ, Nha Trang',
      price: 14,
      height: 165,
      weight: 51,
      views: 171.5,
      bio: '"Em là một cô gái lãng mạn, thích những điều nhỏ nhặt có ý nghĩa trong cuộc sống."',
      tags: ['Lãng mạn', 'Chiều chuộng', 'Tình cảm', 'Du lịch'],
      vip: true,
      measurements: '85 – 60 – 88',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOQW6bYAAm6og?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Hương Giang': {
      name: 'Hương Giang',
      age: 19,
      city: 'Nha Trang',
      district: 'Phương Sài, Nha Trang',
      price: 10,
      height: 160,
      weight: 48,
      views: 159.3,
      bio: '"Tôi trẻ, năng động và luôn tìm kiếm những trải nghiệm mới mẻ cùng bạn."',
      tags: ['Vui vẻ', 'Năng động', 'Trẻ trung', 'Ngoài trời'],
      vip: true,
      measurements: '83 – 58 – 86',
      hours: '6PM – 4AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOXwnaoAAT397?format=jpg&name=4096x4096',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    },
    'Thảo Nguyên': {
      name: 'Thảo Nguyên',
      age: 21,
      city: 'Nha Trang',
      district: 'Phương Sơn, Nha Trang',
      price: 12,
      height: 163,
      weight: 50,
      views: 148.7,
      bio: '"Tôi nhẹ nhàng, dịu dàng và biết cách chăm sóc người mình quan tâm."',
      tags: ['Nhẹ nhàng', 'Dịu dàng', 'Tình cảm'],
      vip: true,
      measurements: '84 – 59 – 87',
      hours: '7PM – 5AM',
      gallery: [
        'https://pbs.twimg.com/media/HCYOmMYbkAABZzR?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-YaoAAn-jQ?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baAAEOcgq?format=jpg&name=large',
        'https://pbs.twimg.com/media/HCK99-baIAE1QW1?format=jpg&name=large'
      ]
    }
  }
};

export default function ModelProfile() {
  const [model, setModel] = useState<ModelData | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [city, setCity] = useState<string | null>(null);
  const [modelName, setModelName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let cityParam = params.get('city');
    let nameParam = params.get('name');

    if (!cityParam || !nameParam) {
      cityParam = 'sg';
      nameParam = 'Mai Linh';
    }

    setCity(cityParam);
    setModelName(nameParam);

    if (cityParam && nameParam && cityModels[cityParam]?.[nameParam]) {
      setModel(cityModels[cityParam][nameParam]);
    }
  }, []);

  useEffect(() => {
    const videoSlider = document.getElementById('video-slider');
    if (!videoSlider) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let animationId: number | null = null;
    let hasMoved = false;

    const stopAnimation = () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    const applyMomentum = () => {
      stopAnimation();
      const friction = 0.92;
      let vel = velocity * 0.8;

      const animate = () => {
        if (Math.abs(vel) < 0.1) {
          velocity = 0;
          const slideWidth = videoSlider.offsetWidth;
          const targetSlide = Math.round(-parseInt(videoSlider.style.transform.replace(/[^0-9-]/g, '') || '0') / slideWidth);
          const clampedSlide = Math.max(0, Math.min(targetSlide, totalVideoSlides - 1));
          setCurrentVideoSlide(clampedSlide);
          return;
        }

        vel *= friction;
        const currentTransform = parseInt(videoSlider.style.transform.replace(/[^0-9-]/g, '') || '0');
        const newTransform = currentTransform + vel;
        videoSlider.style.transform = `translateX(${newTransform}px)`;

        animationId = requestAnimationFrame(animate);
      };

      if (Math.abs(vel) > 0.1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    const getClientX = (e: MouseEvent | TouchEvent) => {
      return 'touches' in e ? e.touches[0].clientX : e.clientX;
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      stopAnimation();
      isDragging = true;
      hasMoved = false;
      velocity = 0;

      const clientX = getClientX(e);
      startX = clientX;
      lastX = clientX;
      scrollLeft = parseInt(videoSlider.style.transform.replace(/[^0-9-]/g, '') || '0');
      lastTime = performance.now();

      videoSlider.style.cursor = 'grabbing';
      videoSlider.style.transition = 'none';
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const clientX = getClientX(e);
      const now = performance.now();
      const deltaTime = Math.max(now - lastTime, 1);
      const deltaX = clientX - lastX;

      if (Math.abs(clientX - startX) > 3) {
        hasMoved = true;
        if (e.cancelable) {
          e.preventDefault();
        }
      }

      velocity = (deltaX / deltaTime) * 10;
      lastX = clientX;
      lastTime = now;

      const walk = clientX - startX;
      const newTransform = scrollLeft + walk;
      const maxTransform = -(videoSlider.offsetWidth * (totalVideoSlides - 1));
      const clampedTransform = Math.max(maxTransform, Math.min(0, newTransform));

      videoSlider.style.transform = `translateX(${clampedTransform}px)`;
    };

    const handleEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      videoSlider.style.cursor = 'grab';

      if (hasMoved) {
        applyMomentum();
      }
    };

    videoSlider.addEventListener('mousedown', handleStart);
    videoSlider.addEventListener('touchstart', handleStart, { passive: true });

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: false });

    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);

    videoSlider.addEventListener('mouseleave', handleEnd);

    videoSlider.style.cursor = 'grab';

    return () => {
      stopAnimation();
      videoSlider.removeEventListener('mousedown', handleStart);
      videoSlider.removeEventListener('touchstart', handleStart);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
      videoSlider.removeEventListener('mouseleave', handleEnd);
    };
  }, []);

  if (!model) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#060606', color: '#f0ebe3' }}>
        <div>Loading...</div>
      </div>
    );
  }

  const totalSlides = 4;

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const totalVideoSlides = 5;

  const handlePrevVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev - 1 + totalVideoSlides) % totalVideoSlides);
  };

  const handleNextVideoSlide = () => {
    setCurrentVideoSlide((prev) => (prev + 1) % totalVideoSlides);
  };

  const goToVideoSlide = (index: number) => {
    setCurrentVideoSlide(index);
  };

  const getOtherModels = () => {
    if (!city) return [];
    const allModels = Object.values(cityModels[city] || {});
    return allModels.filter(m => m.name !== model?.name).slice(0, 6);
  };

  const otherModels = getOtherModels();

  const scrollToCity = (cityId: string) => {
    window.location.href = `/#${cityId}`;
  };

  return (
    <div style={{ background: '#060606', color: '#f0ebe3', minHeight: '100vh' }}>
      <nav className="profile-nav">
        <a href="/" className="profile-logo">Lux<span>Date</span></a>

        <div className="profile-nav-cities">
          <button className="profile-city-pill" onClick={() => scrollToCity('saigon')}>
            Sài Gòn
          </button>
          <button className="profile-city-pill" onClick={() => scrollToCity('hanoi')}>
            Hà Nội
          </button>
          <button className="profile-city-pill" onClick={() => scrollToCity('danang')}>
            Đà Nẵng
          </button>
          <button className="profile-city-pill" onClick={() => scrollToCity('nhatrang')}>
            Nha Trang
          </button>
        </div>

        <div className="profile-nav-right">
          <a href="tel:0776943965" className="profile-nav-phone">
            ☎ 0776 943 965
          </a>
          <button
            className="profile-nav-cta"
            onClick={() => window.open('https://t.me/hoahong8388', '_blank')}
          >
            Đặt lịch
          </button>
        </div>
      </nav>

      <section className="profile-hero">
        <div className="profile-gallery-wrap">
          <div className="profile-gallery-main">
            <div className="profile-gallery-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {model?.gallery && model.gallery.length > 0 ? (
                model.gallery.map((image, index) => (
                  <div key={index} className="profile-gallery-slide">
                    <img
                      src={image}
                      alt={`${model.name} - Photo ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                ))
              ) : (
                [1, 2, 3, 4].map((num) => (
                  <div key={num} className="profile-gallery-slide">
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(135deg, #1c${String(num * 5).padStart(2, '0')}10, #0d0d0d)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '5rem',
                        color: 'rgba(201, 169, 110, 0.12)'
                      }}>
                        {String(num).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            <button className="profile-gallery-btn profile-gallery-prev" onClick={handlePrevSlide}>
              <ChevronLeft size={18} />
            </button>
            <button className="profile-gallery-btn profile-gallery-next" onClick={handleNextSlide}>
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="profile-gallery-dots">
            {(model?.gallery && model.gallery.length > 0 ? model.gallery : [1, 2, 3, 4]).map((image, index) => (
              <div
                key={index}
                className={`profile-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                style={{
                  backgroundImage: typeof image === 'string' ? `url(${image})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            ))}
          </div>

          <div className="profile-photo-count">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </div>
        </div>

        <div className="profile-info-panel">
          <div className="profile-model-tag">
            {model.vip ? 'PREMIUM MODEL' : 'MODEL'} · {model.city.toUpperCase()}
          </div>

          <h1 className="profile-model-name">
            {model.name.split(' ')[0]} <em>{model.name.split(' ')[1]}</em>
          </h1>
          <p className="profile-model-age">{model.age} tuổi · {model.district}</p>

          <p className="profile-model-bio">{model.bio}</p>

          <div className="profile-stats-grid">
            <div className="profile-stat-cell">
              <span className="profile-stat-label">CHIỀU CAO</span>
              <span className="profile-stat-value">{model.height} cm</span>
            </div>
            <div className="profile-stat-cell">
              <span className="profile-stat-label">CÂN NẶNG</span>
              <span className="profile-stat-value">{model.weight} kg</span>
            </div>
            <div className="profile-stat-cell">
              <span className="profile-stat-label">SỐ ĐO</span>
              <span className="profile-stat-value">{model.measurements}</span>
            </div>
            <div className="profile-stat-cell profile-stat-highlight">
              <span className="profile-stat-label">GIÁ / BUỔI</span>
              <span className="profile-stat-value">{model.price}.000.000₫</span>
            </div>
            <div className="profile-stat-cell">
              <span className="profile-stat-label">GIỜ LÀM VIỆC</span>
              <span className="profile-stat-value">{model.hours}</span>
            </div>
            <div className="profile-stat-cell">
              <span className="profile-stat-label">LƯỢT XEM</span>
              <span className="profile-stat-value">{model.views}k</span>
            </div>
          </div>

          <div className="profile-services-wrap">
            <div className="profile-services-label">DỊCH VỤ</div>
            <div className="profile-services-list">
              {model.tags.map((tag, index) => (
                <span key={index} className="profile-service-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="profile-cta-row">
            <button className="profile-btn-primary">Đặt lịch ngay</button>
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="profile-section-header">
          <h2 className="profile-section-title">Video <em>Giới thiệu</em></h2>
          <div className="profile-section-line" />
        </div>

        <div className="profile-video-slider-wrap">
          <div
            id="video-slider"
            className="profile-video-slider"
            style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
          >
            {[
              { label: 'Video chính', duration: '2:34' },
              { label: 'Cuộc sống hàng ngày', duration: '1:18' },
              { label: 'Buổi tối lãng mạn', duration: '0:58' },
              { label: 'Vlog du lịch', duration: '3:12' },
              { label: 'Khoảnh khắc đặc biệt', duration: '1:45' }
            ].map((video, idx) => (
              <div key={idx} className="profile-video-slide">
                <div className="profile-video-placeholder-16-9">
                  <div className="profile-video-play">&#9654;</div>
                  <span className="profile-video-label">{video.label}</span>
                </div>
                <div className="profile-video-duration">{video.duration}</div>
              </div>
            ))}
          </div>

          <button className="profile-video-btn profile-video-prev" onClick={handlePrevVideoSlide}>
            <ChevronLeft size={20} />
          </button>
          <button className="profile-video-btn profile-video-next" onClick={handleNextVideoSlide}>
            <ChevronRight size={20} />
          </button>

          <div className="profile-video-dots">
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className={`profile-video-dot ${currentVideoSlide === index ? 'active' : ''}`}
                onClick={() => goToVideoSlide(index)}
              />
            ))}
          </div>

          <div className="profile-video-count">
            {String(currentVideoSlide + 1).padStart(2, '0')} / {String(totalVideoSlides).padStart(2, '0')}
          </div>
        </div>
      </section>

      <section className="profile-more-section">
        <div className="profile-section-header">
          <h2 className="profile-section-title">Hẹn <em>thêm</em></h2>
          <div className="profile-section-line" />
        </div>

        <div className="profile-more-grid">
          {otherModels.map((otherModel, index) => (
            <div
              key={index}
              className="profile-more-card"
              onClick={() => window.location.href = `/profile?city=${city}&name=${encodeURIComponent(otherModel.name)}`}
            >
              <div className="profile-more-img">
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, #${String(15 + index * 3).padStart(2, '0')}${String(15 + index * 2).padStart(2, '0')}${String(10 + index).padStart(2, '0')}, #0d0d0d)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '3rem',
                    color: 'rgba(201, 169, 110, 0.12)'
                  }}>
                    {String(index + 2).padStart(2, '0')}
                  </span>
                </div>
                {otherModel.vip && <div className="profile-more-vip">VIP</div>}
                <div className="profile-more-gradient"></div>
              </div>
              <div className="profile-more-info">
                <h3 className="profile-more-name">{otherModel.name}</h3>
                <p className="profile-more-age">{otherModel.age} tuổi · {otherModel.district}</p>
                <div className="profile-more-stats">
                  <div className="profile-more-stat">
                    <span className="pms-label">Giá</span>
                    <span className="pms-value">{otherModel.price}tr</span>
                  </div>
                  <div className="profile-more-stat">
                    <span className="pms-label">Lượt xem</span>
                    <span className="pms-value">{otherModel.views}k</span>
                  </div>
                </div>
                <div className="profile-more-tags">
                  {otherModel.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="profile-more-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="profile-more-cta">
          <button className="profile-btn-view-all" onClick={() => window.location.href = '/'}>
            Xem tất cả {model?.city}
          </button>
        </div>
      </section>

      <footer className="profile-footer">
        <div className="profile-footer-logo">Lux<em>Date</em></div>
        <div className="profile-footer-text">© 2025 LuxDate · Premium Companion Services</div>
        <button className="profile-nav-cta">Liên hệ ngay</button>
      </footer>
    </div>
  );
}

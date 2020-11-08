const navConfig = {
  'Tiếp cận nghiên cứu': {
    category: 'Nền tảng nghiên cứu',
    url: 'https://home-sisi.netlify.app/docs/',
    description:
      'Cung cấp một cái nhìn tổng quan về các vấn đề chính trong nghiên cứu và đánh giá. Đây có lẽ là nơi tốt nhất để bạn bắt đầu tìm hiểu về nghiên cứu.',
    omitLandingPage: true
  },
  'Phương pháp nghiên cứu': {
    category: 'Trường phái nghiên cứu',
    shortName: 'React / JS',
    url: 'https://sisis-methods.netlify.app/docs/react/',
    description:
      "Giúp bạn hiểu sâu về bản chất nghiên cứu, gợi ý các phương pháp nghiên cứu (định tính, định lượng, hỗn hợp) phù hợp."
  },
  'Định lượng (Quantitative)': {
    category: 'Trường phái nghiên cứu',
    shortName: 'iOS',
    url: 'https://sisi-paradigm.netlify.app/docs/ios/',
    description:
      "Xem xét hiện tượng theo cách có thể đo lường được trên các đối tượng nghiên cứu, thường được áp dụng đối với các hiện tượng có thể được diễn tả/quy đổi bằng số"
  },
  'Định tính & hỗn hợp': {
    category: 'Trường phái nghiên cứu',
    shortName: 'Android',
    url: '/',
    description:
      "Hướng tiếp cận nhằm thăm dò, mô tả và giải thích dựa vào các phương tiện khảo sát kinh nghiệm, nhận thức, động cơ thúc đẩy, dự định, hành vi, thái độ. Chúng có thể hướng chúng ta đến việc xây dựng giả thuyết và các giải thích."
  },
  'SPSS': {
    category: 'Phương pháp phân tích',
    url: 'https://sisi-spss.netlify.app/docs/federation/',
    description:
      'Giúp bạn lựa chọn các phương thức thống kê phù hợp để phân tích dữ liệu, cũng như diễn giải và viết kết quả.'
  },
  'Mô hình SEM': {
    category: 'Phương pháp phân tích',
    url: 'https://sisi-sem.netlify.app/docs/apollo-server/',
    description: 'Tổng quan mô hình SEM (PLS, Warp, Composite-based), giúp bạn lựa chọn mô hình SEM phù hợp.'
  },
  'STATA': {
    category: 'STATA',
    url: 'https://sisi-stata.netlify.app/docs/studio/',
    description:
      'STATA đang được sử dụng rất nhiều vào phân tích dữ liệu (chuỗi thời gian, dữ liệu mảng, các mô hình kinh tế lượng tài chính)'
  }
};

const footerNavConfig = {
  Blog: {
    href: '/',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  Contribute: {
    href: '/'
  },
  'GraphQL Summit': {
    href: '/',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
};

module.exports = {
  siteName: 'Statswork.wiki',
  pageTitle: 'A handbook for beginners in research | Sổ tay dành cho người mới bắt đầu nghiên cứu',
  menuTitle: 'Research Gate Platform',
  gaTrackingId: '',
  algoliaApiKey: '',
  algoliaIndexName: '',
  baseUrl: '/',
  twitterHandle: '',
  spectrumHandle: '',
  youtubeUrl: '/',
  logoLink: '/',
  baseDir: 'docs',
  contentDir: 'source',
  navConfig,
  footerNavConfig,
  ffWidgetId: ''
};

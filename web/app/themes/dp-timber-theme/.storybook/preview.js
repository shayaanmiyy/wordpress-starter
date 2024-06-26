/** @type { import('@storybook/html').Preview } */
import '../components/style.scss';

import "../assets/vendor/bootstrap/css/bootstrap.scss";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.scss";
import "../assets/vendor/aos/aos.scss";
import "../assets/vendor/swiper/swiper-bundle.min.scss";
import "../assets/vendor/glightbox/css/glightbox.scss";
import "../assets/css/main.scss";

// Add viewports for our example device widths.
const deviceViewports = {
  phone: {
    name: 'Phone',
    styles: {
      width: '390px',
      height: '844px',
    },
  },
  phoneLarge: {
    name: 'Large Phone',
    styles: {
      width: '428px',
      height: '926px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  tabletLarge: {
    name: 'Large Tablet',
    styles: {
      width: '1024px',
      height: '1366px',
    },
  },
  desktop: {
    name: 'Desktop 1200',
    styles: {
      width: '1200px',
      height: '1024px',
    },
  },
  desktopWide: {
    name: 'Desktop 1440',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
  desktopUltraWide: {
    name: 'Desktop 1600',
    styles: {
      width: '1600px',
      height: '1024px',
    },
  },
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages', '*'],
      },
    },
    viewport: {
      viewports: deviceViewports,
    },
  },
};

export default preview;
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      zIndex: {
        max: '1000000000',
      },
      colors: {
        primary: '#29525a',
      },
      width: {
        content: 'calc(100% - 496px)',
      },
      height: {
        content: 'calc(100vh - 64px)',
        mcontent: 'calc(100vh - 114px)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateY(-10px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
        slideshow: {
        '0%, 33%': { opacity: '1', backgroundImage: "url('/images/ngn_chii.jpg')" },
        '33%, 66%': { opacity: '1', backgroundImage: "url('/images/ngn_hachiware.jpg')" },
        '66%, 100%': { opacity: '1', backgroundImage: "url('/images/ngn_usagi.jpg')" },
        '100%':{ opacity: '1', backgroundImage: "url('/images/ngn_chii.jpg')" },
        },
        moveUpDown: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
          '100%': { transform: 'translateY(0)' },
        },


      },
      animation: {
        slideshow: 'slideshow 12s infinite',
        moveUpDown:'moveUpDown 3s infinite',

      },
    },
  },
  plugins: [],


}
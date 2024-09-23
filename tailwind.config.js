const { transform } = require("next/dist/build/swc");

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
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateY(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
        strech: {
          '0%, 100%':{transform:'translateY(0)' ,transformOrigin: 'bottom '},
          '50%':{transform:'scaleY(1.03) ', transformOrigin: 'bottom'},
        },
        walk: {
          '0%':{transform:'translateY(-12%) translateX(40%)'},
          '10%':{transform:'translateY(0) translateX(-50%)'},
          '20%': {transform: 'translateY(-15%) translateX(-160%)' },
          '30%':{transform:'translateY(0) translateX(-240%)'},
          '40%': {transform: 'translateY(-15%) translateX(-320%)' },
          '50%': {transform: 'translateY(0) translateX(-400%)' },
          '65%': {transform: 'translateY(-15%) translateX(-480%)' },
          '75%': {transform: 'translateY(0) translateX(-560%)' },
          '85%': {transform: 'translateY(-15%) translateX(-640%)' },
          '100%': {transform: 'translateY(0) translateX(-720%)' },
        }

      },
      animation: {
        slideshow: 'slideshow 12s infinite',
        moveUpDown:'moveUpDown 3s infinite',
        shake: 'shake 0.5s ease-in-out infinite',
        strech:'strech 1.5s ease-in-out infinite',
        walk:'walk 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],


}
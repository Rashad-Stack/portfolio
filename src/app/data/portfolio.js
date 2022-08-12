export const PORTFOLIO = {
  title: 'Portfolio',
  subtitle: 'My',
  typeWriter: ['Best Works', 'Latest Projects'],
  github: 'https://github.com/Rashad-Stack/',
  types: ['All', 'Website', 'Mobile App', 'UI/UX Design', 'Graphic Design'],
  projects: [
    {
      title: 'Crypto Currency Landing Page',
      description:
        'Cannacoin($CCN) is an alternative, instant payment system for the cannabis industry. It was first deployed on March 28, 2014 as a solution to the "cash only" predicament set on growers, dispensaries, and consumers alike through Federal regulation as well as a response to the Global Financial Crisis of 2008. It was the brainchild of the pseudonymous Subtoshi, the founder of the popular, but now defunct, "NWGT.org" (Northwest Green Thumb) online medical cannabis forum based in the Pacific Northwest. Cannacoin Prime picks up where Cannacoin Classic left off. It is a smart contract based token and is intended for use within the independent, medical, and recreational cannabis communities as a medium of exchange, a unit of account, and a store of value for cannabis and cannabis related products and services, worldwide',
      video: null,
      images: {
        default: '/Asset/portfolio/cannacoin-org.png',
        variants: [
          '/Asset/portfolio/cannacoin-org.png',
          '/Asset/portfolio/cannacoin-org.png',
        ],
      },
      link: 'https://www.cannacoin.org/',
      type: 'Website',
      tags: ['HTML', 'CSS', 'Bootstrap,Javascript'],
      source: 'https://github.com/Rashad-Stack/cannacoin',
    },
    {
      title: 'Developer Portfolio',
      description: `ReactJS uses virtual DOM that makes the user experience better. It also makes the developer’s job less complex.
JSX is used in ReactJS which is very simple and easy to learn. 
There is no need for separate files for logic and markup in ReactJS.
ReactJS is an open-source library that is maintained by Facebook. It is a constantly developing library.
The one-data binding makes the code very stable.
ReactJS also provides a mobile solution that is known as React Native.
ReactJS is faster for rendering as compared to other web frameworks.
Conditional statements in ReactJS are very helpful.
It has a great developer’s toolkit.`,
      video: null,
      images: {
        default: '/Asset/portfolio/developer-portfolio.png',
        variants: [
          '/Asset/portfolio/developer-portfolio.png',
          '/Asset/portfolio/developer-portfolio.png',
        ],
      },
      link: 'https://devware-react-portfolio.vercel.app/',
      type: 'Website',
      tags: ['React Js', 'Tailwind css'],
      source: 'https://github.com/ksdevware/dev-portfolio-react',
    },
  ],
};

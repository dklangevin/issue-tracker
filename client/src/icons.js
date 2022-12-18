export const Logo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
    <rect width={100} height={100} rx={20} fill="#22aaa1" />
    <path fill="#fff" d="M41.09 81.5v-63h17.82v63H41.09Z" />
  </svg>
);

export const DownArrow = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z"
    />
  </svg>
);

export const Close = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"
    />
  </svg>
);
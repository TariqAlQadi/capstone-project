const paths = {
  bookmarked: {
    path: "M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z",
    viewbox: "0 0 24 24",
  },

  notBookmarked: {
    path: "M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z",
    viewbox: "0 0 24 24",
  },

  list: {
    path: "M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z",
    viewbox: "0 0 24 24",
  },

  home: {
    path: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",
    viewbox: "0 0 24 24",
  },

  spades: {
    path: "M12,2C9,7 4,9 4,14C4,16 6,18 8,18C9,18 10,18 11,17C11,17 11.32,19 9,22H15C13,19 13,17 13,17C14,18 15,18 16,18C18,18 20,16 20,14C20,9 15,7 12,2Z",
    viewbox: "0 0 24 24",
  },
};

export default function SVGIcon({ variant, width, color }) {
  return (
    <svg viewBox={paths[variant].viewbox} width={width} fill={color}>
      <title>{variant}</title>
      <path d={paths[variant].path} />
    </svg>
  );
}

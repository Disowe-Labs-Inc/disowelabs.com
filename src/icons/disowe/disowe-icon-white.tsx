import clsx from "clsx";

interface DisoweIconProps {
  size?: number;
  color?: "white" | "blue" | "black";
}

const DisoweIconWhite = ({ size, color }: DisoweIconProps) => {

  const colors = clsx({
    "white": color === "white",
    "black": color === "black",
    "#284CF2": color === "blue"
  })

  return (
    <svg
      width={size ? size : 116}
      height="125"
      viewBox="0 0 116 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M98.7205 2H5.31507C3.48421 2 2 3.48421 2 5.31507V47.8479C2 50.2599 4.49378 51.8644 6.68889 50.8649L100.094 8.33207C103.338 6.85512 102.284 2 98.7205 2Z"
        fill={colors}
        stroke={colors}
        stroke-width="3.31507"
      />
      <path
        d="M114 119.685V20.9096C114 17.2326 108.906 16.2896 107.59 19.723L69.7256 118.498C68.8935 120.669 70.4962 123 72.8211 123H110.685C112.516 123 114 121.516 114 119.685Z"
        fill={colors}
        stroke={colors}
        stroke-width="3.31507"
      />
      <path
        d="M4 99.0472L4.00002 119.685C4.00002 121.516 5.48423 123 7.31509 123H54.9954C58.5938 123 59.6146 118.072 56.3123 116.643L8.63189 96.0048C6.44306 95.0574 4 96.6621 4 99.0472Z"
        fill={colors}
        stroke={colors}
        stroke-width="3.31507"
      />
      <path
        d="M16.4219 58.0233L15.6533 58.2205C8.79535 59.9801 4 66.1612 4 73.2413C4 80.7361 9.36028 87.1584 16.7344 88.4986L17.5151 88.6405C27.1404 90.3898 36 82.9952 36 73.2123C36 62.9707 26.3422 55.478 16.4219 58.0233Z"
        fill={colors}
        stroke={colors}
        stroke-width="0.956522"
      />
    </svg>
  );
};

export default DisoweIconWhite;

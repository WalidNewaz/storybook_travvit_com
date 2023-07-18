import React, { useMemo } from 'react';
import type { StyleType } from '../../types';

export type LogoSizeType = 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'full';

interface LogoProps {
  /**
   * Custom style classes for the container
   * @default ''
   * */
  size?: LogoSizeType;
  /**
   * Custom style classes for the container
   * @default ''
   */
  containerClasses?: string;
  /**
   * Custom style for the container
   * @default {}
   * */
  containerStyle?: StyleType;
  /**
   * Custom style classes for the image
   * @default ''
   * */
  imageClasses?: string;
  /**
   * Custom style for the image
   * @default {}
   * */
  imageStyle?: StyleType;
}

interface HeightWidth {
  height: string;
  width: string;
}

const dimensions: Record<string, HeightWidth> = {
  xs: {
    height: '32px',
    width: '32px',
  },
  small: {
    height: '48px',
    width: '48px',
  },
  medium: {
    height: '96px',
    width: '96px',
  },
  large: {
    height: '144px',
    width: '144px',
  },
  xl: {
    height: '192px',
    width: '192px',
  },
};

const getDimensions = (size: string) => dimensions[size];

const CONTAINER_CLASSES = `
  overflow-hidden
  `;

export const TravvitLogo: React.FC<LogoProps> = ({
  size = 'small',
  containerClasses = '',
  containerStyle = {},
  imageClasses = '',
  imageStyle = {},
}) => {
  const computedDimensions = useMemo(() => {
    const dimensions = getDimensions(size);
    return dimensions;
  }, [size]);

  return (
    <div
      className={`${CONTAINER_CLASSES} ${containerClasses}`}
      style={containerStyle}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="200 0 500 880"
        {...computedDimensions}
        className={imageClasses}
        style={{
          shapeRendering: 'geometricPrecision',
          textRendering: 'geometricPrecision',
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          ...imageStyle,
        }}
      >
        <g>
          <path
            style={{ opacity: 0.992 }}
            fill="#fe9600"
            d="M 430.5,6.5 C 552.448,2.22083 647.281,50.2208 715,150.5C 749.279,205.614 764.445,265.614 760.5,330.5C 736.194,313.361 712.027,296.027 688,278.5C 672.281,196.827 627.447,137.327 553.5,100C 482.386,68.6571 412.052,70.3238 342.5,105C 279.549,139.977 239.049,192.477 221,262.5C 195.667,281.833 170.333,301.167 145,320.5C 144.581,216.849 184.748,133.016 265.5,69C 314.499,32.4979 369.499,11.6645 430.5,6.5 Z"
          />
        </g>
        <g>
          <path
            style={{ opacity: 0.995 }}
            fill="#b6660e"
            d="M 454.5,190.5 C 497.276,229.439 539.943,268.605 582.5,308C 584.471,307.066 586.304,305.566 588,303.5C 596.761,292.316 605.761,281.316 615,270.5C 643.11,289.611 670.943,309.111 698.5,329C 623.869,341.459 550.203,358.126 477.5,379C 438.78,389.864 401.78,404.864 366.5,424C 355.072,431.096 345.239,439.929 337,450.5C 332.333,456.833 332.333,463.167 337,469.5C 344.561,478.032 353.727,484.199 364.5,488C 386.483,496.08 408.816,503.08 431.5,509C 439.325,511.608 446.991,514.608 454.5,518C 465.005,523.492 466.005,530.158 457.5,538C 438.839,547.889 419.172,555.222 398.5,560C 349.33,572.501 299.663,582.168 249.5,589C 217.205,536.329 189.705,481.162 167,423.5C 159.132,403.353 153.465,382.687 150,361.5C 207.41,317.545 264.91,273.712 322.5,230C 340.432,241.219 357.932,253.385 375,266.5C 401.699,241.3 428.199,215.967 454.5,190.5 Z"
          />
        </g>
        <g>
          <path
            style={{ opacity: 0.999 }}
            fill="#35b5e8"
            d="M 705.5,336.5 C 707.989,336.298 710.323,336.798 712.5,338C 725.326,347.247 738.326,356.247 751.5,365C 753.122,366.295 754.455,367.795 755.5,369.5C 745.273,409.95 731.106,448.95 713,486.5C 679.206,554.793 640.873,620.126 598,682.5C 552.583,748.652 504.249,812.652 453,874.5C 412.751,825.924 374.418,775.924 338,724.5C 335.733,721.299 334.066,717.966 333,714.5C 406.619,687.108 478.119,654.942 547.5,618C 569.08,606.045 589.08,591.878 607.5,575.5C 614.459,569.041 619.626,561.374 623,552.5C 624.571,542.385 623.238,532.718 619,523.5C 608.815,509.32 595.648,498.82 579.5,492C 570.246,488.137 560.912,484.471 551.5,481C 521.975,472.602 492.641,463.602 463.5,454C 456.21,451.442 450.043,447.276 445,441.5C 443.083,433.471 445.583,426.971 452.5,422C 472.487,409.007 493.821,398.674 516.5,391C 578.696,369.652 641.696,351.485 705.5,336.5 Z"
          />
        </g>
      </svg>
    </div>
  );
};

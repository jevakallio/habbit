import React, { createContext } from "react";

const initialState = { known: false, x: 0, y: 0 };
const PositionContext = createContext(initialState);

/**
 * The world as the bird sees it. Reports the current mouse
 * pointer location.
 */
export class BirdsWorld extends React.Component {
  state = initialState;

  componentDidMount() {
    document.addEventListener("mousemove", e => {
      const x =
        e.pageX ||
        e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
      const y =
        e.pageY ||
        e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;

      this.setState({ known: true, x, y });
    });
  }

  render() {
    return (
      <PositionContext.Provider value={this.state}>
        {this.props.children}
      </PositionContext.Provider>
    );
  }
}

/**
 * The bird eye itself. Calculates distance and angle
 * from the mouse cursor and renders a SVG bird's eye that
 * always follows the mouse cursor
 */
export class BirdsEye extends React.Component {
  static contextType = PositionContext;

  eye = React.createRef();

  calculateTransform() {
    const { x, y, known } = this.context;
    const eyeNode = this.eye.current;

    if (!known || !eyeNode) {
      return { rotation: 0, distance: 0 };
    }

    const eye = eyeNode.getBoundingClientRect();
    const eyeX = eye.left + eye.width / 2;
    const eyeY = eye.top + eye.height / 2;

    const distance = Math.sqrt(
      Math.pow(Math.abs(eyeX - x), 2) + Math.pow(Math.abs(eyeY - y), 2)
    );

    const rad = Math.atan2(x - eyeX, y - eyeY);
    const rotation = rad * (180 / Math.PI) * -1 + 180;

    return {
      rotation,
      distance
    };
  }

  render() {
    const transform = this.calculateTransform();

    return (
      <svg
        ref={this.eye}
        viewBox="0 0 100 100"
        width={this.props.size}
        height={this.props.size}
      >
        <defs>
          <clipPath id="eyeball">
            <circle cx={50} cy={50} r={50} />
          </clipPath>
        </defs>
        <g
          fill="none"
          fillRule="evenodd"
          transform={`rotate(${transform.rotation} 50 50)`}
        >
          <circle fill="#FFF" cx={50} cy={50} r={50} />
          <circle
            fill="#000"
            cx={50}
            cy={40}
            r={35}
            transform={`scale(${1 - transform.distance / 3000})`}
            clipPath="url(#eyeball)"
          />
        </g>
      </svg>
    );
  }
}

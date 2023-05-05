"use strict";
exports.id = 587;
exports.ids = [587];
exports.modules = {

/***/ 7587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonColored)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5372);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



const coloredShades = _index_js__WEBPACK_IMPORTED_MODULE_2__.C`
    :after {
        background-color: ${(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.g)("light", 90)};
    }

    :hover {
        :after {
            background-color: ${(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.g)("light", 70)};
        }
    }

    :active {
        :after {
            background-color: ${(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.g)("light", 50)};
        }
    }
`;
const coloredRed = _index_js__WEBPACK_IMPORTED_MODULE_2__.C`
    background-color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.red40};
    border-color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.red40};
    color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.red40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.navy30};
    }

    svg {
        fill: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.red40};
    }

    ${coloredShades}
`;
const coloredGreen = _index_js__WEBPACK_IMPORTED_MODULE_2__.C`
    background-color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.mint40};
    border-color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.mint40};
    color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.mint40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.navy30};
    }

    svg {
        fill: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.mint40};
    }

    ${coloredShades}
`;
const coloredBlue = _index_js__WEBPACK_IMPORTED_MODULE_2__.C`
    background-color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.navy40};
    border-color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.navy40};
    color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.navy40};

    :focus {
        box-shadow: 0px 0px 0px 2px ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.navy30};
    }

    svg {
        fill: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.navy40};
    }

    ${coloredShades}
`;
const coloredYellow = _index_js__WEBPACK_IMPORTED_MODULE_2__.C`
    background-color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.yellow50};
    border-color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.yellow50};
    color: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.yellow50};

    :focus {
        box-shadow: 0px 0px 0px 2px ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.navy30};
    }

    svg {
        fill: ${_index_js__WEBPACK_IMPORTED_MODULE_2__.c.yellow50};
    }

    ${coloredShades}
`;
const getColored = (color2) => {
  switch (color2) {
    case "red":
      return coloredRed;
    case "green":
      return coloredGreen;
    case "blue":
      return coloredBlue;
    case "yellow":
      return coloredYellow;
    default:
      return;
  }
};
const ButtonColoredStyled$1 = (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.s)(_index_js__WEBPACK_IMPORTED_MODULE_2__.B)`
    :after {
        background-color: ${(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.g)("dark", 0)};
        content: '';
        display: block;
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
        width: 100%;
        z-index: 0;
        border-radius: 10px;
    }

    ${({
  color: color2
}) => color2 && getColored(color2)}
`;
var styles = {
  ButtonColoredStyled: ButtonColoredStyled$1
};
const {
  ButtonColoredStyled
} = styles;
const ButtonColored = ({
  color: color2,
  ...props
}) => /* @__PURE__ */ (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.j)(ButtonColoredStyled, {
  color: color2,
  ...props
});



/***/ })

};
;
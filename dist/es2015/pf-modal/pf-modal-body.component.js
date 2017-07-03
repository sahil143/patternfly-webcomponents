'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PfModalBody = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pfUtils = require('pf-utils.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * <b>&lt;pf-modal-body&gt;</b> element for Patternfly Web Components
 *
 * @example {@lang xml}
 * <pf-modal-body>custom content of mdoal-body</pf-modal-body>
 */

var PfModalBody = exports.PfModalBody = function (_HTMLElement) {
  _inherits(PfModalBody, _HTMLElement);

  /*
   * An instance of the element is created or upgraded
   */
  function PfModalBody() {
    _classCallCheck(this, PfModalBody);

    return _possibleConstructorReturn(this, (PfModalBody.__proto__ || Object.getPrototypeOf(PfModalBody)).call(this));
  }

  /*
   * Called every time the element is inserted into the DOM
   */


  _createClass(PfModalBody, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _pfUtils.pfUtil.addClass(this, 'modal-body');
    }
  }]);

  return PfModalBody;
}(HTMLElement);

window.customElements.define('pf-modal-body', PfModalBody);
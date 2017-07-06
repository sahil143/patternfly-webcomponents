'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PfPopover = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pfPopover = require('pf-popover.template');

var _pfPopover2 = _interopRequireDefault(_pfPopover);

var _pfUtils = require('pf-utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * <b>&lt;pf-popover&gt;</b> element for Patternfly Web Components
 *
 */

var PfPopover = exports.PfPopover = function (_HTMLElement) {
  _inherits(PfPopover, _HTMLElement);

  _createClass(PfPopover, [{
    key: 'init',


    /**
     * Reinitializes popover component with attribute values and resets content
     */
    value: function init() {
      var _this2 = this;

      this.element = this;
      this.content = this._innerHtml || this.element.innerHTML;
      this.popover = null;
      this._targetSelector = this.getAttribute('targetSelector');
      this._target = this._targetSelector ? document.querySelector(this._targetSelector) : this;
      this._animation = this.getAttribute('animation') ? this.getAttribute('animation') : 'fade';
      this._popoverTitle = this.getAttribute('popoverTitle') ? this.getAttribute('popoverTitle') : '';
      this._close = this.getAttribute('close') ? this.getAttribute('close') : false;
      this._placement = this.getAttribute('placement') ? this.getAttribute('placement') : 'right';
      this._delay = parseInt(this.getAttribute('delay')) || 100;
      this._tipPositions = /\b(top|bottom|left|top)+/;
      this._duration = _pfUtils.pfUtil.isMSIE && _pfUtils.pfUtil.isMSIE < 10 ? 0 : parseInt(this.getAttribute('duration')) || 150;
      this._containerSelector = this.getAttribute('containerSelector');
      this._container = this._containerSelector ? document.querySelector(this._containerSelector) : document.body;

      if (this._target) {
        //create open event listeners
        this._target.addEventListener('click', function (e) {
          if (document.querySelector('.popover')) {
            _this2.close(e);
          } else {
            _this2.open(e);
          }
        }, false);
      }

      if (this._close && document.querySelector('.popover')) {

        document.querySelector('.popover > .popover-title > .close').addEventListener('click', function (e) {
          _this2.close(e);
        }, false);
      }
    }

    /**
     * Called when an instance was inserted into the document
     */

  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this3 = this;

      this.init();

      //handleContentChanged
      this.element.addEventListener('handleContentChanged', function (e) {
        _this3.init();
      }, false);
    }

    /*
     * Only attributes listed in the observedAttributes property will receive this callback
     */

  }, {
    key: 'attributeChangedCallback',


    /**
     * Called when element's attribute value has changed
     *
     * @param {string} attrName The attribute name that has changed
     * @param {string} oldValue The old attribute value
     * @param {string} newValue The new attribute value
     */
    value: function attributeChangedCallback(attrName, oldValue, newValue) {
      this.init();
    }

    /**
     * An instance of the element is created or upgraded
     */

  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['animation', 'targetSelector', 'placement', 'delay', 'duration', 'containerSelector'];
    }
  }]);

  function PfPopover() {
    _classCallCheck(this, PfPopover);

    var _this = _possibleConstructorReturn(this, (PfPopover.__proto__ || Object.getPrototypeOf(PfPopover)).call(this));

    _this._template = document.createElement('template');
    _this._template.innerHTML = _pfPopover2.default;
    _this._timer = 0;
    return _this;
  }

  /**
   * Sets popover the inner HTML
   * @param {string} html string
   */


  _createClass(PfPopover, [{
    key: 'setInnerHtml',
    value: function setInnerHtml(html) {
      this._innerHtml = html;
      this.element.dispatchEvent(new CustomEvent('handleContentChanged', {}));
    }

    /**
     * Get the animation class
     *
     * @returns {string} The animation class
     */

  }, {
    key: 'open',


    /**
       * The popover open method
       */
    value: function open() {
      var _this4 = this;

      clearTimeout(this._timer);
      this._timer = setTimeout(function () {
        if (_this4.popover === null) {
          _this4._createPopover();
          _this4._stylePopover();
          _this4._showPopover();
          //notify frameworks
          _this4.dispatchEvent(new CustomEvent('popoverOpened', {}));
        }
      }, 20);
    }

    /**
     * The popover close method
     */

  }, {
    key: 'close',
    value: function close() {
      var _this5 = this;

      clearTimeout(this._timer);
      this._timer = setTimeout(function () {
        if (_this5.popover && _this5.popover !== null) {
          _pfUtils.pfUtil.removeClass(_this5.popover, 'in');
          setTimeout(function () {
            _this5._removePopover();
            //notify frameworks
            _this5.dispatchEvent(new CustomEvent('popoverClosed', {}));
          }, _this5._duration);
        }
      }, this._delay + this._duration);
    }

    /**
     * Removes the popover
     * @private
     */

  }, {
    key: '_removePopover',
    value: function _removePopover() {
      this.popover && this._container.removeChild(this.popover);
      this.popover = null;
    }

    /**
     * Creates the popover
     * @private
     */

  }, {
    key: '_createPopover',
    value: function _createPopover() {
      var clone = document.importNode(this._template.content, true);
      var popoverInner = clone.querySelector('.popover-content');
      var popovertitle = clone.querySelector('.popover-title');
      var closeButton = document.createElement('template');
      closeButton.innerHTML = '<button type="button" class="close"><span class="pficon pficon-close"></span></button>';

      //set popover title
      popovertitle.innerHTML = this._popoverTitle;

      if (this._close) {
        popovertitle.appendChild(closeButton.content);
      }

      //set popover content
      popoverInner.innerHTML = this.content;

      //append to the container
      this._container.appendChild(clone);

      //set reference to appended node
      var popovers = this._container.querySelectorAll('.popover');
      this.popover = popovers[popovers.length - 1];
      this.popover.setAttribute('class', 'popover ' + this._placement + ' ' + this._animation);
    }

    /**
     * Styles the popover based on placement attribute
     * @private
     */

  }, {
    key: '_stylePopover',
    value: function _stylePopover() {
      var rect = this._target.getBoundingClientRect(); //popover real dimensions

      var // link rect | window vertical and horizontal scroll
      scroll = _pfUtils.pfUtil.getScroll();

      var //link real dimensions
      linkDimensions = { w: rect.right - rect.left, h: rect.bottom - rect.top };

      var popoverDimensions = { w: this.popover.offsetWidth, h: this.popover.offsetHeight };

      //apply styling
      if (/top/.test(this._placement)) {
        //TOP
        this.popover.style.top = rect.top + scroll.y - popoverDimensions.h + 'px';
        this.popover.style.left = rect.left + scroll.x - popoverDimensions.w / 2 + linkDimensions.w / 2 + 'px';
      } else if (/bottom/.test(this._placement)) {
        //BOTTOM
        this.popover.style.top = rect.top + scroll.y + linkDimensions.h + 'px';
        this.popover.style.left = rect.left + scroll.x - popoverDimensions.w / 2 + linkDimensions.w / 2 + 'px';
      } else if (/left/.test(this._placement)) {
        //LEFT
        this.popover.style.top = rect.top + scroll.y - popoverDimensions.h / 2 + linkDimensions.h / 2 + 'px';
        this.popover.style.left = rect.left + scroll.x - popoverDimensions.w + 'px';
      } else if (/right/.test(this._placement)) {
        //RIGHT
        this.popover.style.top = rect.top + scroll.y - popoverDimensions.h / 2 + linkDimensions.h / 2 + 'px';
        this.popover.style.left = rect.left + scroll.x + linkDimensions.w + 'px';
      }
    }

    /**
     * Makes popover visible
     * @private
     */

  }, {
    key: '_showPopover',
    value: function _showPopover() {
      !/\bin/.test(this.popover.className) && _pfUtils.pfUtil.addClass(this.popover, 'in');
      this.popover.style.display = 'block';
    }
  }, {
    key: 'animation',
    get: function get() {
      return this._animation;
    }

    /**
     * Set animation class
     *
     * @param {string} value The animation class
     */
    ,
    set: function set(value) {
      if (this._animation !== value) {
        this._animation = value;
        this.setAttribute('animation', value);
      }
    }

    /**
     * Get the popover containerSelector
     *
     * @returns {string} The container element selector
     */

  }, {
    key: 'containerSelector',
    get: function get() {
      return this._containerSelector;
    }

    /**
     * Set the popover containerSelector
     *
     * @param {string} value The container element selector
     */
    ,
    set: function set(value) {
      if (this._containerSelector !== value) {
        this._containerSelector = value;
        this._container = document.querySelector(this._containerSelector);
        this.setAttribute('containerSelector', value);
      }
    }

    /**
     * Get the animation duration
     *
     * @returns {string} The animation duration
     */

  }, {
    key: 'duration',
    get: function get() {
      return this._duration;
    }

    /**
     * Set the animation duration
     *
     * @param {string} value The animation duration
     */
    ,
    set: function set(value) {
      if (this._duration !== value) {
        this._duration = value;
        this.setAttribute('duration', value);
      }
    }

    /**
     * Get the animation delay
     *
     * @returns {string} The animation delay
     */

  }, {
    key: 'delay',
    get: function get() {
      return this._duration;
    }

    /**
     * Set the animation delay
     *
     * @param {string} value The animation delay
     */
    ,
    set: function set(value) {
      if (this._delay !== value) {
        this._delay = value;
        this.setAttribute('delay', value);
      }
    }

    /**
     * Get the placement position
     *
     * @returns {string} The placement position left, top, bottom, right
     */

  }, {
    key: 'placement',
    get: function get() {
      return this._placement;
    }

    /**
     * Set placement position
     *
     * @param {string} value The placement position left, top, bottom, right
     */
    ,
    set: function set(value) {
      if (this._placement !== value) {
        this._placement = value;
        this.setAttribute('placement', value);
      }
    }

    /**
    * Get the targetSelector
    *
    * @returns {string} The target element selector
    */

  }, {
    key: 'targetSelector',
    get: function get() {
      return this._targetSelector;
    }

    /**
     * Set targetSelector
     *
     * @param {string} value The target element selector
     */
    ,
    set: function set(value) {
      if (this._targetSelector !== value) {
        this._targetSelector = value;
        this._target = document.querySelector(this._targetSelector);
        this.setAttribute('targetSelector', value);
      }
    }
  }]);

  return PfPopover;
}(HTMLElement);

window.customElements.define('pf-popover', PfPopover);
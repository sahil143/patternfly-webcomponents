'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 */

var PfDonutChart = function (_HTMLElement) {
  _inherits(PfDonutChart, _HTMLElement);

  _createClass(PfDonutChart, [{
    key: 'connectedCallback',


    /**
     *
     */
    value: function connectedCallback() {
      var data = JSON.parse(this.getAttribute('data').replace(/'/g, '"'));
      this._width = parseInt(this.getAttribute('width')) ? this.getAttribute('width') : null;
      this._height = parseInt(this.getAttribute('height')) ? this.getAttribute('height') : 171;
      this._legend = this.getAttribute('legend') ? JSON.parse(this.getAttribute('legend').replace(/'/g, '"')) : { show: false };
      this._targetSelector = this.getAttribute('target-selector');
      this._title = this.getAttribute('title') ? this.getAttribute('title') : '';
      this._showTooltip = this.getAttribute('show-tooltip') ? this.getAttribute('show-tooltip') : false;
      this.data(data);
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
    value: function attributeChangedCallback(attrName, oldValue, newValue) {}

    /*
     * An instance of the element is created or upgraded
     */

  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['width', 'height', 'legend', 'target-selector', 'title', 'data'];
    }
  }]);

  function PfDonutChart() {
    _classCallCheck(this, PfDonutChart);

    return _possibleConstructorReturn(this, (PfDonutChart.__proto__ || Object.getPrototypeOf(PfDonutChart)).call(this));
  }

  /**
   *
   */


  _createClass(PfDonutChart, [{
    key: 'data',


    /**
     *
     */
    value: function data(_data) {
      console.log(_data);
      switch (_data[0]) {
        case 'column':
          this.data = {
            columns: _data[1],
            type: 'donut'
          };
          break;

        case 'row':
          this.data = {
            rows: _data[1],
            type: 'donut'
          };
          break;

        case 'json':
          //To Do: find a way to get keys from user
          this.data = {
            json: _data[1],
            type: 'donut',
            keys: {
              value: ['data1', 'data2', 'data3']
            }
          };
          break;

        case 'url':
          if (/js/.test(_data[1])) {
            this.data = {
              url: _data[1],
              type: 'donut',
              mimeType: 'json'
            };
          } else {
            this.data = {
              url: _data[1],
              type: 'donut'
            };
          }
          break;
      }
      this._buildChart();
    }

    /**
     *
     */

  }, {
    key: 'prepareChart',
    value: function prepareChart() {
      return {
        bindto: this._targetSelector,
        data: this.data,
        donut: {
          title: this._title,
          label: {
            show: false
          },
          width: 11
        },
        color: {
          pattern: ['#d1d1d1', '#0088ce']
        },
        size: {
          width: this._width,
          height: this._height
        },
        legend: this._legend,
        tooltip: {
          show: this._showTooltip
        }
      };
    }

    /**
     *
     */

  }, {
    key: '_buildChart',
    value: function _buildChart() {
      this.donutChart = c3.generate(this.prepareChart());
    }

    /**
     *TO DO: test
     */

  }, {
    key: 'load',
    value: function load(obj) {
      this.donutChart.load(obj);
    }

    /**
     *TO DO: test
     */

  }, {
    key: 'unload',
    value: function unload(obj) {
      this.donutChart.unload(obj);
    }
  }, {
    key: 'width',
    get: function get() {
      return this._width;
    }

    /**
     *
     */
    ,
    set: function set(value) {
      if (this._width !== value) {
        this._width = value;
        this.setAttribute('width', value);
      }
    }

    /**
     *
     */

  }, {
    key: 'height',
    get: function get() {
      return this._height;
    }

    /**
     *
     */
    ,
    set: function set(value) {
      if (this._height !== value) {
        this._height = value;
        this.setAttribute('height', value);
      }
    }

    /**
     *
     */

  }, {
    key: 'legend',
    get: function get() {
      return this._legend;
    }

    /**
     *
     */
    ,
    set: function set(value) {
      this._legend = value;
      this._buildChart();
    }

    /**
     *
     */

  }, {
    key: 'title',
    get: function get() {
      return this._title;
    }

    /**
     *
     */
    ,
    set: function set(value) {
      if (this._title !== value) {
        this._title = value;
        this.setAttribute('title', value);
      }
    }

    /**
     *
     */

  }, {
    key: 'targetSelector',
    get: function get() {
      return this._targetSelector;
    }

    /**
     *
     */
    ,
    set: function set(value) {
      if (this._targetSelector !== value) {
        this._targetSelector = value;
        this.setAttribute('target-selector', value);
      }
    }
  }]);

  return PfDonutChart;
}(HTMLElement);

exports.PfDonutChart = PfDonutChart;


window.customElements.define('pf-donut-chart', PfDonutChart);
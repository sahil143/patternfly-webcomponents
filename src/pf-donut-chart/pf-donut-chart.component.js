/**
 *
 */

export class PfDonutChart extends HTMLElement {

  /**
   *
   */
  connectedCallback() {
    let data = JSON.parse(this.getAttribute('data').replace(/'/g, '"'));
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
  static get observedAttributes() {
    return ['width', 'height', 'legend', 'target-selector', 'title', 'data'];
  }

  /**
 * Called when element's attribute value has changed
 *
 * @param {string} attrName The attribute name that has changed
 * @param {string} oldValue The old attribute value
 * @param {string} newValue The new attribute value
 */
  attributeChangedCallback(attrName, oldValue, newValue) {

  }

  /*
   * An instance of the element is created or upgraded
   */
  constructor() {
    super();
  }

  /**
   *
   */
  get width() {
    return this._width;
  }

  /**
   *
   */
  set width(value) {
    if (this._width !== value) {
      this._width = value;
      this.setAttribute('width', value);
    }
  }

  /**
   *
   */
  get height() {
    return this._height;
  }

  /**
   *
   */
  set height(value) {
    if (this._height !== value) {
      this._height = value;
      this.setAttribute('height', value);
    }
  }

  /**
   *
   */
  get legend() {
    return this._legend;
  }

  /**
   *
   */
  set legend(value) {
    this._legend = value;
    this._buildChart();
  }

  /**
   *
   */
  get title() {
    return this._title;
  }

  /**
   *
   */
  set title(value) {
    if (this._title !== value) {
      this._title = value;
      this.setAttribute('title', value);
    }
  }

  /**
   *
   */
  get targetSelector() {
    return this._targetSelector;
  }

  /**
   *
   */
  set targetSelector(value) {
    if (this._targetSelector !== value) {
      this._targetSelector = value;
      this.setAttribute('target-selector', value);
    }
  }

  /**
   *
   */
  data(data) {
    console.log(data);
    switch (data[0]) {
      case 'column':
        this.data = {
          columns: data[1],
          type: 'donut'
        };
        break;

      case 'row':
        this.data = {
          rows: data[1],
          type: 'donut'
        };
        break;

      case 'json':
        //To Do: find a way to get keys from user
        this.data = {
          json: data[1],
          type: 'donut',
          keys: {
            value: ['data1', 'data2', 'data3']
          }
        };
        break;

      case 'url':
        if (/js/.test(data[1])) {
          this.data = {
            url: data[1],
            type: 'donut',
            mimeType: 'json'
          };
        } else {
          this.data = {
            url: data[1],
            type: 'donut',
          };
        }
        break;
    }
    this._buildChart();
  }

  /**
   *
   */
  prepareChart() {
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
        pattern: [
          '#d1d1d1',
          '#0088ce'
        ]
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
  _buildChart() {
    this.donutChart = c3.generate(this.prepareChart());
  }

  /**
   *TO DO: test
   */
  load(obj) {
    this.donutChart.load(obj);
  }

  /**
   *TO DO: test
   */
  unload(obj) {
    this.donutChart.unload(obj);
  }


}

window.customElements.define('pf-donut-chart', PfDonutChart);
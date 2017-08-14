/**
 *
 */

export class PfDonutChart extends HTMLElement {

  /**
   *
   */
  connectedCallback() {
    let data = JSON.parse(this.getAttribute('data').replace(/'/g, '"'));
    this._targetSelector = this.getAttribute('target-selector');
    this.data(data);
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
  _buildChart() {
    this.donutChart = c3.generate({
      bindto: this._targetSelector,
      data: this.data
    });
  }

  /**
   *
   */
  load(obj) {
    this.donutChart.load(obj);
  }

  /**
   *
   */
  unload(obj) {
    this.donutChart.unload(obj);
  }


}

window.customElements.define('pf-donut-chart', PfDonutChart);
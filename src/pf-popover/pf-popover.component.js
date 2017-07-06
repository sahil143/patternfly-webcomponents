import { default as tmpl } from 'pf-popover.template';
import { pfUtil } from 'pf-utils.js';

/**
 * <b>&lt;pf-popover&gt;</b> element for Patternfly Web Components
 *
 */

export class PfPopover extends HTMLElement {

  /**
   * Reinitializes popover component with attribute values and resets content
   */
  init() {
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
    this._duration = pfUtil.isMSIE && pfUtil.isMSIE < 10 ? 0 : (parseInt(this.getAttribute('duration')) || 150);
    this._containerSelector = this.getAttribute('containerSelector');
    this._container = this._containerSelector ? document.querySelector(this._containerSelector) : document.body;

    if (this._target) {
      //create open event listeners
      this._target.addEventListener('click', (e) => {
        if (document.querySelector('.popover')) {
          this.close(e);
        } else {
          this.open(e);
        }

      }, false);
    }

    if (this._close && document.querySelector('.popover')) {

      document.querySelector('.popover > .popover-title > .close').addEventListener('click', (e) => {
        this.close(e);
      }, false);
    }
  }


  /**
   * Called when an instance was inserted into the document
   */
  connectedCallback() {
    this.init();

    //handleContentChanged
    this.element.addEventListener('handleContentChanged', (e) => {
      this.init();
    }, false);
  }

  /*
   * Only attributes listed in the observedAttributes property will receive this callback
   */
  static get observedAttributes() {
    return ['animation', 'targetSelector', 'placement', 'delay', 'duration', 'containerSelector'];
  }

  /**
   * Called when element's attribute value has changed
   *
   * @param {string} attrName The attribute name that has changed
   * @param {string} oldValue The old attribute value
   * @param {string} newValue The new attribute value
   */
  attributeChangedCallback(attrName, oldValue, newValue) {
    this.init();
  }

  /**
   * An instance of the element is created or upgraded
   */
  constructor() {
    super();
    this._template = document.createElement('template');
    this._template.innerHTML = tmpl;
    this._timer = 0;
  }

  /**
   * Sets popover the inner HTML
   * @param {string} html string
   */
  setInnerHtml(html) {
    this._innerHtml = html;
    this.element.dispatchEvent(new CustomEvent('handleContentChanged', {}));
  }

  /**
   * Get the animation class
   *
   * @returns {string} The animation class
   */
  get animation() {
    return this._animation;
  }

  /**
   * Set animation class
   *
   * @param {string} value The animation class
   */
  set animation(value) {
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
  get containerSelector() {
    return this._containerSelector;
  }

  /**
   * Set the popover containerSelector
   *
   * @param {string} value The container element selector
   */
  set containerSelector(value) {
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
  get duration() {
    return this._duration;
  }

  /**
   * Set the animation duration
   *
   * @param {string} value The animation duration
   */
  set duration(value) {
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
  get delay() {
    return this._duration;
  }

  /**
   * Set the animation delay
   *
   * @param {string} value The animation delay
   */
  set delay(value) {
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
  get placement() {
    return this._placement;
  }

  /**
   * Set placement position
   *
   * @param {string} value The placement position left, top, bottom, right
   */
  set placement(value) {
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
  get targetSelector() {
    return this._targetSelector;
  }

  /**
   * Set targetSelector
   *
   * @param {string} value The target element selector
   */
  set targetSelector(value) {
    if (this._targetSelector !== value) {
      this._targetSelector = value;
      this._target = document.querySelector(this._targetSelector);
      this.setAttribute('targetSelector', value);
    }
  }

  /**
     * The popover open method
     */
  open() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      if (this.popover === null) {
        this._createPopover();
        this._stylePopover();
        this._showPopover();
        //notify frameworks
        this.dispatchEvent(new CustomEvent('popoverOpened', {}));
      }
    }, 20);
  }

  /**
   * The popover close method
   */
  close() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      if (this.popover && this.popover !== null) {
        pfUtil.removeClass(this.popover, 'in');
        setTimeout(() => {
          this._removePopover();
          //notify frameworks
          this.dispatchEvent(new CustomEvent('popoverClosed', {}));
        }, this._duration);
      }
    }, this._delay + this._duration);
  }

  /**
   * Removes the popover
   * @private
   */
  _removePopover() {
    this.popover && this._container.removeChild(this.popover);
    this.popover = null;
  }

  /**
   * Creates the popover
   * @private
   */
  _createPopover() {
    let clone = document.importNode(this._template.content, true);
    let popoverInner = clone.querySelector('.popover-content');
    let popovertitle = clone.querySelector('.popover-title');
    let closeButton = document.createElement('template');
    closeButton.innerHTML = `<button type="button" class="close"><span class="pficon pficon-close"></span></button>`;

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
    let popovers = this._container.querySelectorAll('.popover');
    this.popover = popovers[popovers.length - 1];
    this.popover.setAttribute('class', `popover ${this._placement} ${this._animation}`);
  }

  /**
   * Styles the popover based on placement attribute
   * @private
   */
  _stylePopover() {
    const rect = this._target.getBoundingClientRect(); //popover real dimensions

    const // link rect | window vertical and horizontal scroll
      scroll = pfUtil.getScroll();

    const //link real dimensions
      linkDimensions = { w: rect.right - rect.left, h: rect.bottom - rect.top };

    const popoverDimensions = { w: this.popover.offsetWidth, h: this.popover.offsetHeight };

    //apply styling
    if (/top/.test(this._placement)) { //TOP
      this.popover.style.top = `${rect.top + scroll.y - popoverDimensions.h}px`;
      this.popover.style.left = `${rect.left + scroll.x - popoverDimensions.w / 2 + linkDimensions.w / 2}px`;

    } else if (/bottom/.test(this._placement)) { //BOTTOM
      this.popover.style.top = `${rect.top + scroll.y + linkDimensions.h}px`;
      this.popover.style.left = `${rect.left + scroll.x - popoverDimensions.w / 2 + linkDimensions.w / 2}px`;

    } else if (/left/.test(this._placement)) { //LEFT
      this.popover.style.top = `${rect.top + scroll.y - popoverDimensions.h / 2 + linkDimensions.h / 2}px`;
      this.popover.style.left = `${rect.left + scroll.x - popoverDimensions.w}px`;

    } else if (/right/.test(this._placement)) { //RIGHT
      this.popover.style.top = `${rect.top + scroll.y - popoverDimensions.h / 2 + linkDimensions.h / 2}px`;
      this.popover.style.left = `${rect.left + scroll.x + linkDimensions.w}px`;
    }
  }

  /**
   * Makes popover visible
   * @private
   */
  _showPopover() {
    !/\bin/.test(this.popover.className) && (pfUtil.addClass(this.popover, 'in'));
    this.popover.style.display = 'block';
  }

}

window.customElements.define('pf-popover', PfPopover);
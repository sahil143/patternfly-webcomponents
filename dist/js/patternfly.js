/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* Require the HTML Element Shim */
	__webpack_require__(1);

	/** PF Alert Component **/
	__webpack_require__(2);

	/** PfListView Component **/
	__webpack_require__(4);

	/** PfTemplateRepeaterComponent **/
	__webpack_require__(6);

	/** PfTemplateComponent **/
	__webpack_require__(7);

	/** PF Tabs Component **/
	__webpack_require__(8);

	/** PF Tooltip Component **/
	__webpack_require__(13);

	/** PF Utilization Bar Chart **/
	__webpack_require__(16);

	/** PF Utils **/
	__webpack_require__(15);

	/** PF I18N **/
	__webpack_require__(19);

	/** PF Hello **/
	__webpack_require__(21);

	/** PF Dropdown **/
	__webpack_require__(23);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	//Shim for resolving current issue with extending HTMLElement in ES6 /Babel transpiled classes in Safari
	//https://github.com/babel/babel/issues/1548
	//https://github.com/babel/babel/issues/4480

	if (typeof HTMLElement !== 'function') {
	  var _HTMLElement = function _HTMLElement() {};
	  _HTMLElement.prototype = HTMLElement.prototype;
	  HTMLElement = _HTMLElement;
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PfAlert = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pfAlert = __webpack_require__(3);

	var _pfAlert2 = _interopRequireDefault(_pfAlert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * <b>&lt;pf-alert&gt;</b> element for Patternfly Web Components
	 *
	 * @example {@lang xml}
	 * <pf-alert type="danger" persistent="true" persistentCallbackFn="alert('Danger alert closed');"></pf-alert>
	 *
	 * @prop {string} type danger, warning, success, info
	 * @prop {string} persistant true, false
	 * @prop {function} persistent-callback-fn
	 */
	var PfAlert = exports.PfAlert = function (_HTMLElement) {
	  _inherits(PfAlert, _HTMLElement);

	  function PfAlert() {
	    _classCallCheck(this, PfAlert);

	    return _possibleConstructorReturn(this, (PfAlert.__proto__ || Object.getPrototypeOf(PfAlert)).apply(this, arguments));
	  }

	  _createClass(PfAlert, [{
	    key: "attachedCallback",

	    /**
	     * Called when an instance was inserted into the document
	     */
	    value: function attachedCallback() {
	      this.insertBefore(this._template.content, this.firstChild);
	    }

	    /**
	     * Called when element's attribute value has changed
	     *
	     * @param {string} attrName The attribute name that has changed
	     * @param {string} oldValue The old attribute value
	     * @param {string} newValue The new attribute value
	     */

	  }, {
	    key: "attributeChangedCallback",
	    value: function attributeChangedCallback(attrName, oldValue, newValue) {
	      if (attrName === "type") {
	        this._resetType(oldValue, newValue);
	        this._initType();
	      } else if (attrName === "persistent" || attrName === "persistent-callback-fn") {
	        this._initPersistent();
	      }
	    }

	    /**
	     * Called when an instance of the element is created
	     */

	  }, {
	    key: "createdCallback",
	    value: function createdCallback() {
	      this._template = document.createElement('template');
	      this._template.innerHTML = _pfAlert2.default;
	      this.classList.add("alert");
	      this._initDefaults();
	      this._initPersistent();
	      this._initType();
	    }

	    /**
	     * Helper function to init defaults
	     * @private
	     */

	  }, {
	    key: "_initDefaults",
	    value: function _initDefaults() {
	      this._classNames = {
	        "pfalert": {
	          "danger": "alert-danger",
	          "info": "alert-info",
	          "success": "alert-success",
	          "warning": "alert-warning"
	        },
	        "pficon": {
	          "danger": "pficon-error-circle-o",
	          "info": "pficon-info",
	          "success": "pficon-ok",
	          "warning": "pficon-warning-triangle-o"
	        }
	      };
	    }

	    /**
	     * Helper function to make alert persistent
	     * @private
	     */

	  }, {
	    key: "_initPersistent",
	    value: function _initPersistent() {
	      var self = this;
	      var nodes = this._getNodes('button.close');
	      var el = nodes[0];
	      if (this.getAttribute("persistent") === "true") {
	        this.classList.add("alert-dismissable");
	        if (el !== undefined) {
	          el.classList.remove("hidden");
	          el.setAttribute('onclick', this.getAttribute("persistent-callback-fn"));
	        }
	      } else {
	        this.classList.remove("alert-dismissable");
	        if (el !== undefined) {
	          el.classList.add("hidden");
	        }
	      }
	    }

	    /**
	     * Helper function to init alert type
	     * @private
	     */

	  }, {
	    key: "_initType",
	    value: function _initType() {
	      var nodes = this._getNodes('span.pficon');
	      var el = nodes[nodes.length - 1];
	      switch (this.getAttribute("type")) {
	        case "danger":
	          this.classList.add(this._classNames.pfalert.danger);
	          el.classList.add(this._classNames.pficon.danger);
	          break;
	        case "info":
	          this.classList.add(this._classNames.pfalert.info);
	          el.classList.add(this._classNames.pficon.info);
	          break;
	        case "success":
	          this.classList.add(this._classNames.pfalert.success);
	          el.classList.add(this._classNames.pficon.success);
	          break;
	        case "warning":
	          this.classList.add(this._classNames.pfalert.warning);
	          el.classList.add(this._classNames.pficon.warning);
	          break;
	      }
	    }

	    /**
	     * Helper function to reset alert type
	     * @param oldValue The old attribute value
	     * @private
	     */

	  }, {
	    key: "_resetType",
	    value: function _resetType(oldValue) {
	      var nodes = this._getNodes('span.pficon');
	      var el = nodes[nodes.length - 1];
	      switch (oldValue) {
	        case "danger":
	          this.classList.remove(this._classNames.pfalert.danger);
	          el.classList.remove(this._classNames.pficon.danger);
	          break;
	        case "info":
	          this.classList.remove(this._classNames.pfalert.info);
	          el.classList.remove(this._classNames.pficon.info);
	          break;
	        case "success":
	          this.classList.remove(this._classNames.pfalert.success);
	          el.classList.remove(this._classNames.pficon.success);
	          break;
	        case "warning":
	          this.classList.remove(this._classNames.pfalert.warning);
	          el.classList.remove(this._classNames.pficon.warning);
	          break;
	      }
	    }

	    /**
	     * Get nodes from given selector
	     *
	     * @param selector The query selector identifying the elements to retrieve
	     * @returns {Element}
	     * @private
	     */

	  }, {
	    key: "_getNodes",
	    value: function _getNodes(selector) {
	      var el = this.querySelectorAll(selector);
	      if (el.length === 0) {
	        el = this._template.content.querySelectorAll(selector);
	      }
	      return el;
	    }
	  }]);

	  return PfAlert;
	}(HTMLElement);

	(function () {
	  document.registerElement('pf-alert', PfAlert);
	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PfAlertTemplate = "\n<button type=\"button\" class=\"close hidden\" data-dismiss=\"alert\" aria-hidden=\"true\">\n  <span class=\"pficon pficon-close\"></span>\n</button>\n<span class=\"pficon\"></span>\n";
	exports.default = PfAlertTemplate;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PfListView = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pfListViewTemplate = __webpack_require__(5);

	var _pfListViewTemplate2 = _interopRequireDefault(_pfListViewTemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var forEach = Array.prototype.forEach;

	/**
	 * <b>&lt;pf-list-view&gt;</b> element for Patternfly Web Components
	 *
	 * @example {@lang xml}
	 * <pf-list-view id="example1" show-checkboxes="true">
	 *  <pf-template-repeater id="example1-content" content='[{"name": "Big Bird", "address": "1 Seaseme Street"}]'>
	 *    <pf-template>
	 *      <div class="list-view-pf-description">
	 *        <div class="list-group-item-heading">
	 *          ${name}
	 *        </div>
	 *        <div class="list-group-item-text">
	 *          ${address}
	 *        </div>
	 *      </div>
	 *    </pf-template>
	 *  </pf-template-repeater>
	 * </pf-list-view>
	 *
	 * @prop {string} show-checkboxes whether to show list-view checkboxes
	 */

	var PfListView = exports.PfListView = function (_HTMLElement) {
	  _inherits(PfListView, _HTMLElement);

	  function PfListView() {
	    _classCallCheck(this, PfListView);

	    return _possibleConstructorReturn(this, (PfListView.__proto__ || Object.getPrototypeOf(PfListView)).apply(this, arguments));
	  }

	  _createClass(PfListView, [{
	    key: 'createdCallback',

	    /**
	     * Called when an instance of the element is created
	     */
	    value: function createdCallback() {
	      // Listen for when the child template-repeater updates it's content
	      // ie. repeates the user defined template and replaces $(name) with actual values
	      this.addEventListener("RepeaterContentChanged", function (e) {
	        this.handleRepeaterContentChanged();
	      });
	    }

	    /**
	     * Called when element's attribute value has changed
	     *
	     * @param {string} attrName The attribute name that has changed
	     * @param {string} oldValue The old attribute value
	     * @param {string} newValue The new attribute value
	     */

	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attributeName, oldValue, newValue) {
	      if (attributeName === 'show-checkboxes') {
	        this.showHideCheckboxes();
	      }
	    }

	    /**
	     * Called when repeater content changes (updates content)
	     */

	  }, {
	    key: 'handleRepeaterContentChanged',
	    value: function handleRepeaterContentChanged() {
	      this.updateComponent();
	      this.updateCheckboxes();
	      this.updateActionButtons();
	    }

	    /**
	     * This method updates the overall list view and each repeated row/item in the list.
	     * @example {@lang xml}
	     *  <pf-list-view>
	     *    <pf-template-repeater content='[{"name": "Fred Flintstone", "address": "20 Dinosaur Way"}, {"name": "John Smith", "address": "415 ...'
	     *      <pf-template>
	     *        <div class="list-view-pf-description">
	     *          <div class="list-group-item-heading">
	     *            ${name}
	     *          ...
	     */

	  }, {
	    key: 'updateComponent',
	    value: function updateComponent() {

	      this._template = document.createElement('template');
	      this._template.innerHTML = _pfListViewTemplate2.default;

	      // get repeated templates
	      var repeatedTemplates = this.querySelectorAll('pf-template');

	      for (var i = 0; i < repeatedTemplates.length; i++) {
	        var template = repeatedTemplates[i];

	        var itemRowTemplate = document.createElement('template');
	        itemRowTemplate.innerHTML = _pfListViewTemplate.itemRow;

	        // Where the transclude happens
	        itemRowTemplate.content.querySelector('.list-view-pf-main-info').innerHTML = template.innerHTML;

	        this._template.content.querySelector('.list-view-pf').appendChild(itemRowTemplate.content);
	      }

	      this.innerHTML = this._template.innerHTML;

	      /**
	       * This method updated the component to:
	       * Ie.
	       *  <pf-list-view>
	       *    <div class="list-group list-view-pf" >
	       *      <pf-template-repeater content='[{"name": "Fred Flintstone", "address": "20 Dinosaur Way"}, {"name": "John Smith", "address": "415 ...
	       *        <pf-template>
	       *          <div class="list-group-item">
	       *            <div class="list-group-item-header">
	       *              <div class="list-view-pf-checkbox">
	       *                <input type="checkbox">
	       *              </div>
	       *              <div class="list-view-pf-main-info">
	       *                <div class="list-view-pf-description">
	       *                  ${name}
	       *                ...
	       *
	       */
	    }
	  }, {
	    key: 'updateCheckboxes',
	    value: function updateCheckboxes() {
	      this.showHideCheckboxes();
	      this.listenForCheckboxChanges();
	    }
	  }, {
	    key: 'updateActionButtons',
	    value: function updateActionButtons() {
	      var _this2 = this;

	      var actionButtons = PfListView.fromJson(this.getAttribute("action-buttons"));
	      // Get the headers of each row
	      var headers = this.querySelectorAll('.list-group-item-header');

	      // wish forEach worked with NodeLists :-(

	      var _loop = function _loop(i) {
	        var header = headers[i];
	        var actions = document.createElement('div');
	        actions.classList = "list-view-pf-actions";
	        actionButtons.forEach(function (button) {
	          var btn = document.createElement('button');
	          btn.innerHTML = button.name;
	          btn.classList = "btn btn-default" + (button.class ? " " + button.class : "");
	          btn.title = button.title;
	          btn.actionType = button.actionType;
	          btn.itemId = header.lastElementChild.innerText.replace(/\s+/g, ' ').trim();
	          // btn.onclick = this.handleActionButtonClick;   <-- why can't I get this way to work?!
	          btn.addEventListener("click", this.handleActionButtonClick);
	          actions.appendChild(btn);
	        }, _this2);

	        var refNode = header.querySelector('.list-view-pf-checkbox');
	        header.insertBefore(actions, refNode);
	      };

	      for (var i = 0; i < headers.length; i++) {
	        _loop(i);
	      }
	    }
	  }, {
	    key: 'handleActionButtonClick',
	    value: function handleActionButtonClick(e) {
	      var actionType = e.currentTarget.actionType;
	      var itemId = e.currentTarget.itemId;

	      var event = new CustomEvent('ListViewItemActionInitiated', { "actionType": actionType, "itemId": itemId });
	      event.initCustomEvent('ListViewItemActionInitiated', true, true, { "actionType": actionType, "itemId": itemId });
	      this.dispatchEvent(event);
	    }
	  }, {
	    key: 'showHideCheckboxes',
	    value: function showHideCheckboxes() {
	      var showCheckboxes = this.getAttribute("show-checkboxes");
	      var checkboxes = this.querySelectorAll('input[type="checkbox"]');
	      for (var i = 0; i < checkboxes.length; i++) {
	        var checkbox = checkboxes[i];
	        if (showCheckboxes === undefined || showCheckboxes === 'true') {
	          checkbox.parentNode.style.display = "";
	        } else {
	          checkbox.parentNode.style.display = "none";
	        }
	      }
	    }
	  }, {
	    key: 'listenForCheckboxChanges',
	    value: function listenForCheckboxChanges() {
	      var showCheckboxes = this.getAttribute("show-checkboxes");
	      if (showCheckboxes === undefined || showCheckboxes === 'true') {
	        var checkboxes = this.querySelectorAll('input[type="checkbox"]');
	        for (var i = 0; i < checkboxes.length; i++) {
	          var checkbox = checkboxes[i];
	          // TODO: kind of hacky, need a better way to do this
	          var itemId = checkbox.parentNode.parentNode.lastElementChild.innerText.replace(/\s+/g, ' ').trim();
	          checkbox.value = itemId;
	          // there can only be one
	          checkbox.removeEventListener("change", handleCheckboxChange);
	          checkbox.addEventListener("change", handleCheckboxChange);
	        }
	      }

	      function handleCheckboxChange(e) {
	        // TODO: keep track of selected items/rows, for now just output
	        var checkbox = e.currentTarget;
	        // TODO: this seems very fragile, what if HTML hierarchy changes?  Need better way.
	        checkbox.parentNode.parentNode.parentNode.classList.toggle('active');

	        var msg = (checkbox.checked ? "Selected: " : "Unselected: ") + checkbox.value;
	        var event = new CustomEvent('RowSelectionChanged', { "value": msg });
	        event.initCustomEvent('RowSelectionChanged', true, true, { "value": msg });
	        this.dispatchEvent(event);
	      }
	    }
	  }], [{
	    key: 'fromJson',
	    value: function fromJson(str) {
	      var obj = [];
	      if (typeof str === "string") {
	        try {
	          obj = JSON.parse(str);
	        } catch (e) {
	          // throw new Error("Invalid JSON string provided. ");
	        }
	      }
	      return obj;
	    }
	  }]);

	  return PfListView;
	}(HTMLElement);

	(function () {
	  document.registerElement('pf-list-view', PfListView);
	})();

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var pfListViewDefault = "\n<div class=\"list-group list-view-pf\">\n</div>";

	var pfListItem = "\n<div class=\"list-group-item\">\n  <div class=\"list-group-item-header\">\n    <div class=\"list-view-pf-checkbox\">\n      <input type=\"checkbox\">\n    </div>\n    <div class=\"list-view-pf-main-info\">\n    </div>\n  </div>\n</div>\n";

	exports.default = pfListViewDefault;
	exports.itemRow = pfListItem;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * <b>&lt;pf-template-repeater&gt;</b> element for Patternfly Web Components
	 *
	 * This is a fork of a template-repeater: <a href="http://github.com/Nevraeka/template-repeater">http://github.com/Nevraeka/template-repeater</a>
	 *
	 * @example {@lang xml}
	 * <pf-template-repeater id="example1-content" content='[{"name": "Big Bird", "address": "1 Seaseme Street"}]'>
	 *
	 *
	 * @prop {string} content the json stringified content
	 */

	var PFTemplateRepeater = function (_HTMLElement) {
	  _inherits(PFTemplateRepeater, _HTMLElement);

	  function PFTemplateRepeater() {
	    _classCallCheck(this, PFTemplateRepeater);

	    return _possibleConstructorReturn(this, (PFTemplateRepeater.__proto__ || Object.getPrototypeOf(PFTemplateRepeater)).apply(this, arguments));
	  }

	  _createClass(PFTemplateRepeater, [{
	    key: "render",


	    /**
	     * Renders the &lt;pf-template&gt; using PFTemplateRepeater
	     *
	     * @param {string} val The json content
	     */
	    value: function render(val) {
	      var renderError = "Content should be an Array of objects.";
	      var template = this.template;
	      var content = PFTemplateRepeater.fromJson(val);
	      this.innerHTML = (Array.isArray(content) ? content.map(andApplyTemplate) : new Error(renderError).message).join('');

	      function andApplyTemplate(item) {
	        return "<pf-template>" + PFTemplateRepeater.interpolate(template.cloneNode(true), item) + "</pf-template>";
	      }

	      // dispatch a 'repeater content changed' event
	      var event = new CustomEvent('RepeaterContentChanged', {});
	      event.initCustomEvent('RepeaterContentChanged', true, true, {});
	      this.dispatchEvent(event);

	      return this.innerHTML;
	    }

	    /**
	     * Called when element's attribute value has changed
	     *
	     * @param {string} attrName The attribute name that has changed
	     * @param {string} oldValue The old attribute value
	     * @param {string} newValue The new attribute value
	     */

	  }, {
	    key: "attributeChangedCallback",
	    value: function attributeChangedCallback(name, oldVal, newVal) {
	      if (name === "content" && typeof newVal === 'string') {
	        this.template = this.querySelector('pf-template');
	        this.render(newVal);
	      }
	    }
	  }], [{
	    key: "interpolate",
	    value: function interpolate(template, content) {
	      var contentArr = Object.keys(content);
	      var updatedHTML = "";

	      if ((typeof content === "undefined" ? "undefined" : _typeof(content)) === "object") {
	        var andIterateOverData = function andIterateOverData(item) {
	          template.innerHTML = template.innerHTML.replace("${" + item + "}", content[item]);
	        };

	        contentArr.forEach(andIterateOverData);

	        updatedHTML += template.innerHTML;
	      }

	      return updatedHTML;
	    }
	  }, {
	    key: "fromJson",
	    value: function fromJson(str) {
	      var obj = [];
	      if (typeof str === "string") {
	        try {
	          obj = JSON.parse(str);
	        } catch (e) {
	          // throw new Error("Invalid JSON string provided. ");
	        }
	      }
	      return obj;
	    }
	  }]);

	  return PFTemplateRepeater;
	}(HTMLElement);

	document.registerElement("pf-template-repeater", PFTemplateRepeater);

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PFTemplate = function (_HTMLElement) {
	  _inherits(PFTemplate, _HTMLElement);

	  function PFTemplate() {
	    _classCallCheck(this, PFTemplate);

	    return _possibleConstructorReturn(this, (PFTemplate.__proto__ || Object.getPrototypeOf(PFTemplate)).apply(this, arguments));
	  }

	  return PFTemplate;
	}(HTMLElement);

	document.registerElement("pf-template", PFTemplate);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PfTabs = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pfTab = __webpack_require__(9);

	var _pfTab2 = _interopRequireDefault(_pfTab);

	var _pfTabs = __webpack_require__(10);

	var _pfTabs2 = _interopRequireDefault(_pfTabs);

	var _pfTab3 = __webpack_require__(11);

	var _pfTab4 = _interopRequireDefault(_pfTab3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * <b>&lt;pf-tabs&gt;</b> element for Patternfly Web Components
	 *
	 * @example {@lang xml}
	 * <pf-tabs>
	 *  <pf-tab tabTitle="Tab1" active="true">
	 *    <p>Tab1 content here</p>
	 *  </pf-tab>
	 *  <pf-tab tabTitle="Tab2">
	 *    <p>Tab2 content here</p>
	 *  </pf-tab>
	 * </pf-tabs>
	 *
	 */
	var PfTabs = exports.PfTabs = function (_HTMLElement) {
	  _inherits(PfTabs, _HTMLElement);

	  function PfTabs() {
	    _classCallCheck(this, PfTabs);

	    return _possibleConstructorReturn(this, (PfTabs.__proto__ || Object.getPrototypeOf(PfTabs)).apply(this, arguments));
	  }

	  _createClass(PfTabs, [{
	    key: 'attachedCallback',

	    /**
	     * Called when an instance was inserted into the document
	     */
	    value: function attachedCallback() {
	      this.insertBefore(this._tabsTemplate.content, this.firstChild);

	      this._makeTabsFromPfTab();

	      this.querySelector('ul').addEventListener('click', this);

	      // Add the ul class if specified
	      this.querySelector('ul').className = this.attributes.class ? this.attributes.class.value : 'nav nav-tabs';

	      if (!this.mutationObserver) {
	        this.mutationObserver = new MutationObserver(this._handleMutations.bind(this));
	        this.mutationObserver.observe(this, { childList: true, attributes: true });
	      }
	    }

	    /**
	     * Called when element's attribute value has changed
	     *
	     * @param {string} attrName The attribute name that has changed
	     * @param {string} oldValue The old attribute value
	     * @param {string} newValue The new attribute value
	     */

	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldValue, newValue) {
	      if (attrName === 'class' && newValue !== 'ng-isolate-scope') {
	        var ul = this.querySelector('ul');
	        if (ul) {
	          ul.className = newValue;
	        }
	      }
	    }

	    /**
	     * Called when an instance of the element is created
	     */

	  }, {
	    key: 'createdCallback',
	    value: function createdCallback() {
	      this._tabsTemplate = document.createElement('template');
	      this._tabsTemplate.innerHTML = _pfTabs2.default;

	      this.selected = null;
	      this.tabMap = new Map();
	      this.panelMap = new Map();
	      this.displayMap = new Map();
	    }

	    /**
	     * Called when the element is removed from the DOM
	     */

	  }, {
	    key: 'detachedCallback',
	    value: function detachedCallback() {
	      this.querySelector('ul').removeEventListener('click', this);
	    }

	    /**
	     * Handle the tab change event
	     *
	     * @param event {Event} Handle the tab change event
	     */

	  }, {
	    key: 'handleEvent',
	    value: function handleEvent(event) {
	      if (event.target.tagName === 'A') {
	        event.preventDefault();
	        this._setTabStatus(event.target.parentNode);
	      }
	    }

	    /**
	     * Handle mutations
	     *
	     * @param mutations
	     * @private
	     */

	  }, {
	    key: '_handleMutations',
	    value: function _handleMutations(mutations) {
	      var self = this;
	      var handlers = [];
	      mutations.forEach(function (mutationRecord) {
	        //child dom nodes have been added
	        if (mutationRecord.type === 'childList') {
	          for (var i = 0; i < mutationRecord.addedNodes.length; i++) {
	            handlers.push(['add', mutationRecord.addedNodes[i]]);
	          }
	          for (var _i = 0; _i < mutationRecord.removedNodes.length; _i++) {
	            handlers.push(['remove', mutationRecord.removedNodes[_i]]);
	          }
	        } else if (mutationRecord.type === 'attributes') {
	          //mutationRecord.attributeName contains changed attributes
	          //note: we can ignore this for attributes as the v1 spec of custom
	          //elements already provides attributeChangedCallback
	        }
	      });
	      if (handlers.length) {
	        requestAnimationFrame(function () {
	          var ul = self.querySelector('ul');
	          handlers.forEach(function (notes) {
	            var action = notes[0];
	            var pfTab = notes[1];
	            var tab = void 0;

	            //ignore Angular directive #text and #comment nodes
	            if (pfTab.nodeName !== "PF-TAB") {
	              return;
	            }

	            if (action === 'add') {
	              //add tab
	              tab = self._makeTab(pfTab);
	              self.tabMap.set(tab, pfTab);
	              self.panelMap.set(pfTab, tab);

	              //if active, deactivate others
	              if (pfTab.attributes.active) {
	                self.tabMap.forEach(function (value, key) {
	                  var fn = tab === key ? self._makeActive : self._makeInactive;
	                  fn.call(self, key);
	                });
	              } else {
	                self._makeInactive(tab);
	              }
	              ul.appendChild(tab);
	            } else {
	              //remove tab
	              tab = self.panelMap.get(pfTab);
	              tab.parentNode.removeChild(tab);
	              self.panelMap.delete(pfTab);
	              self.tabMap.delete(tab);
	              self.displayMap.delete(tab);

	              //we removed the active tab, make the last one active
	              if (pfTab.attributes.active) {
	                var last = ul.querySelector('li:last-child');
	                self._setTabStatus(last);
	              }
	            }
	          });
	        });
	      }
	    }

	    /**
	     * Handle the tabTitle change event
	     *
	     * @param panel {string} The tab panel
	     * @param tabTitle {string} The tab title
	     */

	  }, {
	    key: 'handleTitle',
	    value: function handleTitle(panel, tabTitle) {
	      var tab = this.panelMap.get(panel);
	      //attribute changes may fire as Angular is rendering
	      //before this tab is in the panelMap, so check first
	      if (tab) {
	        tab.textContent = panel.tabTitle;
	      }
	    }

	    /**
	     * Sets the active tab programmatically
	     * @param tabTitle
	     */

	  }, {
	    key: 'setActiveTab',
	    value: function setActiveTab(tabTitle) {
	      var _this2 = this;

	      this.tabMap.forEach(function (value, key) {
	        var tabtitle = value.attributes.tabtitle ? value.attributes.tabtitle.value : value.tabtitle;
	        if (tabtitle === tabTitle) {
	          _this2._setTabStatus(key);
	        }
	      });
	    }

	    /**
	     * Helper function to create tabs
	     *
	     * @private
	     */

	  }, {
	    key: '_makeTabsFromPfTab',
	    value: function _makeTabsFromPfTab() {
	      var ul = this.querySelector('ul');
	      var pfTabs = this.querySelectorAll('pf-tab');
	      [].forEach.call(pfTabs, function (pfTab, idx) {
	        var tab = this._makeTab(pfTab);
	        ul.appendChild(tab);
	        this.tabMap.set(tab, pfTab);
	        this.panelMap.set(pfTab, tab);

	        if (idx === 0) {
	          this._makeActive(tab);
	        } else {
	          pfTab.style.display = 'none';
	        }
	      }.bind(this));
	    }

	    /**
	     * Helper function to create a new tab element from given tab
	     *
	     * @param pfTab A PfTab element
	     * @returns {PfTab} A new PfTab element
	     * @private
	     */

	  }, {
	    key: '_makeTab',
	    value: function _makeTab(pfTab) {
	      var frag = document.createElement('template');
	      frag.innerHTML = _pfTab2.default;
	      var tab = frag.content.firstElementChild;
	      var tabAnchor = tab.firstElementChild;
	      //React gives us a node with attributes, Angular adds it as a property
	      tabAnchor.innerHTML = pfTab.attributes && pfTab.attributes.tabTitle ? pfTab.attributes.tabTitle.value : pfTab.tabTitle;
	      this.displayMap.set(pfTab, pfTab.style.display);
	      return tab;
	    }

	    /**
	     * Helper function to make given tab active
	     *
	     * @param tab A PfTab element
	     * @private
	     */

	  }, {
	    key: '_makeActive',
	    value: function _makeActive(tab) {
	      tab.classList.add('active');
	      var pfTab = this.tabMap.get(tab);
	      var naturalDisplay = this.displayMap.get(pfTab);
	      pfTab.style.display = naturalDisplay;
	      pfTab.setAttribute('active', '');
	    }

	    /**
	     * Helper function to make given tab inactive
	     *
	     * @param tab A PfTab element
	     * @private
	     */

	  }, {
	    key: '_makeInactive',
	    value: function _makeInactive(tab) {
	      tab.classList.remove('active');
	      var pfTab = this.tabMap.get(tab);
	      pfTab.style.display = 'none';
	      pfTab.removeAttribute('active');
	    }

	    /**
	     * Helper function to set tab status
	     *
	     * @param {boolean} active True if active
	     * @param {string} tabtitle the tab title
	     * @private
	     */

	  }, {
	    key: '_setTabStatus',
	    value: function _setTabStatus(active) {
	      if (active === this.selected) {
	        return;
	      }
	      this.selected = active;

	      var activeTabTitle = "";
	      var tabs = this.querySelector('ul').children;
	      [].forEach.call(tabs, function (tab) {
	        if (active === tab) {
	          activeTabTitle = tab.querySelector('a').text;
	        }
	        var fn = active === tab ? this._makeActive : this._makeInactive;
	        fn.call(this, tab);
	      }.bind(this));

	      //dispatch the custom 'tabChanged' event for framework listeners
	      this.dispatchEvent(new CustomEvent('tabChanged', { detail: activeTabTitle }));
	    }
	  }]);

	  return PfTabs;
	}(HTMLElement);

	(function () {
	  document.registerElement('pf-tabs', PfTabs);
	})();

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PfTabTemplate = "\n<li role=\"presentation\">\n  <a href=\"#\" role=\"tab\" data-toggle=\"tab\"></a>\n</li>\n";
	exports.default = PfTabTemplate;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PfTabsTemplate = "\n<ul role=\"tablist\"></ul>\n";
	exports.default = PfTabsTemplate;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PfTab = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _panel = __webpack_require__(12);

	var _panel2 = _interopRequireDefault(_panel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * <b>&lt;pf-tab&gt;</b> element for Patternfly Web Components
	 *
	 * @example {@lang xml}
	 * <pf-tabs>
	 *  <pf-tab tabTitle="Tab1" active="true">
	 *    <p>Tab1 content here</p>
	 *  </pf-tab>
	 *  <pf-tab tabTitle="Tab2">
	 *    <p>Tab2 content here</p>
	 *  </pf-tab>
	 * </pf-tabs>
	 *
	 * @prop {string} tabTitle the tab title
	 * @prop {string} active if attribute exists, tab will be active
	 */
	var PfTab = exports.PfTab = function (_HTMLElement) {
	  _inherits(PfTab, _HTMLElement);

	  function PfTab() {
	    _classCallCheck(this, PfTab);

	    return _possibleConstructorReturn(this, (PfTab.__proto__ || Object.getPrototypeOf(PfTab)).apply(this, arguments));
	  }

	  _createClass(PfTab, [{
	    key: 'attachedCallback',

	    /**
	     * Called when an instance was inserted into the document
	     */
	    value: function attachedCallback() {
	      this.appendChild(this._template.content);
	    }

	    /**
	     * Called when element's attribute value has changed
	     *
	     * @param {string} attrName The attribute name that has changed
	     * @param {string} oldValue The old attribute value
	     * @param {string} newValue The new attribute value
	     */

	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldValue, newValue) {
	      var parent = this.parentNode;
	      if (attrName === 'tabTitle' && parent && parent.handleTitle) {
	        parent.handleTitle(this, newValue);
	      }
	    }

	    /**
	     * Called when an instance of the element is created
	     */

	  }, {
	    key: 'createdCallback',
	    value: function createdCallback() {
	      this._template = document.createElement('template');
	      this._template.innerHTML = _panel2.default;
	    }

	    /**
	     * Get tabTitle
	     *
	     * @returns {string} The tabTitle
	     */

	  }, {
	    key: 'tabTitle',
	    get: function get() {
	      return this._tabTitle;
	    }

	    /**
	     * Set tab tabTitle
	     *
	     * @param {string} value The tab tabTitle
	     */
	    ,
	    set: function set(value) {
	      if (this._tabTitle !== value) {
	        this._tabTitle = value;
	        this.setAttribute('tabTitle', value);
	      }
	    }

	    /**
	     * Get flag indicating tab is active
	     *
	     * @returns {boolean} True if tab is active
	     */

	  }, {
	    key: 'active',
	    get: function get() {
	      return this._active;
	    }

	    /**
	     * Set flag indicating tab is active
	     *
	     * @param {boolean} value True to set tab active
	     */
	    ,
	    set: function set(value) {
	      if (this._active !== value) {
	        this._active = value;
	        this.setAttribute('active', value);
	      }
	    }
	  }]);

	  return PfTab;
	}(HTMLElement);

	(function () {
	  document.registerElement('pf-tab', PfTab);
	})();

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PfPanelTemplate = "\n<div role=\"tabpanel\"></div>\n";
	exports.default = PfPanelTemplate;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PfTooltip = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pfTooltip = __webpack_require__(14);

	var _pfTooltip2 = _interopRequireDefault(_pfTooltip);

	var _pfUtils = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * <b>&lt;pf-tooltip&gt;</b> element for Patternfly Web Components
	 *
	 * @example {@lang xml}
	 * <pf-tooltip animation="fade" targetSelector="#btn-left" placement="left" delay="100" duration="150" containerSelector="#container"></pf-alert>
	 *
	 * @prop {string} animation the animation class
	 * @prop {string} targetSelector the target element selector
	 * @prop {string} placement left, right, top, bottom
	 * @prop {number} delay animation delay (ms)
	 * @prop {number} duration animation duration (ms)
	 * @prop {string} containerSelector the container element selector
	 */

	var PfTooltip = exports.PfTooltip = function (_HTMLElement) {
	  _inherits(PfTooltip, _HTMLElement);

	  function PfTooltip() {
	    _classCallCheck(this, PfTooltip);

	    return _possibleConstructorReturn(this, (PfTooltip.__proto__ || Object.getPrototypeOf(PfTooltip)).apply(this, arguments));
	  }

	  _createClass(PfTooltip, [{
	    key: 'init',


	    /**
	     * Reinitializes tooltip component with attribute values and resets content
	     */
	    value: function init() {
	      var _this2 = this;

	      this.element = this;
	      this.content = this._innerHtml || this.element.innerHTML;
	      this.tooltip = null;
	      this._targetSelector = this.getAttribute('targetSelector');
	      this._target = this._targetSelector ? document.querySelector(this._targetSelector) : this;
	      this._animation = this.getAttribute('animation') ? this.getAttribute('animation') : 'fade';
	      this._placement = this.getAttribute('placement') ? this.getAttribute('placement') : 'right';
	      this._delay = parseInt(this.getAttribute('delay')) || 100;
	      this._mouseHover = 'onmouseleave' in document ? ['mouseenter', 'mouseleave'] : ['mouseover', 'mouseout'];
	      this._tipPositions = /\b(top|bottom|left|top)+/;
	      this._duration = _pfUtils.pfUtil.isMSIE && _pfUtils.pfUtil.isMSIE < 10 ? 0 : parseInt(this.getAttribute('duration')) || 150;
	      this._containerSelector = this.getAttribute('containerSelector');
	      this._container = this._containerSelector ? document.querySelector(this._containerSelector) : document.body;

	      if (this._target) {
	        //create open event listeners
	        this._target.addEventListener(this._mouseHover[0], function (e) {
	          _this2.open(e);
	        }, false);

	        //create close event listener
	        this._target.addEventListener(this._mouseHover[1], function (e) {
	          _this2.close(e);
	        }, false);
	      }
	    }

	    /**
	     * Called when an instance was inserted into the document
	     */

	  }, {
	    key: 'attachedCallback',
	    value: function attachedCallback() {
	      var _this3 = this;

	      this.init();

	      //handleContentChanged
	      this.element.addEventListener('handleContentChanged', function (e) {
	        _this3.init();
	      }, false);
	    }

	    /**
	     * Called when element's attribute value has changed
	     *
	     * @param {string} attrName The attribute name that has changed
	     * @param {string} oldValue The old attribute value
	     * @param {string} newValue The new attribute value
	     */

	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldValue, newValue) {
	      this.init();
	    }

	    /**
	     * Called when an instance of the element is created
	     */

	  }, {
	    key: 'createdCallback',
	    value: function createdCallback() {
	      this._template = document.createElement('template');
	      this._template.innerHTML = _pfTooltip2.default;
	      this._timer = 0;
	    }

	    /**
	     * Sets tooltip the inner HTML
	     * @param {string} html string
	     */

	  }, {
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
	     * The tooltip open method
	     */
	    value: function open() {
	      var _this4 = this;

	      clearTimeout(this._timer);
	      this._timer = setTimeout(function () {
	        if (_this4.tooltip === null) {
	          _this4._createTooltip();
	          _this4._styleTooltip();
	          _this4._showTooltip();
	          //notify frameworks
	          _this4.dispatchEvent(new CustomEvent('tooltipOpened', {}));
	        }
	      }, 20);
	    }

	    /**
	     * The tooltip close method
	     */

	  }, {
	    key: 'close',
	    value: function close() {
	      var _this5 = this;

	      clearTimeout(this._timer);
	      this._timer = setTimeout(function () {
	        if (_this5.tooltip && _this5.tooltip !== null) {
	          _pfUtils.pfUtil.removeClass(_this5.tooltip, 'in');
	          setTimeout(function () {
	            _this5._removeTooltip();
	            //notify frameworks
	            _this5.dispatchEvent(new CustomEvent('tooltipClosed', {}));
	          }, _this5._duration);
	        }
	      }, this._delay + this._duration);
	    }

	    /**
	     * Removes the tooltip
	     * @private
	     */

	  }, {
	    key: '_removeTooltip',
	    value: function _removeTooltip() {
	      this.tooltip && this._container.removeChild(this.tooltip);
	      this.tooltip = null;
	    }

	    /**
	     * Creates the tooltip
	     * @private
	     */

	  }, {
	    key: '_createTooltip',
	    value: function _createTooltip() {
	      var clone = document.importNode(this._template.content, true);
	      var tooltipInner = clone.querySelector('.tooltip-inner');

	      //set tooltip content
	      tooltipInner.innerHTML = this.content;

	      //append to the container
	      this._container.appendChild(clone);

	      //set reference to appended node
	      var tooltips = this._container.querySelectorAll('.tooltip');
	      this.tooltip = tooltips[tooltips.length - 1];
	      this.tooltip.setAttribute('class', 'tooltip ' + this._placement + ' ' + this._animation);
	    }

	    /**
	     * Styles the tooltip based on placement attribute
	     * @private
	     */

	  }, {
	    key: '_styleTooltip',
	    value: function _styleTooltip() {
	      var rect = this._target.getBoundingClientRect(); //tooltip real dimensions

	      var // link rect | window vertical and horizontal scroll
	      scroll = _pfUtils.pfUtil.getScroll();

	      var //link real dimensions
	      linkDimensions = { w: rect.right - rect.left, h: rect.bottom - rect.top };

	      var tooltipDimensions = { w: this.tooltip.offsetWidth, h: this.tooltip.offsetHeight };

	      //apply styling
	      if (/top/.test(this._placement)) {
	        //TOP
	        this.tooltip.style.top = rect.top + scroll.y - tooltipDimensions.h + 'px';
	        this.tooltip.style.left = rect.left + scroll.x - tooltipDimensions.w / 2 + linkDimensions.w / 2 + 'px';
	      } else if (/bottom/.test(this._placement)) {
	        //BOTTOM
	        this.tooltip.style.top = rect.top + scroll.y + linkDimensions.h + 'px';
	        this.tooltip.style.left = rect.left + scroll.x - tooltipDimensions.w / 2 + linkDimensions.w / 2 + 'px';
	      } else if (/left/.test(this._placement)) {
	        //LEFT
	        this.tooltip.style.top = rect.top + scroll.y - tooltipDimensions.h / 2 + linkDimensions.h / 2 + 'px';
	        this.tooltip.style.left = rect.left + scroll.x - tooltipDimensions.w + 'px';
	      } else if (/right/.test(this._placement)) {
	        //RIGHT
	        this.tooltip.style.top = rect.top + scroll.y - tooltipDimensions.h / 2 + linkDimensions.h / 2 + 'px';
	        this.tooltip.style.left = rect.left + scroll.x + linkDimensions.w + 'px';
	      }
	    }

	    /**
	     * Makes tooltip visible
	     * @private
	     */

	  }, {
	    key: '_showTooltip',
	    value: function _showTooltip() {
	      !/\bin/.test(this.tooltip.className) && _pfUtils.pfUtil.addClass(this.tooltip, 'in');
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
	     * Get the tooltip containerSelector
	     *
	     * @returns {string} The container element selector
	     */

	  }, {
	    key: 'containerSelector',
	    get: function get() {
	      return this._containerSelector;
	    }

	    /**
	     * Set the tooltip containerSelector
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

	  return PfTooltip;
	}(HTMLElement);

	(function () {
	  document.registerElement('pf-tooltip', PfTooltip);
	})();

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var PfTooltipTemplate = "\n<div role=\"tooltip\" class=\"tooltip\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\"></div>\n</div>\n";

	exports.default = PfTooltipTemplate;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * --------------------------------------------------------------------------
	 * PfUtil
	 * Internal Utility Functions for Patternfly Web Components
	 * --------------------------------------------------------------------------
	 */

	var PfUtil = function () {
	  function PfUtil() {
	    _classCallCheck(this, PfUtil);

	    this.isMSIE = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) !== null ? parseFloat(RegExp.$1) : false;
	    this.isIE = /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
	  }

	  _createClass(PfUtil, [{
	    key: 'addClass',
	    value: function addClass(el, c) {
	      // where modern browsers fail, use classList
	      if (el.classList) {
	        el.classList.add(c);
	      } else {
	        el.className += ' ' + c;
	        el.offsetWidth;
	      }
	    }
	  }, {
	    key: 'removeClass',
	    value: function removeClass(el, c) {
	      if (el.classList) {
	        el.classList.remove(c);
	      } else {
	        el.className = el.className.replace(c, '').replace(/^\s+|\s+$/g, '');
	      }
	    }
	  }, {
	    key: 'getClosest',
	    value: function getClosest(el, s) {
	      //el is the element and s the selector of the closest item to find
	      // source http://gomakethings.com/climbing-up-and-down-the-dom-tree-with-vanilla-javascript/
	      var f = s.charAt(0);
	      for (; el && el !== document; el = el.parentNode) {
	        // Get closest match
	        if (f === '.') {
	          // If selector is a class
	          if (document.querySelector(s) !== undefined) {
	            return el;
	          }
	        }
	        if (f === '#') {
	          // If selector is an ID
	          if (el.id === s.substr(1)) {
	            return el;
	          }
	        }
	      }
	      return false;
	    }

	    // tooltip / popover stuff

	  }, {
	    key: 'isElementInViewport',
	    value: function isElementInViewport(t) {
	      // check if this.tooltip is in viewport
	      var r = t.getBoundingClientRect();
	      return r.top >= 0 && r.left >= 0 && r.bottom <= (window.innerHeight || document.documentElement.clientHeight) && r.right <= (window.innerWidth || document.documentElement.clientWidth);
	    }
	  }, {
	    key: 'getScroll',
	    value: function getScroll() {
	      // also Affix and scrollSpy uses it
	      return {
	        y: window.pageYOffset || document.documentElement.scrollTop,
	        x: window.pageXOffset || document.documentElement.scrollLeft
	      };
	    }
	  }]);

	  return PfUtil;
	}();

	var pfUtil = new PfUtil();
	exports.pfUtil = pfUtil;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PfUtilizationBarChart = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pfUtilizationBarChartDefault = __webpack_require__(17);

	var _pfUtilizationBarChartDefault2 = _interopRequireDefault(_pfUtilizationBarChartDefault);

	var _pfUtilizationBarChartInline = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * <b>&lt;pf-utilization-bar-chart&gt;</b> element for Patternfly Web Components
	 *
	 * @example <caption>Default Layout, no Thresholds</caption> {@lang xml}
	 * <pf-utilization-bar-chart chart-title="RAM Usage" used="8" total="24" units="MB"></pf-utilization-bar-chart>
	 *
	 * @example <caption>Default Layout, no Thresholds</caption> {@lang xml}
	 * <pf-utilization-bar-chart chart-title="RAM Usage" used="8" total="24" units="MB"></pf-utilization-bar-chart>
	 *
	 * @example <caption>Inline Layout</caption> {@lang xml}
	 * <pf-utilization-bar-chart id="thresholdExample2" chart-title="Disk I/O" layout="inline" used="450" total="500" units="I/Ops" threshold-warning="60" threshold-error="85"></pf-utilization-bar-chart>
	 *
	 * @prop {string} chart-title the chart title
	 * @prop {string} layout 'inline' for inline layout
	 * @prop {number} used the percentage used
	 * @prop {number} total the percentage total
	 * @prop {string} units the display units
	 * @prop {number} threshold-warning the warning threshold
	 * @prop {number} threshold-error the error threshold
	 */
	var PfUtilizationBarChart = exports.PfUtilizationBarChart = function (_HTMLElement) {
	  _inherits(PfUtilizationBarChart, _HTMLElement);

	  function PfUtilizationBarChart() {
	    _classCallCheck(this, PfUtilizationBarChart);

	    return _possibleConstructorReturn(this, (PfUtilizationBarChart.__proto__ || Object.getPrototypeOf(PfUtilizationBarChart)).apply(this, arguments));
	  }

	  _createClass(PfUtilizationBarChart, [{
	    key: 'createdCallback',

	    /**
	     * Called when an instance of the element is created
	     */
	    value: function createdCallback() {
	      this._lastThresholdClass;
	      this._layout;
	    }

	    /**
	     * Called when an instance was inserted into the document
	     */

	  }, {
	    key: 'attachedCallback',
	    value: function attachedCallback() {
	      this._layout = this.getAttribute('layout');
	      if (this._layout && this._layout === 'inline') {
	        this.innerHTML = _pfUtilizationBarChartInline.inline;
	      } else {
	        this.innerHTML = _pfUtilizationBarChartDefault2.default;
	      }
	      this.updateChart();
	    }

	    /**
	     * Called when element's attribute value has changed
	     *
	     * @param {string} attrName The attribute name that has changed
	     * @param {string} oldValue The old attribute value
	     * @param {string} newValue The new attribute value
	     */

	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attributeName, oldValue, newValue) {
	      this.updateChart();
	    }

	    /**
	     * Updates chart content
	     */

	  }, {
	    key: 'updateChart',
	    value: function updateChart() {
	      var chartTitle = this.getAttribute('chart-title');
	      if (chartTitle) {
	        this.querySelector('.progress-description').innerText = chartTitle;
	      }

	      var usedBar = this.querySelector('.progress-bar-used');
	      var remainingBar = this.querySelector('.progress-bar-remaining');

	      var usedValue = this.getAttribute('used');
	      var totalValue = this.getAttribute('total');
	      var units = this.getAttribute('units') !== null ? this.getAttribute('units') : "";

	      if (this._layout && this._layout === 'inline') {
	        usedBar.querySelector('.utiliz-bar-strong-label').innerText = usedValue + " " + units;
	      } else {
	        usedBar.querySelector('.utiliz-bar-strong-label').innerText = usedValue + " of " + totalValue + " " + units;
	      }

	      var percentageUsed = Math.round(100 * (usedValue / totalValue));

	      usedBar.setAttribute("style", "width: " + percentageUsed + "%;");
	      remainingBar.setAttribute("style", "width: " + (100 - percentageUsed) + "%;");

	      var errorThreshold = this.getAttribute('threshold-error');
	      var warnThreshold = this.getAttribute('threshold-warning');

	      if (errorThreshold || warnThreshold) {
	        this.setUsedBarThresholdColor(usedBar, percentageUsed, errorThreshold, warnThreshold);
	      }
	    }

	    /**
	     * Sets the used bar threshold color, percentageUsed, errorThreshold, warnThreshold
	     */

	  }, {
	    key: 'setUsedBarThresholdColor',
	    value: function setUsedBarThresholdColor(usedBar, percentageUsed, errorThreshold, warnThreshold) {
	      var thresholdClass = void 0;

	      if (errorThreshold || warnThreshold) {
	        if (percentageUsed >= errorThreshold) {
	          thresholdClass = "progress-bar-danger";
	        } else if (percentageUsed >= warnThreshold && percentageUsed < errorThreshold) {
	          thresholdClass = "progress-bar-warning";
	        } else if (percentageUsed < warnThreshold) {
	          thresholdClass = "progress-bar-success";
	        }

	        if (thresholdClass !== this._lastThresholdClass) {
	          var event = new CustomEvent('thresholdSet', { 'id': this.getAttribute('id'), 'threshold': thresholdClass });
	          event.initCustomEvent('thresholdSet', true, true, { 'id': this.getAttribute('id'), 'threshold': thresholdClass });
	          usedBar.classList.remove(this._lastThresholdClass);
	          usedBar.classList.add(thresholdClass);
	          this._lastThresholdClass = thresholdClass;
	          usedBar.dispatchEvent(event);
	        }
	      }
	    }
	  }]);

	  return PfUtilizationBarChart;
	}(HTMLElement);

	(function () {
	  document.registerElement('pf-utilization-bar-chart', PfUtilizationBarChart);
	})();

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var pfUtilzBarChartDefault = "\n  <div class=\"utilization-bar-chart-pf\">\n    <div class=\"progress-description\"></div>\n    <div class=\"progress progress-label-top-right\">\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-used\">\n          <span><strong class=\"utiliz-bar-strong-label\"></strong> Used</span>\n        </div>\n        <div class=\"progress-bar progress-bar-remaining\"></div>\n      </div>\n    </div>\n  </div>\n";
	exports.default = pfUtilzBarChartDefault;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var pfUtilzBarChartInline = "\n  <div class=\"progress-container progress-description-left progress-label-right\">\n    <div class=\"progress-description\"></div>\n    <div class=\"progress\">\n      <div class=\"progress-bar progress-bar-used\">\n        <span><strong class=\"utiliz-bar-strong-label\"></strong> Used</span>\n      </div>\n      <div class=\"progress-bar progress-bar-remaining\"></div>\n    </div>\n  </div>\n";
	exports.inline = pfUtilzBarChartInline;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PfI18n = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _i18nUtils = __webpack_require__(20);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * <b>&lt;pf-i18n&gt;</b> element for Patternfly Web Components
	 *
	 * @example <caption>Example with object literal:</caption> {@lang xml}
	 * <script>
	 *   var i18n = {
	 *     "Hello World!": "Hello World! (de-DE)"
	 *   };
	 * <script>
	 * <pf-i18n mixin="i18n">
	 *
	 * @example <caption>Example with Jed and translated JSON files:</caption> {@lang xml}
	 * <link rel="localization" href="/app/i18n/fr/patternfly.json" hreflang="fr">
	 * <link rel="localization" href="/app/i18n/de-DE/patternfly.json" hreflang="de-DE">
	 * <script src="//cdnjs.cloudflare.com/ajax/libs/jed/1.1.1/jed.min.js"></script>
	 * <script>
	 *   var i18n = function() {
	 *     var I18nUtil = function (locale) {
	 *       var self = this;
	 *
	 *       // NOTE: This function is required for the pf-i18n tag to retrieve translated messages.
	 *       this.getMsg = function (key) {
	 *         return self.jed.gettext(key);
	 *       };
	 *
	 *       // Fetch locale data
	 *       this._fetchLocaleData = function(url) {
	 *         let xmlhttp = new XMLHttpRequest();
	 *         xmlhttp.onreadystatechange = function () {
	 *           if (this.readyState === 4 && this.status === 200) {
	 *             const localeData = JSON.parse(this.responseText);
	 *             self.jed = new Jed(localeData);
	 *           }
	 *         };
	 *         xmlhttp.open("GET", url, false);
	 *         xmlhttp.send();
	 *       };
	 *
	 *       // Initialize locale data
	 *       this._initLocaleData = function(locale) {
	 *         let links = document.querySelectorAll('link[rel="localization"]');
	 *         if (links !== null && links.length > 0) {
	 *           for (let i = 0; i < links.length; i++) {
	 *             const hreflang = links[i].getAttribute('hreflang');
	 *             if (hreflang === locale) {
	 *               self._fetchLocaleData(links[i].getAttribute('href'));
	 *               break;
	 *             }
	 *           }
	 *         }
	 *       };
	 *       this._initLocaleData(locale);
	 *     };
	 *     return new I18nUtil("de-DE");
	 *   }();
	 * </script>
	 * <pf-i18n mixin="i18n">
	 *
	 * @example <caption>Example task for compiling .po files to JSON, formatted for Jed:</caption>
	 * gulp.task('gettext-compile', function() {
	 *   return gulp.src('src/po/** /*.po')
	 *     .pipe(po2json({
	 *       pretty: true,
	 *       format: 'jed1.x'
	 *     }))
	 *     .pipe(gulp.dest("dist/i18n"));
	 * });
	 *
	 * @prop {string} mixin i18n or custom mixin name
	 */
	var PfI18n = exports.PfI18n = function (_HTMLElement) {
	  _inherits(PfI18n, _HTMLElement);

	  function PfI18n() {
	    _classCallCheck(this, PfI18n);

	    return _possibleConstructorReturn(this, (PfI18n.__proto__ || Object.getPrototypeOf(PfI18n)).apply(this, arguments));
	  }

	  _createClass(PfI18n, [{
	    key: 'attributeChangedCallback',

	    /**
	     * Called when element's attribute value has changed
	     *
	     * @param {string} attrName The attribute name that has changed
	     * @param {string} oldValue The old attribute value
	     * @param {string} newValue The new attribute value
	     */
	    value: function attributeChangedCallback(attrName, oldValue, newValue) {
	      if (attrName === "mixin") {
	        this._init();
	      }
	    }

	    /**
	     * Called when an instance of the element is created
	     */

	  }, {
	    key: 'createdCallback',
	    value: function createdCallback() {
	      this._init();
	    }

	    /**
	     * Helper function to init i18n mixin
	     * @private
	     */

	  }, {
	    key: '_init',
	    value: function _init() {
	      if (this.getAttribute('mixin') !== null) {
	        var mixin = new Function('return ' + this.getAttribute('mixin'));
	        _i18nUtils.i18n.setMixin(mixin());
	      }
	    }
	  }]);

	  return PfI18n;
	}(HTMLElement);

	(function () {
	  document.registerElement('pf-i18n', PfI18n);
	})();

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * i18n Utils JS Helper
	 * Common i18n helper methods used in Patternfly Web Components
	 */

	/**
	 * See pf-i18n element for initialization details.
	 *
	 * @constructor
	 */
	var I18nUtil = function I18nUtil() {
	  var self = this;

	  /**
	   * Get localized text.
	   *
	   * @param {string} key The message key
	   */
	  this.gettext = function (key) {
	    if (self.mixin !== undefined && typeof self.mixin.getMsg === 'function') {
	      return self.mixin.getMsg(key);
	    } else if (self.mixin !== undefined) {
	      return self.mixin[key];
	    }
	    return key;
	  };

	  /**
	   * Set an object literal containing translated messages or an object containing a getMsg() function to retrieve
	   * translated messages.
	   *
	   * @param {Function} mixin The i18n mixin.
	   */
	  this.setMixin = function (mixin) {
	    if (mixin === undefined) {
	      throw new Error("I18nUtil: Mixin cannot be undefined.");
	    }
	    self.mixin = mixin;
	  };
	};
	var i18n = new I18nUtil();
	exports.i18n = i18n;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PfHello = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pfHello = __webpack_require__(22);

	var _pfHello2 = _interopRequireDefault(_pfHello);

	var _i18nUtils = __webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * <b>&lt;pf-hello&gt;</b> element for Patternfly Web Components
	 *
	 * @example {@lang xml}
	 * <pf-hello></pf-hello>
	 */
	var PfHello = exports.PfHello = function (_HTMLElement) {
	  _inherits(PfHello, _HTMLElement);

	  function PfHello() {
	    _classCallCheck(this, PfHello);

	    return _possibleConstructorReturn(this, (PfHello.__proto__ || Object.getPrototypeOf(PfHello)).apply(this, arguments));
	  }

	  _createClass(PfHello, [{
	    key: 'attachedCallback',

	    /**
	     * Called when an instance was inserted into the document
	     */
	    value: function attachedCallback() {
	      this.appendChild(this._template.content);
	    }

	    /**
	     * Called when element's attribute value has changed
	     *
	     * @param {string} attrName The attribute name that has changed
	     * @param {string} oldValue The old attribute value
	     * @param {string} newValue The new attribute value
	     */

	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldValue, newValue) {
	      if (attrName === "text") {
	        this.refresh();
	      }
	    }

	    /**
	     * Called when an instance of the element is created
	     */

	  }, {
	    key: 'createdCallback',
	    value: function createdCallback() {
	      this._template = document.createElement('template');
	      this._template.innerHTML = _pfHello2.default;
	      this.refresh();
	    }

	    /**
	     * Get nodes from given selector
	     *
	     * @param selector The query selector identifying the elements to retrieve
	     * @returns {Element}
	     * @private
	     */

	  }, {
	    key: '_getNodes',
	    value: function _getNodes(selector) {
	      var el = this.querySelectorAll(selector);
	      if (el.length === 0) {
	        el = this._template.content.querySelectorAll(selector);
	      }
	      return el;
	    }

	    /**
	     * Helper function to init text
	     * @private
	     */

	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      var nodes = this._getNodes('span');
	      var el = nodes[nodes.length - 1];
	      el.innerHTML = _i18nUtils.i18n.gettext("Hello World!");
	    }
	  }]);

	  return PfHello;
	}(HTMLElement);

	(function () {
	  document.registerElement('pf-hello', PfHello);
	})();

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PfHelloTemplate = "\n<span></span>\n";
	exports.default = PfHelloTemplate;

/***/ },
/* 23 */
/***/ function(module, exports) {

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

	var PfDropdown = exports.PfDropdown = function (_HTMLElement) {
	  _inherits(PfDropdown, _HTMLElement);

	  function PfDropdown() {
	    _classCallCheck(this, PfDropdown);

	    return _possibleConstructorReturn(this, (PfDropdown.__proto__ || Object.getPrototypeOf(PfDropdown)).apply(this, arguments));
	  }

	  _createClass(PfDropdown, [{
	    key: 'attachedCallback',


	    /**
	     * Called when an instance was inserted into the document
	     */
	    value: function attachedCallback() {
	      var _this2 = this;

	      this._button = this.querySelector('.btn');
	      this._disabled = /\bdisabled/.test(this._button.className);
	      var menu = this.querySelector('.dropdown-menu');

	      this._button.addEventListener('click', function () {
	        _this2._showDropdown();
	      });

	      document.addEventListener('click', function (event) {
	        //close dropdown if clicked outside menu
	        if (event.target !== menu && event.target !== _this2._button && !menu.contains(event.target) && !_this2._button.contains(event.target)) {
	          _this2._clearDropdown();
	        }
	      });

	      document.addEventListener('keydown', function (event) {
	        if (/input|textarea/.test(event.target.tagName)) {
	          return;
	        }
	        if (_this2._disabled) {
	          return;
	        }
	        var active = /\bopen/.test(_this2._button.parentNode.className);

	        //check if dropdown is open
	        if (active) {
	          _this2._keyHandler(event);
	        }
	      });

	      // disable click for disabled Items
	      this.disableClick();

	      this.initialized = true;
	      this.dispatchEvent(new CustomEvent('initialized', {}));
	    }

	    /**
	     * Called when element's attribute value has changed
	     *
	     * @param {string} attrName The attribute name that has changed
	     * @param {string} oldValue The old attribute value
	     * @param {string} newValue The new attribute value
	     */

	  }, {
	    key: 'attributeChangedCallback',
	    value: function attributeChangedCallback(attrName, oldValue, newValue) {}

	    /**
	     * Called when an instance of the element is created
	     */

	  }, {
	    key: 'createdCallback',
	    value: function createdCallback() {}

	    /**
	     *Toggle the dropdown
	     */

	  }, {
	    key: 'toggle',
	    value: function toggle() {
	      this._showDropdown();
	    }

	    /**
	     * Disable click on disabled items
	     */

	  }, {
	    key: 'disableClick',
	    value: function disableClick() {
	      var self = this;
	      var items = this.querySelectorAll('ul.dropdown-menu li a');

	      var _loop = function _loop(i) {
	        items[i].onclick = function () {
	          if (items[i].parentNode.classList.contains('disabled')) {
	            return false;
	          }
	          self.dispatchEvent(new CustomEvent('itemClicked', {}));
	          return true;
	        };
	      };

	      for (var i = 0; i < items.length; i++) {
	        _loop(i);
	      }
	    }
	    /**
	     * Open the dropdown
	     *
	     */

	  }, {
	    key: '_showDropdown',
	    value: function _showDropdown() {
	      var button = this.querySelector('.btn');
	      if (/\bdisabled/.test(button.className)) {
	        return;
	      }
	      var active = /\bopen/.test(button.parentNode.className);
	      if (!active) {
	        this._detectTouch();
	        this.dispatchEvent(new CustomEvent('show.bs.dropdown', {}));
	        button.focus();
	        button.setAttribute('aria-expanded', 'true');
	        button.parentNode.classList.toggle('open');
	        this.dispatchEvent(new CustomEvent('shown.bs.dropdown', {}));
	      }
	      if (active) {
	        this._clearDropdown();
	      }
	    }
	    /**
	     * Close the dropdown
	     *
	     */

	  }, {
	    key: '_clearDropdown',
	    value: function _clearDropdown() {
	      var button = this.querySelector('.btn');
	      var backdrop = this.querySelector('.dropdown-backdrop');
	      if (backdrop) {
	        backdrop.parentNode.removeChild(backdrop);
	      }
	      this.dispatchEvent(new CustomEvent('hide.bs.dropdown', {}));
	      button.setAttribute('aria-expanded', 'false');
	      button.parentNode.classList.remove('open');
	      this.dispatchEvent(new CustomEvent('hidden.bs.dropdown', {}));
	    }

	    /**
	     * Support for phone browser
	     *
	     */

	  }, {
	    key: '_detectTouch',
	    value: function _detectTouch() {
	      if ('ontouchstart' in document.documentElement) {
	        var div = document.createElement('div');
	        div.classList.add('dropdown-backdrop');
	        this.insertBefore(div, this.querySelector('.dropdown-menu'));
	        div.addEventListener('click', this._clearDropdown());
	      }
	    }

	    /**
	     *Support for accessibility
	     *
	     * @param {Event} event
	     */

	  }, {
	    key: '_keyHandler',
	    value: function _keyHandler(event) {
	      var keycode = event.keyCode ? event.keyCode : event.which;

	      // escape key
	      if (keycode === 27) {
	        this._clearDropdown();
	        this._button.focus();
	      }

	      // up and down key
	      if (keycode === 38 || keycode === 40) {

	        event.preventDefault();
	        event.stopPropagation();

	        var menuItem = this.querySelectorAll('.dropdown-menu li:not(.disabled) a');
	        // index: guide focus on menu items
	        var index = Array.prototype.indexOf.call(menuItem, event.target);

	        if (keycode === 38 && index > 0) {
	          index--;
	        }
	        if (keycode === 40 && index < menuItem.length - 1) {
	          index++;
	        }
	        if (index < 0) {
	          index = 0;
	        }
	        menuItem[index].focus();
	      }
	    }
	  }]);

	  return PfDropdown;
	}(HTMLElement);

	(function () {
	  document.registerElement('pf-dropdown', PfDropdown);
	})();

/***/ }
/******/ ]);
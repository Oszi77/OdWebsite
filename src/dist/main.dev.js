"use strict";

var _vue = require("vue");

var _Test = _interopRequireDefault(require("./Test.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Templétek imprtálása.
//Web alkalmazás létrhozása .vue sablonból id = "app" al. 
(0, _vue.createApp)(_Test["default"]).mount('#app');
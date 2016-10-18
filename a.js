"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by wujincun on 2016/10/17.
 */
var fn = function fn() {
    console.log(123);
};
fn();

var Student = function () {
    function Student() {
        _classCallCheck(this, Student);
    }

    _createClass(Student, [{
        key: "hello",
        value: function hello() {
            console.log("hello");
        }
    }]);

    return Student;
}();

var s = new Student();
s.hello();

var leo = function (_Student) {
    _inherits(leo, _Student);

    function leo() {
        _classCallCheck(this, leo);

        return _possibleConstructorReturn(this, (leo.__proto__ || Object.getPrototypeOf(leo)).apply(this, arguments));
    }

    return leo;
}(Student);

var l = new leo();
l.hello();

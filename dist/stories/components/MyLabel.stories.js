var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: 'UI/My Label',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' }
    }
};
var Template = function (args) { return _jsx(MyLabel, __assign({}, args), void 0); };
// esto es como crear una nueva copia de nuestro componente pero con alguna variacion en los parametros quie queramos
export var Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false, // true capitaliza toda la palabra
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true, // true capitaliza toda la palabra
};
export var Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary',
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
};
export var CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    customColor: '#5517ac',
};
export var CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: 'h1',
    customColor: 'white',
    backgroundColor: 'black',
};

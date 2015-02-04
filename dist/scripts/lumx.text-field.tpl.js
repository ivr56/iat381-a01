angular.module("lumx.text-field").run(['$templateCache', function(a) { a.put('lumx.text_field.html', '<div class="text-field text-field--{{ theme }}-theme"\n' +
    '     ng-class="{ \'text-field--is-valid\': valid(),\n' +
    '                 \'text-field--has-error\': error(),\n' +
    '                 \'text-field--is-disabled\': disabled(),\n' +
    '                 \'text-field--fixed-label\': fixedLabel(),\n' +
    '                 \'text-field--is-active\': data.model || data.focused,\n' +
    '                 \'text-field--is-focused\': data.focused,\n' +
    '                 \'text-field--label-hidden\': fixedLabel() && data.model,\n' +
    '                 \'text-field--with-icon\': icon && fixedLabel() }">\n' +
    '    <label class="text-field__label">\n' +
    '        {{ label }}\n' +
    '    </label>\n' +
    '\n' +
    '    <div class="text-field__icon" ng-if="icon && fixedLabel() ">\n' +
    '        <i class="mdi mdi--{{ icon }}"></i>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-transclude="1"></div>\n' +
    '</div>\n' +
    '');
	 }]);
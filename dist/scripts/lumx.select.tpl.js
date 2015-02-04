angular.module("lumx.select").run(['$templateCache', function(a) { a.put('lumx.select_selected.html', '<div lx-dropdown-toggle>\n' +
    '    <span class="lx-select__floating-label" ng-if="getSelectedElements().length !== 0 && floatingLabel">{{ placeholder }}</span>\n' +
    '\n' +
    '    <div class="lx-select__selected"\n' +
    '         ng-class="{ \'lx-select__selected--is-unique\': !multiple,\n' +
    '                     \'lx-select__selected--is-multiple\': multiple && getSelectedElements().length > 0,\n' +
    '                     \'lx-select__selected--placeholder\': getSelectedElements().length === 0 }"\n' +
    '         lx-ripple>\n' +
    '        <span ng-if="getSelectedElements().length === 0">{{ placeholder }}</span>\n' +
    '\n' +
    '        <!-- ng-repeat is used to manage the initialization of the $select even for non-multiple selects -->\n' +
    '        <div ng-repeat="$selected in getSelectedElements()" ng-if="!multiple">\n' +
    '            <i class="lx-select__close mdi mdi--cancel" ng-click="unselect($selected, $event)" ng-if="allowClear"></i>\n' +
    '            <span ng-transclude="child"></span>\n' +
    '        </div>\n' +
    '\n' +
    '        <div ng-if="multiple">\n' +
    '            <div class="lx-select__tag" ng-repeat="$selected in getSelectedElements()">\n' +
    '                <span ng-transclude="child"></span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	a.put('lumx.select_choices.html', '<lx-dropdown-menu class="lx-select__choices">\n' +
    '    <ul ng-if="!tree">\n' +
    '        <li ng-if="getSelectedElements().length > 0">\n' +
    '            <div class="lx-select__chosen"\n' +
    '                 ng-class="{ \'lx-select__chosen--is-multiple\': multiple }"\n' +
    '                 ng-bind-html="getSelectedTemplate()"></div>\n' +
    '        </li>\n' +
    '\n' +
    '        <li>\n' +
    '            <div class="lx-select__filter dropdown-filter">\n' +
    '                <lx-search-filter model="data.filter" filter-width="100%" lx-dropdown-filter></lx-search-filter>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '\n' +
    '        <li class="lx-select__help" ng-if="isHelperVisible()">\n' +
    '            <span ng-if="filterNeeded()">Type minimum {{ minLength }} to search</span>\n' +
    '            <span ng-if="hasNoResults() && !filterNeeded()">No results!</span>\n' +
    '        </li>\n' +
    '\n' +
    '        <li ng-repeat="$choice in choices() | filter:data.filter" ng-if="isChoicesVisible()">\n' +
    '            <a class="lx-select__choice dropdown-link"\n' +
    '               ng-class="{ \'lx-select__choice--is-multiple\': multiple,\n' +
    '                           \'lx-select__choice--is-selected\': isSelected($choice) }"\n' +
    '               ng-click="toggle($choice, $event)"\n' +
    '               ng-transclude="child"></a>\n' +
    '        </li>\n' +
    '\n' +
    '        <li class="lx-select__loader" ng-if="loading === \'true\'">\n' +
    '            <i class="mdi mdi--loop"></i>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</lx-dropdown-menu>');
	a.put('lumx.select.html', '<div class="lx-select"\n' +
    '     ng-class="{ \'lx-select--is-unique\': !multiple,\n' +
    '                 \'lx-select--is-multiple\': multiple }">\n' +
    '    <lx-dropdown width="32" from-top>\n' +
    '        <div ng-transclude="parent"></div>\n' +
    '    </lx-dropdown>\n' +
    '</div>\n' +
    '');
	 }]);
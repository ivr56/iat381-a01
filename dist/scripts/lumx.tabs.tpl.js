angular.module("lumx.tabs").run(['$templateCache', function(a) { a.put('lumx.tabs.html', '<div class="tabs tabs--theme-{{ linksTc }} tabs--layout-{{ layout }}"\n' +
    '     ng-class="{ \'tabs--no-divider\': noDivider }">\n' +
    '    <ul class="tabs__links bgc-{{ linksBgc }} z-depth{{ zDepth }}">\n' +
    '        <li ng-repeat="tab in getTabs()">\n' +
    '            <a lx-tab-link\n' +
    '               class="tabs-link"\n' +
    '               ng-class="{ \'tabs-link--is-active\': $index === activeTab }"\n' +
    '               ng-click="setActiveTab($index)"\n' +
    '               lx-ripple="{{ indicator }}">\n' +
    '               <span ng-if="tab.icon !== undefined"><i class="mdi mdi--{{ tab.icon }}"></i></span>\n' +
    '               <span ng-if="tab.icon === undefined">{{ tab.heading }}</i></span>\n' +
    '            </a>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <div class="tabs__panes" ng-transclude="1"></div>\n' +
    '\n' +
    '    <div class="tabs__indicator bgc-{{ indicator }}"></div>\n' +
    '</div>\n' +
    '');
	a.put('lumx.tab.html', '<div class="tabs-pane" ng-if="index === data.activeTab" ng-transclude="2"></div>\n' +
    '');
	 }]);
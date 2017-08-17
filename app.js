var UnivColor = {

    init : function () {
        this.univColorList = this.getUnivColorList();
        this.sortedByColor = this.sortedByColor(this.univColorList);

        this.rendering(this.sortedByColor);
        this.eventBindings();
    },

    getUnivColorList : function () {
        return univNames.map(function(name){
            var univObject = {};
            univObject.color = getColorByUnivName(name);
            univObject.name = name;
            return univObject;
        });
    },

    eventBindings : function () {
        $('#input').on('keyup', this.searchUnivColor);
        $('#input').autocomplete({ source: univNames });

        $('.colorBox').on('click', this.viewUnivColor.bind(this));
        $('.colorBox').on('hover', this.hoverEvent);
    },

    searchUnivColor : function (e) {
        var univName = (e.target.value).trim();
        var color = getColorByUnivName(univName);
        var $haxCode = $('#hexCode');
        if(color !== 'Not Found') {
            $haxCode.css({'background': color, 'color': '#ffffff'}).text(color);
        }

        return false;
    },

    viewUnivColor : function (e) {
        var self = e.currentTarget;
        var $haxCode = $('#hexCode');
        var color = this.rgbTohexCode($(self).css('background-color'));
        $haxCode.css({'background': color, 'color': '#ffffff', height: "32px"}).text(color);
    },

    rgbTohexCode : function (colorval) {
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        delete(parts[0]);
        for (var i = 1; i <= 3; ++i) {
            parts[i] = parseInt(parts[i]).toString(16).toUpperCase();
            if (parts[i].length == 1) parts[i] = '0' + parts[i];
        }
        return color = '#' + parts.join('');
    },

    checkSafari : function () {
        if(navigator.userAgent.search("Safari") >= 0) return true;
        return false;
    },

    sortedByColor : function (univColorList) {
        return univColorList.sort(function(colorA, colorB) {
            return surfacecurve.color(colorA.color).hue() - surfacecurve.color(colorB.color).hue();
        });
    },

    rendering : function (sortedByColorList) {
        var $listWrapper = $('#university');

        var univListTemplate = sortedByColorList.map(function(univ) {
            var box = $('<div/>').addClass('colorBox').css({'background': univ.color}).text(univ.name);
            // If the browser is Safari, add class ".safari"
            if(this.checkSafari()) box.addClass('safari');
            return box.get(0);
        }.bind(this));

        $listWrapper.html(univListTemplate);
    }
}

$(function() {
    UnivColor.init(univNames);
});

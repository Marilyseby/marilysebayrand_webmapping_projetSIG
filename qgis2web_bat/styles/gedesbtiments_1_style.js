var size = 0;
var placement = 'point';

var style_gedesbtiments_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("ffo_bat_annee_construction");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 1862.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(73,32,13,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1862.000000 && value <= 1940.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(195,116,39,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1940.000000 && value <= 1987.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,215,79,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1987.000000 && value <= 2023.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(98,160,36,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};

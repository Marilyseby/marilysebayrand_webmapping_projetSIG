var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.543000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DPE_1 = new ol.format.GeoJSON();
var features_DPE_1 = format_DPE_1.readFeatures(json_DPE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPE_1.addFeatures(features_DPE_1);
var lyr_DPE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPE_1, 
                style: style_DPE_1,
                popuplayertitle: 'DPE',
                interactive: true,
    title: 'DPE<br />\
    <img src="styles/legend/DPE_1_0.png" /> A<br />\
    <img src="styles/legend/DPE_1_1.png" /> B<br />\
    <img src="styles/legend/DPE_1_2.png" /> C<br />\
    <img src="styles/legend/DPE_1_3.png" /> D<br />\
    <img src="styles/legend/DPE_1_4.png" /> E<br />\
    <img src="styles/legend/DPE_1_5.png" /> F<br />\
    <img src="styles/legend/DPE_1_6.png" /> G<br />\
    <img src="styles/legend/DPE_1_7.png" /> No data<br />' });
var group_3D = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: '3D'});
var group_Rparerlesiris = new ol.layer.Group({
                                layers: [lyr_DPE_1,],
                                fold: 'close',
                                title: 'Réparer les iris'});
var group_Btimentssupp = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Bâtiments supp'});

lyr_OpenStreetMap_0.setVisible(true);lyr_DPE_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Rparerlesiris];
lyr_DPE_1.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'IRIS_final_fid': 'IRIS_final_fid', 'IRIS_final_cleabs': 'IRIS_final_cleabs', 'IRIS_final_nom_commune': 'IRIS_final_nom_commune', 'IRIS_final_iris': 'IRIS_final_iris', 'IRIS_final_code_iris': 'IRIS_final_code_iris', 'IRIS_final_nom_iris': 'IRIS_final_nom_iris', 'IRIS_final_type_iris': 'IRIS_final_type_iris', 'IRIS_final_fid_2': 'IRIS_final_fid_2', 'IRIS_final_ID': 'IRIS_final_ID', 'IRIS_final_INSEE_COM': 'IRIS_final_INSEE_COM', 'IRIS_final_INSEE_CAN': 'IRIS_final_INSEE_CAN', 'IRIS_final_INSEE_ARR': 'IRIS_final_INSEE_ARR', 'IRIS_final_INSEE_COL': 'IRIS_final_INSEE_COL', 'IRIS_final_INSEE_DEP': 'IRIS_final_INSEE_DEP', 'IRIS_final_INSEE_REG': 'IRIS_final_INSEE_REG', 'IRIS_final_POPULATION': 'IRIS_final_POPULATION', 'IRIS_final_SUPERF_CAD': 'IRIS_final_SUPERF_CAD', 'IRIS_final_DATE_CREAT': 'IRIS_final_DATE_CREAT', 'IRIS_final_DATE_MAJ': 'IRIS_final_DATE_MAJ', 'IRIS_final_DATE_APP': 'IRIS_final_DATE_APP', 'IRIS_final_DATE_CONF': 'IRIS_final_DATE_CONF', 'IRIS_final_CODE_POST': 'IRIS_final_CODE_POST', 'IRIS_final_NOM': 'IRIS_final_NOM', 'IRIS_final_CL_ARROND': 'IRIS_final_CL_ARROND', 'IRIS_final_CL_COLLTER': 'IRIS_final_CL_COLLTER', 'IRIS_final_CL_DEPART': 'IRIS_final_CL_DEPART', 'IRIS_final_CL_REGION': 'IRIS_final_CL_REGION', 'IRIS_final_CAPITALE': 'IRIS_final_CAPITALE', 'IRIS_final_DATE_RCT': 'IRIS_final_DATE_RCT', 'IRIS_final_RECENSEUR': 'IRIS_final_RECENSEUR', 'IRIS_final_CODE_SIREN': 'IRIS_final_CODE_SIREN', 'IRIS_final_SIREN_EPCI': 'IRIS_final_SIREN_EPCI', 'IRIS_final_ID_CH_LIEU': 'IRIS_final_ID_CH_LIEU', 'IRIS_final_ID_AUT_ADM': 'IRIS_final_ID_AUT_ADM', 'IRIS_final_DPE_SCORE_mean': 'IRIS_final_DPE_SCORE_mean', 'IRIS_final_DPE_SCORE_majority': 'IRIS_final_DPE_SCORE_majority', 'IRIS_final_ffo_bat_annee_construction_mean': 'IRIS_final_ffo_bat_annee_construction_mean', 'DPE_SCORE_count': 'DPE_SCORE_count', 'DPE_SCORE_majority': 'DPE_SCORE_majority', });
lyr_DPE_1.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'IRIS_final_fid': 'TextEdit', 'IRIS_final_cleabs': 'TextEdit', 'IRIS_final_nom_commune': 'TextEdit', 'IRIS_final_iris': 'TextEdit', 'IRIS_final_code_iris': 'TextEdit', 'IRIS_final_nom_iris': 'TextEdit', 'IRIS_final_type_iris': 'TextEdit', 'IRIS_final_fid_2': 'TextEdit', 'IRIS_final_ID': 'TextEdit', 'IRIS_final_INSEE_COM': 'TextEdit', 'IRIS_final_INSEE_CAN': 'TextEdit', 'IRIS_final_INSEE_ARR': 'TextEdit', 'IRIS_final_INSEE_COL': 'TextEdit', 'IRIS_final_INSEE_DEP': 'TextEdit', 'IRIS_final_INSEE_REG': 'TextEdit', 'IRIS_final_POPULATION': 'TextEdit', 'IRIS_final_SUPERF_CAD': 'TextEdit', 'IRIS_final_DATE_CREAT': 'TextEdit', 'IRIS_final_DATE_MAJ': 'TextEdit', 'IRIS_final_DATE_APP': 'TextEdit', 'IRIS_final_DATE_CONF': 'TextEdit', 'IRIS_final_CODE_POST': 'TextEdit', 'IRIS_final_NOM': 'TextEdit', 'IRIS_final_CL_ARROND': 'TextEdit', 'IRIS_final_CL_COLLTER': 'TextEdit', 'IRIS_final_CL_DEPART': 'TextEdit', 'IRIS_final_CL_REGION': 'TextEdit', 'IRIS_final_CAPITALE': 'TextEdit', 'IRIS_final_DATE_RCT': 'TextEdit', 'IRIS_final_RECENSEUR': 'TextEdit', 'IRIS_final_CODE_SIREN': 'TextEdit', 'IRIS_final_SIREN_EPCI': 'TextEdit', 'IRIS_final_ID_CH_LIEU': 'TextEdit', 'IRIS_final_ID_AUT_ADM': 'TextEdit', 'IRIS_final_DPE_SCORE_mean': 'TextEdit', 'IRIS_final_DPE_SCORE_majority': 'TextEdit', 'IRIS_final_ffo_bat_annee_construction_mean': 'TextEdit', 'DPE_SCORE_count': 'TextEdit', 'DPE_SCORE_majority': 'TextEdit', });
lyr_DPE_1.set('fieldLabels', {'fid': 'no label', 'cleabs': 'no label', 'code_insee': 'no label', 'nom_commune': 'no label', 'iris': 'no label', 'code_iris': 'no label', 'nom_iris': 'no label', 'type_iris': 'no label', 'IRIS_final_fid': 'no label', 'IRIS_final_cleabs': 'no label', 'IRIS_final_nom_commune': 'no label', 'IRIS_final_iris': 'no label', 'IRIS_final_code_iris': 'no label', 'IRIS_final_nom_iris': 'no label', 'IRIS_final_type_iris': 'no label', 'IRIS_final_fid_2': 'no label', 'IRIS_final_ID': 'no label', 'IRIS_final_INSEE_COM': 'no label', 'IRIS_final_INSEE_CAN': 'no label', 'IRIS_final_INSEE_ARR': 'no label', 'IRIS_final_INSEE_COL': 'no label', 'IRIS_final_INSEE_DEP': 'no label', 'IRIS_final_INSEE_REG': 'no label', 'IRIS_final_POPULATION': 'no label', 'IRIS_final_SUPERF_CAD': 'no label', 'IRIS_final_DATE_CREAT': 'no label', 'IRIS_final_DATE_MAJ': 'no label', 'IRIS_final_DATE_APP': 'no label', 'IRIS_final_DATE_CONF': 'no label', 'IRIS_final_CODE_POST': 'no label', 'IRIS_final_NOM': 'no label', 'IRIS_final_CL_ARROND': 'no label', 'IRIS_final_CL_COLLTER': 'no label', 'IRIS_final_CL_DEPART': 'no label', 'IRIS_final_CL_REGION': 'no label', 'IRIS_final_CAPITALE': 'no label', 'IRIS_final_DATE_RCT': 'no label', 'IRIS_final_RECENSEUR': 'no label', 'IRIS_final_CODE_SIREN': 'no label', 'IRIS_final_SIREN_EPCI': 'no label', 'IRIS_final_ID_CH_LIEU': 'no label', 'IRIS_final_ID_AUT_ADM': 'no label', 'IRIS_final_DPE_SCORE_mean': 'no label', 'IRIS_final_DPE_SCORE_majority': 'no label', 'IRIS_final_ffo_bat_annee_construction_mean': 'no label', 'DPE_SCORE_count': 'no label', 'DPE_SCORE_majority': 'header label - always visible', });
lyr_DPE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
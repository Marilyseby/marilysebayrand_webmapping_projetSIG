var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.543000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_gedesbtiments_1 = new ol.format.GeoJSON();
var features_gedesbtiments_1 = format_gedesbtiments_1.readFeatures(json_gedesbtiments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gedesbtiments_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gedesbtiments_1.addFeatures(features_gedesbtiments_1);
var lyr_gedesbtiments_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gedesbtiments_1, 
                style: style_gedesbtiments_1,
                popuplayertitle: 'Âge des bâtiments',
                interactive: true,
    title: 'Âge des bâtiments<br />\
    <img src="styles/legend/gedesbtiments_1_0.png" /> 0 - 1862<br />\
    <img src="styles/legend/gedesbtiments_1_1.png" /> 1862 - 1940<br />\
    <img src="styles/legend/gedesbtiments_1_2.png" /> 1940 - 1987<br />\
    <img src="styles/legend/gedesbtiments_1_3.png" /> 1987 - 2023<br />' });
var group_3D = new ol.layer.Group({
                                layers: [lyr_gedesbtiments_1,],
                                fold: 'open',
                                title: '3D'});

lyr_OpenStreetMap_0.setVisible(true);lyr_gedesbtiments_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_3D];
lyr_gedesbtiments_1.set('fieldAliases', {'fid': 'fid', 'batiment_groupe_id': 'batiment_groupe_id', 'code_departement_insee': 'code_departement_insee', 's_geom_groupe': 's_geom_groupe', 'code_iris': 'code_iris', 'code_commune_insee': 'code_commune_insee', 'libelle_commune_insee': 'libelle_commune_insee', 'code_epci_insee': 'code_epci_insee', 'dpe_mix_arrete_identifiant_dpe': 'dpe_mix_arrete_identifiant_dpe', 'dpe_mix_arrete_arrete_2021': 'dpe_mix_arrete_arrete_2021', 'dpe_mix_arrete_type_dpe': 'dpe_mix_arrete_type_dpe', 'dpe_mix_arrete_type_batiment_dpe': 'dpe_mix_arrete_type_batiment_dpe', 'dpe_mix_arrete_periode_construction_dpe': 'dpe_mix_arrete_periode_construction_dpe', 'dpe_mix_arrete_annee_construction_dpe': 'dpe_mix_arrete_annee_construction_dpe', 'dpe_mix_arrete_version': 'dpe_mix_arrete_version', 'dpe_mix_arrete_date_etablissement_dpe': 'dpe_mix_arrete_date_etablissement_dpe', 'dpe_mix_arrete_date_reception_dpe': 'dpe_mix_arrete_date_reception_dpe', 'dpe_mix_arrete_classe_bilan_dpe': 'dpe_mix_arrete_classe_bilan_dpe', 'dpe_mix_arrete_classe_emission_ges': 'dpe_mix_arrete_classe_emission_ges', 'dpe_ter_source_nouvelle_base_ademe': 'dpe_ter_source_nouvelle_base_ademe', 'dpe_ter_date_etablissement_dpe': 'dpe_ter_date_etablissement_dpe', 'dpe_ter_date_reception_dpe': 'dpe_ter_date_reception_dpe', 'ffo_bat_annee_construction': 'ffo_bat_annee_construction', 'qpv_nom_quartier': 'qpv_nom_quartier', 'rnc_periode_construction_max': 'rnc_periode_construction_max', 'rnc_l_annee_construction': 'rnc_l_annee_construction', 'rpls_nb_classe_ener_a': 'rpls_nb_classe_ener_a', 'rpls_nb_classe_ener_b': 'rpls_nb_classe_ener_b', 'rpls_nb_classe_ener_c': 'rpls_nb_classe_ener_c', 'rpls_nb_classe_ener_d': 'rpls_nb_classe_ener_d', 'rpls_nb_classe_ener_e': 'rpls_nb_classe_ener_e', 'rpls_nb_classe_ener_f': 'rpls_nb_classe_ener_f', 'rpls_nb_classe_ener_g': 'rpls_nb_classe_ener_g', 'rpls_nb_classe_ener_nc': 'rpls_nb_classe_ener_nc', 'rpls_l_annee_construction': 'rpls_l_annee_construction', 'DPE_SCORE': 'DPE_SCORE', 'CLASSE_AGE': 'CLASSE_AGE', });
lyr_gedesbtiments_1.set('fieldImages', {'fid': 'TextEdit', 'batiment_groupe_id': 'TextEdit', 'code_departement_insee': 'TextEdit', 's_geom_groupe': 'Range', 'code_iris': 'TextEdit', 'code_commune_insee': 'TextEdit', 'libelle_commune_insee': 'TextEdit', 'code_epci_insee': 'TextEdit', 'dpe_mix_arrete_identifiant_dpe': 'TextEdit', 'dpe_mix_arrete_arrete_2021': 'CheckBox', 'dpe_mix_arrete_type_dpe': 'TextEdit', 'dpe_mix_arrete_type_batiment_dpe': 'TextEdit', 'dpe_mix_arrete_periode_construction_dpe': 'TextEdit', 'dpe_mix_arrete_annee_construction_dpe': 'Range', 'dpe_mix_arrete_version': 'TextEdit', 'dpe_mix_arrete_date_etablissement_dpe': 'DateTime', 'dpe_mix_arrete_date_reception_dpe': 'DateTime', 'dpe_mix_arrete_classe_bilan_dpe': 'TextEdit', 'dpe_mix_arrete_classe_emission_ges': 'TextEdit', 'dpe_ter_source_nouvelle_base_ademe': 'CheckBox', 'dpe_ter_date_etablissement_dpe': 'DateTime', 'dpe_ter_date_reception_dpe': 'DateTime', 'ffo_bat_annee_construction': 'Range', 'qpv_nom_quartier': 'TextEdit', 'rnc_periode_construction_max': 'TextEdit', 'rnc_l_annee_construction': 'TextEdit', 'rpls_nb_classe_ener_a': 'TextEdit', 'rpls_nb_classe_ener_b': 'TextEdit', 'rpls_nb_classe_ener_c': 'TextEdit', 'rpls_nb_classe_ener_d': 'TextEdit', 'rpls_nb_classe_ener_e': 'TextEdit', 'rpls_nb_classe_ener_f': 'TextEdit', 'rpls_nb_classe_ener_g': 'TextEdit', 'rpls_nb_classe_ener_nc': 'TextEdit', 'rpls_l_annee_construction': 'TextEdit', 'DPE_SCORE': 'Range', 'CLASSE_AGE': 'TextEdit', });
lyr_gedesbtiments_1.set('fieldLabels', {'fid': 'hidden field', 'batiment_groupe_id': 'hidden field', 'code_departement_insee': 'hidden field', 's_geom_groupe': 'hidden field', 'code_iris': 'hidden field', 'code_commune_insee': 'hidden field', 'libelle_commune_insee': 'hidden field', 'code_epci_insee': 'hidden field', 'dpe_mix_arrete_identifiant_dpe': 'hidden field', 'dpe_mix_arrete_arrete_2021': 'hidden field', 'dpe_mix_arrete_type_dpe': 'hidden field', 'dpe_mix_arrete_type_batiment_dpe': 'hidden field', 'dpe_mix_arrete_periode_construction_dpe': 'hidden field', 'dpe_mix_arrete_annee_construction_dpe': 'hidden field', 'dpe_mix_arrete_version': 'hidden field', 'dpe_mix_arrete_date_etablissement_dpe': 'hidden field', 'dpe_mix_arrete_date_reception_dpe': 'hidden field', 'dpe_mix_arrete_classe_bilan_dpe': 'hidden field', 'dpe_mix_arrete_classe_emission_ges': 'hidden field', 'dpe_ter_source_nouvelle_base_ademe': 'hidden field', 'dpe_ter_date_etablissement_dpe': 'hidden field', 'dpe_ter_date_reception_dpe': 'hidden field', 'ffo_bat_annee_construction': 'hidden field', 'qpv_nom_quartier': 'hidden field', 'rnc_periode_construction_max': 'hidden field', 'rnc_l_annee_construction': 'hidden field', 'rpls_nb_classe_ener_a': 'hidden field', 'rpls_nb_classe_ener_b': 'hidden field', 'rpls_nb_classe_ener_c': 'hidden field', 'rpls_nb_classe_ener_d': 'hidden field', 'rpls_nb_classe_ener_e': 'hidden field', 'rpls_nb_classe_ener_f': 'hidden field', 'rpls_nb_classe_ener_g': 'hidden field', 'rpls_nb_classe_ener_nc': 'hidden field', 'rpls_l_annee_construction': 'hidden field', 'DPE_SCORE': 'hidden field', 'CLASSE_AGE': 'header label - always visible', });
lyr_gedesbtiments_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];

var format_aksesibilitas_univunion_0 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_0 = format_aksesibilitas_univunion_0.readFeatures(json_aksesibilitas_univunion_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_0.addFeatures(features_aksesibilitas_univunion_0);
var lyr_aksesibilitas_univunion_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_0, 
                style: style_aksesibilitas_univunion_0,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
                title: '<img src="styles/legend/aksesibilitas_univunion_0.png" /> aksesibilitas_univ — union'
            });
var format_univ_surabaya_1 = new ol.format.GeoJSON();
var features_univ_surabaya_1 = format_univ_surabaya_1.readFeatures(json_univ_surabaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_1.addFeatures(features_univ_surabaya_1);
var lyr_univ_surabaya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_1, 
                style: style_univ_surabaya_1,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
    title: 'univ_surabaya<br />\
    <img src="styles/legend/univ_surabaya_1_0.png" /> <br />\
    <img src="styles/legend/univ_surabaya_1_1.png" /> ITS<br />\
    <img src="styles/legend/univ_surabaya_1_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/univ_surabaya_1_3.png" /> UNAIR<br />\
    <img src="styles/legend/univ_surabaya_1_4.png" /> UNESA<br />\
    <img src="styles/legend/univ_surabaya_1_5.png" /> UPNV Jatim<br />' });

lyr_aksesibilitas_univunion_0.setVisible(true);lyr_univ_surabaya_1.setVisible(true);
var layersList = [lyr_aksesibilitas_univunion_0,lyr_univ_surabaya_1];
lyr_aksesibilitas_univunion_0.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_1.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', });
lyr_aksesibilitas_univunion_0.set('fieldImages', {'fid': '', 'Access': '', });
lyr_univ_surabaya_1.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', });
lyr_aksesibilitas_univunion_0.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_univ_surabaya_1.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', });
lyr_univ_surabaya_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
Ext.define('openmusic.view.main.TrackSong', {
	extend: 'Ext.panel.Panel',
	xtype: 'tracksong',
	
	layout: {
        type: 'border'
    },
	
	height: 150,
	
	items: [{
		xtype: 'panel',
		region: 'west',
		width: 100,
		height: 150,
		border: true,
		bodyStyle: 'background:#ffc; padding:10px;',
		html: "Track01"
	},{
		xtype: 'panel',
		region: 'center',
		height: 150,
		border: true,
	}],
});
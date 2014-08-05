Ext.define('openmusic.view.soundbank.SoundUploader', {
	extend: 'Ext.toolbar.Toolbar',

	xtype: 'sounduploader',
	region: 'south',

	height: 40,

	items: [{
		xtype: 'button',
		text: 'Record',
		html: 'margin-left:10px',
		icon: 'app/images/icon/Sound.ico',
	},
	{
		xtype: 'button',
		text: 'Upload',
		icon: 'app/images/icon/Upload.ico',
	}],
});

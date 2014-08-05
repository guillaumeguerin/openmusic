Ext.define('ToolbarPanel', {
	extend: 'Ext.toolbar.Toolbar',

	xtype: 'toolbarpanel',
	region: 'center',
	height: 40,
	items: [{
		xtype: 'button',
		text: 'Home',
		icon: 'app/images/icon/Home.ico',
	},
	{
		xtype: 'button',
		text: 'Save',
		icon: 'app/images/icon/Save.ico',
	},
	{
		xtype: 'button',
		text: 'Song Properties',
		icon: 'app/images/icon/Notes.ico',
	},
	// begin using the right-justified button container
	'->', // same as { xtype: 'tbfill' }
	{
		xtype: 'button',
		text: 'Download',
		icon: 'app/images/icon/Download.ico',
	}],
});

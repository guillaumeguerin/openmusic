Ext.define('openmusic.view.soundbank.SoundTree', {
	extend: 'Ext.tree.Panel',

	xtype: 'soundtree',
	viewConfig: {
	    plugins: { ptype: 'treeviewdragdrop' }
	},
	allowContainerDrops: true,
	
	region: 'center',

	rootVisible: false,
	root: {
	expanded: true,
	children: [
		{ text: "Guitar", leaf: true },
		{ text: "Piano", expanded: true, children: [
			{ text: "Grand Piano", leaf: true },
			{ text: "Rhodes", leaf: true}
		]},
		{ text: "Violin", leaf: true }
	]},

});

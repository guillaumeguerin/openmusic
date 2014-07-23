/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('openmusic.view.main.Main', {
    extend: 'Ext.container.Container',

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

	requires: ['Ext.tree.Panel', 'Ext.tree.plugin.TreeViewDragDrop'],
	
    layout: {
        type: 'border'
    },
	
    items: [
		{
			xtype: 'panel',
			region: 'north',
			height: 40,
			layout: 'border',
			items: [
				{
					xtype: 'toolbar',
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
				},
				{
					xtype: 'panel',
					region: 'east',
					width: 200,
					html: '<img src="app/images/icon/facebook-icon.png" style="padding-top: 8px; padding-left: 5px"></img>   <img src="app/images/icon/twitter-icon.png" style="padding-top: 8px; padding-left: 5px"></img>   <img src="app/images/icon/pinterest-icon.png" style="padding-top: 8px; padding-left: 5px"></img>   <img src="app/images/icon/mail-icon.png" style="padding-top: 8px; padding-left: 5px"></img>',
				}
			]
		},
		{
		title: 'Sound Bank',
        region: 'west',
        width: 250,
        split: true,
        tbar: [
		{ 
			xtype    : 'textfield',
            name     : 'field1',
            emptyText: 'enter search term'
		},
		{
            text: 'Search',
            handler: 'onClickButton'
        },
		],
		items: [{
			xtype: 'treepanel',
			plugins: ['treeviewdragdrop'],
			rootVisible: false,
			root: {
			expanded: true,
			children: [
				{ text: "Guitar", leaf: true },
				{ text: "Piano", expanded: true, children: [
					{ text: "Grand Piano", leaf: true },
					{ text: "Rhodes", leaf: true}
				] },
				{ text: "Violin", leaf: true }
			]
			},
		}],
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Composition',
			border: true,
			items: [{
					xtype: 'tracksong',
					height: 100,
				},
				{
					xtype: 'panel',
					height: 100,
				}
			],
        },{
            title: 'DJ Mix',
            html: '<h2>This is the DJ view.</h2>'
        }
		]
    },{
		xtype: 'panel',
		region: 'east',
		title: 'Chat',
		width: 250,
		collapsible: true,
		border: true,
		html: '<img src="app/images/ours.jpg" width="40px" height="40px" style="-webkit-border-radius: 20px; -moz-border-radius: 20px;-ms-border-radius: 20px;-o-border-radius: 20px;border-radius: 20px; vertical-align:middle;"></img><span style="margin-left:15px;"> Guillaume Guerin</span><br>  <img src="app/images/quentinpic.jpg" width="40px" height="40px" style="-webkit-border-radius: 20px; -moz-border-radius: 20px;-ms-border-radius: 20px;-o-border-radius: 20px;border-radius: 20px; vertical-align:middle;"></img><span style="margin-left:15px;"> Quentin Michaud</span><br>  <img src="app/images/polopic.jpg" width="40px" height="40px" style="-webkit-border-radius: 20px; -moz-border-radius: 20px;-ms-border-radius: 20px;-o-border-radius: 20px;border-radius: 20px; vertical-align:middle;"></img><span style="margin-left:15px;"> Paul Emile Boutoille</span><br>  <img src="app/images/thomaspic.jpg" width="40px" height="40px" style="-webkit-border-radius: 20px; -moz-border-radius: 20px;-ms-border-radius: 20px;-o-border-radius: 20px;border-radius: 20px; vertical-align:middle;"></img><span style="margin-left:15px;"> Thomas Porsin</span>'
	},
	{
		xtype: 'panel',
		region: 'south',
		height: 200,
		border: true,
	}
	]
});

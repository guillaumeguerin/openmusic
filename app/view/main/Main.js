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
					xtype: 'toolbarpanel',
				},
				{
					xtype: 'panel',
					region: 'east',
					width: 200,
					html: '<div style="padding-bottom:10px"> <div class="fb-share-button" data-href="http://publicmelody.com/"></div> <a href="https://twitter.com/share" class="twitter-share-button"><img src="app/images/icon/twitter-icon.png" style="padding-top: 8px; padding-left: 5px"></img></a> <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");</script>  <a href="//fr.pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.publicmelody.com%2F&media=http%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Take%20a%20look%20at%20my%20new%20project%20on%20publicmelody.com%20!" data-pin-do="buttonPin" data-pin-config="above" data-pin-color="red"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_20.png" /></a> <script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script> <img src="app/images/icon/mail-icon.png" style="padding-top: 8px; padding-left: 5px"></img></div>',
				}
			]
		},
		{
		title: 'Sound Bank',
		region: 'west',
		width: 250,
		split: true,
		layout: 'border',
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
				xtype: 'soundtree',
				},
				{
				xtype: 'sounduploader',
				}
			],
	    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Composition View',
			border: true,
			items: [{
					xtype: 'tracksong',
					height: 100,
					controller: 'tracksong',
					
				},
				{
					xtype: 'panel',
					height: 100,
				}
			],
        },{
            title: 'Mixing View',
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

Ext.define('openmusic.view.main.TrackSongController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.tracksong',

    init: function(component, eOpts){
	console.log(component);
	/*component.dropZone = Ext.create('Ext.dd.DropZone', component.getView(), {
	    onNodeDrop: function(){
		console.log('item dropped');
	    }
	});*/
    },

});

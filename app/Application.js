/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('openmusic.Application', {
    extend: 'Ext.app.Application',
    
    name: 'openmusic',

    views: [
		'main.Main', 'main.MainModel', 'main.MainController', 'main.TrackSong'
        // TODO: add views here
    ],

    controllers: [
        'Main', 'Root'
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});

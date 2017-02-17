/**
 *  @fileoverview Sound and Animation Templates test commands.
 *  @author birm@rbirm.us (Ryan Birmingham)
 *  @license Copyright 2017 Ryan Birmingham.
 */

var test = require('tape');
var soundimate = require("./soundimate");


test( 'initialization test', function(t) {
    t.plan(1);

    t.doesNotThrow( function() {
        var basic = new soundimate("paper");
    }, '*', "new soundimate() construction");
});

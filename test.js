const openalpr = require('node-openalpr');
function identify (id, path) {
    console.log (openalpr.IdentifyLicense (path, function (error, output) {
        var results = output.results;
        console.log (id +" "+ output.processing_time_ms +" "+ ((results.length > 0) ? results[0].plate : "No results"));

        if (id == 4) {
            console.log (openalpr.Stop ());
        }
    }));
}

openalpr.Start ();
openalpr.GetVersion ();

for (var i = 0; i < 5; i++) {
    identify (i, "data/df4.jpg");
}

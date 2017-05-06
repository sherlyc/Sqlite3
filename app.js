var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('Ning.db')

db.serialize(function(){
    db.run("CREATE TABLE user (id INT, dt TEXT)")

    var stmt = db.prepare("INSERT into user values (?,?)")
        for ( var i=0; i < 10; i++ ) {
            var d = new Date();
            var n = d.toLocaleTimeString()
            stmt.run(i, n)
        }
     stmt.finalize()
     db.each("SELECT id, dt from user", function(err, row){
         {
             console.log("User Id:" + row.id, row.dt)
         }
     })

     db.close();

})

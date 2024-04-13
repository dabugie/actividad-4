<script>
    
    var connection = new MySql.createConnection({
        host: 'sql111.infinityfree.com',
        user: 'si0_36353821',
        password: '2gXK93wzSdKF',
        database: 'if0_36353821_Contratame'
    });

    
    connection.connect(function(err) {
        if (err) throw err;
        console.log('Connected to the database!');
    });

    
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        
        var formData = new FormData(event.target);
        var name = formData.get('user_name');
        var company = formData.get('user_company');
        var email = formData.get('user_email');
        var message = formData.get('user_message');

        // Insert the form data into the database
        var sql = 'INSERT INTO messages (name, company, email, message) VALUES (?, ?, ?, ?)';
        connection.query(sql, [name, company, email, message], function(err, result) {
            if (err) throw err;
            console.log('Mensaje insertado en la base de datos.!');

            
            event.target.reset();
        });
    });

    
    connection.end();
</script>
var casper = require('casper').create({
    //logLevel: 'debug',
    //verbose: true
});
var system = require('system');
var email = system.env.redash_email;
var password = system.env.redash_password;

/*
casper.start('http://casperjs.org/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run();
*/

casper.options.viewportSize = { width: 950, height: 950 };

casper.on('remote.message', function (message) {
  this.echo('Message: ' + message);
});


casper.start('https://redash.datasci.storj.io', function() {
    this.waitForSelector("#inputEmail", function() {
        this.fill('form[name="login"]', {
            'email': email,
            'password': password
        }, false);

        this.click('button[type="submit"]')
        /*
        this.waitForSelector('input[type="submit"]', function() {
        }, function() {
            this.echo("timeout")
            casper.capture('screenshots/timeout.png')
        })
        */
        this.echo('clicked submit')
        this.wait(5000)
    }, function() {
        casper.capture('screenshots/timeout.png')
    })
});

casper.thenOpen('https://redash.datasci.storj.io/queries/1398', function() {
    this.echo('got to query')
    casper.capture('screenshots/query1.png')

    casper.waitForSelector(".content", function() {
        casper.capture('screenshots/query2.png')
    }, function() {
        casper.capture('screenshots/timeout.png')
    })
})

/*
casper.waitWhileSelector('form[name="login"]', function(){
    this.echo('selector is no more!');
});
*/

casper.then(function(){
    this.echo(this.getTitle());
});



casper.then(function() {
    casper.capture('screenshots/amazon-search-1.png');


    casper.capture('screenshots/amazon-search-2.png');
});

casper.then(function() {
    /*
    casper.capture('screenshots/amazon-search-3.png');
    test.assertTitle('Amazon.com: javascript');
    */
});

casper.run();


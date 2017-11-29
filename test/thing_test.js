define(['thing', 'jquery'],
    function(thing, jquery) {
        QUnit.module( "Test Things", {
            before: function() {
                // prepare something once for all tests
                this.fixture = jquery('#qunit-fixture');
                this.fixture.append('<div id="info"></div>');
            },
            beforeEach: function() {
               // prepare something before each test
            },
            afterEach: function() {
                // clean up after each test
            },
            after: function() {
            // clean up once after all tests are done
            }
        });
		QUnit.test('thing displays some text', function (assert) {
            assert.expect(1);

			//run test
			thing(true);
			assert.equal(this.fixture.text(), 'this is some text');
		});

		QUnit.test('thing displays another text', function (assert) {
            assert.expect(1);
			//set up
			var fixture = jquery('#qunit-fixture');
			fixture.append('<div id="info"></div>');

			thing(false);
			assert.equal(fixture.text(), 'this is another text')
		});

		QUnit.test('thing displays another text by default', function (assert) {
            assert.expect(1);
			//set up
			var fixture = jquery('#qunit-fixture');
			fixture.append('<div id="info"></div>');

			thing();
			assert.equal(fixture.text(), 'this is another tex')
		});
	}
);

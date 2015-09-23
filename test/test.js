/* jshint mocha: true, maxlen: false */
var ptextr = require('..');
var posthtml = require('posthtml');
var expect = require('chai').expect;

function test(input, output, options, plugins, done) {
    posthtml()
        .use(ptextr(options, plugins))
        .process(input)
        .then(function(result) {
            expect(output).to.eql(result.html);
            done();
        }).catch(function(error) {
            done(error);
        });
}

describe('Textr test', function() {
    it('plugins', function(done) {
        test(
            '<article class="my-article"><h1>Hello "world"</h1></article>',
            '<article class="my-article"><h1>Hello «world»</h1></article>',
            { locale: 'ru'},
            [require('typographic-quotes')],
            done
        );
    });
});

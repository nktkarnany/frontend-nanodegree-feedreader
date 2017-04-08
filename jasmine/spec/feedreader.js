/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        allFeeds.forEach(function(feed, index) {
            it(index + ' url of allFeeds defined', function() {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toEqual('');
            });
        });

        allFeeds.forEach(function(feed, index) {
            it(index + ' name of allFeeds defined', function() {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toEqual('');
            });
        });
    });

    describe('The menu', function() {

        it('Menu is hidden initially', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        it('Menu is visible on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('Atleast one entry in the feed', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {

        var firstText, secondText;

        beforeEach(function(done) {
            loadFeed(0, function() {
                firstText = $('.feed .entry-link .entry h2').text();
                done();
            });
        });

        beforeEach(function(done) {
            loadFeed(1, function() {
                secondText = $('.feed .entry-link .entry h2').text();
                done();
            });
        });

        it('loadFeed function call changes data', function() {
            console.log(firstText);
            console.log(secondText);
            expect(firstText !== secondText).toBeTruthy();
        });

    });

}());

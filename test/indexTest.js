// indexTest.js

const chai = require('chai');
const spies = require('chai-spies');
const { fetchBooks, renderBooks } = require('./index'); // Adjust the path as needed

chai.use(spies);
const expect = chai.expect;

describe("index.js", () => {
  describe('fetchBooks()', () => {
    beforeEach(() => {
      window.document.body.innerHTML = '<main></main>';
      global.fetch = require('node-fetch');
    });

    afterEach(() => {
      chai.spy.restore(window);
    });

    it("sends a fetch request to 'https://anapioficeandfire.com/api/books'", async () => {
      chai.spy.on(window, 'fetch');
      await fetchBooks();
      expect(window.fetch, "A fetch to the API was not found")
        .to.have.been.called.with('https://anapioficeandfire.com/api/books');
    });

    it("renders book titles into the DOM by passing a JSON object to renderBooks()", async () => {
      const fakeBooks = [
        { name: 'Book 1' },
        { name: 'Book 2' },
        { name: 'Book 3' }
      ];
      
      chai.spy.on(window, 'renderBooks');
      // Mock the fetch response to resolve with fakeBooks
      chai.spy.on(global, 'fetch', () => Promise.resolve({ ok: true, json: () => Promise.resolve(fakeBooks) }));

      await fetchBooks();

      // Wait a bit for the renderBooks call to settle
      await new Promise(resolve => setTimeout(resolve, 100));

      expect(window.renderBooks).to.have.been.called.with(fakeBooks);
    });
  });
});






/*require ( './helpers.js' );

const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );


describe( "index.js", () => {
  describe( 'fetchBooks()', () => {

    beforeEach( () => {
      window.document.body.innerHTML = '<main></main>'
      window.fetch = require( 'node-fetch' );
    } );

    it( "sends a fetch request to 'https://anapioficeandfire.com/api/books'", async () => {
      chai.spy.on( window, 'fetch' );
      await fetchBooks()
      expect( window.fetch, "A fetch to the API was not found" )
        .to.have.been.called.with( 'https://anapioficeandfire.com/api/books' );
    } )

    it( "renders book titles into the DOM by passing a JSON object to renderBooks()", async () => {
      chai.spy.on( window, 'renderBooks' );
      await fetchBooks().then(() => {
        expect( window.renderBooks ).to.have.been.called();
      })
    } )
  } )
})*/

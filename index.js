const fetch = require('node-fetch');
const sinon = require('sinon');
const chai = require('chai');
const spies = require('chai-spies');

chai.use(spies);

describe('index.js', () => {
  describe('fetchBooks()', () => {
    beforeEach(() => {
      window.document.body.innerHTML = '<main></main>';
      const fetchStub = sinon.stub(window, 'fetch').resolves({ json: () => [{ title: 'Book 1' }] });
      fetchBooks();
    });

    afterEach(() => {
      window.fetch.restore();
    });

    it("sends a fetch request to 'https://anapioficeandfire.com/api/books'", () => {
      expect(window.fetch).to.have.been.calledWith('https://anapioficeandfire.com/api/books');
    });

    it("renders book titles into the DOM by passing a JSON object to renderBooks()", () => {
      expect(renderBooks).to.have.been.called();
    });
  });
});
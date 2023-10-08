import {promises} from "fs";
const {readFile} = promises;
import React from "react";
import {
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BookSearch from "../components/BookSearch";
const {
  getAllByTestId,
  getByTestId,
  getByDisplayValue,
  queryByTestId
} = screen;

describe("BookSearch", () => {
  let booksData;
  let books;

  beforeAll(async () => {
    booksData = await readFile("./sample_data/books.json");
  });
  beforeEach(() => {
    books = JSON.parse(booksData);
    render(<BookSearch books={books} />);
  });

  describe("the correct elements were rendered", () => {
    it("should have 5 input elements for required search fields", () => {
      expect(getByTestId("author")).toBeInTheDocument();
      expect(getByTestId("title")).toBeInTheDocument();
      expect(getByTestId("language")).toBeInTheDocument();
      expect(getByTestId("country")).toBeInTheDocument();
      expect(getByTestId("year")).toBeInTheDocument();
    });

    it("should initially show all books", () => {
      expect(getAllByTestId("book")).toHaveLength(books.length);
    });

    it("should render data for each field in a book", () => {
      const bookEls = getAllByTestId("book");
      expect(bookEls).toHaveLength(books.length);
      const [book] = bookEls;
      expect(within(book).getByText("Chinua Achebe")).toBeInTheDocument();
      expect(within(book).getByText("Nigeria")).toBeInTheDocument();
      expect(within(book).getByText("English")).toBeInTheDocument();
      expect(within(book).getByText("209")).toBeInTheDocument();
      expect(within(book).getByText("Things Fall Apart")).toBeInTheDocument();
      expect(within(book).getByText("1958")).toBeInTheDocument();
    });
  });

  describe("searching by each field alone", () => {
    describe("modifying the author field", () => {
      beforeEach(() => {
        fireEvent.change(getByTestId("author"), {target: {value: "woolf"}});
      });

      it("should respond to change events", () => {
        expect(getByDisplayValue("woolf")).toBeInTheDocument();
      });

      it("should filter books on the author get", () => {
        const bookEls = getAllByTestId("book");
        expect(bookEls).toHaveLength(2);
        expect(within(bookEls[0]).getByText(/\bDalloway\b/)).toBeInTheDocument();
        expect(within(bookEls[1]).getByText(/\bLighthouse\b/)).toBeInTheDocument();
      });
    });

    describe("modifying the title field", () => {
      beforeEach(() => {
        fireEvent.change(getByTestId("title"), {target: {value: "dea"}});
      });

      it("should respond to change events", () => {
        expect(getByDisplayValue("dea")).toBeInTheDocument();
      });

      it("should filter books on the author get", () => {
        const bookEls = getAllByTestId("book");
        expect(bookEls).toHaveLength(3);
        expect(within(bookEls[0]).getByText(/\bEuripides\b/)).toBeInTheDocument();
        expect(within(bookEls[1]).getByText(/\bNikolai Gogol\b/)).toBeInTheDocument();
        expect(within(bookEls[2]).getByText(/\bThe Death of Ivan Ilyich\b/)).toBeInTheDocument();
      });
    });

    describe("modifying the country field", () => {
      beforeEach(() => {
        fireEvent.change(getByTestId("country"), {target: {value: "ITALY"}});
      });

      it("should respond to change events", () => {
        expect(getByDisplayValue("ITALY")).toBeInTheDocument();
      });

      it("should filter books on the country get", () => {
        const bookEls = getAllByTestId("book");
        expect(bookEls).toHaveLength(5);
        expect(within(bookEls[0]).getByText(/\bDante Alighieri\b/)).toBeInTheDocument();
        expect(within(bookEls[1]).getByText(/\bGiovanni Boccaccio\b/)).toBeInTheDocument();
        expect(within(bookEls[2]).getByText(/\bGiacomo Leopardi\b/)).toBeInTheDocument();
        expect(within(bookEls[3]).getByText(/\bElsa Morante\b/)).toBeInTheDocument();
        expect(within(bookEls[4]).getByText(/\bItalo Svevo\b/)).toBeInTheDocument();
      });
    });

    describe("modifying the language field", () => {
      beforeEach(() => {
        fireEvent.change(getByTestId("language"), {target: {value: "SPanish"}});
      });

      it("should respond to change events", () => {
        expect(getByDisplayValue("SPanish")).toBeInTheDocument();
      });

      it("should filter books on the language get", () => {
        const bookEls = getAllByTestId("book");
        expect(bookEls).toHaveLength(6);
        expect(within(bookEls[0]).getByText(/\bJorge Luis Borges\b/)).toBeInTheDocument();
        expect(within(bookEls[1]).getByText(/\bMiguel de Cervantes\b/)).toBeInTheDocument();
        expect(within(bookEls[2]).getByText(/\bGypsy Ballads\b/)).toBeInTheDocument();
        expect(within(bookEls[3]).getByText(/\bOne Hundred Years of Solitude\b/)).toBeInTheDocument();
        expect(within(bookEls[4]).getByText(/\bLove in the Time of Cholera\b/)).toBeInTheDocument();
        expect(within(bookEls[5]).getByText(/\bJuan Rulfo\b/)).toBeInTheDocument();
      });
    });

    describe("modifying the year field", () => {
      beforeEach(() => {
        fireEvent.change(getByTestId("year"), {target: {value: "196"}});
      });

      it("should respond to change events", () => {
        expect(getByDisplayValue("196")).toBeInTheDocument();
      });

      it("should filter books on the language get", () => {
        const bookEls = getAllByTestId("book");
        expect(bookEls).toHaveLength(4);
        expect(within(bookEls[0]).getByText(/\bFicciones\b/)).toBeInTheDocument();
        expect(within(bookEls[1]).getByText(/\bOne Hundred Years of Solitude\b/)).toBeInTheDocument();
        expect(within(bookEls[2]).getByText(/\bThe Golden Notebook\b/)).toBeInTheDocument();
        expect(within(bookEls[3]).getByText(/\bSeason of Migration to the North\b/)).toBeInTheDocument();
      });
    });
  });

  describe("filtering on multiple terms", () => {
    describe("filtering on 192_ and english", () => {
      beforeEach(() => {
        fireEvent.change(getByTestId("year"), {target: {value: "192"}});
        fireEvent.change(getByTestId("language"), {target: {value: "english"}});
      });

      it("should filter books on the language and year get", () => {
        const bookEls = getAllByTestId("book");
        expect(bookEls).toHaveLength(4);
        expect(within(bookEls[0]).getByText(/\bSound and the Fury\b/)).toBeInTheDocument();
        expect(within(bookEls[1]).getByText(/\bUlysses\b/)).toBeInTheDocument();
        expect(within(bookEls[2]).getByText(/\bMrs Dalloway\b/)).toBeInTheDocument();
        expect(within(bookEls[3]).getByText(/\bTo the Lighthouse\b/)).toBeInTheDocument();
      });
    });

    describe("filtering on all fields with trim", () => {
      beforeEach(() => {
        fireEvent.change(getByTestId("author"), {target: {value: " all "}});
        fireEvent.change(getByTestId("title"), {target: {value: " t  "}});
        fireEvent.change(getByTestId("country"), {target: {value: "ni"}});
        fireEvent.change(getByTestId("language"), {target: {value: "english"}});
        fireEvent.change(getByTestId("year"), {target: {value: "195"}});
      });

      it("should filter books on all fields", () => {
        const bookEls = getAllByTestId("book");
        expect(bookEls).toHaveLength(1);
        const [book] = bookEls;
        expect(within(book).getByText(/\bEdgar Allan Poe\b/)).toBeInTheDocument();
        expect(within(book).getByText(/\bUnited States\b/)).toBeInTheDocument();
        expect(within(book).getByText(/\bEnglish\b/)).toBeInTheDocument();
        expect(within(book).getByText(/\b842\b/)).toBeInTheDocument();
        expect(within(book).getByText(/\bTales\b/)).toBeInTheDocument();
        expect(within(book).getByText(/\b1950\b/)).toBeInTheDocument();
      });
    });

    describe("filtering on terms that have no results", () => {
      beforeEach(() => {
        fireEvent.change(getByTestId("year"), {target: {value: "190"}});
        fireEvent.change(getByTestId("language"), {target: {value: "spanish"}});
      });

      it("should filter books on the language and year get", () => {
        expect(screen.queryAllByTestId("book")).toHaveLength(0);
      });
    });
  });
});
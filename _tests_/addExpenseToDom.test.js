const { addExpenseToDom } = require("../modules/addExpenseToDom");
const { addExpense } = require("../modules/addExpense");

describe("Functionality for adding expense to DOM:", () => {
  test("Function for adding a expense array to dom is declared", () => {
    expect(addExpenseToDom).toBeDefined();
  });

  test("Function for adding a expense to dom is declared as a function", () => {
    expect(typeof addExpenseToDom).toEqual("function");
  });

  test("Function for adding expense is creating a DOM model correctly.", () => {
    addExpense("2020-05-22", "description", "299");
    const expenseP = JSON.parse(window.localStorage.getItem("expenses"));
    document.body.innerHTML = `
  <div id="testing"></div>
  <div id="to-test">
  <tr>
  <th>2020-06-12</th>
  <td>description</td>
  <td>299</td>
  <td>- 299</td>
  <td><button class="button" onClick="deletingExpense(2131231232343)">X</button></td>
</tr>
  </div>
  `;

    const expectedExpenseDom = document.body.querySelector("#to-test");
    let tableBody = document.body.querySelector("#testing");
    addExpenseToDom(tableBody);
    expect(tableBody).toMatchObject(expectedExpenseDom);
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Components/Login";

test("should have the login element on load", () => {
  render(<Login />);
  expect(screen.queryByTestId("user-name")).toBeTruthy();
  expect(screen.queryByTestId("password")).toBeTruthy();
  expect(screen.queryByTestId("submitBn")).toBeTruthy();
});
// test('Check Add Student elements Present', () => {
//   render(<AddStudent />);
//   expect(screen.queryByTestId("firstNameInput")).toBeTruthy();
//   expect(screen.queryByTestId("lastNameInput")).toBeTruthy();
//   expect(screen.queryByTestId("emailInput")).toBeTruthy();
//   expect(screen.queryByTestId("submitBtn")).toBeTruthy();
// });

// test('Check Add button', () => {
//   let dummyAddStudent = jest.fn();
//   render(<AddStudent addStudent={dummyAddStudent}/>)
//   fireEvent.change(screen.queryByTestId("firstNameInput"), {target : {value: "A"}});
//   fireEvent.change(screen.queryByTestId("firstNameInput"), {target : {value: "B"}});
//   fireEvent.change(screen.queryByTestId("firstNameInput"), {target : {value: "a.b@c"}});
//   fireEvent.click(screen.queryByTestId("submitBtn"));
//   expect(dummyAddStudent).toHaveBeenCalledTimes(1);
//  })

// test("StudentsData renders as expected", () => {
//   let students = [
//     {
//       "_id": 1,
//       "firstName": "Saurabh",
//       "lastName": "Sharma",
//       "email": "shramaSaurabh@gmail.com"
//     },
//     {
//       "_id": 2,
//       "firstName": "S",
//       "lastName": "Sharma",
//       "email": "ss@gmail.com"
//     }
//   ]

//   render(<StudentsData students={students} />)
//   expect(screen.queryByTestId("students-table").children.length).toBe(2)
//   expect(screen.queryByTestId("data-row-1").children.length).toBe(5)
//   expect(screen.queryByTestId("data-row-1").children[1].textContent).toBe("Saurabh")
//   expect(screen.queryByTestId("data-row-1").children[2].textContent).toBe("Sharma")
//   expect(screen.queryByTestId("data-row-1").children[3].textContent).toBe("shramaSaurabh@gmail.com")
// })

// test('Check Delete button', () => {
//   let dummyDeleteStudent = jest.fn();
//   let students = [
//     {
//       "_id": 1,
//       "firstName": "Saurabh",
//       "lastName": "Sharma",
//       "email": "shramaSaurabh@gmail.com"
//     },
//     {
//       "_id": 2,
//       "firstName": "S",
//       "lastName": "Sharma",
//       "email": "ss@gmail.com"
//     }
//   ]

//   render(<StudentsData students={students} deleteStudent={dummyDeleteStudent}/>)
//   fireEvent.click(screen.queryByTestId("delete-1"));
//   expect(dummyDeleteStudent).toHaveBeenCalledTimes(1);
//   fireEvent.click(screen.queryByTestId("delete-2"));
//   expect(dummyDeleteStudent).toHaveBeenCalledTimes(2);
//  })

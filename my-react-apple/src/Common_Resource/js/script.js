$(document).ready(function () {
  // ********************************Question1***********************************************
  // The following three questions are based on the two paragraphs under the section which says,
  // "For Question 1".
  // 1.1. Select the element with an id of "sample1" using jQuery.
  // 1.2. Print the element itself on the console upon page refresh.
  let sample1 = $("#sample1");
  console.log(sample1[0]);
  // 1.3.
  // Print the content of the element on the console upon page refresh. Use jQuery
  // to select the content of the element
  let content = sample1.text();
  console.log(content);

  // ********************************Question2***********************************************
  // The following questions are based on the HTML code found under the section labeled "For
  // 2.1. Select the element with an ID of "techCompanies" and display it on your console.
  let techCompanies = $("#techCompanies");
  console.log(typeof techCompanies);
  // let techCompanies = $("#techCompanies").html()
  // console.log(techCompanies);
  // 2.2.
  // How many tech companies are listed under the ul element with an id  of "techCompanies"?
  let allCompanies = $("#techCompanies li");
  console.log(allCompanies);
  // console.log(typeof allCompanies);
  console.log(allCompanies.length);
  // 2.3. Select all elements with a class of "red" and display them on the console.
  let redCompanies = $(".red");
  console.log(redCompanies);
  // 2.4. Create a new li HTML element with a content of "Facebook" and display it on console
  let newLi = $("<li>").text("Facebook");
  console.log(newLi);
  // 2.5. Give the newly created element a class of "blue" using jQuery
  newLi.addClass("blue");
  // 2.6. Append the newly created element next to the the "Sony" <li> element
  let sonyLi = $("#techCompanies li:nth-child(10)");
  // console.log(sonyLi);
  sonyLi.append(newLi);
  // Create a new <hr> element
  // let horizontalLine = $('<hr>');

  // // Add the <hr> after sonyLi
  // sonyLi.after(horizontalLine);

  // Optional: Append the new <li> to horizontalLine
  // horizontalLine.append(newLi)
  // 2.7.
  // How many of the tech companies are labeled blue? Find the result using jQuery and display the result inside the "blueCompanies" div.
  let onlyBlue = $("#techCompanies li.blue");
  // console.log(onlyBlue);
  let blueCompanies = $("#blueCompanies");
  // console.log(blueCompanies);
  // let blueChild = blueCompanies.children();
  // let blueChild = blueCompanies.find("p");
  // console.log(blueChild);
  const blueCount = onlyBlue.length;
  // console.log(blueCount);
  blueCompanies.append(blueCount);

  // ********************************Question3***********************************************
  let thisIsAdderForm = $("#adder");
  // console.log(thisIsAdderForm);

  thisIsAdderForm.submit(function (e) {
    e.preventDefault();
    // let inputBox = $(".form-values").find('input')
    let firstInput = $(".form-values input[name = 'first-value']");
    let secondInput = $(".form-values input[name = 'second-value']");
    let firstInputVal = $(".form-values input[name = 'first-value']").val().trim();
    let secondInputVal = $(".form-values input[name = 'second-value']").val().trim();
    let eziga = $("#sum");
    let valid = true;
    // Reset borders before validation
    firstInput.css("border-color", "");
    secondInput.css("border-color", "");
    eziga.text(""); // Clear previous messages

    if (firstInputVal === "") {
      firstInput.css("border-color", "red");
      eziga.text("Please Provide an input");
      valid = false;
    }

    if (secondInputVal === "") {
      secondInput.css("border-color", "red");
      eziga.text("Please Provide an input");
      valid = false;
    }

    if (firstInputVal !== "" && isNaN(firstInputVal)) {
      eziga.text("Please enter numerical values only");
      firstInput.css("border-color", "red");
      valid = false;
    }

    if (secondInputVal !== "" && isNaN(secondInputVal)) {
      secondInput.css("border-color", "red");
      valid = false;
    }
    if (valid) {
      let firstValue = Number(firstInputVal);
      secondValue = Number(secondInputVal);
      firstInput.css("border-color", "green");
      secondInput.css("border-color", "green");
      let sum = firstValue + secondValue;
      let average = sum / 2;

      // console.log(eziga.text(`sum:${sum}, Average:${average}`));
      // eziga.text(`sum:${sum}, Average:${average}`);
      console.log(eziga.html(`sum:${sum} <br> Average:${average}`));
      eziga.html(`sum:${sum} <br> Average:${average}`);
    }
  });

  // let thisIsAdderForm = $("#adder");

  // thisIsAdderForm.submit(function (e) {
  //     e.preventDefault();

  //     let inputBox = $(".form-values").find("input");
  //     let eziga = $("#sum");
  //     let sum = 0;
  //     let valid = true;

  //     // Reset previous messages and border colors
  //     eziga.text("");
  //     inputBox.css("border-color", "");

  //     inputBox.each(function () {
  //         let value = $(this).val().trim(); // Get input value

  //         // Check for empty input
  //         if (value === "") {
  //             eziga.text("Please provide an input");
  //             $(this).css("border-color", "red");
  //             valid = false;
  //             return false; // Exit .each() loop early
  //         }

  //         // Check if it's a valid number
  //         if (isNaN(value)) {
  //             eziga.text("Please enter numerical values only");
  //             $(this).css("border-color", "red");
  //             valid = false;
  //             return false; // Exit .each() loop early
  //         }

  //         sum += Number(value); // Convert to number and add to sum
  //     });

  //     if (valid) {
  //         let average = sum / inputBox.length; // Calculate average
  //         eziga.text(`Sum: ${sum}, Average: ${average}`);
  //         console.log(`Sum: ${sum}, Average: ${average}`);
  //     }
  // });

  // *OR using properly use the element parameter inside .each() to iterate over all inputs
  // $(document).ready(function () {
  //     let thisIsAdderForm = $("#adder");

  //     thisIsAdderForm.submit(function (e) {
  //         e.preventDefault(); // Prevent form refresh

  //         let inputBox = $(".form-values").find("input");
  //         let eziga = $("#sum"); // Result display area
  //         let sum = 0;
  //         let valid = true;

  //         // Reset previous messages and border styles
  //         eziga.text("");
  //         inputBox.css("border-color", "");

  //         inputBox.each(function (index, element) {
  //             let value = $(element).val().trim(); // Convert to jQuery object and get value

  //             // Check for empty input
  //             if (value === "") {
  //                 eziga.text("Please provide all inputs.");
  //                 $(element).css("border-color", "red"); // Highlight only the invalid input
  //                 valid = false;
  //                 return false; // Exit .each() loop early
  //             }

  //             // Check if input is a valid number
  //             if (isNaN(value)) {
  //                 eziga.text("Please enter numerical values only.");
  //                 $(element).css("border-color", "red"); // Highlight only the invalid input
  //                 valid = false;
  //                 return false; // Exit .each() loop early
  //             }

  //             sum += Number(value); // Convert to number and add to sum
  //         });

  //         if (valid) {
  //             let average = sum / inputBox.length; // Calculate average
  //             console.log(`Sum: ${sum}, Average: ${average}`); // 3.1 Console output
  //             eziga.html(`Sum: ${sum} <br> Average: ${average}`); // 3.2 Display below form
  //         }
  //     });
  // });

  // let test = $("blueCompanies").on("click", "test-button",function (){
  //   alert('button added')
  // })

  // $("blueCompanies").append("<button class='test-button'>click here </button>")

  // ********************************Question4********************************************
  // Create an HTML form which asks users to provide their First name, Last name and Email address. All the fields should be labeled as required. Once the user submits, write a JavaScript
  // function that checks if all the fields are provided. If not, it should show an error message above the form.
  // If the user provides all the values, hide the form input fields, and display all the values provided
  // by the user on the browser.

  let myForm = $("#registration-Form");
  // console.log(myForm);
  let displayError = $("#span");
  // console.log(displayError);
  myForm.on("submit", function (e) {
    displayError.css("display", "none");
    const errors = [];
    let current = true;

    displayError.text("");

    let firstName = $("#registration-Form input[name = 'first']").val().trim();
    let lastName = $("#registration-Form input[name = 'second']").val().trim();
    let email = $("#registration-Form input[name = 'third']").val().trim();

    if (firstName === "") {
      errors.push("First name field is required");
      current = false;
    }

    if (lastName === "") {
      errors.push("Last name field is required ");
      current = false;
    }
    if (email === "") {
      errors.push("Email field is required ");
      current = false;
    }

    if (errors.length > 0) {
      e.preventDefault();
      displayError.css("display", "block");
      
      displayError.html(errors.join("<br>"));
      current = false;
    }

    if (current) {
      e.preventDefault();
      myForm.children().hide();
      myForm.html(`First Name:${firstName} <br> First Name:${lastName} <br> Email:${email}`);
    }
  });

  // let kk =myForm.html(val);
  // console.log(kk);l
  // let kk = $("#dropdown option[value = 'option']")
  // console.log(kk.val());
});

// or
// let firstName = $("#registration-Form input[name = 'first']").val().trim();
// let lastName = $("#registration-Form input[name = 'second']").val().trim();
// // console.log(myForm);
// let displayError = $("#span");
// let myForm = $("#registration-Form");

// myForm.on("submit", function (e) {
//   e.preventDefault();
//   const errors = validateForm();
// })
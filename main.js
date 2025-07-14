const form = document.getElementById("form");
const emailInput = document.getElementById("email");

const handleSubmit = (e) => {
  e.preventDefault();

  const emailError = document.getElementById("email-error");

  emailError.textContent = "";

  const data = Object.fromEntries(new FormData(e.target));
  const errors = {};

  const email = data.email.trim();

  if (!email) {
    errors.email = "Oops! Please add your email";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Oops! That doesn’t look like an email address";
  }

  if (Object.keys(errors).length > 0) {
    displayErrors(errors);
    console.log(errors);
  } else {
    {
      console.log("Form is Valid", data);
    }
  }

  function displayErrors(errors) {
    for (const key in errors) {
      const errorElement = document.getElementById(`${key}-error`);
      if (errorElement) {
        errorElement.textContent = errors[key];
      }
    }
  }
};

form.addEventListener("submit", handleSubmit);

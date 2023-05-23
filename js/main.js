// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// Nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Jquery Validations
$(document).ready(function () {
  $("#form").validate({
    rules: {
      name: "required",
      phone: "required",
      email: {
        required: true,
        email: true,
      },
      message: "required",
    },
    messages: {
      name: "Please enter your name",
      phone: "Please enter your phone number",
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
      },
      message: "Please enter a message",
    },
    invalidHandler: function (event, validator) {
      var errors = validator.errorList.map(function (error) {
        return error.message;
      });
      var errorText = errors.join("<br>");
      //SweetAlert
      Swal.fire({
        icon: "error",
        title: "Oops",
        html: "The following fields are not valid:<br>" + errorText,
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
          html: "custom-text",
        },
      });
    },
    submitHandler: function () {
      Swal.fire({
        icon: "success",
        title: "Request sent successfully",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: "custom-popup",
          title: "custom-title",
        },
        //Reset values
      }).then(function () {
        $("#nameValid").val("");
        $("#emailValid").val("");
        $("#messageValid").val("");
        $("#phoneValid").val("");
      });
    },
  });
});

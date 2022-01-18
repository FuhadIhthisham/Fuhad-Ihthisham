var reg = $("#contact-form");

reg.validate({
  rules: {
    Username: {
      required: true,
      minlength: 4,
    },
    email: {
      required: true,
    },
    subject: {
      required: true,
    },
    message: {
      required: true,
    },
  },

  messages: {
    Username: {
      required: "This field is required.",
    },
  },

  submitHandler: function (form) {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbw1rqAfKqqOwDAiatTB3FLKxCbaASddAdbgyGlzeYj4LoINDKwa/exec",
      data: $("#contact-form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully");
        window.location.reload();
        // window.location.href = "index.html";
      },
      error: function (err) {
        alert("Something Error");
      },
    });
  },
});

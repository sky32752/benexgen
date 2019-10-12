(function () {
    // get all data in form and return object
    function getFormData(form) {
        var elements = form.elements;

        var fields = Object.keys(elements).filter(function (k) {
            return (elements[k].name !== "honeypot");
        }).map(function (k) {
            if (elements[k].name !== undefined) {
                return elements[k].name;
                // special case for Edge's html collection
            } else if (elements[k].length > 0) {
                return elements[k].item(0).name;
            }
            // must return array like structure
            return [];
        }).filter(function (item, pos, self) {
            return self.indexOf(item) === pos && item;
        });

        var formData = {};
        fields.forEach(function (name) {
            var element = elements[name];

            // singular form elements just have one value
            formData[name] = element.value;

            // when our element has multiple items, get their values
            if (element.length) {
                var data = [];
                for (var i = 0; i < element.length; i++) {
                    var item = element.item(i);
                    if (item.checked || item.selected) {
                        data.push(item.value);
                    }
                }
                formData[name] = data.join(', ');
            }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        // console.log(formData);
        return formData;
    }

    function handleFormSubmit(event) { // handles form submit without any jquery
        event.preventDefault(); // we are submitting via xhr below
        var form = event.target;
        var data = getFormData(form); // get the values submitted in the form

        disableAllButtons(form);
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            // console.log(xhr.status, xhr.statusText);
            // console.log(xhr.responseText);

            var icon = document.getElementById("icon");
            icon.classList.remove("lnr-hourglass");
            icon.classList.add("lnr-checkmark-circle");
            var button = document.getElementById("button");
            button.classList.add("success-btn")

            var thankYouMessage = form.querySelector(".thankyou_message");
            if (thankYouMessage) {
                thankYouMessage.style.display = "block";
            }
            return;
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data).map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        }).join('&');
        xhr.send(encoded);
    }

    function loaded() {
        // console.log("Contact form submission handler loaded successfully.");
        // bind to the submit event of our form
        var forms = document.querySelectorAll("form.gform");
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
        var icon = document.getElementById("icon");
        var button = document.getElementById("button");
        button.disabled = true;
        button.title = "Button disabled"
        icon.classList.remove("lnr-chevron-right");
        icon.classList.add("lnr-hourglass");
    }
})();
window.onload = function() {
    function handleFocus(event) {
        var input = event.target;
        var defaultValue = input.defaultValue;
        if (input.value === defaultValue) {
            input.value = '';
        }
    }

    function handleBlur(event) {
        var input = event.target;
        var defaultValue = input.defaultValue;
        if (input.value === '') {
            input.value = defaultValue;
        }
    }

    var inputs = document.querySelectorAll('.form-login input[type="text"], .form-login input[type="password"]');
    inputs.forEach(function(input) {
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);
    });
};

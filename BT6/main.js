
function validator (options) {

    let selecterRules = {};

    // Giá trị đúng 
    function validateTrue(inputElement, errorMessage){
        var errorTag = inputElement.parentElement.querySelector(options.errorSelector)
        return errorTag.innerText = errorMessage
    };

    //Giá trị sai 
    function validateFalse(inputElement, errorMessage){
        var errorTag = inputElement.parentElement.querySelector(options.errorSelector)
        return errorTag.innerText = '';
    };

    // document của form 
    var formElement = document.querySelector(options.form);

    //xác định có form hay không 
 if (formElement){

        console.log(formElement)
        


        // lặp qua rule của form 
        options.rules.forEach(rule => {

            if ( Array.isArray(selecterRules[rule.selector])){
                selecterRules[rule.selector].push(rule.test)
            }else{
            selecterRules[rule.selector] = [rule.test]
            }


            //gán các document của các input selector   
            var inputElement = formElement.querySelector(rule.selector)   

            // kiểm tra có input hay không 
            if (inputElement){
                //even nhập input
                var errorCode = function(){
                    var errorMessage ; 
                    var rules = selecterRules[rule.selector]
                    for (var i in rules){
                        errorMessage = rules[i](inputElement.value)
                        if (errorMessage) break;
                    }
                    if(errorMessage){
                        validateTrue(inputElement, errorMessage)
                     }else{
                        validateFalse(inputElement, errorMessage)
                     }
                }
                
                // inputElement.oninput = function(){
                //     errorCode()
                // }
                inputElement.onblur = function(){               
                    errorCode()
                }
            }
        });
        formElement.onsubmit = function(e){
            e.preventDefault();
            options.rules.forEach(rule => {
                var inputElement = formElement.querySelector(rule.selector)
                var errorMessage ; 
                    var rules = selecterRules[rule.selector]
                    for (var i in rules){
                        errorMessage = rules[i](inputElement.value)
                        if (errorMessage) break;
                    }
                    if(errorMessage){
                        validateTrue(inputElement, errorMessage)
                     }else{
                        validateFalse(inputElement, errorMessage)
                     }
            })
        }
    }
};

validator.isRequired = function(selector, message) {
    return {
        selector : selector,
        test: function(value) {
            let regex = /^\w+[^\-^\@]*\s*\w*$/;
            return regex.test(value) ? undefined : message ? message : 'Vui lòng nhập trường này';
        }
    }
};

validator.isEmail = function(selector, message) {
    return {
        selector : selector,
        test: function(value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message ? message :'vui lòng nhập email';
        }
    }
};

validator.isMinlength = function(selector, min, message){
    return {
        selector: selector,
        test : function(value){
            return  value.length >= min ? undefined : message ? message : `mật khẩu ít nhất ${min} kí tự`
        }
    }
};

validator.isConfirmed = function(selector, getConfirmValue, message){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue()? undefined :message ? message : 'Giá trị nhập vào không chính xác'
        }
    }
}

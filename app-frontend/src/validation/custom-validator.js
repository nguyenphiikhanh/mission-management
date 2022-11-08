import {Validator} from "vee-validate";

Validator.extend('override-email', {
    getMessage: field => field + 'の形式は正しくありません。',
    validate: value => /^[A-Za-z0-9!#$%&'*+-/=?^_`{|}~.@]+$/.test(value)
});

Validator.extend('port', {
    getMessage: field => field + '形式が正しくありません。',
    validate: value =>/^[0-9]+$/.test(value)
});


//custom message
import message from "./message";
Validator.localize('en',message);

export default{}
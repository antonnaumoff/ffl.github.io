import content from '../../../content/help/help.json';

export default class HelpController {
    /* @ngInject */
    constructor(){

        this.message = content.text;

    }
}
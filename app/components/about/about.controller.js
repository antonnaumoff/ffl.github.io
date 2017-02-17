import content from '../../../content/about/about.json';

export default class AboutController {
    /* @ngInject */
    constructor(){

        this.message = content.text;

    }
}
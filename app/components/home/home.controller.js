import './home.css';
import reports from '../../../content/reports/reports.json';

export default class HomeController {
    /* @ngInject */
    constructor(){

        this.report = reports.reports[0];
        console.log(this.report);
    }
}
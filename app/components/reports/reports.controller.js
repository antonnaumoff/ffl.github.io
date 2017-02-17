import reports from '../../../content/reports/reports.json';

export default class ReportsController {
    /* @ngInject */
    constructor(){

        this.reports = reports.reports;

    }
}
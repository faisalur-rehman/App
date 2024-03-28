type OpenReportParams = {
    reportID: string;
    reportActionID?: string;
    emailList?: string;
    accountIDList?: string;
    parentReportActionID?: string;
    shouldRetry?: boolean;
    createdReportActionID?: string;
    clientLastReadTime?: string;
};

export default OpenReportParams;

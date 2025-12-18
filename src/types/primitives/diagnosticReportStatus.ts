enum EDiagnosticReportStatus {
    REGISTERED = "registered",
    PARTIAL = "partial",
    PRELIMINARY = "preliminary",
    FINAL = "final",
    AMENDED = "amended",
    CORRECTED = "corrected",
    APPENDED = "appended",
    CANCELLED = "cancelled",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}

type TDiagnosticReportStatus = `${EDiagnosticReportStatus}`;

export { EDiagnosticReportStatus };
export type { TDiagnosticReportStatus };


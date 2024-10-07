/**
 * Report metadata.
 */
export interface ReportMetadata {
  /**
   * App metadata.
   */
  app?: {
    /**
     * The name of the app.
     */
    name?: string;

    /**
     * The version of the app.
     */
    version?: string;
  }

  /**
   * Browser metadata.
   */
  browser?: {
    /**
     * The name of the browser.
     * 
     * If no value is provided, the "?"-icon with the text `not known` is shown.
     */
    name?: string;

    /**
     * The version of the browser.
     * 
     * If no value is provided, the "?"-icon with the text `not known` is shown.
     */
    version?: string;
  }

  /**
   * The name that represents the type of device.
   * 
   * If no value is provided, the "?"-icon with the text `not known` is shown.
   * 
   * @example
   * "Virtual Machine"
   * "iPhone 7 Plus"
   */
  device?: string;

  /**
   * Platform metadata.
   */
  platform?: {
    /**
     * The name of the platform.
     * 
     * If no value is provided, the "?"-icon with the text `not known` is shown.
     */
    name?: string;

    /**
     * The version of the platform.
     * 
     * If no value is provided, the "?"-icon with the text `not known` is shown.
     */
    version?: string;
  }
}

/**
 * Custom report metadata.
 */
export type ReportCustomMetadata = {
  /**
   * The name of the metadata item.
   */
  name: string;

  /**
   * The value of the metadata item.
   */
  value: string;
}[];

export interface ReportCustomData {

  /**
   * Custom data title
   */
  title?: string;

  /**
   * Custom data items
   */
  data: {
    /**
     * The label of the data item.
     */
    label: string;

    /**
     * The value of the data item.
     */
    value: string;
  }[];
}

export interface ReportOptions {
  /**
   * The directory that will hold all the generated JSON files, relative to the
   * current working directory.
   */
  jsonDir: string;

  /**
   * The directory in which the report will be saved, relative to the current
   * working directory.
   */
  reportPath: string;

  /**
   * Whether each feature should get a static filename for the HTML.
   * 
   * Use this feature only if you are not running multiple instances of the same
   * tests.
   * 
   * Default: `false`
   */
  staticFilePath?: boolean;

  /**
   * Whether the report will automatically be opened in the default browser of
   * the operating system.
   * 
   * Default: `false`
   */
  openReportInBrowser?: boolean;

  /**
   * Whether the the enriched JSON should be saved alongside the merged JSON.
   * 
   * Default: `false`
   */
  saveCollectedJSON?: boolean;

  /**
   * Whether the log is disabled.
   * 
   * Default: `false`
   */
  disableLog?: boolean;

  /**
   * The title in the report HTML head tag.
   * 
   * Default: s`"Multiple Cucumber HTML Reporter"`
   */
  pageTitle?: string;

  /**
   * The name of the report.
   */
  reportName?: string;

  /**
   * Custom page footer HTML.
   * 
   * @example
   * "<div><p>A custom footer in html</p></div>"
   */
  pageFooter?: string;

  /**
   * Whether to leave the description unformatted.
   * 
   * Default: `false`
   */
  plainDescription?: boolean;

  /**
   * Whether to display the duration of steps in the report.
   * 
   * Durations will be expected in nanoseconds unless {@link durationInMS} is
   * set to `true`.
   */
  displayDuration?: boolean;

  /**
   * Whether to expect the duration of steps in milliseconds rather than
   * nanoseconds.
   * 
   * This parameter relies on {@link displayDuration}.
   * 
   * Default: `false`
   */
  durationInMS?: boolean;

  /**
   * Whether to hide the Devicetype, Device, OS, App, and Browser metadata from
   * the Features overview.
   * 
   * Default: `false`
   */
  hideMetadata?: boolean;

  /**
   * Whether to include the date and time at which the JSON-files were generated
   * in the Features overview.
   * 
   * Default: `false`
   */
  displayReportTime?: boolean;

  /**
   * Whether to use a CDN for assets.
   * 
   * Default: `false`
   */
  useCDN?: boolean;

  /**
   * Path to a custom CSS file that will extend the default stylesheet.
   * 
   * @example
   * "your-path-where/custom.css"
   */
  customStyle?: string;

  /**
   * Path to a custom CSS file that will override the default stylesheet.
   * 
   * @example
   * "your-path-where/custom.css"
   */
  overrideStyle?: string;

  /**
   * Report metadata.
   * 
   * If {@link customMetadata} is unset or `false`, this parameter should be a
   * {@link ReportMetadata} object.
   * 
   * If {@link customMetadata} is set to `true`, this parameter should be an
   * array of @{link CustomMetadata} objects.
   */
  metadata?: ReportMetadata | ReportCustomMetadata;

  /**
   * Whether to use custom metadata in the report.
   * 
   * Default: `false`
   * 
   * @see {@link metadata}
   */
  customMetadata?: boolean;

  /**
   * Custom data to be displayed in the report.
   */
  customData?: ReportCustomData;
}

/**
 * Generates a report
 * @param options The report generation options.
 */
declare function generateReport(options: ReportOptions): void;

export { generateReport as generate };

import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/knowyourmeetTab/index.html")
@PreventIframe("/knowyourmeetTab/config.html")
@PreventIframe("/knowyourmeetTab/remove.html")
@PreventIframe("/knowyourmeetTab/knowyourmeet.html")
export class KnowyourmeetTab {
}

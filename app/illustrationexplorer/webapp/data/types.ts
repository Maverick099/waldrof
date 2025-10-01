import { IllustrationMessageSize } from "sap/ui/webc/fiori/library";

export type illustration = {
  /**The illustration message id as given by sap.*/
  id: string;
  /**The size of the illustration */
  size: string | IllustrationMessageSize;
  /**The title to be given when illustration is rendered. */
  title: string;
  /**Any subtitile given to the illustration. */
  subtitle: string;
  /**The type indicates from which library the illustration is taken from. */
  type: string;
};

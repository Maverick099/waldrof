import * as stdIllustratedMessageType from "sap/m/IllustratedMessageType";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import { IllustrationMessageType as webpcIllustrationMessageType, IllustrationMessageSize } from "sap/ui/webc/fiori/library";
import { illustration } from "../data/types";

/**
 * @namespace waldrof.app.illustrationexplorer.controller
 */
export default class App extends Controller {
  /**The current view */
  private view: import("sap/ui/core/mvc/View").default | undefined = undefined;

  /**A list of all illustration to be displayed. */
  private illustrationMap: Map<string, illustration> = new Map();
  /**
   * JSON model to hold all illustration based data.
   */
  illustrationModel: JSONModel | undefined = undefined;

  /*eslint-disable @typescript-eslint/no-empty-function*/
  public onInit(): void {
    this.illustrationModel = new JSONModel({});
    // load view
    this.view = this.getView();

    // bind current model to view.
    this.view?.setModel(this.illustrationModel, "illustrations");

    // load all illustrations
    this._loadIllustrations();
  }

  private _loadIllustrations(): void {
    // load standard lib illustrations
    this._loadSapStandardLibraryIllustrations();
    // load webpc lib illustrations
    this._loadFioriWebcLibraryIllustrations();
  }

  /**
   * Loads illustrations keys from {@link sap.m.IllustrationMessageType} library
   */
  private _loadSapStandardLibraryIllustrations(): void {
    const oSapIllusKeyValue = stdIllustratedMessageType;
  }

  private _loadFioriWebcLibraryIllustrations(): void {
    const illustrations: Array<illustration> = [];
    Object.entries(webpcIllustrationMessageType).forEach(([key, value]) => {
      if(this.illustrationMap.has(value)){
        
      }
      illustrations.push({
        id: value,
        title: key,
        size: IllustrationMessageSize.Auto,
        subtitle: "",
        type: "webc",
      });
    });

    // set model
    this.illustrationModel?.setData(illustrations, true);
    this.illustrationModel?.refresh();
  }
}

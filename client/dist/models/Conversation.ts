/* tslint:disable */

declare var Object: any;
export interface ConversationInterface {
  "id"?: string;
  "history": any;
  "createdAt"?: Date;
}

export class Conversation implements ConversationInterface {
  "id": string;
  "history": any;
  "createdAt": Date;
  constructor(data?: ConversationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Conversation`.
   */
  public static getModelName() {
    return "Conversation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Conversation for dynamic purposes.
  **/
  public static factory(data: ConversationInterface): Conversation{
    return new Conversation(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Conversation',
      plural: 'Conversations',
      path: 'Conversations',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "history": {
          name: 'history',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}

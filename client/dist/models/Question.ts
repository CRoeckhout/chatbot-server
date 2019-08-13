/* tslint:disable */

declare var Object: any;
export interface QuestionInterface {
  "id"?: string;
  "title": string;
  "answer": string;
  "questionId"?: string;
  questions?: Question[];
}

export class Question implements QuestionInterface {
  "id": string;
  "title": string;
  "answer": string;
  "questionId": string;
  questions: Question[];
  constructor(data?: QuestionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Question`.
   */
  public static getModelName() {
    return "Question";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Question for dynamic purposes.
  **/
  public static factory(data: QuestionInterface): Question{
    return new Question(data);
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
      name: 'Question',
      plural: 'Questions',
      path: 'Questions',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
        "answer": {
          name: 'answer',
          type: 'string'
        },
        "questionId": {
          name: 'questionId',
          type: 'string'
        },
      },
      relations: {
        questions: {
          name: 'questions',
          type: 'Question[]',
          model: 'Question',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'questionId'
        },
      }
    }
  }
}

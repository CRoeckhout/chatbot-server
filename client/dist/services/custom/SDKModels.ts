/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Conversation } from '../../models/Conversation';
import { Question } from '../../models/Question';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Conversation: Conversation,
    Question: Question,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}

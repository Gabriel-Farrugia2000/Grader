import { Injectable } from '@angular/core';
import { Objective } from '../struct/objective';
import { OBJECTIVES } from '../struct/objective-data';
import { Voucher } from '../struct/vouchers';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectiveService {

  objectives: Objective[] = [];

  constructor(private storageService: StorageService) { }

  async init()
  {
    const objectives = await this.storageService.get('objectives');
    if (!objectives)
    {
      await this.storageService.set('objectives', OBJECTIVES);
    }

    this.objectives = objectives|| OBJECTIVES;
  }

  async claim(reward: Voucher)
  {
    this.objectives.map(objective => {
      if (objective.reward == reward) objective.claimed = true;
    })
    this.storageService.set('objectives', this.objectives);
  } 

  getObjectives(claimed?: boolean): Objective[]
  {
    if (claimed === undefined) return this.objectives;
    else return this.objectives.filter(objective => (!claimed && objective.claimed === undefined) || objective.claimed == claimed);
  }
}



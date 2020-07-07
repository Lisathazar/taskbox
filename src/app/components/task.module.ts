import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { TasksState } from '../state/task.state';
import { TaskListComponent } from './task-list/task-list.component';
import { PureTaskListComponent } from './pure-task-list/pure-task-list.component';
import { TaskComponent } from './task/task.component';
import { PureInboxScreenComponent } from './pure-inbox-screen/pure-inbox-screen.component';
import { InboxScreenComponent } from './inbox-screen/inbox-screen.component';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([TasksState])],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent, PureInboxScreenComponent, InboxScreenComponent],
  providers: [],
})
export class TaskModule {}

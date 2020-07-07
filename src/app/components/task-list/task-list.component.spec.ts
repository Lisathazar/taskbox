import { render } from '@testing-library/angular';
import { PureTaskListComponent } from '../pure-task-list/pure-task-list.component';
import { withPinnedTasksData } from 'src/stories/pure-task-list.stories';
import { TaskComponent } from '../task/task.component';

describe('PureTaskList component', () => {
  it('renders pinned tasks at the start of the list', async () => {
    const mockedActions = jest.fn();
    const tree = await render(PureTaskListComponent, {
      declarations: [TaskComponent],
      componentProperties: {
        tasks: withPinnedTasksData,
        loading: false,
        onPinTask: {
          emit: mockedActions,
        } as any,
        onArchiveTask: {
          emit: mockedActions,
        } as any,
      },
    });
    const component = tree.fixture.componentInstance;
    expect(component.tasksInOrder[0].id).toBe('6');
  });
});

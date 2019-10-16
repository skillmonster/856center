import { ActionType } from 'typesafe-actions';
import actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */

interface LanguageProviderState {
  readonly locale: string;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = LanguageProviderState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };

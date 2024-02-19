import { createAction, props } from '@ngrx/store';
import { Analysis } from 'src/app/types/analysis/analysis';

/**
 * analysis actions
 * @class
 * @author : Mariam Laghfiri
 */
export const loadAnalysis = createAction('[analysis] Load analysis');
export const loadAnalysisSuccess = createAction('[analysis] Load analysis Success', props<{ analysis: Analysis[] }>());
export const loadAnalysisFailure = createAction('[analysis] Load analysis Failure', props<{ error: any }>());

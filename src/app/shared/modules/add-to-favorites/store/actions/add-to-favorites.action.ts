import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import Article from 'src/app/shared/models/article';

export const addToFavoritesAction = createAction(
  ActionTypes.AddToFavorites,
  props<{ isFavorited: boolean; slug: string }>()
);

export const addToFavoritesSuccessAction = createAction(
  ActionTypes.AddToFavoritesSuccess,
  props<{ article: Article }>()
);

export const addToFavoritesFailureAction = createAction(
  ActionTypes.AddToFavoritesFailure
);

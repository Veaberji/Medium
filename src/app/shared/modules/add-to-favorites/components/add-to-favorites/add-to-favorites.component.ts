import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToFavoritesAction } from '../../store/actions/add-to-favorites.action';

@Component({
  selector: 'med-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorited') isFavoritedProps!: boolean;
  @Input('favoritesCount') favoritesCountProps!: number;
  @Input() articleSlug!: string;

  isFavorited!: boolean;
  favoritesCount!: number;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isFavorited = this.isFavoritedProps;
    this.favoritesCount = this.favoritesCountProps;
  }

  onLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      })
    );

    this.isFavorited ? --this.favoritesCount : ++this.favoritesCount;
    this.isFavorited = !this.isFavorited;
  }
}

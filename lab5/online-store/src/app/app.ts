import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CATEGORIES, PRODUCTS } from './data/products';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly categories = CATEGORIES;
  protected readonly selectedCategoryId = signal<number | null>(null);

  protected readonly selectedProducts = computed(() => {
    const categoryId = this.selectedCategoryId();
    if (categoryId === null) {
      return [];
    }

    return PRODUCTS.filter((product) => product.categoryId === categoryId);
  });

  protected selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
  }
}

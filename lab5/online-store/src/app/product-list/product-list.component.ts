import { ChangeDetectionStrategy, Component, effect, input, signal } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  template: `
    @if (displayedProducts().length === 0) {
      <p class="empty-state">No products in this category.</p>
    } @else {
      <div class="grid">
        @for (product of displayedProducts(); track product.id) {
          <app-product-item
            [product]="product"
            (deleteProduct)="onDelete($event)"
          ></app-product-item>
        }
      </div>
    }
  `,
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  readonly products = input<Product[]>([]);
  protected readonly displayedProducts = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.displayedProducts.set(this.products());
    });
  }

  protected onDelete(productId: number): void {
    this.displayedProducts.update((products) =>
      products.filter((product) => product.id !== productId),
    );
  }
}

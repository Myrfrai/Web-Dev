import { ChangeDetectionStrategy, Component, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="gallery-container">
        <a [href]="product().link" target="_blank" rel="noopener noreferrer">
          <img [src]="selectedImage" [alt]="product().name" class="main-img" />
        </a>

        <button class="nav-btn prev-btn" (click)="prevImage()" aria-label="Previous image">❮</button>
        <button class="nav-btn next-btn" (click)="nextImage()" aria-label="Next image">❯</button>
      </div>

      <div class="thumbnails">
        @for (img of product().images; track img) {
          <img
            [src]="img"
            [alt]="product().name"
            class="thumb"
            [class.active]="selectedImage === img"
            (click)="selectImage(img)"
          />
        }
      </div>

      <h3>{{ product().name }}</h3>
      <p class="description">{{ product().description }}</p>

      <div class="rating-section">
        <span class="stars">
          @for (star of getStars(); track $index) {
            <span [class.filled]="star">★</span>
          }
        </span>
        <span class="rating-value">{{ product().rating }}/5</span>
      </div>

      <p class="price"><b>{{ product().price | number }} ₸</b></p>
      <p class="likes">❤️ {{ product().likes }}</p>

      <div class="action-buttons">
        <button type="button" class="like-btn" (click)="like()">Like</button>
        <button type="button" class="delete-btn" (click)="delete()">Delete</button>
      </div>

      <div class="share-buttons">
        <button type="button" class="share-btn telegram" (click)="shareTelegram()">Telegram</button>
        <button type="button" class="share-btn whatsapp" (click)="shareWhatsApp()">WhatsApp</button>
      </div>
    </div>
  `,
  styleUrl: './product-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  readonly product = input.required<Product>();
  readonly deleteProduct = output<number>();

  selectedImage = '';
  currentImageIndex = 0;

  ngOnInit(): void {
    this.selectedImage = this.product().image;
    this.currentImageIndex = 0;
  }

  selectImage(img: string): void {
    this.selectedImage = img;
    this.currentImageIndex = this.product().images.indexOf(img);
  }

  nextImage(): void {
    const images = this.product().images;
    this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
    this.selectedImage = images[this.currentImageIndex];
  }

  prevImage(): void {
    const images = this.product().images;
    this.currentImageIndex = (this.currentImageIndex - 1 + images.length) % images.length;
    this.selectedImage = images[this.currentImageIndex];
  }

  getStars(): boolean[] {
    const rating = this.product().rating;
    const stars: boolean[] = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < Math.round(rating));
    }
    return stars;
  }

  like(): void {
    this.product().likes += 1;
  }

  delete(): void {
    this.deleteProduct.emit(this.product().id);
  }

  shareWhatsApp(): void {
    const p = this.product();
    const text = `Check out this product: ${p.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareTelegram(): void {
    const p = this.product();
    const url = `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
    window.open(url, '_blank');
  }
}

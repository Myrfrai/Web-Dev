import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  albumId = 0;
  photos: Photo[] = [];
  loading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly albumService: AlbumService,
    private readonly location: Location
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    if (!Number.isFinite(this.albumId) || this.albumId <= 0) {
      this.loading = false;
      return;
    }

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  backToDetail(): void {
    this.location.back();
  }
}

import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'albums', component: AlbumsComponent },
	{ path: 'albums/:id', component: AlbumDetailComponent },
	{ path: 'albums/:id/photos', component: AlbumPhotosComponent },
	{ path: '**', redirectTo: 'home' }
];

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReaderRoutingModule } from './reader-routing.module';
import { ReaderPostComponent } from './reader-post/reader-post.component';
import { ReaderPostsComponent } from './reader-posts/reader-posts.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReaderRoutingModule],
    declarations: [ReaderPostsComponent, ReaderPostComponent],
    exports: [],
    providers: [],
})
export class ReaderModule {}
